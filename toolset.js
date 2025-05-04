(async () => {
require('dotenv').config()
const asar = require('@electron/asar');
const minimist = require('minimist');
const fs = require('fs');
const fsp = require('fs').promises;
const path = require('path');
const semver = require('semver')
const { minify } = require('terser');
const { Octokit } = await import('@octokit/rest');

const SRC_PATH = path.join(process.argv[1], '../src');
const DEFAULT_DIST_PATH = path.join(process.argv[1], '../builds/latest/app.asar');
const EXTRACTED_DIR_PATH = path.join(process.argv[1], '../extracted');
const DIRECT_DIST_PATH = path.join(process.env.LOCALAPPDATA, "/Programs/YandexMusic/resources/app.asar");

const MINIFIED_SRC_PATH = path.join(process.argv[1], "../minified/src");

const PATCH_NOTES_PATH = path.join(process.argv[1], "../PATCHNOTES.md");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const gitOwner = 'TheKing-OfTime';
const gitRepo = 'YandexMusicModClient';

const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

const patchNoteStringMD = fs.readFileSync(PATCH_NOTES_PATH, { encoding: "utf8"});

const octokit = new Octokit({ auth: GITHUB_TOKEN });

class PatchNote {
    static forSpoofPatch(ymVersion, version, previousYmVersion) {
        return new PatchNote(ymVersion, version, `# Что нового\n- Версия спуфнута c ${previousYmVersion} до ${ymVersion}`)
    }

    constructor(ymVersion, version, patchNoteString) {
        this.ymVersion = ymVersion;
        this.version = version;
        this.patchNoteString = patchNoteString;
    }

    toDiscord(){
        return `# ${this.version}\n\n${this.patchNoteString}`
    }

    toGitHub(){
        return `## Патч для Яндекс Музыки ${this.ymVersion}\n\n${this.patchNoteString}\n\n## Установка:\n\`\`\`bat\ncurl -L https://github.com/TheKing-OfTime/YandexMusicModClient/releases/latest/download/app.asar > %localappdata%/Programs/YandexMusic/resources/app.asar\n\`\`\`\n![GitHub Downloads (all assets, specific tag)](https://img.shields.io/github/downloads/TheKing-OfTime/YandexMusicModClient/onlyDiscordRPC%40${this.version}/total?label=Downloads)`
    }
}

/**
 *
 * @param {PatchNote} patchNote
 * @return {Promise<void>}
 */
async function sendPatchNoteToDiscord(patchNote) {
    const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "content": patchNote.toDiscord(),
        }),
    });

    if (!webhookResponse.ok) {
        throw new Error(`Не удалось отправить webhook: ${webhookResponse.statusText}`);
    }
    console.log('Патчноут отправлен в Discord')
}

async function getLatestExtractedSrcDir() {
    let version = '1.0.0'
    const versions = (await fsp.readdir(EXTRACTED_DIR_PATH, { withFileTypes: true })).filter(
      (dirent) => {
        return dirent.isDirectory() && dirent.name.endsWith('@pure');
      },
    ).map(dirstr => dirstr.name.replace('@pure',''));

    versions.forEach(ver=>{if(semver.gt(ver, version)) version = ver});

    if(version === '1.0.0') return console.log('Не удалось получить последний релиз из ./extracted/')
    return path.join(EXTRACTED_DIR_PATH, `/${version}@pure`)
}

async function getLatestYMVersion(type='direct') {
    let packageFileBuffer;
    switch (type) {
        default:
        case 'direct':
            packageFileBuffer = asar.extractFile(DIRECT_DIST_PATH, 'package.json').toString();
            break;
        case 'extracted':
            let extractedPathDir = await getLatestExtractedSrcDir();
            if(!extractedPathDir) return console.log('Не удалось получить последнюю версию YM')
            packageFileBuffer = await fsp.readFile(path.join(extractedPathDir, '/package.json'), 'utf8')
            break;
        case 'src':
            packageFileBuffer = await fsp.readFile(path.join(SRC_PATH, '/package.json'), 'utf8')
    }

    const packageFileJson = JSON.parse(packageFileBuffer);

    return { version: packageFileJson.version, buildInfo: packageFileJson.buildInfo }

}

function getModVersion(){
    return require(path.join(SRC_PATH, '/main/config.js')).config.modification.version;
}

