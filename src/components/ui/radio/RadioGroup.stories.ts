import type { Meta, StoryObj } from '@storybook/vue3'
import RadioGroup from './RadioGroup.vue'
import RadioGroupItem from './RadioGroupItem.vue'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente **Radiobutton** basado en Radix Vue y Figma Design Tokens. Estilizado con **CSS Modules** y **CSS Variables**.

---

### 📐 Layout & Sizing

| Propiedad | Tamaño | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|---|
| **Width / Height** | sm | \`Size/size-formControll-sm\` | *Missing token* | 14×14px |
| | md | \`Size/size-formControll-md\` / \`sizing/7\` | \`--sizing-7\` | 16×16px |
| | lg | \`Size/size-formControll-lg\` / \`sizing/8\` | \`--sizing-8\` | 20×20px |
| **Gap (Grupo)** | todos | \`spacing/spacing-3\` | \`--spacing-3\` | 4px |

---

### ⬛ Shape

| Propiedad | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|
| **Border Radius** | \`radius/full\` | \`--radius-full\` | 999px (circular) |

---

### 🎨 Colors & States

| Variante | Estado | Propiedad | Token / Figma Variable | CSS Variable |
|---|---|---|---|---|
| **todos** | Unchecked Default | Background | \`color/surface/default\` | \`--color-surface-default\` |
| | | Border | \`color/border/strong\` | \`--color-border-strong\` |
| | Unchecked Hover | Border | \`color/border/strong\` | \`--color-border-strong\` |
| **primary** | Checked Default | Border | \`color/brand/solid/default\` | \`--color-brand-solid-default\` |
| | | Dot Fill | \`color/brand/solid/default\` | \`--color-brand-solid-default\` |
| | Checked Hover | Border | \`color/brand/solid/hover\` | \`--color-brand-solid-hover\` |
| | | Dot Fill | \`color/brand/solid/hover\` | \`--color-brand-solid-hover\` |
| **secondary** | Checked Default | Border | \`color/secondary/solid/default\` | \`--color-secondary-solid-default\` |
| | | Dot Fill | \`color/secondary/solid/default\` | \`--color-secondary-solid-default\` |
| | Checked Hover | Border | \`color/secondary/solid/hover\` | \`--color-secondary-solid-hover\` |
| | | Dot Fill | \`color/secondary/solid/hover\` | \`--color-secondary-solid-hover\` |
| **todos** | Focus | Ring / Outline | \`color/border/focus\` | \`--color-border-focus\` |
| **todos** | Disabled | Opacity | \`Opacity/disabled\` | 0.5 |

---

### 🔘 Indicator (Dot)

| Tamaño Contenedor | Diámetro Punto Interior (Dot) |
|---|---|
| sm (14×14px) | 6×6px |
| md (16×16px) | 7×7px |
| lg (20×20px) | 9×9px |
        `,
      },
    },
  },
  argTypes: {
    disabled: { control: 'boolean', description: 'Figma prop: **State** = Disabled' },
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

// ─── Variants ───────────────────────────────────────────────────────────────

export const Primary: Story = {
  render: (args) => ({
    components: { RadioGroup, RadioGroupItem },
    setup() { return { args } },
    template: `
      <RadioGroup v-bind="args" default-value="opt1" style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <RadioGroupItem id="p1" value="opt1" variant="primary" />
          <label for="p1" style="font-size: var(--font-size-text-small); font-family: var(--font-family-body); cursor: pointer;">Option 1 (Selected)</label>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <RadioGroupItem id="p2" value="opt2" variant="primary" />
          <label for="p2" style="font-size: var(--font-size-text-small); font-family: var(--font-family-body); cursor: pointer;">Option 2</label>
        </div>
      </RadioGroup>
    `,
  }),
}

export const Secondary: Story = {
  render: (args) => ({
    components: { RadioGroup, RadioGroupItem },
    setup() { return { args } },
    template: `
      <RadioGroup v-bind="args" default-value="opt1" style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <RadioGroupItem id="s1" value="opt1" variant="secondary" />
          <label for="s1" style="font-size: var(--font-size-text-small); font-family: var(--font-family-body); cursor: pointer;">Secondary Option 1 (Selected)</label>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <RadioGroupItem id="s2" value="opt2" variant="secondary" />
          <label for="s2" style="font-size: var(--font-size-text-small); font-family: var(--font-family-body); cursor: pointer;">Secondary Option 2</label>
        </div>
      </RadioGroup>
    `,
  }),
}

// ─── Sizes ──────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: (args) => ({
    components: { RadioGroup, RadioGroupItem },
    setup() { return { args } },
    template: `
      <div style="display: flex; align-items: center; gap: 32px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <RadioGroup default-value="sm-opt">
            <RadioGroupItem id="r-sm" value="sm-opt" size="sm" />
          </RadioGroup>
          <label for="r-sm" style="font-size: var(--font-size-caption-big); font-family: var(--font-family-body);">Small (14px / Dot 6px)</label>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <RadioGroup default-value="md-opt">
            <RadioGroupItem id="r-md" value="md-opt" size="md" />
          </RadioGroup>
          <label for="r-md" style="font-size: var(--font-size-text-small); font-family: var(--font-family-body);">Medium (16px / Dot 7px)</label>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <RadioGroup default-value="lg-opt">
            <RadioGroupItem id="r-lg" value="lg-opt" size="lg" />
          </RadioGroup>
          <label for="r-lg" style="font-size: var(--font-size-text-small); font-family: var(--font-family-body);">Large (20px / Dot 9px)</label>
        </div>
      </div>
    `,
  }),
}

// ─── States ─────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: (args) => ({
    components: { RadioGroup, RadioGroupItem },
    setup() { return { args } },
    template: `
      <div style="display: flex; align-items: center; gap: 24px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <RadioGroup>
            <RadioGroupItem id="d-un" value="val1" disabled />
          </RadioGroup>
          <label for="d-un" style="font-size: var(--font-size-text-small); color: var(--color-text-disabled); font-family: var(--font-family-body);">Unchecked Disabled</label>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <RadioGroup default-value="val2">
            <RadioGroupItem id="d-chk" value="val2" disabled />
          </RadioGroup>
          <label for="d-chk" style="font-size: var(--font-size-text-small); color: var(--color-text-disabled); font-family: var(--font-family-body);">Checked Disabled</label>
        </div>
      </div>
    `,
  }),
}
