const fs = require('fs');
const path = require('path');

// Final homepage carousel fixes:
// 1. App carousel: one card per click, slow eased motion.
// 2. VOLUNCORE360 logo: cache-busted asset path.
// 3. Homepage prompt library preview: real carousel, one card per click.
const indexPath = path.join(process.cwd(), 'index.html');
if (!fs.existsSync(indexPath)) throw new Error('index.html not found');
let html = fs.readFileSync(indexPath, 'utf8');

const logoPath = 'voluncore360-logo.svg?v=20260615a';
html = html.replaceAll(/src="voluncore360-logo\.svg(?:\?v=[^"]*)?"/g, `src="${logoPath}"`);

const promptPreviewSection = `  <!-- Free Prompt Library Section -->
  <section id="prompt-library-preview" class="prompt-library-preview" dir="rtl">
    <div class="prompt-library-preview-inner">
      <span class="label">Free Prompt Library</span>
      <h2 class="section-title">ספריית פרומפטים חינמית</h2>
      <p class="section-sub">מאגר שימושי של פרומפטים מוכנים לעבודה עם AI — לעמותות, עסקים, שיווק, מכירות, שירות, ניהול, קוד, תוכן ולמידה. כל מדור כולל פרומפטים מוכנים להעתקה ולשימוש מיידי.</p>

      <div class="prompt-preview-carousel" aria-label="קרוסלת מדורי ספריית הפרומפטים">
        <button class="prompt-preview-arrow prompt-preview-arrow-right" type="button" onclick="scrollPromptPreview(1)" aria-label="הצג מדור ימינה">›</button>
        <div class="prompt-preview-viewport" id="promptPreviewViewport">
          <div class="prompt-preview-track">
            <a class="prompt-library-card" href="prompt-library.html#nonprofits-volunteers"><div class="prompt-library-icon">🤝</div><h3>ניהול עמותות ומתנדבים</h3><p>תוכניות עבודה, קליטת מתנדבים, שימור, מדידה וניהול פעילות.</p><span>10 פרומפטים</span></a>
            <a class="prompt-library-card" href="prompt-library.html#marketing-content"><div class="prompt-library-icon">✍️</div><h3>שיווק, תוכן ורשתות חברתיות</h3><p>פוסטים, ניוזלטרים, עמודי נחיתה, סרטונים וקמפייני תוכן.</p><span>10 פרומפטים</span></a>
            <a class="prompt-library-card" href="prompt-library.html#fundraising-campaigns"><div class="prompt-library-icon">💛</div><h3>גיוס תרומות וקמפיינים</h3><p>פנייה לתורמים, קמפייני תרומה, שגרירים והודעות קמפיין.</p><span>10 פרומפטים</span></a>
            <a class="prompt-library-card" href="prompt-library.html#business-productivity"><div class="prompt-library-icon">📊</div><h3>ניהול עסקי ופרודוקטיביות</h3><p>סיכומי פגישות, משימות, החלטות, תהליכים ודשבורדים.</p><span>10 פרומפטים</span></a>
            <a class="prompt-library-card" href="prompt-library.html#learning-knowledge"><div class="prompt-library-icon">🎓</div><h3>הדרכה, למידה ובניית ידע</h3><p>מערכי שיעור, סדנאות, מדריכים, תרגולים וסיכומי ידע.</p><span>10 פרומפטים</span></a>
            <a class="prompt-library-card" href="prompt-library.html#small-business-ai"><div class="prompt-library-icon">🏪</div><h3>AI לעסקים קטנים ועצמאים</h3><p>חיסכון בזמן, תכנון פעילות, שיווק, שירות ותהליכי עבודה.</p><span>10 פרומפטים</span></a>
            <a class="prompt-library-card" href="prompt-library.html#sales-customer-service"><div class="prompt-library-icon">💬</div><h3>מכירות ושירות לקוחות</h3><p>שיחות מכירה, התנגדויות, פולואפ, שירות ומענה מקצועי.</p><span>10 פרומפטים</span></a>
            <a class="prompt-library-card" href="prompt-library.html#vibe-coding-web-apps"><div class="prompt-library-icon">🧩</div><h3>Vibe Coding, אתרים ואפליקציות</h3><p>אפיון, דפי נחיתה, דשבורדים, משימות פיתוח ובדיקות.</p><span>10 פרומפטים</span></a>
            <a class="prompt-library-card" href="prompt-library.html#visual-brand-video"><div class="prompt-library-icon">🎨</div><h3>יצירת תמונות, וידאו ומיתוג</h3><p>תמונות, וידאו קצר, סטוריז, באנרים, לוגו ושפה גרפית.</p><span>10 פרומפטים</span></a>
            <a class="prompt-library-card" href="prompt-library.html#hr-recruitment-management"><div class="prompt-library-icon">🧑‍💼</div><h3>משאבי אנוש, גיוס וניהול עובדים</h3><p>מודעות דרושים, ראיונות, קליטה, משוב וניהול צוותים.</p><span>10 פרומפטים</span></a>
          </div>
        </div>
        <button class="prompt-preview-arrow prompt-preview-arrow-left" type="button" onclick="scrollPromptPreview(-1)" aria-label="הצג מדור שמאלה">‹</button>
      </div>

      <a class="btn-primary" href="prompt-library.html">כניסה לספריית הפרומפטים</a>
    </div>
  </section>

  <style>
    .prompt-library-preview{padding:6rem 3rem;border-top:1px solid var(--border);background:radial-gradient(circle at 80% 0%,rgba(245,213,71,.08),transparent 32%);overflow:hidden}
    .prompt-library-preview-inner{max-width:1180px;margin:0 auto;text-align:center}.prompt-library-preview .section-sub{max-width:880px;margin-left:auto;margin-right:auto}
    .prompt-preview-carousel{position:relative;margin:2.5rem 0;direction:ltr}.prompt-preview-viewport{overflow-x:auto;scrollbar-width:none;direction:ltr;scroll-behavior:auto;padding:.2rem .1rem 1rem}.prompt-preview-viewport::-webkit-scrollbar{display:none}.prompt-preview-track{display:grid;grid-auto-flow:column;grid-auto-columns:calc((100% - 4rem)/5);gap:1rem;align-items:stretch;direction:ltr}
    .prompt-library-card{display:block;text-align:right;text-decoration:none;color:var(--text);background:linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.025));border:1px solid var(--border);border-radius:16px;padding:1.25rem;min-height:205px;transition:.2s;direction:rtl}.prompt-library-card:hover{transform:translateY(-3px);border-color:rgba(245,213,71,.45);box-shadow:0 18px 55px rgba(0,0,0,.28)}.prompt-library-icon{font-size:2rem;margin-bottom:.75rem}.prompt-library-card h3{font-size:1.05rem;margin-bottom:.5rem}.prompt-library-card p{color:var(--muted);font-size:.9rem;line-height:1.55}.prompt-library-card span{display:inline-flex;margin-top:1rem;color:var(--accent);font-weight:800;font-size:.86rem}
    .prompt-preview-arrow{position:absolute;top:50%;transform:translateY(-50%);z-index:4;width:44px;height:44px;border-radius:50%;border:1px solid var(--border2);background:var(--accent);color:#0d1117;font-size:2rem;line-height:1;font-weight:800;cursor:pointer;box-shadow:0 12px 35px rgba(0,0,0,.28)}.prompt-preview-arrow:hover{background:var(--accent2)}.prompt-preview-arrow-right{right:-22px}.prompt-preview-arrow-left{left:-22px}
    @media(max-width:1100px){.prompt-preview-track{grid-auto-columns:calc((100% - 1rem)/2)}}@media(max-width:620px){.prompt-library-preview{padding:4rem 1.25rem}.prompt-library-preview-inner{text-align:right}.prompt-preview-track{grid-auto-columns:86%}.prompt-preview-arrow{display:none}}
  </style>`;