async function modifySrcPackage(version, buildInfo) {
    let packageJson = JSON.parse(await fsp.readFile(path.join(SRC_PATH, '/package.json'), 'utf8'));
    const oldVersion = packageJson.version;
    packageJson.version = version;
    packageJson.buildInfo = buildInfo;
    await fsp.writeFile(path.join(SRC_PATH, '/package.json'), JSON.stringify(packageJson, null, 2), 'utf8');
    return { oldVersion: oldVersion, newVersion: version }
}

async function getVersionFromConfig() {
    const configJs = await fsp.readFile(path.join(SRC_PATH, '/main/config.js'), 'utf8');
    return configJs.match(/version: "(.*?)"/)[1];
}

async function modifyConfigJs(version) {
    let configJs = await fsp.readFile(path.join(SRC_PATH, '/main/config.js'), 'utf8');
    const oldVersion = configJs.match(/version: "(.*?)"/)[1];
    configJs = configJs.replace(/version: "(.*?)"/, `version: "${version}"`);
    await fsp.writeFile(path.join(SRC_PATH, '/main/config.js'), configJs, 'utf8');
    return { oldVersion: oldVersion, newVersion: version }
}

async function getLatestRelease() {
    const response = await octokit.rest.repos.getLatestRelease({
        owner: gitOwner,
        repo: gitRepo,
    });

    if (!response.status.toString().startsWith('2')) return console.log("Не удалось получить последний релиз:", response.data);

    return response.data;
}

async function createAndPushSpoofCommit(oldVersion=undefined, newVersion=undefined) {
    const currentCommit = await octokit.repos.getCommit({
        owner: gitOwner,
        repo: gitRepo,
        ref: 'master'
    });

    const modifiedFiles = [
        { path: 'src/main/config.js' },
        { path: 'src/package.json' }
    ];

    const createBlobPromises = modifiedFiles.map(file => {
        const content = fs.readFileSync(path.join(SRC_PATH, '..', file.path), 'utf8');
        return octokit.git.createBlob({
            owner: gitOwner,
            repo: gitRepo,
            content: content,
            encoding: 'utf-8'
        });
    });

    const blobs = await Promise.all(createBlobPromises);

    const tree = await octokit.git.createTree({
        owner: gitOwner,
        repo: gitRepo,
        base_tree: currentCommit.data.commit.tree.sha,
        tree: blobs.map((blob, index) => ({
            path: modifiedFiles[index].path,
            mode: '100644',
            type: 'blob',
            sha: blob.data.sha
        }))
    });

    const commitResponse = await octokit.git.createCommit({
        owner: gitOwner,
        repo: gitRepo,
        message: (oldVersion && newVersion) ? `chore: Spoof version from ${oldVersion} to ${newVersion}` : 'chore: Spoof version',
        tree: tree.data.sha,
        parents: [currentCommit.data.sha]
    });

    await octokit.git.updateRef({
        owner: gitOwner,
        repo: gitRepo,
        ref: 'heads/master',
        sha: commitResponse.data.sha,
        force: true
    });

    if (!commitResponse.status.toString().startsWith('2')) return console.log("Не удалось создать коммит:", commitResponse.data);
    console.log("Коммит успешно создан и отправлен в репозиторий");
}

/**
 *
 * @param {String} version
 * @param {String} asarPath
 * @param {PatchNote} patchNote
 * @return {Promise<void>}
 */
async function createGitHubRelease(version, asarPath, patchNote) {

    const tagCreateResponse = await octokit.git.createRef({
        owner: gitOwner,
        repo: gitRepo,
        ref: `refs/tags/onlyDiscordRPC@${version}`,
        sha: (await octokit.repos.getCommit({ owner: gitOwner, repo: gitRepo, ref: 'master' })).data.sha,
    });

    if(!tagCreateResponse.status.toString().startsWith('2')) return console.log("Не удалось создать тег", tagCreateResponse.data);
    console.log("Тег успешно создан");

    const releaseResponse = await octokit.rest.repos.createRelease({
        owner: gitOwner,
        repo: gitRepo,
        tag_name: `onlyDiscordRPC@${version}`,
        name: version,
        draft: true,
        prerelease: false,
        body: patchNote.toGitHub()
    })

    if(!releaseResponse.status.toString().startsWith('2')) return console.log("Не удалось создать драфт:", releaseResponse.data);
    console.log("Драфт успешно создан");
    console.time("Ассет успешно загружен");
    console.time("Загрузка ассета");
    const assetData = fs.readFileSync(asarPath)


    const uploadResponse = await octokit.repos.uploadReleaseAsset({
        owner: gitOwner,
        repo: gitRepo,
        release_id: releaseResponse.data.id,
        name: 'app.asar',
        data: assetData,
        headers: {
            "content-type": "application/octet-stream",
            "content-length": assetData.length,
        },
    });

    if(!uploadResponse.status.toString().startsWith('2')) return console.log("Не удалось загрузить ассет:", releaseResponse.data);
    console.timeEnd("Ассет успешно загружен");

    const updatedRelease = await octokit.repos.updateRelease({
        owner: gitOwner,
        repo: gitRepo,
        release_id: releaseResponse.data.id,
        draft: false,
    });
    if(!updatedRelease.status.toString().startsWith('2')) return console.log("Не удалось опубликован релиз:", releaseResponse.data);
    console.log("Релиз опубликован");
}

