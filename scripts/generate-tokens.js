import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawData = JSON.parse(fs.readFileSync(path.join(__dirname, '../tokens/figma-raw-tokens.json'), 'utf8'));

let css = ':root {\n';

const cssVarName = (name) => '--' + name.replace(/\//g, '-').replace(/\s+/g, '-').toLowerCase();

for (const key in rawData.variables) {
  const v = rawData.variables[key];
  if (!v.resolvedValuesByMode) continue;
  
  // We'll just grab the first mode's value for now
  const modeKey = Object.keys(v.resolvedValuesByMode)[0];
  const resolved = v.resolvedValuesByMode[modeKey];
  
  if (resolved && resolved.value !== undefined) {
    let val = resolved.value;
    if (v.resolvedType === 'FLOAT') {
      val = val + 'px'; // basic assumption for spacing/radius
    }
    css += `  ${cssVarName(v.name)}: ${val};\n`;
  }
}

css += '}\n';

fs.writeFileSync(path.join(__dirname, '../src/styles/tokens.css'), css);
console.log('Generated src/styles/tokens.css');
