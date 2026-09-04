import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawData = JSON.parse(fs.readFileSync(path.join(__dirname, '../tokens/figma-raw-tokens.json'), 'utf8'));

const cssVarName = (name) => 'var(--' + name.replace(/\//g, '-').replace(/\s+/g, '-').toLowerCase() + ')';

const theme = {
  colors: {},
  spacing: {},
  borderRadius: {},
  fontSize: {},
  fontWeight: {},
  fontFamily: {},
  lineHeight: {},
  boxShadow: {}
};

for (const v of rawData.variables) {
  const parts = v.name.split('/');
  const cssVar = cssVarName(v.name);
  
  if (parts[0] === 'color') {
    let current = theme.colors;
    for (let i = 1; i < parts.length - 1; i++) {
      if (!current[parts[i]]) current[parts[i]] = {};
      current = current[parts[i]];
    }
    current[parts[parts.length - 1]] = cssVar;
  } else if (parts[0] === 'spacing') {
    theme.spacing[parts[parts.length - 1]] = cssVar;
  } else if (parts[0] === 'radius') {
    theme.borderRadius[parts[parts.length - 1]] = cssVar;
  } else if (parts[0] === 'font-family') {
    theme.fontFamily[parts[parts.length - 1]] = cssVar;
  } else if (parts[0] === 'font-size') {
    theme.fontSize[parts[parts.length - 1]] = cssVar;
  } else if (parts[0] === 'font-weight') {
    theme.fontWeight[parts[parts.length - 1]] = cssVar;
  } else if (parts[0] === 'line-height') {
    theme.lineHeight[parts[parts.length - 1]] = cssVar;
  }
}

try {
  const shadowsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../tokens/shadows.json'), 'utf8'));
  shadowsData.shadows.forEach(s => {
    const key = s.name.split('/').pop();
    theme.boxShadow[key] = `var(${s.cssVar})`;
  });
} catch(e) {}

const output = `export const figmaTheme = ${JSON.stringify(theme, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, '../src/styles/tailwind-theme.js'), output);
console.log('Generated src/styles/tailwind-theme.js successfully with shadows mapped!');
