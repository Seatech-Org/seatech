const fs = require('fs');
const content = fs.readFileSync('src/data/products.ts', 'utf8');
const regex = /category:\s*"(.*?)"/g;
let match;
const categories = new Set();
const ignore = new Set([
  'Seat Mechanism', 'Material', 'Components', 'Construction',
  'General', 'Dimensions', 'Features', 'Performance', 'Finish',
  'Warranty', 'Standard', 'Mounting', 'Seat', 'Backrest', 'Writing Pad',
  'Top', 'Modesty Panel', 'Storage', 'Pedestal'
]);
while ((match = regex.exec(content)) !== null) {
  if (!ignore.has(match[1])) {
    categories.add(match[1]);
  }
}
console.log(Array.from(categories));