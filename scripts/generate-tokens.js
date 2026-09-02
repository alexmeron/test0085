import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawData = JSON.parse(fs.readFileSync(path.join(__dirname, '../tokens/figma-raw-tokens.json'), 'utf8'));

const groups = {
  colors: [],
  spacing: [],
  radius: [],
  typography: [],
  sizing: [],
  other: []
};

const cssVarName = (name) => '--' + name.replace(/\//g, '-').replace(/\s+/g, '-').toLowerCase();

const weightMap = {
  'thin': '100',
  'extralight': '200',
  'extra light': '200',
  'light': '300',
  'regular': '400',
  'normal': '400',
  'medium': '500',
  'semibold': '600',
  'semi bold': '600',
  'bold': '700',
  'extrabold': '800',
  'extra bold': '800',
  'black': '900'
};

for (const v of rawData.variables) {
  if (!v.resolvedValuesByMode) continue;
  
  const modeKey = Object.keys(v.resolvedValuesByMode)[0];
  const resolved = v.resolvedValuesByMode[modeKey];
  
  if (resolved && resolved.value !== undefined) {
    let val = resolved.value;
    
    if (resolved.aliasTo) {
      val = `var(${cssVarName(resolved.aliasTo)})`;
    } else {
      if (v.resolvedType === 'FLOAT') {
        val = val + 'px';
      } else if (v.resolvedType === 'STRING' && v.name.includes('font-weight')) {
        const lowerVal = String(val).toLowerCase();
        if (weightMap[lowerVal]) {
          val = weightMap[lowerVal];
        }
      }
    }
    
    const cssLine = `  ${cssVarName(v.name)}: ${val};`;
    
    if (v.name.startsWith('color/')) {
      groups.colors.push(cssLine);
    } else if (v.name.startsWith('spacing/')) {
      groups.spacing.push(cssLine);
    } else if (v.name.startsWith('radius/')) {
      groups.radius.push(cssLine);
    } else if (v.name.startsWith('font-') || v.name.startsWith('line-height/')) {
      groups.typography.push(cssLine);
    } else if (v.name.startsWith('sizing/')) {
      groups.sizing.push(cssLine);
    } else {
      groups.other.push(cssLine);
    }
  }
}

let css = ':root {\n';

if (groups.colors.length) {
  css += '\n  /* Colors */\n' + groups.colors.sort().join('\n') + '\n';
}
if (groups.typography.length) {
  css += '\n  /* Typography */\n' + groups.typography.sort().join('\n') + '\n';
}
if (groups.spacing.length) {
  css += '\n  /* Spacing */\n' + groups.spacing.sort().join('\n') + '\n';
}
if (groups.sizing.length) {
  css += '\n  /* Sizing */\n' + groups.sizing.sort().join('\n') + '\n';
}
if (groups.radius.length) {
  css += '\n  /* Radius */\n' + groups.radius.sort().join('\n') + '\n';
}
if (groups.other.length) {
  css += '\n  /* Other */\n' + groups.other.sort().join('\n') + '\n';
}

css += '}\n';

fs.writeFileSync(path.join(__dirname, '../src/styles/tokens.css'), css);
console.log('Generated sorted and grouped src/styles/tokens.css with aliases preserved');
