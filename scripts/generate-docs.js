import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawData = JSON.parse(fs.readFileSync(path.join(__dirname, '../tokens/figma-raw-tokens.json'), 'utf8'));

const cssVarName = (name) => '--' + name.replace(/\//g, '-').replace(/\s+/g, '-').toLowerCase();

const collections = {};
rawData.variableCollections.forEach(c => {
  collections[c.id] = c.name;
});

const colors = { primitive: {}, semantic: {} };
const typography = { family: [], size: [], weight: [], lineheight: [] };
const spacing = [];
const radius = [];

for (const v of rawData.variables) {
  if (!v.resolvedValuesByMode) continue;
  
  const modeKey = Object.keys(v.resolvedValuesByMode)[0];
  const resolved = v.resolvedValuesByMode[modeKey];
  if (!resolved || resolved.value === undefined) continue;

  const parts = v.name.split('/');
  const cssVar = cssVarName(v.name);
  const collectionName = collections[v.variableCollectionId] || '';
  
  if (parts[0] === 'color') {
    const isSemantic = collectionName.toLowerCase().includes('semantic');
    const group = parts[1];
    const subName = parts.slice(2).join('-');
    
    const target = isSemantic ? colors.semantic : colors.primitive;
    if (!target[group]) target[group] = [];
    target[group].push({ name: subName || group, cssVar, fullName: v.name });
  } else if (parts[0] === 'spacing') {
    spacing.push({ name: v.name, cssVar, value: resolved.value });
  } else if (parts[0] === 'radius') {
    radius.push({ name: v.name, cssVar, value: resolved.value });
  } else if (parts[0] === 'font-family') {
    typography.family.push({ name: v.name, cssVar, value: resolved.value });
  } else if (parts[0] === 'font-size') {
    typography.size.push({ name: v.name, cssVar, value: resolved.value });
  } else if (parts[0] === 'font-weight') {
    typography.weight.push({ name: v.name, cssVar, value: resolved.value });
  } else if (parts[0] === 'line-height') {
    typography.lineheight.push({ name: v.name, cssVar, value: resolved.value });
  }
}

const tableStyles = `{\`
.table-preview { border-collapse: collapse; width: 100%; margin-top: 1rem; margin-bottom: 3rem; }
.table-preview th, .table-preview td { border: 1px solid var(--color-border-default, #e5e7eb); padding: 12px; text-align: left; }
.table-preview th { background: var(--color-surface-subtle, #f9fafb); font-weight: bold; }
.copy-btn { 
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--color-surface-subtle, #f3f4f6); 
  border: 1px solid var(--color-border-default, #e5e7eb); 
  border-radius: 4px; 
  padding: 4px 8px; 
  cursor: pointer; 
  font-family: monospace;
  font-size: 10px !important;
  color: var(--color-brand-text-light, #111827);
  transition: all 0.2s;
}
.copy-btn:hover { background: var(--color-brand-surface-subtle, #dbeafe); border-color: var(--color-brand-solid-default, #3b82f6); color: var(--color-brand-solid-default, #3b82f6); }
.copy-btn:active { background: var(--color-brand-solid-default, #3b82f6); color: white; }
.copy-btn svg { width: 14px; height: 14px; }
.copy-btn span { font-size: 10px !important; line-height: 1; }
\`}`;

const copyIconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;

const makeCopyBtn = (cssVar) => `<button className="copy-btn" onClick={(e) => copyText(e, 'var(${cssVar})')}>${copyIconSvg}<span>var(${cssVar})</span></button>`;

let commonMdxHeader = `import { Meta } from '@storybook/addon-docs/blocks';\n\n<style>${tableStyles}</style>\n\nexport const copyText = (e, text) => {
  navigator.clipboard.writeText(text);
  const span = e.currentTarget.querySelector('span');
  if (!span) return;
  const originalText = span.innerText;
  span.innerText = 'Copied!';
  setTimeout(() => { span.innerText = originalText; }, 1000);
}\n\n`;

// GENERATE COLORS
let colorsMdx = commonMdxHeader.replace('<style>', '<Meta title="Foundations/Colors" />\n\n<style>');
colorsMdx += `# Semantic Colors\n\n`;

const buildColorTable = (title, items) => {
  if (!items.length) return '';
  let str = `### ${title}\n<table className="table-preview">\n  <thead><tr><th>Preview</th><th>Token Name</th><th>CSS Variable</th></tr></thead>\n  <tbody>\n`;
  for (const item of items) {
    str += `    <tr>
      <td style={{ width: '80px' }}><div style={{ background: 'var(${item.cssVar})', width: '48px', height: '48px', borderRadius: '4px', border: '1px solid var(--color-border-default, #e5e7eb)', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)' }}></div></td>
      <td style={{ fontWeight: '500', textTransform: 'capitalize' }}>${item.name}</td>
      <td>${makeCopyBtn(item.cssVar)}</td>
    </tr>\n`;
  }
  return str + `  </tbody>\n</table>\n\n`;
};

for (const [group, items] of Object.entries(colors.semantic)) {
  colorsMdx += buildColorTable(group.charAt(0).toUpperCase() + group.slice(1), items);
}

colorsMdx += `\n# Primitive Colors\n\n`;
for (const [group, items] of Object.entries(colors.primitive)) {
  colorsMdx += buildColorTable(group.charAt(0).toUpperCase() + group.slice(1), items);
}

// GENERATE TYPOGRAPHY
let typoMdx = commonMdxHeader.replace('<style>', '<Meta title="Foundations/Typography" />\n\n<style>');
typoMdx += `# Typography\n\n`;

const buildTypoTable = (title, items, isSize, isWeight, isLineHeight, isFamily) => {
  if (!items.length) return '';
  let str = `## ${title}\n<table className="table-preview">\n  <thead><tr><th>Token Name</th><th>CSS Variable</th><th>Value</th><th>Preview</th></tr></thead>\n  <tbody>\n`;
  for (const t of items) {
    const previewStyle = `fontFamily: ${isFamily ? "'var(" + t.cssVar + ")'" : "'Inter, sans-serif'"}, fontSize: ${isSize ? "'var(" + t.cssVar + ")'" : "'16px'"}, fontWeight: ${isWeight ? "'var(" + t.cssVar + ")'" : "'normal'"}, lineHeight: ${isLineHeight ? "'var(" + t.cssVar + ")'" : "'normal'"}`;
    str += `    <tr>
      <td><code>${t.name}</code></td>
      <td>${makeCopyBtn(t.cssVar)}</td>
      <td>${t.value}</td>
      <td><div style={{ ${previewStyle} }}>Sphinx of black quartz, judge my vow</div></td>
    </tr>\n`;
  }
  return str + `  </tbody>\n</table>\n\n`;
};

typoMdx += buildTypoTable('Font Family', typography.family, false, false, false, true);
typography.size.sort((a,b) => parseFloat(a.value) - parseFloat(b.value));
typoMdx += buildTypoTable('Font Size', typography.size, true, false, false, false);
typoMdx += buildTypoTable('Font Weight', typography.weight, false, true, false, false);
typography.lineheight.sort((a,b) => parseFloat(a.value) - parseFloat(b.value));
typoMdx += buildTypoTable('Line Height', typography.lineheight, false, false, true, false);

// GENERATE SPACING
let spacingMdx = commonMdxHeader.replace('<style>', '<Meta title="Foundations/Spacing" />\n\n<style>');
spacingMdx += `# Spacing\n\n`;
spacingMdx += `<table className="table-preview">\n  <thead><tr><th>Token Name</th><th>CSS Variable</th><th>Value</th><th>Preview</th></tr></thead>\n  <tbody>\n`;
spacing.sort((a,b) => parseFloat(a.value) - parseFloat(b.value));
for (const s of spacing) {
  spacingMdx += `    <tr>
      <td><code>${s.name}</code></td>
      <td>${makeCopyBtn(s.cssVar)}</td>
      <td>${s.value}px</td>
      <td><div style={{ background: 'var(--color-brand-solid-default, #3b82f6)', height: '16px', width: 'var(${s.cssVar})', borderRadius: '4px' }}></div></td>
    </tr>\n`;
}
spacingMdx += `  </tbody>\n</table>\n`;

// GENERATE RADIUS
let radiusMdx = commonMdxHeader.replace('<style>', '<Meta title="Foundations/Radius" />\n\n<style>');
radiusMdx += `# Border Radius\n\n`;
radiusMdx += `<table className="table-preview">\n  <thead><tr><th>Token Name</th><th>CSS Variable</th><th>Value</th><th>Preview</th></tr></thead>\n  <tbody>\n`;
radius.sort((a,b) => parseFloat(a.value) - parseFloat(b.value));
for (const r of radius) {
  radiusMdx += `    <tr>
      <td><code>${r.name}</code></td>
      <td>${makeCopyBtn(r.cssVar)}</td>
      <td>${r.value}px</td>
      <td><div style={{ background: 'var(--color-brand-solid-default, #3b82f6)', width: '64px', height: '64px', borderRadius: 'var(${r.cssVar})' }}></div></td>
    </tr>\n`;
}
radiusMdx += `  </tbody>\n</table>\n`;

fs.writeFileSync(path.join(__dirname, '../src/stories/Foundations/Colors.mdx'), colorsMdx);
fs.writeFileSync(path.join(__dirname, '../src/stories/Foundations/Typography.mdx'), typoMdx);
fs.writeFileSync(path.join(__dirname, '../src/stories/Foundations/Spacing.mdx'), spacingMdx);
fs.writeFileSync(path.join(__dirname, '../src/stories/Foundations/Radius.mdx'), radiusMdx);
console.log("Generated Foundation MDX files with tables for colors.");

// GENERATE ELEVATIONS (SHADOWS)
const shadowsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../tokens/shadows.json'), 'utf8'));
let shadowsMdx = commonMdxHeader.replace('<style>', '<Meta title="Foundations/Elevations" />\n\n<style>');
shadowsMdx += `# Elevations (Shadows)\n\n`;
shadowsMdx += `Figma API currently does not support exporting Effect Styles as Local Variables. These shadows are sourced from \`tokens/shadows.json\`.\n\n`;
shadowsMdx += `<table className="table-preview">\n  <thead><tr><th>Token Name</th><th>CSS Variable</th><th>Value</th><th>Preview</th></tr></thead>\n  <tbody>\n`;
for (const s of shadowsData.shadows) {
  shadowsMdx += `    <tr>
      <td><code>${s.name}</code></td>
      <td>${makeCopyBtn(s.cssVar)}</td>
      <td>${s.value}</td>
      <td style={{ padding: '32px' }}><div style={{ background: 'var(--color-surface-default, white)', height: '64px', width: '64px', borderRadius: '8px', boxShadow: 'var(${s.cssVar})' }}></div></td>
    </tr>\n`;
}
shadowsMdx += `  </tbody>\n</table>\n`;

fs.writeFileSync(path.join(__dirname, '../src/stories/Foundations/Elevations.mdx'), shadowsMdx);
console.log("Generated Elevations MDX file.");
