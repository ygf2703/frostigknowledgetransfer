const fs = require('fs');
const path = require('path');

const indexPath = path.join(process.cwd(), 'index.html');
if (!fs.existsSync(indexPath)) throw new Error('index.html not found');
let html = fs.readFileSync(indexPath, 'utf8');

const appSuiteSection = `  <!-- DIGITAL VENTURES PREVIEW -->
  <section class="ventures app-suite-section">
    <div class="ventures-inner">
      <div class="ventures-header fade-up">
        <span class="label">Digital Ventures</span>
        <h2 class="section-title">אפליקציות ומיזמים דיגיטליים</h2>
        <p class="section-sub">קרוסלת אפליקציות מלאה מתוך סטודיו הפיתוח של FROSTIG — מוצרים עצמאיים ופתרונות מותאמים לארגונים, עמותות וקהילות.</p>
      </div>
      <div class="app-suite-carousel fade-up" aria-label="קרוסלת אפליקציות">
        <button class="app-suite-arrow app-suite-arrow-right" type="button" onclick="scrollAppSuite(1)" aria-label="הצג אפליקציות ימינה">›</button>
        <div class="app-suite-viewport" id="appSuiteViewport"><div class="app-suite-track">
            <div class="venture-card app-suite-card">
              <div class="venture-logo dark"><img src="keyswitch.png" alt="KeySwitch logo"></div>
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
              <div class="venture-logo voluncore360"><img src="voluncore360.png" alt="VOLUNCORE360 logo"></div>
              <h3>VOLUNCORE360</h3>
              <div class="venture-kicker">סוויטת ניהול מתנדבים בעמותות</div>
              <p>סוויטת ניהול מתנדבים בעמותות: ניהול, פילוח ותובנות למערכי מתנדבים, עם מבט 360 על פעילות, מעורבות ופוטנציאל צמיחה.</p>
              <div class="venture-tags"><span>Volunteers</span><span>Management</span><span>360</span></div>
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

            <div class="venture-card app-suite-card">
              <div class="venture-logo mindinbox"><img src="mindinbox.png" alt="MindInbox logo"></div>
              <h3>MindInbox</h3>
              <div class="venture-kicker">AI Gmail organizer</div>
              <p>הופכים את תיבת <span class="latin">Gmail</span> שלכם למערכת ניהול חכמה. סיווג אוטומטי, תעדוף משימות וסנכרון ל-<span class="latin">Drive</span> וליומן – בשביל שתוכלו להתמקד במה שחשוב באמת.</p>
              <div class="venture-tags"><span>AI</span><span>Gmail</span><span>Productivity</span></div>
              <span class="app-link app-link-disabled" aria-disabled="true">בקרוב</span>
            </div>

            <div class="venture-card app-suite-card">
              <div class="venture-logo mundial" aria-label="לוגו מנחשים מונדיאל"><div class="mundial-mark"><div><div class="mundial-ball"></div><div class="mundial-title">מנחשים<br>מונדיאל</div><div class="mundial-sub">Achim Lasemel</div></div></div></div>
              <h3>מנחשים מונדיאל</h3>
              <div class="venture-kicker">World Cup prediction app</div>
              <p>אפליקציית ניחושים למשחקי המונדיאל, שנבנתה עבור עמותת אחים לסמל ומותאמת לצורכי הארגון.</p>
              <div class="venture-tags"><span>World Cup</span><span>Community</span><span>Custom</span></div>
              <a class="app-link" href="https://mundial-achim-lasemel.netlify.app/" target="_blank" rel="noopener" aria-label="מעבר לאפליקציית מנחשים מונדיאל">מעבר לאפליקציה <span>↗</span></a>
            </div>

            <div class="venture-card app-suite-card">
              <div class="venture-logo"><img src="riskscore.png" alt="RiskScore logo"></div>
              <h3>RiskScore</h3>
              <div class="venture-kicker">Ticket risk check</div>
              <p>בודקת מהימנות של כרטיסים לפני רכישה, באמצעות ניתוח תמונת הכרטיס והשיחה עם המוכר, כדי לזהות סיכון לפני שמעבירים כסף.</p>
              <div class="venture-tags"><span>Risk</span><span>Analytics</span><span>Trust</span></div>
              <a class="app-link" href="https://riskscoretickets.netlify.app/" target="_blank" rel="noopener" aria-label="מעבר לאפליקציית RiskScore">מעבר לאפליקציה <span>↗</span></a>
            </div>
        </div></div>
        <button class="app-suite-arrow app-suite-arrow-left" type="button" onclick="scrollAppSuite(-1)" aria-label="הצג אפליקציות שמאלה">‹</button>
      </div>
      <div class="app-suite-dots" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
      <div style="text-align:center;margin-top:2.5rem" class="fade-up"><a href="#" onclick="showPage('ventures');return false" class="btn-outline">לכל המיזמים</a></div>
    </div>
  </section>
  <style>
    .app-suite-section { overflow: hidden; }
    .app-suite-carousel { position: relative; margin-top: 2.5rem; direction: ltr; }
    .app-suite-viewport { overflow-x: auto; scroll-behavior: smooth; scrollbar-width: none; padding: 0.25rem 0.1rem 1rem; direction: ltr; }
    .app-suite-viewport::-webkit-scrollbar { display: none; }
    .app-suite-track { display: grid; grid-auto-flow: column; grid-auto-columns: calc((100% - 4.5rem) / 4); gap: 1.5rem; align-items: stretch; direction: ltr; }
    .app-suite-card { min-width: 0; min-height: 575px; height: 100%; direction: rtl; display: flex; flex-direction: column; }
    .app-suite-card .venture-logo { flex: 0 0 150px; height: 150px; margin-bottom: 1.15rem; }
    .app-suite-card h3 { min-height: 1.5rem; display: flex; align-items: center; }
    .app-suite-card .venture-kicker { min-height: 2.25rem; margin-bottom: 0.7rem; }
    .app-suite-card p { flex: 1 1 auto; }
    .app-suite-card .app-link { margin-top: 1.35rem; }
    .app-suite-card .venture-tags { min-height: 66px; align-content: flex-start; }
    .venture-logo.voluncore360 { background: #fff; padding: 0.35rem; }
    .venture-logo.voluncore360 img { transform: scale(1.03); }
    .app-suite-featured { border-color: rgba(245,213,71,0.55); box-shadow: 0 18px 55px rgba(245,213,71,0.12); }
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

const fullVenturesGrid = `      <div class="ventures-grid fade-up" style="transition-delay:0.1s">
        <div class="venture-card">
          <div class="venture-logo dark"><img src="keyswitch.png" alt="KeySwitch logo"></div>
          <h3>KeySwitch</h3>
          <div class="venture-kicker">Keyboard layout assistant</div>
          <p>מפסיקה את המאבק במקלדת ומתקנת אוטומטית כתיבה בשפה הלא נכונה, בזמן אמת.</p>
          <div class="venture-tags"><span>Product</span><span>Utility</span><span>Keyboard</span></div>
          <a class="app-link" href="https://keyswitch.app" target="_blank" rel="noopener" aria-label="מעבר לאפליקציית KeySwitch">מעבר לאפליקציה <span>↗</span></a>
        </div>
        <div class="venture-card">
          <div class="venture-logo vulancore"><img src="vulancore.png" alt="VulanCore logo"></div>
          <h3>VulanCore</h3>
          <div class="venture-kicker">Nonprofit volunteer dashboard</div>
          <p>אפליקציה לניהול עמותות ומערך מתנדבים.</p>
          <div class="venture-tags"><span>Nonprofit</span><span>Volunteers</span><span>Dashboard</span></div>
          <a class="app-link" href="https://apps.microsoft.com/detail/9NNNQ38GS6CC" target="_blank" rel="noopener" aria-label="מעבר ל-VulanCore בחנות Microsoft">Microsoft Store <span>↗</span></a>
        </div>
        <div class="venture-card app-suite-featured">
          <div class="venture-logo voluncore360"><img src="voluncore360.png" alt="VOLUNCORE360 logo"></div>
          <h3>VOLUNCORE360</h3>
          <div class="venture-kicker">סוויטת ניהול מתנדבים בעמותות</div>
          <p>סוויטת ניהול מתנדבים בעמותות: ניהול, פילוח ותובנות למערכי מתנדבים, עם מבט 360 על פעילות, מעורבות ופוטנציאל צמיחה.</p>
          <div class="venture-tags"><span>Volunteers</span><span>Management</span><span>360</span></div>
          <a class="app-link" href="https://voluncore360.netlify.app/" target="_blank" rel="noopener" aria-label="מעבר לאפליקציית VOLUNCORE360">מעבר לאפליקציה <span>↗</span></a>
        </div>
        <div class="venture-card">
          <div class="venture-logo"><img src="chatscope.png" alt="ChatScope logo"></div>
          <h3>ChatScope</h3>
          <div class="venture-kicker">WhatsApp analysis</div>
          <p>מנתחת שיחות וואטסאפ והופכת בלגן של הודעות לתובנות ברורות, דפוסים והחלטות שאפשר לפעול לפיהן.</p>
          <div class="venture-tags"><span>AI</span><span>Communication</span><span>Analysis</span></div>
          <a class="app-link" href="https://chatscope.netlify.app" target="_blank" rel="noopener" aria-label="מעבר לאפליקציית ChatScope">מעבר לאפליקציה <span>↗</span></a>
        </div>
        <div class="venture-card">
          <div class="venture-logo mindinbox"><img src="mindinbox.png" alt="MindInbox logo"></div>
          <h3>MindInbox</h3>
          <div class="venture-kicker">AI Gmail organizer</div>
          <p>הופכים את תיבת <span class="latin">Gmail</span> שלכם למערכת ניהול חכמה. סיווג אוטומטי, תעדוף משימות וסנכרון ל-<span class="latin">Drive</span> וליומן – בשביל שתוכלו להתמקד במה שחשוב באמת.</p>
          <div class="venture-tags"><span>AI</span><span>Gmail</span><span>Productivity</span></div>
          <span class="app-link app-link-disabled" aria-disabled="true">בקרוב</span>
        </div>
        <div class="venture-card">
          <div class="venture-logo mundial" aria-label="לוגו מנחשים מונדיאל"><div class="mundial-mark"><div><div class="mundial-ball"></div><div class="mundial-title">מנחשים<br>מונדיאל</div><div class="mundial-sub">Achim Lasemel</div></div></div></div>
          <h3>מנחשים מונדיאל</h3>
          <div class="venture-kicker">World Cup prediction app</div>
          <p>אפליקציית ניחושים למשחקי המונדיאל, שנבנתה עבור עמותת אחים לסמל ומותאמת לצורכי הארגון.</p>
          <div class="venture-tags"><span>World Cup</span><span>Community</span><span>Custom</span></div>
          <a class="app-link" href="https://mundial-achim-lasemel.netlify.app/" target="_blank" rel="noopener" aria-label="מעבר לאפליקציית מנחשים מונדיאל">מעבר לאפליקציה <span>↗</span></a>
        </div>
        <div class="venture-card">
          <div class="venture-logo"><img src="riskscore.png" alt="RiskScore logo"></div>
          <h3>RiskScore</h3>
          <div class="venture-kicker">Ticket risk check</div>
          <p>בודקת מהימנות של כרטיסים לפני רכישה, באמצעות ניתוח תמונת הכרטיס והשיחה עם המוכר, כדי לזהות סיכון לפני שמעבירים כסף.</p>
          <div class="venture-tags"><span>Risk</span><span>Analytics</span><span>Trust</span></div>
          <a class="app-link" href="https://riskscoretickets.netlify.app/" target="_blank" rel="noopener" aria-label="מעבר לאפליקציית RiskScore">מעבר לאפליקציה <span>↗</span></a>
        </div>
      </div>`;

function replaceBetween(input, startMarker, endMarker, replacement) {
  const start = input.indexOf(startMarker);
  if (start === -1) throw new Error('Missing marker: ' + startMarker);
  const end = input.indexOf(endMarker, start);
  if (end === -1) throw new Error('Missing end marker: ' + endMarker);
  return input.slice(0, start) + replacement + '\n' + input.slice(end);
}

html = replaceBetween(html, '  <!-- DIGITAL VENTURES PREVIEW -->', '  <!-- Free Prompt Library Section', appSuiteSection);

const venturesStart = html.indexOf('<!-- ══════════════════════════════════ PAGE: VENTURES');
if (venturesStart === -1) throw new Error('Full ventures page not found');
const gridStart = html.indexOf('      <div class="ventures-grid fade-up" style="transition-delay:0.1s">', venturesStart);
if (gridStart === -1) throw new Error('Full ventures grid not found');
const gridEnd = html.indexOf('      <div class="venture-bridge fade-up"', gridStart);
if (gridEnd === -1) throw new Error('Full ventures grid end not found');
html = html.slice(0, gridStart) + fullVenturesGrid + '\n\n' + html.slice(gridEnd);

const navCta = `<li><a onclick="showPage('contact')" class="nav-cta">נדבר</a></li>`;
const promptNav = `<li><a href="prompt-library.html" class="prompt-free-nav">ספריית פרומפטים <strong>חינם</strong></a></li>`;
if (!html.includes('prompt-free-nav')) {
  if (!html.includes(navCta)) throw new Error('Navigation CTA marker not found');
  html = html.replace(navCta, promptNav + '\n    ' + navCta);
}

html = html.replaceAll('שנבנתה עבור <span class="latin">GNU</span> / אחים לסמל ומותאמת לצורכי הארגון.', 'שנבנתה עבור עמותת אחים לסמל ומותאמת לצורכי הארגון.');
html = html.replaceAll('שנבנתה עבור GNU / אחים לסמל ומותאמת לצורכי הארגון.', 'שנבנתה עבור עמותת אחים לסמל ומותאמת לצורכי הארגון.');

if (!html.includes('function scrollAppSuite(')) {
  const marker = '  function showPage(page) {';
  const fn = `  function scrollAppSuite(direction) {\n    const viewport = document.getElementById('appSuiteViewport');\n    if (!viewport) return;\n    const amount = Math.max(260, viewport.clientWidth * 0.9);\n    viewport.scrollBy({ left: direction * amount, behavior: 'smooth' });\n  }\n\n`;
  if (!html.includes(marker)) throw new Error('showPage marker not found');
  html = html.replace(marker, fn + marker);
}

if (!html.includes('.prompt-free-nav')) {
  const styleMarker = '  .nav-cta {';
  const navStyle = `  .prompt-free-nav strong {\n    color: var(--accent);\n    font-weight: 800;\n  }\n  .prompt-free-nav:hover strong { color: var(--accent2); }\n\n`;
  if (!html.includes(styleMarker)) throw new Error('Navigation style marker not found');
  html = html.replace(styleMarker, navStyle + styleMarker);
}

for (const item of ['VOLUNCORE360','voluncore360.png','סוויטת ניהול מתנדבים בעמותות','https://voluncore360.netlify.app/','MindInbox','מנחשים מונדיאל','RiskScore','ChatScope','KeySwitch','VulanCore']) {
  if (!html.includes(item)) throw new Error('Missing required item: ' + item);
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Fixed full app carousel, arrows, VOLUNCORE360 logo, and all app cards.');
