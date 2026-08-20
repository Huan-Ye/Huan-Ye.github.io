import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const expectedFiles = [
  'index.html',
  'research/japan-lost-decades/index.html',
  'research/japan-lost-decades/volume-1.html',
  'research/japan-lost-decades/volume-2.html',
  'research/japan-lost-decades/data/japan-national-civil-service-applications.csv',
  'assets/styles.css',
  'assets/site.js',
  'robots.txt',
  'sitemap.xml',
];

function outputPathForHref(outputDir, htmlPath, href) {
  const url = new URL(href, 'https://huan-ye.github.io');
  if (url.origin !== 'https://huan-ye.github.io' || !href.startsWith('/')) return null;
  const pathname = url.pathname.endsWith('/') ? `${url.pathname}index.html` : url.pathname;
  return resolve(outputDir, `.${pathname}`);
}

test('buildSite publishes a navigable four-page research library', async () => {
  const { buildSite } = await import('../scripts/build.mjs');
  const outputDir = mkdtempSync(join(tmpdir(), 'huan-ye-library-'));

  try {
    await buildSite({
      rootDir: repositoryRoot,
      outputDir,
      baseUrl: 'https://huan-ye.github.io',
    });

    for (const file of expectedFiles) {
      assert.equal(existsSync(join(outputDir, file)), true, `missing output: ${file}`);
    }

    const topic = readFileSync(join(outputDir, 'research/japan-lost-decades/index.html'), 'utf8');
    const volume1 = readFileSync(join(outputDir, 'research/japan-lost-decades/volume-1.html'), 'utf8');
    const volume2 = readFileSync(join(outputDir, 'research/japan-lost-decades/volume-2.html'), 'utf8');
    const sitemap = readFileSync(join(outputDir, 'sitemap.xml'), 'utf8');

    assert.match(topic, /日本“失落三十年”的阶段机制及其对当代中国的借鉴/);
    assert.match(topic, /第一卷：宏观、金融与九阶段历史/);
    assert.match(topic, /第二卷：社会结构与“求稳社会”/);
    assert.match(volume1, /<html lang="zh-CN">/);
    assert.match(volume1, /<link rel="canonical" href="https:\/\/huan-ye\.github\.io\/research\/japan-lost-decades\/volume-1\.html">/);
    assert.match(volume1, /class="article-toc"/);
    assert.match(volume1, /日本大银行不良贷款率/);
    assert.match(volume2, /就业冰河期/);
    assert.match(sitemap, /https:\/\/huan-ye\.github\.io\/research\/japan-lost-decades\/volume-2\.html/);

    for (const [htmlPath, html] of [
      ['index.html', readFileSync(join(outputDir, 'index.html'), 'utf8')],
      ['research/japan-lost-decades/index.html', topic],
      ['research/japan-lost-decades/volume-1.html', volume1],
      ['research/japan-lost-decades/volume-2.html', volume2],
    ]) {
      for (const href of html.matchAll(/href="([^"]+)"/g)) {
        const target = outputPathForHref(outputDir, htmlPath, href[1]);
        if (target) {
          assert.equal(relative(outputDir, target).startsWith('..'), false, `link escapes site: ${href[1]}`);
          assert.equal(existsSync(target), true, `broken local link in ${htmlPath}: ${href[1]}`);
        }
      }
    }
  } finally {
    rmSync(outputDir, { recursive: true, force: true });
  }
});
