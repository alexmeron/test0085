import type { Meta, StoryObj } from '@storybook/vue3'
import Input from './Input.vue'
import { Search } from 'lucide-vue-next'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente **Input** para formularios. Mapeado 1:1 a Figma. Estilizado con **CSS Modules** y **CSS Variables**.

🔗 **[Ver en Figma](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4115-21221)**

---

### 📐 Layout & Sizing

| Propiedad | Tamaño | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|---|
| **Height** | sm | \`sizing/sizing-9\` | \`--sizing-9\` | 24px |
| | md | \`sizing/sizing-10\` | \`--sizing-10\` | 32px |
| | lg | \`sizing/sizing-11\` | \`--sizing-11\` | 40px |
| **Padding Horizontal** | sm, md | \`spacing/spacing-5\` | \`--spacing-5\` | 8px |
| | lg | \`spacing/spacing-6\` | \`--spacing-6\` | 12px |
| **Padding Vertical** | sm | \`spacing/spacing-3\` | \`--spacing-3\` | 4px |
| | md | \`spacing/spacing-4\` | \`--spacing-4\` | 6px |
| | lg | \`spacing/spacing-5-5\` | \`--spacing-5-5\` | 10px |

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
| **Font Size** | sm | \`font-size/caption/big\` | \`--font-size-caption-big\` | 12px |
| | md, lg | \`font-size/text/small\` | \`--font-size-text-small\` | 14px |
| **Line Height** | sm | \`line-height/leading-16\` | \`--leading-16\` | 16px |
| | md, lg | \`line-height/leading-20\` | \`--leading-20\` | 20px |

---

### 🎨 Colors & States

| Variante / Estado | Propiedad | Token / Figma Variable | CSS Variable |
|---|---|---|---|
| **Default** | Background | \`color/surface/subtle\` | \`--color-surface-subtle\` |
| | Border | \`color/border/default\` | \`--color-border-default\` |
| | Text | \`color/text/primary\` | \`--color-text-primary\` |
| | Placeholder | \`color/text/placeholder\` | \`--color-text-placeholder\` |
| | Hover Border | \`color/border/strong\` | \`--color-border-strong\` |
| | Focus Ring | \`color/border/focus\` | \`--color-border-focus\` |
| **Error (destructive)** | Border | \`color/destructive/border/default\` | \`--color-destructive-border-default\` |
| | Focus Ring | \`color/destructive/border/strong\` | \`--color-destructive-border-strong\` |
| **Success** | Border | \`color/success/border/default\` | \`--color-success-border-default\` |
| | Focus Ring | \`color/success/border/strong\` | \`--color-success-border-strong\` |
| **Disabled** | Background | \`color/surface/disabled\` | \`--color-surface-disabled\` |
| | Border | \`color/border/disabled\` | \`--color-border-disabled\` |
| | Opacity | \`Opacity/disabled\` | 0.5 |
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: 'Variante de estado del input',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del input',
    },
    disabled: { control: 'boolean' },
    type: { control: 'text' },
    placeholder: { control: 'text' },
  },
  args: {
    variant: 'default',
    size: 'md',
    disabled: false,
    placeholder: 'Placeholder text...',
  },
  render: (args) => ({
    components: { Input },
    setup() { return { args } },
    template: '<Input v-bind="args" style="max-width: 320px;" />',
  }),
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {}

export const ErrorState: Story = {
  name: 'Error',
  args: {
    variant: 'error',
    placeholder: 'Error state...',
  },
}

export const SuccessState: Story = {
  name: 'Success',
  args: {
    variant: 'success',
    placeholder: 'Success state...',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input...',
  },
}

export const Sizes: Story = {
  render: (args) => ({
    components: { Input },
    setup() { return { args } },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 320px;">
        <div>
          <label style="font-size: var(--font-size-caption-big); font-family: var(--font-family-body); display: block; margin-bottom: 4px;">Small (24px)</label>
          <Input v-bind="args" size="sm" placeholder="Small input..." />
        </div>
        <div>
          <label style="font-size: var(--font-size-text-small); font-family: var(--font-family-body); display: block; margin-bottom: 4px;">Medium (32px)</label>
          <Input v-bind="args" size="md" placeholder="Medium input..." />
        </div>
        <div>
          <label style="font-size: var(--font-size-text-small); font-family: var(--font-family-body); display: block; margin-bottom: 4px;">Large (40px)</label>
          <Input v-bind="args" size="lg" placeholder="Large input..." />
        </div>
      </div>
    `,
  }),
}

export const WithIcon: Story = {
  render: (args) => ({
    components: { Input, Search },
    setup() { return { args } },
    template: `
      <div style="position: relative; max-width: 320px; display: flex; align-items: center;">
        <span style="position: absolute; left: 10px; display: flex; align-items: center; color: var(--color-text-placeholder); pointer-events: none;">
          <Search style="width: 16px; height: 16px;" />
        </span>
        <Input v-bind="args" style="padding-left: 32px;" placeholder="Search..." />
      </div>
    `,
  }),
}
