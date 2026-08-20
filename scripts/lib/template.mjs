import { site } from '../../site.config.mjs';

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function absoluteUrl(path) {
  return new URL(path, site.baseUrl).toString();
}

function directionContract() {
  return `<!--
THESIS: A public research shelf is a retrievable archive, not a social feed; the layout refuses a generic article blog.
OWN-WORLD: Cobalt archival board frames acid-free white dossiers; black rules carry evidence and vermilion marks only active accession state.
STORY: A reader identifies the topic, checks its cutoff and scope, selects a volume, then stays oriented inside dense source-linked writing.
FIRST VIEWPORT: A cobalt register band holds the library and topic identity; a red accession tab crosses into the white finding-aid sheet containing the two-volume path.
FORM: Horizontal finding aid, comp B, seed dace8f44; rules and rows replace generic card grids.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;
}

function pageHeader(activePath) {
  const topicActive = activePath.startsWith('/research/');
  return `<header class="site-header">
  <a class="site-wordmark" href="${site.homePath}">${escapeHtml(site.title)}</a>
  <nav aria-label="主导航">
    <a href="${site.homePath}">资料库</a>
    <a class="${topicActive ? 'is-active' : ''}" href="${site.topicPath}">专题</a>
  </nav>
</header>`;
}

function pageFooter() {
  return `<footer class="site-footer">
  <p>资料为公开研究整理，不构成证券、法律、职业或个性化财务建议。</p>
  <p>正文数据截止日见各卷页面；来源以正文链接为准。</p>
</footer>`;
}

export function renderPage({ title, description, path, body, pageKind }) {
  const canonicalUrl = absoluteUrl(path);
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} · ${escapeHtml(site.title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta property="og:title" content="${escapeHtml(title)} · ${escapeHtml(site.title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:type" content="article">
  <link rel="canonical" href="${escapeHtml(canonicalUrl)}">
  <link rel="stylesheet" href="/assets/styles.css">
  <script type="module" src="/assets/site.js"></script>
</head>
<body data-page-kind="${escapeHtml(pageKind)}">
${directionContract()}
  <div class="reading-progress" aria-hidden="true"><span></span></div>
  ${pageHeader(path)}
  ${body}
  ${pageFooter()}
</body>
</html>`;
}

function metadataRows(volume) {
  return `<dl class="volume-metadata">
    <div><dt>数据截止</dt><dd>${escapeHtml(volume.cutoff)}</dd></div>
    <div><dt>内容形式</dt><dd>完整研究卷</dd></div>
    <div><dt>阅读方式</dt><dd>网页正文与来源链接</dd></div>
  </dl>`;
}

export function renderHome() {
  const topic = `<a class="archive-topic" href="${site.topicPath}">
    <span class="archive-topic-index">专题 001</span>
    <span class="archive-topic-title">${escapeHtml(site.topicTitle)}</span>
    <span class="archive-topic-summary">${escapeHtml(site.topicDescription)}</span>
    <span class="archive-topic-action">进入专题 <span aria-hidden="true">→</span></span>
  </a>`;
  const body = `<main class="library-home">
    <section class="library-register" aria-labelledby="library-title">
      <div>
        <p class="register-label">PUBLIC RESEARCH SHELF</p>
        <h1 id="library-title">开放研究资料库</h1>
      </div>
      <p>一些研究、分析、公司简报和未必完整的想法。它们不承诺持续更新；若恰好有用，可以自由阅读和取用。</p>
    </section>
    <section class="archive-index" aria-labelledby="archive-index-title">
      <h2 id="archive-index-title">已归档专题</h2>
      ${topic}
    </section>
  </main>`;
  return renderPage({ title: site.title, description: site.description, path: site.homePath, body, pageKind: 'home' });
}

export function renderTopic() {
  const volumeRows = site.volumes.map((volume, index) => `<a class="volume-row" href="${volume.path}">
    <span class="volume-number">0${index + 1}</span>
    <span class="volume-info"><strong>${escapeHtml(volume.title)}</strong><span>${escapeHtml(volume.summary)}</span></span>
    <span class="volume-cutoff">数据截止<br><b>${escapeHtml(volume.cutoff)}</b></span>
    <span class="volume-arrow" aria-hidden="true">→</span>
  </a>`).join('');
  const body = `<main class="topic-page">
    <section class="topic-register" aria-labelledby="topic-title">
      <div class="topic-register-inner">
        <p class="register-label">TOPIC 001 · TWO-VOLUME STUDY</p>
        <h1 id="topic-title">${escapeHtml(site.topicTitle)}</h1>
        <p class="topic-lede">以日本资产负债表调整的阶段史为起点，分别检验宏观金融传导和社会结构后果如何适用于、又如何不适用于当代中国。</p>
      </div>
      <span class="accession-tab" aria-label="专题编号">JLD · 2026</span>
    </section>
    <section class="finding-aid" aria-label="专题导读">
      <div class="topic-summary">
        <h2>阅读说明</h2>
        <p>两卷共用同一历史分期与证据纪律。第一卷回答“长期化是如何发生的”；第二卷回答“风险如何通过职业、家庭与社会结构被重新分配”。</p>
        <p>两卷均明确区分已确认事实、较强推断、弱推断、假设与未知，并保留反方证据与红队审查。</p>
        <div class="evidence-note"><b>资料属性</b><span>历史机制研究与跨国压力测试；不构成证券、职业或个性化决策指令。</span></div>
      </div>
      <div class="reading-path">
        <h2>阅读路径（两卷结构）</h2>
        ${volumeRows}
        <a class="attachment-row" href="${site.attachment.path}"><span>CSV</span><strong>${escapeHtml(site.attachment.title)}</strong><span>下载 →</span></a>
      </div>
    </section>
  </main>`;
  return renderPage({ title: site.topicTitle, description: site.topicDescription, path: site.topicPath, body, pageKind: 'topic' });
}

export function renderArticle({ volume, rendered }) {
  const body = `<main class="article-page">
    <header class="article-register">
      <a href="${site.topicPath}">专题 001</a>
      <span>${escapeHtml(volume.title)}</span>
      <span class="article-cutoff">数据截止 ${escapeHtml(volume.cutoff)}</span>
    </header>
    <div class="article-frame">
      <aside class="toc-panel" aria-label="本文目录">
        <button class="toc-toggle" type="button" aria-expanded="false" aria-controls="article-toc">本文目录</button>
        <nav id="article-toc" class="article-toc" aria-label="本文目录"><ol>${rendered.tocHtml}</ol></nav>
      </aside>
      <article class="research-article">
        <div class="article-deck"><span>${escapeHtml(volume.title)}</span><span>约 ${rendered.readingMinutes} 分钟阅读</span></div>
        ${rendered.html}
      </article>
    </div>
  </main>`;
  return renderPage({ title: volume.title, description: volume.summary, path: volume.path, body, pageKind: 'article' });
}