async function minifyDir(srcDir, destDir) {
    await fsp.mkdir(destDir, { recursive: true });
    const items = await fsp.readdir(srcDir);
    for (const item of items) {
        const srcPath = path.join(srcDir, item);
        const destPath = path.join(destDir, item);
        const stat = await fsp.stat(srcPath);
        if (stat.isFile() && srcPath.endsWith('.js')) {
            try {
                console.time(`    Минифицирован: ${destPath}`);
                const code = await fsp.readFile(srcPath, 'utf8');
                const result = await minify(code);
                if (result.error) {
                    console.error(`    Ошибка минификации ${destPath}:`, result.error);
                    continue;
                }
                await fsp.writeFile(destPath, result.code, 'utf8');
                console.timeEnd(`    Минифицирован: ${destPath}`);
            } catch (err) {
                console.error(`    Ошибка при минификации ${destPath}:`, err);
            }
        } else if (stat.isDirectory()) {
            await minifyDir(srcPath, destPath);
        } else {
            await fsp.cp(srcPath, destPath, { recursive: true })
            console.log(`    Скопирован: ${destPath}`);
        }
    }
}

async function build({ srcPath = SRC_PATH, destDir = DEFAULT_DIST_PATH, noMinify = false } = { srcPath: SRC_PATH, destDir: DEFAULT_DIST_PATH, noMinify: false }) {
  if (!noMinify) {
    console.log("Минификация...");
    console.time("Минификация завершена");
    await minifyDir(srcPath, MINIFIED_SRC_PATH);
    console.timeEnd("Минификация завершена");
  }
  console.log("Архивация в " + destDir);
  console.time("Архивация завершена");
  await asar.createPackage(noMinify ? srcPath : MINIFIED_SRC_PATH, destDir);
  console.timeEnd("Архивация завершена");
  if (!noMinify) {
    await fsp.rm(MINIFIED_SRC_PATH, { recursive: true });
    console.log("Минифицированный код отчищен");
  }
}

async function buildDirectly(src, noMinify=false) {
    await build({srcPath: src, destDir: DIRECT_DIST_PATH, noMinify: noMinify });
}

async function spoof(type='extracted', shouldRelease=false) {
    console.log('Спуфинг...');
    console.time('Спуфинг завершён');
    let latestRelease, configVersion;
    if (shouldRelease) {
      latestRelease = await getLatestRelease();
      configVersion = await getVersionFromConfig();
    }
    const versions = await getLatestYMVersion(type);
    console.log('Последняя версия ЯМ', versions);
    const result = await modifySrcPackage(versions.version, versions.buildInfo);

    if(latestRelease) {
      if(semver.lte(configVersion, latestRelease.name)) {
        const nextVersion = semver.inc(latestRelease.name, 'patch');
        await modifyConfigJs(nextVersion);
        console.log('Версия мода изменена с', configVersion, 'на', nextVersion);
        await createAndPushSpoofCommit(configVersion, nextVersion);
      }
    }

    console.timeEnd('Спуфинг завершён');
    console.log('Спуфнуто с', result.oldVersion, 'до', result.newVersion);
    return result
}

async function release(versions=undefined) {
    const version = await getModVersion();
    const {version: ymVersion} = await getLatestYMVersion();
    const patchNote = (versions ? PatchNote.forSpoofPatch(versions.newVersion, version, versions.oldVersion) : new PatchNote(ymVersion, version, patchNoteStringMD));
    await createGitHubRelease(version, DEFAULT_DIST_PATH, patchNote);
    await sendPatchNoteToDiscord(patchNote);
}

