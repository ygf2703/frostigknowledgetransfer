const fs = require('fs');
const path = require('path');

const indexPath = path.join(process.cwd(), 'index.html');
if (!fs.existsSync(indexPath)) throw new Error('index.html not found');

let html = fs.readFileSync(indexPath, 'utf8');

const homeStart = '  <!-- DIGITAL VENTURES PREVIEW -->';
const homeEnd = '  <!-- Free Prompt Library Section';

const appSuiteSection = `  <!-- DIGITAL VENTURES PREVIEW -->
  <section class="ventures app-suite-section">
    <div class="ventures-inner">
      <div class="ventures-header fade-up">
        <span class="label">Digital Ventures</span>
        <h2 class="section-title">אפליקציות ומיזמים דיגיטליים</h2>
        <p class="section-sub">קרוסלת אפליקציות מתוך סטודיו הפיתוח של FROSTIG — מוצרים עצמאיים ופתרונות מותאמים לארגונים, עמותות וקהילות.</p>
      </div>

      <div class="app-suite-carousel fade-up" aria-label="קרוסלת אפליקציות">
        <button class="app-suite-arrow app-suite-arrow-right" type="button" onclick="scrollAppSuite(1)" aria-label="הצג אפליקציות ימינה">›</button>
        <div class="app-suite-viewport" id="appSuiteViewport">
          <div class="app-suite-track">
            <div class="venture-card app-suite-card">
              <div class="venture-logo"><img src="keyswitch-logo.png" alt="KeySwitch"></div>
              <h3>KeySwitch</h3>
              <div class="venture-kicker">Keyboard layout assistant</div>
              <p>מפסיקה את המאבק במקלדת ומתקנת אוטומטית כתיבה בשפה הלא נכונה, בזמן אמת.</p>
              <div class="venture-tags"><span>Product</span><span>Utility</span><span>Keyboard</span></div>
              <a class="app-link" href="https://keyswitch.app" target="_blank" rel="noopener" aria-label="מעבר לאפליקציית KeySwitch">מעבר לאפליקציה <span>↗</span></a>
            </div>

            <div class="venture-card app-suite-card">
              <div class="venture-logo vulancore"><img src="vulancore.png" alt="VulanCore logo"></div>
              <h3>VulanCore</h3>
              <div class="venture-kicker">Nonprofit volunteer dashboard</div>
              <p>אפליקציה לניהול עמותות ומערך מתנדבים.</p>
              <div class="venture-tags"><span>Nonprofit</span><span>Volunteers</span><span>Dashboard</span></div>
              <a class="app-link" href="https://apps.microsoft.com/detail/9NNNQ38GS6CC" target="_blank" rel="noopener" aria-label="מעבר ל-VulanCore בחנות Microsoft">Microsoft Store <span>↗</span></a>
            </div>

            <div class="venture-card app-suite-card app-suite-featured">
              <div class="venture-logo vulancore"><img src="vulancore.png" alt="VOLUNCORE360 logo"></div>
              <h3>VOLUNCORE360</h3>
              <div class="venture-kicker">Volunteer segmentation & insights</div>
              <p>מערכת ניהול, פילוח ותובנות למערכי מתנדבים — מבט 360 על פעילות, מעורבות, קבוצות יעד ופוטנציאל צמיחה.</p>
              <div class="venture-tags"><span>Volunteers</span><span>Segmentation</span><span>Insights</span></div>
              <a class="app-link" href="https://voluncore360.netlify.app/" target="_blank" rel="noopener" aria-label="מעבר לאפליקציית VOLUNCORE360">מעבר לאפליקציה <span>↗</span></a>
            </div>

            <div class="venture-card app-suite-card">
              <div class="venture-logo"><img src="chatscope.png" alt="ChatScope logo"></div>
              <h3>ChatScope</h3>
              <div class="venture-kicker">WhatsApp analysis</div>
              <p>מנתחת שיחות וואטסאפ והופכת בלגן של הודעות לתובנות ברורות, דפוסים והחלטות שאפשר לפעול לפיהן.</p>
              <div class="venture-tags"><span>AI</span><span>Communication</span><span>Analysis</span></div>
              <a class="app-link" href="https://chatscope.netlify.app" target="_blank" rel="noopener" aria-label="מעבר לאפליקציית ChatScope">מעבר לאפליקציה <span>↗</span></a>
            </div>
          </div>
        </div>
        <button class="app-suite-arrow app-suite-arrow-left" type="button" onclick="scrollAppSuite(-1)" aria-label="הצג אפליקציות שמאלה">‹</button>
      </div>

      <div class="app-suite-dots" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>

      <div style="text-align:center;margin-top:2.5rem" class="fade-up">
        <a href="#" onclick="showPage('ventures');return false" class="btn-outline">לכל המיזמים</a>
      </div>
    </div>
  </section>

  <style>
    .app-suite-section { overflow: hidden; }
    .app-suite-carousel { position: relative; margin-top: 2.5rem; }
    .app-suite-viewport { overflow-x: auto; scroll-behavior: smooth; scrollbar-width: none; padding: 0.25rem 0.1rem 1rem; }
    .app-suite-viewport::-webkit-scrollbar { display: none; }
    .app-suite-track { display: grid; grid-auto-flow: column; grid-auto-columns: calc((100% - 4.5rem) / 4); gap: 1.5rem; align-items: stretch; }
    .app-suite-card { min-width: 0; height: 100%; }
    .app-suite-featured { border-color: rgba(245,213,71,0.42); box-shadow: 0 18px 55px rgba(245,213,71,0.08); }
    .app-suite-arrow { position: absolute; top: 50%; transform: translateY(-50%); z-index: 4; width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--border2); background: var(--accent); color: #0d1117; font-size: 2rem; line-height: 1; font-weight: 800; cursor: pointer; box-shadow: 0 12px 35px rgba(0,0,0,0.28); }
    .app-suite-arrow:hover { background: var(--accent2); }
    .app-suite-arrow-right { right: -22px; }
    .app-suite-arrow-left { left: -22px; }
    .app-suite-dots { display: flex; justify-content: center; gap: 0.45rem; margin-top: 0.5rem; }
    .app-suite-dots span { width: 7px; height: 7px; border-radius: 50%; background: var(--border2); }
    .app-suite-dots span:first-child { background: var(--accent); }
    @media(max-width: 1100px) { .app-suite-track { grid-auto-columns: calc((100% - 1.5rem) / 2); } }
    @media(max-width: 680px) { .app-suite-track { grid-auto-columns: 86%; } .app-suite-arrow { display: none; } }
  </style>
`;

