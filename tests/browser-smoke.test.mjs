import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdir, mkdtemp, readFile, rm } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { tmpdir } from 'node:os';
import test from 'node:test';
import { createRequire } from 'node:module';
import { buildSite } from '../scripts/build.mjs';

const require = createRequire(import.meta.url);
const playwrightPath = require.resolve('playwright', {
  paths: [process.env.CODEX_NODE_MODULES],
});
const { chromium } = require(playwrightPath);

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.csv': 'text/csv; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

function startStaticServer(rootDir) {
  const server = createServer(async (request, response) => {
    const requestPath = new URL(request.url, 'http://localhost').pathname;
    const relative = requestPath.endsWith('/')
      ? `${requestPath.replace(/^\//, '')}index.html`
      : requestPath.replace(/^\//, '');
    const target = normalize(join(rootDir, relative));
    if (!target.startsWith(normalize(rootDir))) {
      response.writeHead(403).end();
      return;
    }

    try {
      const body = await readFile(target);
      response.writeHead(200, { 'content-type': mimeTypes[extname(target)] ?? 'application/octet-stream' });
      response.end(body);
    } catch {
      response.writeHead(404).end();
    }
  });

  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

test('research pages work at desktop and mobile widths without horizontal page overflow', async (t) => {
  const outputDir = await mkdtemp(join(tmpdir(), 'huan-ye-browser-'));
  const server = await startStaticServer(outputDir);
  const port = server.address().port;
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
  });

  t.after(async () => {
    await browser.close();
    await new Promise((resolve) => server.close(resolve));
    await rm(outputDir, { recursive: true, force: true });
  });

  await buildSite({ rootDir: process.cwd(), outputDir, baseUrl: `http://127.0.0.1:${port}` });
  const screenshotDir = process.env.QA_SCREENSHOT_DIR;
  if (screenshotDir) await mkdir(screenshotDir, { recursive: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  const missingResources = [];
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(`${message.text()} @ ${message.location().url}`);
  });
  page.on('response', (response) => {
    if (response.status() === 404) missingResources.push(response.url());
  });

  await page.goto(`http://127.0.0.1:${port}/research/japan-lost-decades/`, { waitUntil: 'domcontentloaded' });
  await assert.doesNotReject(page.getByRole('heading', { name: '日本“失落三十年”的阶段机制及其对当代中国的借鉴' }).waitFor());
  assert.equal(await page.locator('.volume-row').count(), 2);
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), true);
  if (screenshotDir) await page.screenshot({ path: join(screenshotDir, 'topic-desktop.png'), fullPage: true });

  await page.goto(`http://127.0.0.1:${port}/research/ai-agent-economy/`, { waitUntil: 'domcontentloaded' });
  await assert.doesNotReject(page.getByRole('heading', { name: 'AI Agent：宏观经济、行业重组与社会结构' }).waitFor());
  assert.equal(await page.locator('.volume-row').count(), 4);
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), true);

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`http://127.0.0.1:${port}/research/japan-lost-decades/volume-1.html`, { waitUntil: 'domcontentloaded' });
  const toggle = page.getByRole('button', { name: '本文目录' });
  await assert.doesNotReject(toggle.waitFor());
  assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
  await toggle.click();
  assert.equal(await toggle.getAttribute('aria-expanded'), 'true');
  assert.equal(await page.locator('.article-toc').evaluate((node) => node.classList.contains('is-open')), true);
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), true);
  if (screenshotDir) await page.screenshot({ path: join(screenshotDir, 'volume-1-mobile.png'), fullPage: false });
  assert.deepEqual(errors, [], `console errors: ${missingResources.join(', ')}`);
});
