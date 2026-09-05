import type { Meta, StoryObj } from '@storybook/vue3'
import Radiobutton from './Radiobutton.vue'

const meta: Meta<typeof Radiobutton> = {
  title: 'Components/Radiobutton',
  component: Radiobutton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente **Radiobutton** basado en Figma Design Tokens. Estilizado con **CSS Modules** y **CSS Variables**.

🔗 **[Ver en Figma](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4461-2191)**

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
| **Border Radius** | \`radius/full\` | \`--radius-full\` | 999px (circular) |
| **Focus Ring Radius** | \`radius/full\` | \`--radius-full\` | 999px (circular) |

---

### 🎨 Colors & States

| Variante | Estado | Propiedad | Token / Figma Variable | CSS Variable |
|---|---|---|---|---|
| **todos** | Unchecked Default | Background | \`color/surface/default\` | \`--color-surface-default\` |
| | | Border | \`color/border/strong\` | \`--color-border-strong\` |
| | Unchecked Hover | Border | \`color/border/strong\` | \`--color-border-strong\` |
| | Unchecked Focus | Border | \`color/border/subtle\` | \`--color-border-subtle\` |
| | Focus Ring | Stroke | \`color/border/focus\` | \`--color-border-focus\` |
| | Disabled | Opacity | \`Opacity/disabled\` | 0.5 |
| **primary** | Checked Default | Border + Dot | \`color/brand/solid/default\` | \`--color-brand-solid-default\` |
| | Checked Hover | Border + Dot | \`color/brand/solid/hover\` | \`--color-brand-solid-hover\` |
| | Checked Disabled | Border + Dot | \`color/brand/solid-disabled\` | \`--color-brand-solid-disabled\` |
| **secondary** | Checked Default | Border + Dot | \`color/secondary/solid/default\` | \`--color-secondary-solid-default\` |
| | Checked Hover | Border + Dot | \`color/secondary/solid/hover\` | \`--color-secondary-solid-hover\` |
| | Checked Focus | Border + Dot | \`color/secondary/solid/focus\` | \`--color-secondary-solid-focus\` |
| | Checked Disabled | Border + Dot | \`color/secondary/solid/disabled\` | \`--color-secondary-solid-disabled\` |

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
      control: 'boolean',
      description: 'Figma prop: **Checked**',
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
    components: { Radiobutton },
    setup() { return { args } },
    template: '<Radiobutton v-bind="args" />',
  }),
}

export default meta
type Story = StoryObj<typeof Radiobutton>

// ─── Variants ───────────────────────────────────────────────────────────────

export const Primary: Story = {
  args: { variant: 'primary', checked: true },
}

export const Secondary: Story = {
  args: { variant: 'secondary', checked: true },
}

// ─── Sizes (agrupados en una sola story) ────────────────────────────────────

export const Sizes: Story = {
  render: (args) => ({
    components: { Radiobutton },
    setup() { return { args } },
    template: `
      <div style="display: flex; align-items: center; gap: var(--spacing-9);">
        <Radiobutton v-bind="args" size="sm" />
        <Radiobutton v-bind="args" size="md" />
        <Radiobutton v-bind="args" size="lg" />
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

export const Disabled: Story = {
  render: (args) => ({
    components: { Radiobutton },
    setup() { return { args } },
    template: `
      <div style="display: flex; align-items: center; gap: var(--spacing-9);">
        <Radiobutton v-bind="args" :checked="false" disabled />
        <Radiobutton v-bind="args" :checked="true" disabled />
      </div>
    `,
  }),
}
