function markExternalLinks() {
  document.querySelectorAll('article a[href]').forEach(a => {
    if (a.classList.contains('external-link')) return;
    if (a.protocol !== 'http:' && a.protocol !== 'https:') return;
    if (a.href.startsWith(window.location.origin)) return;
    a.classList.add('external-link');
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  });
}

if (typeof document$ !== 'undefined') {
  document$.subscribe(markExternalLinks);
} else {
  document.addEventListener('DOMContentLoaded', markExternalLinks);
}
