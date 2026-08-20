import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const contentRoot = join(repositoryRoot, 'content', 'research', 'japan-lost-decades');
const volume1Path = join(contentRoot, 'volume-1.md');
const volume2Path = join(contentRoot, 'volume-2.md');
const dataPath = join(
  contentRoot,
  'data',
  'japan-national-civil-service-applications.csv',
);

function loadPublicVolumes() {
  assert.equal(existsSync(volume1Path), true, 'public Volume 1 must exist');
  assert.equal(existsSync(volume2Path), true, 'public Volume 2 must exist');
  return {
    volume1: readFileSync(volume1Path, 'utf8'),
    volume2: readFileSync(volume2Path, 'utf8'),
  };
}

test('publishes both volumes and the supporting data attachment', () => {
  loadPublicVolumes();
  assert.equal(existsSync(dataPath), true, 'supporting CSV must exist');
});

test('excludes original-user background and individualized advice', () => {
  const { volume1, volume2 } = loadPublicVolumes();
  const combined = `${volume1}\n${volume2}`;
  const forbidden = [
    '你的背景',
    '你应计算',
    '可投资资产数十万至数百万元',
    '工作约三年',
    '无负担',
    '无负债',
    '对个人的含义',
    '第14稿',
    '第15稿',
    '用户个人拥有较高职业迁移能力',
    '对个人而言，有用的不是',
    '写成可协商的具体合同',
  ];

  for (const phrase of forbidden) {
    assert.equal(combined.includes(phrase), false, `forbidden phrase: ${phrase}`);
  }
});

test('preserves the core evidence and red-team analysis', () => {
  const { volume1, volume2 } = loadPublicVolumes();
  assert.match(volume1, /日本大银行不良贷款率/);
  assert.match(volume1, /红队审查/);
  assert.match(volume2, /就业冰河期/);
  assert.match(volume2, /反方证据/);
  assert.match(`${volume1}\n${volume2}`, /https:\/\//);
});

test('uses public cross-volume and data links instead of internal filenames', () => {
  const { volume1, volume2 } = loadPublicVolumes();
  const combined = `${volume1}\n${volume2}`;
  assert.doesNotMatch(combined, /14_phase_by_phase_comparative_report\.md/);
  assert.doesNotMatch(combined, /15_social_structure_deep_dive\.md/);
  assert.match(volume1, /\.\/volume-2\.html/);
  assert.match(volume2, /\.\/volume-1\.html/);
  assert.match(volume2, /\.\/data\/japan-national-civil-service-applications\.csv/);
});
