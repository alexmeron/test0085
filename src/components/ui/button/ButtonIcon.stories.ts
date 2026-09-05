import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonIcon from './ButtonIcon.vue'
import { SearchIcon } from '../icon'

const meta: Meta<typeof ButtonIcon> = {
  title: 'Components/Button-icon',
  component: ButtonIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Botón de icono único (sin label). Mapeado 1:1 al componente **Button-icon** de Figma. Estilizado con **CSS Modules** y **CSS Variables** de Figma.

🔗 **[Ver en Figma](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4031-1331)**

---

### 📐 Layout & Sizing

| Propiedad | Tamaño | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|---|
| **Height / Width** | sm | \`sizing/sizing-9\` | \`--sizing-9\` | 24×24px |
| | md | \`sizing/sizing-10\` | \`--sizing-10\` | 32×32px |
| | lg | \`sizing/sizing-11\` | \`--sizing-11\` | 40×40px |
| **Padding** (todos) | sm | \`spacing/spacing-3\` | \`--spacing-3\` | 4px |
| | md | \`spacing/spacing-5\` | \`--spacing-5\` | 8px |
| | lg | \`spacing/spacing-5-5\` | \`--spacing-5-5\` | 10px |

---

### ⬛ Shape

| Propiedad | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|
| **Border Radius** | \`radius/radius-lg\` | \`--radius-lg\` | 8px |

---

### 🎨 Colors & States

| Variante | Estado | Propiedad | Token / Figma Variable | CSS Variable |
|---|---|---|---|---|
| **primary** | Default | Background | \`color/brand/solid/default\` | \`--color-brand-solid-default\` |
| | | Icon | \`color/brand/text/on-solid\` | \`--color-brand-text-on-solid\` |
| | Hover | Background | \`color/brand/solid/hover\` | \`--color-brand-solid-hover\` |
| | Pressed | Background | \`color/brand/solid/pressed\` | \`--color-brand-solid-pressed\` |
| **secondary** | Default | Background | \`color/secondary/solid/default\` | \`--color-secondary-solid-default\` |
| | | Icon | \`color/secondary/text/on-solid\` | \`--color-secondary-text-on-solid\` |
| | Hover | Background | \`color/secondary/solid/hover\` | \`--color-secondary-solid-hover\` |
| | Pressed | Background | \`color/secondary/solid/pressed\` | \`--color-secondary-solid-pressed\` |
| **tertiary** | Default | Background | \`color/subtle/solid/default\` | \`--color-subtle-solid-default\` |
| | | Icon | \`color/subtle/text/on-solid\` | \`--color-subtle-text-on-solid\` |
| | Hover | Background | \`color/subtle/solid/hover\` | \`--color-subtle-solid-hover\` |
| | Pressed | Background | \`color/subtle/solid/pressed\` | \`--color-subtle-solid-pressed\` |
| **danger** | Default | Background | \`color/destructive/solid/default\` | \`--color-destructive-solid-default\` |
| | | Icon | \`color/destructive/text/on-solid\` | \`--color-destructive-text-on-solid\` |
| | Hover | Background | \`color/destructive/solid/hover\` | \`--color-destructive-solid-hover\` |
| | Pressed | Background | \`color/destructive/solid/pressed\` | \`--color-destructive-solid-pressed\` |
| **outlined** | Default | Background | transparent | transparent |
| | | Border | \`color/subtle/border/default\` | \`--color-subtle-border-default\` |
| | | Icon | \`color/subtle/text/on-solid\` | \`--color-subtle-text-on-solid\` |
| | Hover | Background | \`color/subtle/solid/hover\` | \`--color-subtle-solid-hover\` |
| | Pressed | Background | \`color/subtle/solid/pressed\` | \`--color-subtle-solid-pressed\` |
| **ghost** | Default | Background | transparent | transparent |
| | | Icon | \`color/subtle/text/on-solid\` | \`--color-subtle-text-on-solid\` |
| | Hover | Background | \`color/subtle/solid/hover\` | \`--color-subtle-solid-hover\` |
| | Pressed | Background | \`color/subtle/solid/pressed\` | \`--color-subtle-solid-pressed\` |
| **on-inverse** | Default | Background | \`color/secondary/solid/default\` | \`--color-secondary-solid-default\` |
| | | Icon | \`color/secondary/text/on-solid\` | \`--color-secondary-text-on-solid\` |
| | Hover | Background | \`color/secondary/solid/hover\` | \`--color-secondary-solid-hover\` |
| | Pressed | Background | \`color/secondary/solid/pressed\` | \`--color-secondary-solid-pressed\` |
| **todos** | Focus | Ring / Outline | \`color/border/focus\` | \`--color-border-focus\` |
| **todos** | Disabled | Opacity | \`Opacity/disabled\` | 0.5 |

---

### 🔘 Icons

| Tamaño Contenedor | Padding | Área Neta Icono | Token de Icono Equivalente |
|---|---|---|---|
| sm (24×24px) | 4px | 16×16px | \`sizing/sizing-7\` |
| md (32×32px) | 8px | 16×16px | \`sizing/sizing-7\` |
| lg (40×40px) | 10px | 20×20px | \`sizing/sizing-8\` |
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
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    components: { ButtonIcon, SearchIcon },
    setup() { return { args } },
    template: `<ButtonIcon v-bind="args"><SearchIcon style="width: 100%; height: 100%;" /></ButtonIcon>`,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

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
    components: { ButtonIcon, SearchIcon },
    setup() { return { args } },
    template: `
      <div style="display: flex; align-items: center; gap: var(--spacing-7);">
        <ButtonIcon v-bind="args" size="sm"><SearchIcon style="width: 100%; height: 100%;" /></ButtonIcon>
        <ButtonIcon v-bind="args" size="md"><SearchIcon style="width: 100%; height: 100%;" /></ButtonIcon>
        <ButtonIcon v-bind="args" size="lg"><SearchIcon style="width: 100%; height: 100%;" /></ButtonIcon>
      </div>
    `,
  }),
}

// ─── States ─────────────────────────────────────────────────────────────────

export const Disabled: Story = { args: { disabled: true } }