async function extractIfNotExist(version, force=false) {
    const extractedPathDir = path.join(EXTRACTED_DIR_PATH, version);
    if(!force && fs.existsSync(extractedPathDir)) return console.log('Папка под ' + version + ' уже существует:', extractedPathDir);
    await fsp.mkdir(extractedPathDir, { recursive: true });
    await asar.extractAll(DIRECT_DIST_PATH, extractedPathDir);
    console.log('Релиз ' + version + ' успешно извлечён в', extractedPathDir);
    return extractedPathDir;
}

async function extractBuild(force=false) {
    if(!fs.existsSync(EXTRACTED_DIR_PATH)) {
        await fsp.mkdir(EXTRACTED_DIR_PATH, { recursive: true });
    }
    const latestYMVersion = await getLatestYMVersion('direct');

    const pathToPureExtractedBuild = await extractIfNotExist(`${latestYMVersion.version}@pure`, force);
    const pathToExtractedBuild = await extractIfNotExist(latestYMVersion.version, force);

    return { pureExtracted: pathToPureExtractedBuild, extracted: pathToExtractedBuild }
}

    async function replaceInFilesRecursively(dir, rules) {
        const entries = await fsp.readdir(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                await replaceInFilesRecursively(fullPath, rules);
            } else if (entry.isFile()) {
                let content = await fsp.readFile(fullPath, 'utf8');
                let newContent = content;
                for (const { regex, replacement } of rules) {
                    newContent = newContent.replace(regex, replacement);
                }
                if (newContent !== content) {
                    await fsp.writeFile(fullPath, newContent, 'utf8');
                    console.log(`Вхождение найдено и заменено в: ${fullPath}`);
                }
            }
        }
    }

    async function patchExtractedBuild(extractedPath, options = { unlockDevtools: true, unlockDevPanel: true }) {
        console.log('Патчинг извлечённого релиза', extractedPath);
        
        if (options.unlockDevtools) {
            let configJs = await fsp.readFile(path.join(extractedPath, "/main/config.js"),"utf8",);
            configJs = configJs.replace(/enableDevTools: ?(false|true)/, "enableDevTools: true",);
            await fsp.writeFile(path.join(extractedPath, "/main/config.js"), configJs, "utf8",);
            console.log("Devtools Разблокированы", extractedPath);
        }

        if (options.unlockDevPanel) {
            const rules = [
                { regex: /panel: ?!1, ?allowOverwriteExperiments: ?!1/g, replacement: 'panel:!0,allowOverwriteExperiments:!0' },
                { regex: /exposeSonataStateInWindow: ?!1/g, replacement: 'exposeSonataStateInWindow:!0' },
            ]

            console.log('Применяю regex патчи', extractedPath, rules);
            await replaceInFilesRecursively(path.join(extractedPath, '/app/'), rules);
            console.log('Regex патчи применены', extractedPath);
        }
    }

async function run(command, flags) {

    const force = flags.f ?? false

    const shouldPatch = flags.p ?? false;
	const shouldMinify = flags.m ?? false;
	const shouldBuildDirectly = flags.d ?? false;
	const shouldRelease = flags.r ?? false;
	const shouldBuild = flags.b ?? false;
	const dest = flags.dest ?? DEFAULT_DIST_PATH;
    const src = flags.src ?? SRC_PATH;


    switch (command) {
        case 'build':
			if (shouldBuildDirectly) {
        		await buildDirectly(src, !shouldMinify);
				break;
      		}
			if (shouldRelease) {
				await build();
        		await release();
				break;
      		}

			await build({srcPath: src, destDir: dest, noMinify: !shouldMinify});
			break;
        case 'spoof':
			const versions = await spoof('extracted', shouldRelease);
			if ( shouldBuild || shouldRelease) await build()
			if (shouldRelease) await release(versions)
			break;
        case 'release':
            await release();
            break;

        case 'extract':
            const { extracted } = await extractBuild(force);
            if (shouldPatch) await patchExtractedBuild(extracted);
            break;
        case 'help':
        default:
            console.log('help - shows this message\nbuild\nbuildDirectly\nspoof\nspoofAndBuild\nbuildAndRelease\nspoofAndRelease');
            break
    }
}
    const args = minimist(process.argv.slice(2));
    console.log(args)
    await run(args._?.[0], args);
})()
