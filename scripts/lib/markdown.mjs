import { marked } from '../../vendor/marked.esm.js';

function stripHtml(value) {
  return value.replace(/<[^>]*>/g, '').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
}

function slugify(value) {
  return stripHtml(value)
    .toLowerCase()
    .trim()
    .replace(/[^\p{Letter}\p{Number}\u4e00-\u9fff]+/gu, '-')
    .replace(/^-+|-+$/g, '') || 'section';
}

function renderTocItems(items) {
  return items
    .map((item) => `<li class="toc-depth-${item.depth}"><a href="#${item.id}">${item.text}</a></li>`)
    .join('');
}

export function renderMarkdown(markdown) {
  const headings = [];
  const ids = new Map();
  let html = marked.parse(markdown, { gfm: true, breaks: false, mangle: false, headerIds: false });

  html = html.replace(/<h([1-4])>([\s\S]*?)<\/h\1>/g, (_match, depth, content) => {
    const text = stripHtml(content).trim();
    const baseId = slugify(text);
    const count = ids.get(baseId) ?? 0;
    ids.set(baseId, count + 1);
    const id = count === 0 ? baseId : `${baseId}-${count + 1}`;
    headings.push({ id, depth: Number(depth), text });
    return `<h${depth} id="${id}">${content}</h${depth}>`;
  });

  html = html.replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, '</table></div>');
  const toc = headings.filter((heading) => heading.depth >= 2);
  const wordCount = stripHtml(markdown).replace(/\s+/g, '').length;

  return {
    html,
    headings,
    toc,
    tocHtml: renderTocItems(toc),
    readingMinutes: Math.max(1, Math.ceil(wordCount / 520)),
  };
}
