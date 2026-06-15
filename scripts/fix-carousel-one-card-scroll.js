const fs = require('fs');
const path = require('path');

const indexPath = path.join(process.cwd(), 'index.html');
if (!fs.existsSync(indexPath)) throw new Error('index.html not found');
let html = fs.readFileSync(indexPath, 'utf8');

const oldFnRegex = /  function scrollAppSuite\(direction\) \{[\s\S]*?\n  \}\n\n  function showPage\(page\) \{/;
const newFn = `  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animateScrollTo(element, target, duration = 950) {
    const start = element.scrollLeft;
    const change = target - start;
    const startTime = performance.now();

    function frame(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      element.scrollLeft = start + change * easeInOutCubic(progress);
      if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }

  function scrollAppSuite(direction) {
    const viewport = document.getElementById('appSuiteViewport');
    const card = viewport ? viewport.querySelector('.app-suite-card') : null;
    if (!viewport || !card) return;

    const gap = parseFloat(getComputedStyle(card.parentElement).gap) || 24;
    const amount = card.getBoundingClientRect().width + gap;
    animateScrollTo(viewport, viewport.scrollLeft + direction * amount, 950);
  }

  function showPage(page) {`;

if (oldFnRegex.test(html)) {
  html = html.replace(oldFnRegex, newFn);
} else if (!html.includes('function scrollAppSuite(direction)')) {
  const marker = '  function showPage(page) {';
  html = html.replace(marker, newFn);
} else {
  throw new Error('Could not safely replace scrollAppSuite function');
}

html = html.replace('scroll-behavior: smooth; scrollbar-width: none;', 'scroll-behavior: auto; scrollbar-width: none;');
html = html.replace('scroll-behavior: smooth; scrollbar-width: none;', 'scroll-behavior: auto; scrollbar-width: none;');

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Updated app carousel to move one card per click with slow eased motion.');
