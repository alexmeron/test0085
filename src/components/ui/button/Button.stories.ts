import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Botón de acción. Mapeado 1:1 al componente **Button** de Figma. Estilizado con **CSS Modules** y **CSS Variables** de Figma.

🔗 **[Ver en Figma](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4031-1255)**

---

### 📐 Layout & Sizing

| Propiedad | Tamaño | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|---|
| **Height** | sm | \`sizing/sizing-9\` | \`--sizing-9\` | 24px |
| | md | \`sizing/sizing-10\` | \`--sizing-10\` | 32px |
| | lg | \`sizing/sizing-11\` | \`--sizing-11\` | 40px |
| **Padding Horizontal** | sm | \`spacing/spacing-5\` | \`--spacing-5\` | 8px |
| | md | \`spacing/spacing-5\` | \`--spacing-5\` | 8px |
| | lg | \`spacing/spacing-6\` | \`--spacing-6\` | 12px |
| **Padding Vertical** | sm | \`spacing/spacing-3\` | \`--spacing-3\` | 4px |
| | md | \`spacing/spacing-4\` | \`--spacing-4\` | 6px |
| | lg | \`spacing/spacing-5-5\` | \`--spacing-5-5\` | 10px |
| **Gap** | todos | \`spacing/spacing-3\` | \`--spacing-3\` | 4px |

---

### ⬛ Shape

| Propiedad | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|
| **Border Radius** | \`radius/radius-lg\` | \`--radius-lg\` | 8px |

---

### 🔤 Typography

| Propiedad | Tamaño | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|---|
| **Font Family** | todos | \`font-family/body\` | \`--font-family-body\` | "Inter", sans-serif |
| **Font Weight** | todos | \`font-weight/regular\` | \`--font-weight-regular\` | 400 |
| **Font Size** | sm | \`font-size/caption/big\` | \`--font-size-caption-big\` | 12px |
| | md, lg | \`font-size/text/small\` | \`--font-size-text-small\` | 14px |
| **Line Height** | sm | \`line-height/leading-16\` | \`--leading-16\` | 16px |
| | md, lg | \`line-height/leading-20\` | \`--leading-20\` | 20px |

---

### 🎨 Colors & States

| Variante | Estado | Propiedad | Token / Figma Variable | CSS Variable |
|---|---|---|---|---|
| **primary** | Default | Background | \`color/brand/solid/default\` | \`--color-brand-solid-default\` |
| | | Text / Icon | \`color/brand/text/on-solid\` | \`--color-brand-text-on-solid\` |
| | Hover | Background | \`color/brand/solid/hover\` | \`--color-brand-solid-hover\` |
| | Pressed | Background | \`color/brand/solid/pressed\` | \`--color-brand-solid-pressed\` |
| **secondary** | Default | Background | \`color/secondary/solid/default\` | \`--color-secondary-solid-default\` |
| | | Text / Icon | \`color/secondary/text/on-solid\` | \`--color-secondary-text-on-solid\` |
| | Hover | Background | \`color/secondary/solid/hover\` | \`--color-secondary-solid-hover\` |
| | Pressed | Background | \`color/secondary/solid/pressed\` | \`--color-secondary-solid-pressed\` |
| **tertiary** | Default | Background | \`color/subtle/solid/default\` | \`--color-subtle-solid-default\` |
| | | Text / Icon | \`color/subtle/text/on-solid\` | \`--color-subtle-text-on-solid\` |
| | Hover | Background | \`color/subtle/solid/hover\` | \`--color-subtle-solid-hover\` |
| | Pressed | Background | \`color/subtle/solid/pressed\` | \`--color-subtle-solid-pressed\` |
| **danger** | Default | Background | \`color/destructive/solid/default\` | \`--color-destructive-solid-default\` |
| | | Text / Icon | \`color/destructive/text/on-solid\` | \`--color-destructive-text-on-solid\` |
| | Hover | Background | \`color/destructive/solid/hover\` | \`--color-destructive-solid-hover\` |
| | Pressed | Background | \`color/destructive/solid/pressed\` | \`--color-destructive-solid-pressed\` |
| **outlined** | Default | Background | transparent | transparent |
| | | Border | \`color/subtle/border/default\` | \`--color-subtle-border-default\` |
| | | Text / Icon | \`color/subtle/text/on-solid\` | \`--color-subtle-text-on-solid\` |
| | Hover | Background | \`color/subtle/solid/hover\` | \`--color-subtle-solid-hover\` |
| | Pressed | Background | \`color/subtle/solid/pressed\` | \`--color-subtle-solid-pressed\` |
| **ghost** | Default | Background | transparent | transparent |
| | | Text / Icon | \`color/subtle/text/on-solid\` | \`--color-subtle-text-on-solid\` |
| | Hover | Background | \`color/subtle/solid/hover\` | \`--color-subtle-solid-hover\` |
| | Pressed | Background | \`color/subtle/solid/pressed\` | \`--color-subtle-solid-pressed\` |
| **on-inverse** | Default | Background | \`color/surface/default\` | \`--color-surface-default\` |
| | | Text / Icon | \`color/text/primary\` | \`--color-text-primary\` |
| | Hover | Background | \`color/surface/subtle\` | \`--color-surface-subtle\` |
| | Pressed | Background | \`color/surface/muted\` | \`--color-surface-muted\` |
| **todos** | Focus | Ring / Outline | \`color/border/focus\` | \`--color-border-focus\` |
| **todos** | Disabled | Opacity | \`Opacity/disabled\` | 0.5 |

---

### 🔘 Icons
Los iconos por defecto en Figma corresponden a \`Media/Image_01\` (Placeholder).

| Propiedad / Ubicación | Tamaño | Icono por Defecto (Figma) | Token / CSS Variable | Valor |
|---|---|---|---|---|
| **leading-icon** | sm, md | \`Media/Image_01\` | \`sizing/sizing-7\` (\`--sizing-7\`) | 16×16px |
| | lg | \`Media/Image_01\` | \`sizing/sizing-8\` (\`--sizing-8\`) | 20×20px |
| **trailing-icon** | sm, md | \`Media/Image_01\` | \`sizing/sizing-7\` (\`--sizing-7\`) | 16×16px |
| | lg | \`Media/Image_01\` | \`sizing/sizing-8\` (\`--sizing-8\`) | 20×20px |
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger', 'outlined', 'ghost', 'on-inverse'],
      description: 'Figma prop: **variant**',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Figma prop: **size**',
    },
    disabled: {
      control: 'boolean',
      description: 'Figma prop: **state** = disabled',
    },
    leadingIcon: {
      control: 'boolean',
      description: 'Figma prop: **leading-icon**',
    },
    trailingIcon: {
      control: 'boolean',
      description: 'Figma prop: **trailing-icon**',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    leadingIcon: false,
    trailingIcon: false,
  },
  render: (args) => ({
    components: { Button },
    setup() { return { args } },
    template: '<Button v-bind="args">Button</Button>',
  }),
}

export default meta
type Story = StoryObj<typeof Button>

// ─── Variants ───────────────────────────────────────────────────────────────

export const Primary: Story = { args: { variant: 'primary' } }
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Tertiary: Story = { args: { variant: 'tertiary' } }
export const Danger: Story = { args: { variant: 'danger' } }
export const Outlined: Story = { args: { variant: 'outlined' } }
export const Ghost: Story = { args: { variant: 'ghost' } }
export const OnInverse: Story = {
  args: { variant: 'on-inverse' },
  parameters: { backgrounds: { default: 'dark' } },
}

// ─── Sizes ──────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: (args) => ({
    components: { Button },
    setup() { return { args } },
    template: `
      <div style="display: flex; align-items: center; gap: var(--spacing-7);">
        <Button v-bind="args" size="sm">Small</Button>
        <Button v-bind="args" size="md">Medium</Button>
        <Button v-bind="args" size="lg">Large</Button>
      </div>
    `,
  }),
}

// ─── Icons ──────────────────────────────────────────────────────────────────

export const WithLeadingIcon: Story = { args: { leadingIcon: true } }
export const WithTrailingIcon: Story = { args: { trailingIcon: true } }
export const WithBothIcons: Story = { args: { leadingIcon: true, trailingIcon: true } }

// ─── States ─────────────────────────────────────────────────────────────────

export const Disabled: Story = { args: { disabled: true } }
