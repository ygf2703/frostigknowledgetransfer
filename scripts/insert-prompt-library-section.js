const fs = require('fs');
const path = require('path');

// Inserts the free prompt library homepage section into index.html.
const root = process.cwd();
const indexPath = path.join(root, 'index.html');
const snippetPath = path.join(root, 'prompt-library-section-snippet.html');

if (!fs.existsSync(indexPath)) {
  throw new Error('index.html not found');
}

if (!fs.existsSync(snippetPath)) {
  throw new Error('prompt-library-section-snippet.html not found');
}

let index = fs.readFileSync(indexPath, 'utf8');
const snippet = fs.readFileSync(snippetPath, 'utf8').trim();

const marker = '  <!-- FOR WHOM -->';
if (!index.includes(marker)) {
  throw new Error('Insertion marker not found: <!-- FOR WHOM -->');
}

const currentStart = index.indexOf('  <!-- Free Prompt Library Section -->');
const currentEnd = index.indexOf(marker, currentStart);
if (currentStart !== -1 && currentEnd !== -1) {
  index = index.slice(0, currentStart) + '  ' + snippet + '\n\n' + index.slice(currentEnd);
} else {
  index = index.replace(marker, `\n  ${snippet}\n\n${marker}`);
}
fs.writeFileSync(indexPath, index, 'utf8');
console.log('Inserted or updated prompt library section in index.html.');
