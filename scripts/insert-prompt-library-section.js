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

if (index.includes('id="prompt-library-preview"')) {
  console.log('Prompt library section already exists in index.html. No changes needed.');
  process.exit(0);
}

const marker = '  <!-- FOR WHOM -->';
if (!index.includes(marker)) {
  throw new Error('Insertion marker not found: <!-- FOR WHOM -->');
}

index = index.replace(marker, `\n  ${snippet}\n\n${marker}`);
fs.writeFileSync(indexPath, index, 'utf8');
console.log('Inserted prompt library section into index.html.');
