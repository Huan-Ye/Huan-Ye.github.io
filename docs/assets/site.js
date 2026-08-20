const root = document.documentElement;
const progress = document.querySelector('.reading-progress span');

function updateProgress() {
  if (!progress) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
  root.style.setProperty('--reading-progress', `${Math.round(ratio * 100)}%`);
}

const toggle = document.querySelector('.toc-toggle');
const toc = document.querySelector('.article-toc');
if (toggle && toc) {
  toggle.addEventListener('click', () => {
    const isOpen = toc.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress, { passive: true });
updateProgress();
