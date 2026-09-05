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

🔗 **[Ver en Figma](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4082-1902)**

---

### 📐 Layout & Sizing

| Propiedad | Tamaño | Figma Variable | CSS Variable | Valor |
|---|---|---|---|---|
| **Width / Height** | sm | \`sizing/size-6-5\` | \`--sizing-6-5\` | 14×14px |
| | md | \`sizing/sizing-7\` | \`--sizing-7\` | 16×16px |
| | lg | \`sizing/sizing-8\` | \`--sizing-8\` | 20×20px |

---

### ⬛ Shape

| Propiedad | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|
| **Border Radius** | \`radius/radius-sm\` | \`--radius-sm\` | 4px |
| **Focus Ring Radius** | \`radius/radius-md\` | \`--radius-md\` | 6px |

---

### 🎨 Colors & States

| Variante | Estado | Propiedad | Token / Figma Variable | CSS Variable |
|---|---|---|---|---|
| **todos** | Unchecked Default | Background | \`color/surface/default\` | \`--color-surface-default\` |
| | | Border | \`color/border/default\` | \`--color-border-default\` |
| | Unchecked Hover | Border | \`color/border/strong\` | \`--color-border-strong\` |
| | Focus | Ring (outline) | \`color/border/focus\` | \`--color-border-focus\` |
| | Disabled | Opacity | \`Opacity/disabled\` | 0.5 |
| **primary** | Checked Default | Background + Border | \`color/brand/solid/default\` | \`--color-brand-solid-default\` |
| | | Icon color | \`color/brand/text/on-solid\` | \`--color-brand-text-on-solid\` |
| | Checked Hover | Background + Border | \`color/brand/solid/hover\` | \`--color-brand-solid-hover\` |
| | Checked Focus | Background + Border | \`color/brand/solid/focus\` | \`--color-brand-solid-focus\` |
| | Checked Disabled | Background + Border | \`color/brand/solid-disabled\` | \`--color-brand-solid-disabled\` |
| **secondary** | Checked Default | Background + Border | \`color/secondary/solid/default\` | \`--color-secondary-solid-default\` |
| | | Icon color | \`color/secondary/text/on-solid\` | \`--color-secondary-text-on-solid\` |
| | Checked Hover | Background + Border | \`color/secondary/solid/hover\` | \`--color-secondary-solid-hover\` |
| | Checked Focus | Background + Border | \`color/secondary/solid/focus\` | \`--color-secondary-solid-focus\` |

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
      <div style="display: flex; align-items: center; gap: var(--spacing-9);">
        <div style="display: flex; align-items: center; gap: var(--spacing-5);">
          <Checkbox v-bind="args" size="sm" id="c-sm" />
          <label for="c-sm" style="font-size: var(--font-size-caption-big); font-family: var(--font-family-body);">Small (14px)</label>
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-5);">
          <Checkbox v-bind="args" size="md" id="c-md" />
          <label for="c-md" style="font-size: var(--font-size-text-small); font-family: var(--font-family-body);">Medium (16px)</label>
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-5);">
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
      <div style="display: flex; align-items: center; gap: var(--spacing-9);">
        <div style="display: flex; align-items: center; gap: var(--spacing-5);">
          <Checkbox v-bind="args" :checked="false" disabled id="d-un" />
          <label for="d-un" style="font-size: var(--font-size-text-small); color: var(--color-text-disabled); font-family: var(--font-family-body);">Unchecked Disabled</label>
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-5);">
          <Checkbox v-bind="args" :checked="true" disabled id="d-chk" />
          <label for="d-chk" style="font-size: var(--font-size-text-small); color: var(--color-text-disabled); font-family: var(--font-family-body);">Checked Disabled</label>
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-5);">
          <Checkbox v-bind="args" checked="indeterminate" disabled id="d-ind" />
          <label for="d-ind" style="font-size: var(--font-size-text-small); color: var(--color-text-disabled); font-family: var(--font-family-body);">Indeterminate Disabled</label>
        </div>
      </div>
    `,
  }),
}