if (!html.includes(homeStart)) throw new Error('Digital ventures preview marker not found');
if (!html.includes(homeEnd)) throw new Error('Prompt library marker not found');

const startIndex = html.indexOf(homeStart);
const endIndex = html.indexOf(homeEnd, startIndex);
html = html.slice(0, startIndex) + appSuiteSection + '\n' + html.slice(endIndex);

// Update Mundial wording everywhere it appears.
html = html.replaceAll(
  'שנבנתה עבור <span class="latin">GNU</span> / אחים לסמל ומותאמת לצורכי הארגון.',
  'שנבנתה עבור עמותת אחים לסמל ומותאמת לצורכי הארגון.'
);
html = html.replaceAll(
  'שנבנתה עבור GNU / אחים לסמל ומותאמת לצורכי הארגון.',
  'שנבנתה עבור עמותת אחים לסמל ומותאמת לצורכי הארגון.'
);

// Add free prompt library link to header navigation.
const navCta = `<li><a onclick="showPage('contact')" class="nav-cta">נדבר</a></li>`;
const promptNav = `<li><a href="prompt-library.html" class="prompt-free-nav">ספריית פרומפטים <strong>חינם</strong></a></li>`;
if (!html.includes('prompt-free-nav')) {
  if (!html.includes(navCta)) throw new Error('Navigation CTA marker not found');
  html = html.replace(navCta, promptNav + '\n    ' + navCta);
}

if (!html.includes('function scrollAppSuite(')) {
  const scriptMarker = '  function showPage(page) {';
  const carouselScript = `  function scrollAppSuite(direction) {\n    const viewport = document.getElementById('appSuiteViewport');\n    if (!viewport) return;\n    const amount = Math.max(260, viewport.clientWidth * 0.85);\n    viewport.scrollBy({ left: direction * amount, behavior: 'smooth' });\n  }\n\n`;
  if (!html.includes(scriptMarker)) throw new Error('showPage script marker not found');
  html = html.replace(scriptMarker, carouselScript + scriptMarker);
}

if (!html.includes('.prompt-free-nav')) {
  const styleMarker = '  .nav-cta {';
  const navStyle = `  .prompt-free-nav strong {\n    color: var(--accent);\n    font-weight: 800;\n  }\n  .prompt-free-nav:hover strong { color: var(--accent2); }\n\n`;
  if (!html.includes(styleMarker)) throw new Error('Navigation style marker not found');
  html = html.replace(styleMarker, navStyle + styleMarker);
}

if (!html.includes('https://voluncore360.netlify.app/')) throw new Error('VOLUNCORE360 link was not inserted');
if (!html.includes('ספריית פרומפטים <strong>חינם</strong>')) throw new Error('Prompt library nav link was not inserted');
if (!html.includes('נבנתה עבור עמותת אחים לסמל')) throw new Error('Mundial wording was not updated');

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Updated homepage app suite carousel, prompt library nav link, and Mundial wording.');
