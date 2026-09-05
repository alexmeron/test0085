import type { Meta, StoryObj } from '@storybook/vue3'
import Chip from './Chip.vue'

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente **Chip** (etiqueta o pill informativo) mapeado 1:1 al componente de Figma. Estilizado con **CSS Modules** y **CSS Variables**.

🔗 **[Ver en Figma](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4007-860)**

---

### 📐 Layout & Sizing

| Propiedad | Tamaño | Figma Variable | CSS Variable | Valor |
|---|---|---|---|---|
| **Height** | badge | \`sizing/sizing-8\` | \`--sizing-8\` | 20px |
| | xs | \`sizing/sizing-8\` | \`--sizing-8\` | 20px |
| | sm | \`sizing/sizing-9\` | \`--sizing-9\` | 24px |
| | md | \`sizing/sizing-10\` | \`--sizing-10\` | 32px |
| | lg | \`sizing/sizing-11\` | \`--sizing-11\` | 40px |
| **Padding Horizontal** | badge | \`spacing/spacing-3\` | \`--spacing-3\` | 4px |
| | xs, sm | \`spacing/spacing-5\` | \`--spacing-5\` | 8px |
| | md | \`spacing/spacing-5-5\` | \`--spacing-5-5\` | 10px |
| | lg | \`spacing/spacing-6\` | \`--spacing-6\` | 12px |
| **Padding Vertical** | xs, sm | \`spacing/spacing-3\` | \`--spacing-3\` | 4px |
| | md | \`spacing/spacing-4\` | \`--spacing-4\` | 6px |
| | lg | \`spacing/spacing-5\` | \`--spacing-5\` | 8px |

---

### ⬛ Shape

| Propiedad | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|
| **Border Radius** | \`radius/full\` | \`--radius-full\` | 999px |

---

### 🔤 Typography

| Propiedad | Tamaño | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|---|
| **Font Family** | todos | \`font-family/body\` | \`--font-family-body\` | "Inter", sans-serif |
| **Font Weight** | todos | \`font-weight/medium\` | \`--font-weight-medium\` | 500 |
| **Font Size** | badge, xs | \`font-size/caption/big\` | \`--font-size-caption-big\` | 12px |
| | sm, md | \`font-size/text/small\` | \`--font-size-text-small\` | 14px |
| | lg | \`font-size/text/medium\` | \`--font-size-text-medium\` | 16px |

---

### 🎨 Colors & States

| Estado (State) | Variante | Background | Border | Text |
|---|---|---|---|---|
| **destructive** | subtle | \`--color-destructive-surface-default\` | transparent | \`--color-destructive-text-default\` |
| | solid | \`--color-destructive-solid-default\` | transparent | \`--color-destructive-text-on-solid\` |
| | outline | transparent | \`--color-destructive-border-default\` | \`--color-destructive-text-default\` |
| | ghost | transparent | transparent | \`--color-destructive-text-default\` |
| **info** | subtle | \`--color-info-surface-default\` | transparent | \`--color-info-text-default\` |
| | solid | \`--color-info-solid-default\` | transparent | \`--color-info-text-on-solid\` |
| | outline | transparent | \`--color-info-border-default\` | \`--color-info-text-default\` |
| | ghost | transparent | transparent | \`--color-info-text-default\` |
| **ready** | subtle | \`--color-ready-surface-default\` | transparent | \`--color-ready-text-default\` |
| | solid | \`--color-ready-solid-default\` | transparent | \`--color-ready-text-on-solid\` |
| | outline | transparent | \`--color-ready-border-default\` | \`--color-ready-text-default\` |
| | ghost | transparent | transparent | \`--color-ready-text-default\` |
| **warning** | subtle | \`--color-warning-surface-default\` | transparent | \`--color-warning-text-default\` |
| | solid | \`--color-warning-solid-default\` | transparent | \`--color-warning-text-on-solid\` |
| | outline | transparent | \`--color-warning-border-default\` | \`--color-warning-text-default\` |
| | ghost | transparent | transparent | \`--color-warning-text-default\` |
| **success** | subtle | \`--color-success-surface-default\` | transparent | \`--color-success-text-default\` |
| | solid | \`--color-success-solid-default\` | transparent | \`--color-success-text-on-solid\` |
| | outline | transparent | \`--color-success-border-default\` | \`--color-success-text-default\` |
| | ghost | transparent | transparent | \`--color-success-text-default\` |
| **neutral** | subtle | \`--color-secondary-surface-default\` | transparent | \`--color-secondary-text-default\` |
| | solid | \`--color-secondary-solid-default\` | transparent | \`--color-secondary-text-on-solid\` |
| | outline | transparent | \`--color-secondary-border-default\` | \`--color-secondary-text-default\` |
| | ghost | transparent | transparent | \`--color-secondary-text-default\` |
| **ended** | subtle | \`--color-subtle-surface-default\` | transparent | \`--color-subtle-text-default\` |
| | solid | \`--color-subtle-solid-default\` | transparent | \`--color-subtle-text-on-solid\` |
| | outline | transparent | \`--color-subtle-border-default\` | \`--color-subtle-text-default\` |
| | ghost | transparent | transparent | \`--color-subtle-text-default\` |
        `,
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['destructive', 'info', 'ready', 'warning', 'success', 'neutral', 'ended'],
      description: 'Figma prop: **State**',
    },
    variant: {
      control: 'select',
      options: ['subtle', 'solid', 'outline', 'ghost'],
      description: 'Figma prop: **Variant**',
    },
    size: {
      control: 'select',
      options: ['badge', 'xs', 'sm', 'md', 'lg'],
      description: 'Figma prop: **Size**',
    },
    label: {
      control: 'text',
      description: 'Texto interior del chip',
    },
  },
  args: {
    state: 'neutral',
    variant: 'subtle',
    size: 'md',
    label: 'Chip text',
  },
  render: (args) => ({
    components: { Chip },
    setup() { return { args } },
    template: '<Chip v-bind="args" />',
  }),
}

