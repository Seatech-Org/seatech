const fs = require('fs');
let text = fs.readFileSync('src/data/products.ts', 'utf8');
const lines = text.split('
');
console.log(lines.slice(-10).join('
'));
