import json, re

with open('src/assets/figmaIcons.json', 'r', encoding='utf-8') as f:
    icons = json.load(f)

print(f'Loaded {len(icons)} icons')

by_cat = {}
for icon in icons:
    cat = icon.get('category', 'General')
    if not cat or cat == '':
        cat = 'General'
    if cat not in by_cat:
        by_cat[cat] = []
    by_cat[cat].append(icon)

def clean_svg_for_mdx(svg_str, width=24, height=24):
    s = re.sub(r'<\?xml[^>]*\?>', '', svg_str)
    s = re.sub(r'width="[^"]*"', f'width="{width}"', s, count=1)
    s = re.sub(r'height="[^"]*"', f'height="{height}"', s, count=1)
    s = re.sub(r'fill="#(?:[0-9a-fA-F]{3,6})"', 'fill="currentColor"', s)
    s = re.sub(r'stroke="#(?:[0-9a-fA-F]{3,6})"', 'stroke="currentColor"', s)
    return s.strip()

mdx_content = """import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Foundations/Icons" />

<style>{`
.table-preview { border-collapse: collapse; width: 100%; margin-top: 1rem; margin-bottom: 2.5rem; }
.table-preview th, .table-preview td { border: 1px solid var(--color-border-default, #e5e7eb); padding: 12px 16px; text-align: left; }
.table-preview th { background: var(--color-surface-subtle, #f9fafb); font-weight: 600; font-size: 14px; }
.table-preview td { font-size: 14px; }

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
  font-size: 11px !important;
  color: var(--color-brand-text-light, #111827);
  transition: all 0.2s;
}
.copy-btn:hover { background: var(--color-brand-surface-subtle, #dbeafe); border-color: var(--color-brand-solid-default, #3b82f6); color: var(--color-brand-solid-default, #3b82f6); }
.copy-btn:active { background: var(--color-brand-solid-default, #3b82f6); color: white; }
.copy-btn svg { width: 14px; height: 14px; }
.copy-btn span { font-size: 11px !important; line-height: 1; }

.principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin: 1.5rem 0 2.5rem 0;
}
.principle-card {
  border: 1px solid var(--color-border-default, #e5e7eb);
  border-radius: 8px;
  padding: 18px;
  background: var(--color-surface-default, #ffffff);
}
.principle-card h4 {
  margin: 0 0 8px 0;
  color: var(--color-text-primary, #111827);
  font-size: 16px;
  font-weight: 600;
}
.principle-card p {
  margin: 0;
  color: var(--color-text-secondary, #4b5563);
  font-size: 13.5px;
  line-height: 1.55;
}

.category-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-primary, #111827);
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 8px;
}
.category-count {
  font-size: 12px;
  font-weight: normal;
  color: var(--color-text-secondary, #6b7280);
  background: var(--color-surface-subtle, #f3f4f6);
  padding: 2px 8px;
  border-radius: 9999px;
}

.icons-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
  gap: 12px;
  margin-bottom: 2rem;
}
.icon-grid-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14px 6px 10px;
  background: var(--color-surface-default, #ffffff);
  border: 1px solid var(--color-border-default, #e5e7eb);
  border-radius: 8px;
  gap: 8px;
  text-align: center;
  transition: all 0.15s ease;
}
.icon-grid-card:hover {
  border-color: var(--color-brand-solid-default, #3b82f6);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.icon-grid-card span {
  font-size: 11px;
  color: var(--color-text-primary, #111827);
  word-break: break-word;
  line-height: 1.3;
}
`}</style>

export const copyText = (e, text) => {
  navigator.clipboard.writeText(text);
  const span = e.currentTarget.querySelector('span');
  if (!span) return;
  const originalText = span.innerText;
  span.innerText = 'Copied!';
  setTimeout(() => { span.innerText = originalText; }, 1000);
}

# Foundations / Icons guidelines

🔗 **[Figma Foundations - Icons (node 14:1534)](https://www.figma.com/design/CF42I4tCscSnq4oiOSPgKP/Foundations?node-id=14-1534)**  
🔗 **[Figma Foundations - Icon Sizes (node 75:167)](https://www.figma.com/design/CF42I4tCscSnq4oiOSPgKP/Foundations?node-id=75-167)**  
🔗 **[Figma Foundations - Icon Library (node 46:5055)](https://www.figma.com/design/CF42I4tCscSnq4oiOSPgKP/Foundations?node-id=46-5055)**

---

## Why do we use size variants?

To maintain visual consistency, scalability, and a user-centered design approach, our design system does not allow arbitrary icon sizing. Instead, we use a system of predefined size variants that govern icon usage according to UI context.

---

## Key reasons

<div className="principles-grid">
  <div className="principle-card">
    <h4>Visual consistency</h4>
    <p>A system without controlled sizes leads to cluttered and inconsistent interfaces.
Variants ensure icons are properly aligned with other UI elements like buttons, inputs, and headings.</p>
  </div>
  <div className="principle-card">
    <h4>Design scalability</h4>
    <p>By limiting available sizes, we make it easier to adapt the design across platforms and resolutions without having to redesign icons individually.</p>
  </div>
  <div className="principle-card">
    <h4>Maintainability</h4>
    <p>Using variants simplifies UI maintenance and reviews by keeping all icons within a clear set of rules.
It also allows for automated visual testing and consistent theming adjustments (e.g., color changes, padding).</p>
  </div>
  <div className="principle-card">
    <h4>Accesibility</h4>
    <p>Predefined minimum sizes ensure that icons remain legible and functional even on small screens or in low-contrast situations.</p>
  </div>
  <div className="principle-card">
    <h4>Preventing misuse</h4>
    <p>Variants prevent the same icon from being used at inappropriate sizes, which could negatively impact usability or clarity.</p>
  </div>
</div>

---

## Example of defined variants (Figma Node 75:167)

<table className="table-preview">
  <thead>
    <tr>
      <th>Name</th>
      <th>Value</th>
      <th>CSS Token</th>
      <th>Primary use</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>2xs</strong></td>
      <td>12px</td>
      <td>
        <button className="copy-btn" onClick={(e) => copyText(e, 'var(--sizing-6)')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          <span>var(--sizing-6)</span>
        </button>
      </td>
      <td>Micro badges, tabs, compact indicators</td>
      <td>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', background: 'var(--color-surface-subtle, #f8fafc)', borderRadius: '6px', border: '1px solid var(--color-border-default, #e2e8f0)' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
        </div>
      </td>
    </tr>
    <tr>
      <td><strong>xs</strong></td>
      <td>16px</td>
      <td>
        <button className="copy-btn" onClick={(e) => copyText(e, 'var(--sizing-7)')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          <span>var(--sizing-7)</span>
        </button>
      </td>
      <td>Small labels, inline icons in text</td>
      <td>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', background: 'var(--color-surface-subtle, #f8fafc)', borderRadius: '6px', border: '1px solid var(--color-border-default, #e2e8f0)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
        </div>
      </td>
    </tr>
    <tr>
      <td><strong>sm</strong></td>
      <td>20px</td>
      <td>
        <button className="copy-btn" onClick={(e) => copyText(e, 'var(--sizing-8)')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          <span>var(--sizing-8)</span>
        </button>
      </td>
      <td>Icons in secondary buttons</td>
      <td>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', background: 'var(--color-surface-subtle, #f8fafc)', borderRadius: '6px', border: '1px solid var(--color-border-default, #e2e8f0)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
        </div>
      </td>
    </tr>
    <tr>
      <td><strong>md</strong></td>
      <td>24px</td>
      <td>
        <button className="copy-btn" onClick={(e) => copyText(e, 'var(--sizing-9)')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          <span>var(--sizing-9)</span>
        </button>
      </td>
      <td>Standard size, navigation, actions</td>
      <td>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', background: 'var(--color-surface-subtle, #f8fafc)', borderRadius: '6px', border: '1px solid var(--color-border-default, #e2e8f0)' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
        </div>
      </td>
    </tr>
    <tr>
      <td><strong>lg</strong></td>
      <td>32px</td>
      <td>
        <button className="copy-btn" onClick={(e) => copyText(e, 'var(--sizing-10)')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          <span>var(--sizing-10)</span>
        </button>
      </td>
      <td>Small illustrations, section headers</td>
      <td>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', background: 'var(--color-surface-subtle, #f8fafc)', borderRadius: '6px', border: '1px solid var(--color-border-default, #e2e8f0)' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
        </div>
      </td>
    </tr>
    <tr>
      <td><strong>xl</strong></td>
      <td>40px</td>
      <td>
        <button className="copy-btn" onClick={(e) => copyText(e, 'var(--sizing-11)')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          <span>var(--sizing-11)</span>
        </button>
      </td>
      <td>Highlighted or illustrative use cases</td>
      <td>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '52px', height: '52px', background: 'var(--color-surface-subtle, #f8fafc)', borderRadius: '6px', border: '1px solid var(--color-border-default, #e2e8f0)' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
        </div>
      </td>
    </tr>
  </tbody>
</table>

---

## Foundations / Icons / Library (456 Iconos - Node 46:5055)

"""