export default meta
type Story = StoryObj<typeof Chip>

export const Default: Story = {}

// ─── All States ─────────────────────────────────────────────────────────────

export const AllStates: Story = {
  render: (args) => ({
    components: { Chip },
    setup() { return { args } },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <Chip v-bind="args" state="neutral" label="Neutral" />
        <Chip v-bind="args" state="info" label="Info" />
        <Chip v-bind="args" state="success" label="Success" />
        <Chip v-bind="args" state="warning" label="Warning" />
        <Chip v-bind="args" state="destructive" label="Destructive" />
        <Chip v-bind="args" state="ready" label="Ready" />
        <Chip v-bind="args" state="ended" label="Ended" />
      </div>
    `,
  }),
}

// ─── All Variants ───────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: (args) => ({
    components: { Chip },
    setup() { return { args } },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <Chip v-bind="args" variant="subtle" label="Subtle" />
        <Chip v-bind="args" variant="solid" label="Solid" />
        <Chip v-bind="args" variant="outline" label="Outline" />
        <Chip v-bind="args" variant="ghost" label="Ghost" />
      </div>
    `,
  }),
}

// ─── Sizes (agrupados en una sola story) ────────────────────────────────────

export const Sizes: Story = {
  render: (args) => ({
    components: { Chip },
    setup() { return { args } },
    template: `
      <div style="display: flex; align-items: center; gap: 16px;">
        <Chip v-bind="args" size="badge" label="1" />
        <Chip v-bind="args" size="xs" label="Extra Small" />
        <Chip v-bind="args" size="sm" label="Small" />
        <Chip v-bind="args" size="md" label="Medium" />
        <Chip v-bind="args" size="lg" label="Large" />
      </div>
    `,
  }),
}

// ─── Individual States ──────────────────────────────────────────────────────

export const Destructive: Story = {
  args: { state: 'destructive', label: 'Destructive' },
}

export const Info: Story = {
  args: { state: 'info', label: 'Information' },
}

export const Success: Story = {
  args: { state: 'success', label: 'Success' },
}

export const Warning: Story = {
  args: { state: 'warning', label: 'Warning' },
}

export const Ready: Story = {
  args: { state: 'ready', label: 'Ready' },
}

export const Ended: Story = {
  args: { state: 'ended', label: 'Ended' },
}
