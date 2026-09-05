import type { Meta, StoryObj } from '@storybook/vue3'
import Checkbox from './Checkbox.vue'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente **Checkbox** basado en Radix Vue y Figma Design Tokens. Estilizado con **CSS Modules** y **CSS Variables**.

---

### 📐 Layout & Sizing

| Propiedad | Tamaño | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|---|
| **Width / Height** | sm | *(sin token en proyecto)* | — | 14×14px |
| | md | \`sizing/7\` | \`--sizing-7\` | 16×16px |
| | lg | \`sizing/8\` | \`--sizing-8\` | 20×20px |

---

### ⬛ Shape

| Propiedad | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|
| **Border Radius** | \`radius/radius-sm\` | \`--radius-sm\` | 4px |

---

### 🎨 Colors & States

| Variante | Estado | Propiedad | Token / Figma Variable | CSS Variable |
|---|---|---|---|---|
| **todos** | Unchecked Default | Background | \`color/surface/default\` | \`--color-surface-default\` |
| | | Border | \`color/border/default\` | \`--color-border-default\` |
| | Unchecked Hover | Border | \`color/border/strong\` | \`--color-border-strong\` |
| **primary** | Checked Default | Background | \`color/brand/solid/default\` | \`--color-brand-solid-default\` |
| | | Border | \`color/brand/solid/default\` | \`--color-brand-solid-default\` |
| | | Icon | \`color/brand/text/on-solid\` | \`--color-brand-text-on-solid\` |
| | Checked Hover | Background | \`color/brand/solid/hover\` | \`--color-brand-solid-hover\` |
| | | Border | \`color/brand/solid/hover\` | \`--color-brand-solid-hover\` |
| **secondary** | Checked Default | Background | \`color/secondary/solid/default\` | \`--color-secondary-solid-default\` |
| | | Border | \`color/secondary/solid/default\` | \`--color-secondary-solid-default\` |
| | | Icon | \`color/secondary/text/on-solid\` | \`--color-secondary-text-on-solid\` |
| | Checked Hover | Background | \`color/secondary/solid/hover\` | \`--color-secondary-solid-hover\` |
| | | Border | \`color/secondary/solid/hover\` | \`--color-secondary-solid-hover\` |
| **todos** | Focus | Ring / Outline | \`color/border/focus\` | \`--color-border-focus\` |
| **todos** | Disabled | Opacity | \`Opacity/disabled\` | 0.5 |

---

### 🔘 Icons

| Tamaño Contenedor | Icono Check / Minus | Ancho Trazo |
|---|---|---|
| sm (14×14px) | 10×10px | 3px |
| md (16×16px) | 12×12px | 3px |
| lg (20×20px) | 14×14px | 2.5px |
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Figma prop: **Variant**',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Figma prop: **Size**',
    },
    checked: {
      control: 'select',
      options: [false, true, 'indeterminate'],
      description: 'Figma props: **Checked** y **Indeterminate**',
    },
    disabled: {
      control: 'boolean',
      description: 'Figma prop: **State** = Disabled',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    checked: true,
    disabled: false,
  },
  render: (args) => ({
    components: { Checkbox },
    setup() { return { args } },
    template: '<Checkbox v-bind="args" />',
  }),
}

export default meta
type Story = StoryObj<typeof Checkbox>

// ─── Variants ───────────────────────────────────────────────────────────────

export const Primary: Story = {
  args: { variant: 'primary', checked: true },
}

export const Secondary: Story = {
  args: { variant: 'secondary', checked: true },
}

// ─── Sizes ──────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() { return { args } },
    template: `
      <div style="display: flex; align-items: center; gap: 24px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <Checkbox v-bind="args" size="sm" id="c-sm" />
          <label for="c-sm" style="font-size: var(--font-size-caption-big); font-family: var(--font-family-body);">Small (14px)</label>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <Checkbox v-bind="args" size="md" id="c-md" />
          <label for="c-md" style="font-size: var(--font-size-text-small); font-family: var(--font-family-body);">Medium (16px)</label>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <Checkbox v-bind="args" size="lg" id="c-lg" />
          <label for="c-lg" style="font-size: var(--font-size-text-small); font-family: var(--font-family-body);">Large (20px)</label>
        </div>
      </div>
    `,
  }),
}

// ─── Checked / States ───────────────────────────────────────────────────────

export const Unchecked: Story = {
  args: { checked: false },
}

export const Checked: Story = {
  args: { checked: true },
}

export const Indeterminate: Story = {
  args: { checked: 'indeterminate' },
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() { return { args } },
    template: `
      <div style="display: flex; align-items: center; gap: 24px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <Checkbox v-bind="args" :checked="false" disabled id="d-un" />
          <label for="d-un" style="font-size: var(--font-size-text-small); color: var(--color-text-disabled); font-family: var(--font-family-body);">Unchecked Disabled</label>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <Checkbox v-bind="args" :checked="true" disabled id="d-chk" />
          <label for="d-chk" style="font-size: var(--font-size-text-small); color: var(--color-text-disabled); font-family: var(--font-family-body);">Checked Disabled</label>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <Checkbox v-bind="args" checked="indeterminate" disabled id="d-ind" />
          <label for="d-ind" style="font-size: var(--font-size-text-small); color: var(--color-text-disabled); font-family: var(--font-family-body);">Indeterminate Disabled</label>
        </div>
      </div>
    `,
  }),
}
