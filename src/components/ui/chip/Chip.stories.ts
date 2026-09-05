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
Componente **Chip** mapeado 1:1 al componente de Figma. Estilizado con **CSS Modules** y **CSS Variables**.

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
| **Padding** | badge | \`spacing-3\` (vert), \`spacing-5\` (horiz) | \`--spacing-3\`, \`--spacing-5\` | 4px, 8px |
| | xs | \`spacing-2\` (top, bot, left), \`spacing-3\` (right) | \`--spacing-2\`, \`--spacing-3\` | 2px 4px 2px 2px |
| | sm | \`spacing-3\` (vert), \`spacing-5\` (horiz) | \`--spacing-3\`, \`--spacing-5\` | 4px, 8px |
| | md | \`spacing-4\` (vert), \`spacing-5\` (horiz) | \`--spacing-4\`, \`--spacing-5\` | 6px, 8px |
| | lg | \`spacing-5-5\` (vert), \`spacing-6\` (horiz) | \`--spacing-5-5\`, \`--spacing-6\` | 10px, 12px |
| **Gap** | xs | \`spacing/spacing-2\` | \`--spacing-2\` | 2px |
| | sm, md, lg | \`spacing/spacing-3\` | \`--spacing-3\` | 4px |
| **Icon Size** | xs, sm, md | — | — | 16×16px |
| | lg | — | — | 20×20px |

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
| **Font Size** | badge | \`font-size/caption/small\` | \`--font-size-caption-small\` | 10px |
| | xs | \`font-size/caption/medium\` | \`--font-size-caption-medium\` | 11px |
| | sm | \`font-size/caption/big\` | \`--font-size-caption-big\` | 12px |
| | md, lg | \`font-size/text/small\` | \`--font-size-text-small\` | 14px |

---

### 🎨 Colors & States

| Estado (State) | Variante | Background | Border | Text | Icon |
|---|---|---|---|---|---|
| **destructive** | subtle | \`color/destructive/surface/default\` | transparent | \`color/destructive/text/default\` | \`color/destructive/icon-muted\` |
| | solid | \`color/destructive/solid/default\` | transparent | \`color/destructive/text/on-solid\` | \`color/destructive/icon/on-solid\` |
| | outline | transparent | \`color/destructive/border/default\` | \`color/destructive/text/default\` | \`color/destructive/icon-muted\` |
| | ghost | transparent | transparent | \`color/destructive/text/default\` | \`color/destructive/icon-muted\` |
| **info** | subtle | \`color/info/surface/default\` | transparent | \`color/info/text/default\` | \`color/info/icon-muted\` |
| | solid | \`color/tango/700\` | transparent | \`color/info/text/on-solid\` | \`color/info/icon/on-solid\` |
| | outline | transparent | \`color/info/border/default\` | \`color/info/text/default\` | \`color/info/icon-muted\` |
| | ghost | transparent | transparent | \`color/info/text/default\` | \`color/info/icon-muted\` |
| **ready** | subtle | \`color/ready/surface/default\` | transparent | \`color/ready/text/default\` | \`color/ready/icon-muted\` |
| | solid | \`color/ready/solid/default\` | transparent | \`color/ready/text/on-solid\` | \`color/ready/icon/on-solid\` |
| | outline | transparent | \`color/ready/border/default\` | \`color/ready/text/default\` | \`color/ready/icon-muted\` |
| | ghost | transparent | transparent | \`color/ready/text/default\` | \`color/ready/icon-muted\` |
| **warning** | subtle | \`color/warning/surface/default\` | transparent | \`color/warning/text/default\` | \`color/warning/icon-muted\` |
| | solid | \`color/warning/solid/default\` | transparent | \`color/warning/text/on-solid\` | \`color/warning/icon/on-solid\` |
| | outline | transparent | \`color/warning/border/default\` | \`color/warning/text/default\` | \`color/warning/icon-muted\` |
| | ghost | transparent | transparent | \`color/warning/text/default\` | \`color/warning/icon-muted\` |
| **success** | subtle | \`color/success/surface/default\` | transparent | \`color/success/text/default\` | \`color/success/icon-muted\` |
| | solid | \`color/success/solid/default\` | transparent | \`color/success/text/on-solid\` | \`color/success/icon/on-solid\` |
| | outline | transparent | \`color/success/border/default\` | \`color/success/text/default\` | \`color/success/icon-muted\` |
| | ghost | transparent | transparent | \`color/success/text/default\` | \`color/success/icon-muted\` |
| **neutral / ended** | subtle | \`color/subtle/surface/default\` | transparent | \`color/subtle/text/default\` | \`color/subtle/icon/muted\` |
| | solid | \`color/subtle/solid/default\` | transparent | \`color/subtle/text/on-solid\` | \`color/subtle/icon/default\` |
| | outline | transparent | \`color/subtle/border/default\` | \`color/subtle/text/default\` | \`color/subtle/icon/muted\` |
| | ghost | transparent | transparent | \`color/subtle/text/default\` | \`color/subtle/icon/muted\` |
        `,
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['destructive', 'info', 'ready', 'warning', 'success', 'neutral', 'ended'],
      description: 'Figma prop: **state**',
    },
    variant: {
      control: 'select',
      options: ['subtle', 'solid', 'outline', 'ghost'],
      description: 'Figma prop: **variant**',
    },
    size: {
      control: 'select',
      options: ['badge', 'xs', 'sm', 'md', 'lg'],
      description: 'Figma prop: **size**',
    },
    label: {
      control: 'text',
      description: 'Figma prop: **Label**',
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
    state: 'neutral',
    variant: 'subtle',
    size: 'md',
    label: 'Label',
    leadingIcon: true,
    trailingIcon: true,
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

// ─── With and Without Icons ─────────────────────────────────────────────────

export const Icons: Story = {
  render: (args) => ({
    components: { Chip },
    setup() { return { args } },
    template: `
      <div style="display: flex; gap: var(--spacing-6); align-items: center;">
        <Chip v-bind="args" :leading-icon="true" :trailing-icon="true" label="Both Icons" />
        <Chip v-bind="args" :leading-icon="true" :trailing-icon="false" label="Leading Icon" />
        <Chip v-bind="args" :leading-icon="false" :trailing-icon="true" label="Trailing Icon" />
        <Chip v-bind="args" :leading-icon="false" :trailing-icon="false" label="No Icons" />
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
      <div style="display: flex; align-items: center; gap: var(--spacing-7);">
        <Chip v-bind="args" size="badge" label="1" :leading-icon="false" :trailing-icon="false" />
        <Chip v-bind="args" size="xs" label="Extra Small" />
        <Chip v-bind="args" size="sm" label="Small" />
        <Chip v-bind="args" size="md" label="Medium" />
        <Chip v-bind="args" size="lg" label="Large" />
      </div>
    `,
  }),
}

// ─── All States ─────────────────────────────────────────────────────────────

export const AllStates: Story = {
  render: (args) => ({
    components: { Chip },
    setup() { return { args } },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: var(--spacing-6); align-items: center;">
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
      <div style="display: flex; flex-wrap: wrap; gap: var(--spacing-6); align-items: center;">
        <Chip v-bind="args" variant="subtle" label="Subtle" />
        <Chip v-bind="args" variant="solid" label="Solid" />
        <Chip v-bind="args" variant="outline" label="Outline" />
        <Chip v-bind="args" variant="ghost" label="Ghost" />
      </div>
    `,
  }),
}