sorted_cats = sorted(by_cat.keys())
for cat in sorted_cats:
    cat_icons = by_cat[cat]
    mdx_content += f"""
<h3 className="category-title">
  {cat} <span className="category-count">{len(cat_icons)} iconos</span>
</h3>
<div className="icons-grid-container">
"""
    for icon in cat_icons:
        svg_code = clean_svg_for_mdx(icon['svg'], width=24, height=24)
        name = icon['name']
        mdx_content += f"""  <div className="icon-grid-card">
    {svg_code}
    <span>{name}</span>
  </div>
"""
    mdx_content += '</div>\n'

mdx_content += """
---

## icons/file-type (Node 740:343)

<table className="table-preview">
  <thead>
    <tr>
      <th>Variant type</th>
      <th>Badge / Icon</th>
      <th>Format Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>type=stl</code></td>
      <td><strong>.STL</strong></td>
      <td>3D CAD Model file</td>
    </tr>
    <tr>
      <td><code>type=pdf</code></td>
      <td><strong>.PDF</strong></td>
      <td>Portable Document Format</td>
    </tr>
    <tr>
      <td><code>type=doc</code></td>
      <td><strong>.DOC</strong></td>
      <td>Word Document</td>
    </tr>
    <tr>
      <td><code>type=dcm</code></td>
      <td><strong>.DCM</strong></td>
      <td>DICOM Medical Imaging</td>
    </tr>
    <tr>
      <td><code>type=empty</code></td>
      <td><strong>Empty</strong></td>
      <td>Generic file placeholder</td>
    </tr>
  </tbody>
</table>
"""

with open('src/stories/Foundations/Icons.mdx', 'w', encoding='utf-8') as f:
    f.write(mdx_content)

print('Generated src/stories/Foundations/Icons.mdx successfully!')
