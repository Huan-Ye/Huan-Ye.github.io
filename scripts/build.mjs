import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from '../site.config.mjs';
import { renderMarkdown } from './lib/markdown.mjs';
import { renderArticle, renderHome, renderTopic } from './lib/template.mjs';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const defaultRootDir = resolve(scriptDir, '..');

function assertSafeOutputDir(rootDir, outputDir) {
  const root = resolve(rootDir);
  const output = resolve(outputDir);
  const outputToRoot = relative(output, root);
  if (root === output || (!outputToRoot.startsWith('..') && outputToRoot !== '')) {
    throw new Error(`refusing to replace repository root or parent: ${output}`);
  }
}

async function writeOutput(outputDir, relativePath, contents) {
  const destination = resolve(outputDir, relativePath);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, contents, 'utf8');
}

function sitemap(baseUrl) {
  const routes = [site.homePath, site.topicPath, ...site.volumes.map((volume) => volume.path)];
  const urls = routes.map((path) => `  <url><loc>${new URL(path, baseUrl).toString()}</loc></url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export async function buildSite({ rootDir = defaultRootDir, outputDir = resolve(defaultRootDir, 'docs'), baseUrl = site.baseUrl } = {}) {
  const root = resolve(rootDir);
  const output = resolve(outputDir);
  assertSafeOutputDir(root, output);
  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });

  await cp(resolve(root, 'assets'), resolve(output, 'assets'), { recursive: true });
  await cp(resolve(root, site.attachment.source), resolve(output, site.attachment.path.slice(1)), { recursive: false });

  await writeOutput(output, 'index.html', renderHome());
  await writeOutput(output, 'research/japan-lost-decades/index.html', renderTopic());

  for (const volume of site.volumes) {
    const markdown = await readFile(resolve(root, volume.source), 'utf8');
    const rendered = renderMarkdown(markdown);
    await writeOutput(output, volume.path.slice(1), renderArticle({ volume, rendered }));
  }

  await writeOutput(output, 'robots.txt', `User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', baseUrl).toString()}\n`);
  await writeOutput(output, 'sitemap.xml', sitemap(baseUrl));
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const outputDir = resolve(defaultRootDir, 'docs');
  await buildSite({ rootDir: defaultRootDir, outputDir, baseUrl: site.baseUrl });
  if (!existsSync(resolve(outputDir, 'index.html'))) throw new Error('build did not create index.html');
  process.stdout.write(`Built ${outputDir}\n`);
}