const promptStart = html.indexOf('  <!-- Free Prompt Library Section');
const forWhomMarker = '  <!-- FOR WHOM -->';
const forWhomIndex = html.indexOf(forWhomMarker, promptStart);
if (promptStart === -1 || forWhomIndex === -1) throw new Error('Prompt preview section markers not found');
html = html.slice(0, promptStart) + promptPreviewSection + '\n\n' + html.slice(forWhomIndex);

const functionsBlock = `  function easeInOutCubic(t) {
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

  function scrollOneCard(viewport, cardSelector, direction, fallbackGap = 24) {
    const card = viewport ? viewport.querySelector(cardSelector) : null;
    if (!viewport || !card) return;
    const gap = parseFloat(getComputedStyle(card.parentElement).gap) || fallbackGap;
    const amount = card.getBoundingClientRect().width + gap;
    animateScrollTo(viewport, viewport.scrollLeft + direction * amount, 950);
  }

  function scrollAppSuite(direction) {
    scrollOneCard(document.getElementById('appSuiteViewport'), '.app-suite-card', direction, 24);
  }

  function scrollPromptPreview(direction) {
    scrollOneCard(document.getElementById('promptPreviewViewport'), '.prompt-library-card', direction, 16);
  }

  function showPage(page) {`;

const blockRegex = /  function easeInOutCubic\(t\) \{[\s\S]*?\n  function showPage\(page\) \{/;
const oldScrollRegex = /  function scrollAppSuite\(direction\) \{[\s\S]*?\n  \}\n\n  function showPage\(page\) \{/;
if (blockRegex.test(html)) html = html.replace(blockRegex, functionsBlock);
else if (oldScrollRegex.test(html)) html = html.replace(oldScrollRegex, functionsBlock);
else {
  const marker = '  function showPage(page) {';
  if (!html.includes(marker)) throw new Error('showPage marker not found');
  html = html.replace(marker, functionsBlock);
}

html = html.replaceAll('scroll-behavior: smooth; scrollbar-width: none;', 'scroll-behavior: auto; scrollbar-width: none;');

for (const required of ['promptPreviewViewport', 'scrollPromptPreview', logoPath, 'Vibe Coding, אתרים ואפליקציות']) {
  if (!html.includes(required)) throw new Error('Missing required update: ' + required);
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Fixed VOLUNCORE360 logo cache and homepage prompt library carousel.');
