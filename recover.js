const fs = require('fs');

const diffPath = 'C:\Users	hena\.gemini	mp\seatech	ool-outputs\session-b002ccf7-3d47-4d9e-9305-96f315eee70fun_shell_command_1772104716385_0.txt';
const lines = fs.readFileSync(diffPath, 'utf8').split('
');

let reconstructed = [];
let inDiff = false;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i].replace(/$/, '');
  
  if (!inDiff) {
    if (line.startsWith('@@ ')) {
      inDiff = true;
    }
    continue;
  }
  
  if (line.startsWith('@@ ')) {
    // Diff chunk header, ignore
    continue;
  }
  
  if (line.startsWith('-')) {
    // This was the old category line that we removed in favor of Office Furniture.
    // Wait, the diff shows what MY script did compared to HEAD.
    // Actually, in the diff:
    // -    category: "Auditorium Chair (V2)",
    // +    category: "Office Furniture",
    // We WANT the old category line! So if it starts with '-', we KEEP it (without the '-').
    // BUT what if it's a completely NEW product? For new products, they weren't in HEAD, so they only have '+' lines.
    // Wait, if we keep '-', and ignore '+' when '-' was present?
    // Let's do this:
    // If line starts with '-', it means it was in HEAD, and I removed it. We want it!
    reconstructed.push(line.substring(1));
  } else if (line.startsWith('+')) {
    // This is either "category: Office Furniture" (which we might want to skip if we just kept the '-' line),
    // OR it's a new product that was added.
    // If the previous line we processed was the '-' version of this line, we skip the '+'.
    // Otherwise, we keep it.
    if (lines[i-1] && lines[i-1].startsWith('-') && line.includes('category: "Office Furniture"')) {
      // skip
    } else {
      reconstructed.push(line.substring(1));
    }
  } else if (line.startsWith(' ')) {
    // Context line, keep it
    reconstructed.push(line.substring(1));
  } else if (line.startsWith('\ No newline')) {
    // ignore
  } else if (line === '') {
    // empty context line?
    reconstructed.push('');
  }
}

// Now we have the file reconstructed. But wait, for the entirely new products (the ones added in the + block),
// they have `category: "Office Furniture",` because they had no `-` line.
// We need to fix their categories based on the preceding comment!

let currentCategory = "Office Furniture";
for (let i = 0; i < reconstructed.length; i++) {
  let line = reconstructed[i];
  let match = line.match(/\/\/\s*---\s*(.*?)\s*---/);
  if (match) {
    currentCategory = match[1].trim();
  }
  
  if (line.includes('category: "Office Furniture"')) {
    reconstructed[i] = line.replace('category: "Office Furniture"', `category: "${currentCategory}"`);
  }
}

// The diff only contains the parts that matched the diff context! It doesn't contain the unmodified parts between chunks!
// Ah. A git diff with default context (3 lines) omits unchanged lines.
fs.writeFileSync('reconstructed_test.ts', reconstructed.join('
'));
console.log('Done');