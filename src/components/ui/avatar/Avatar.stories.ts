import type { Meta, StoryObj } from '@storybook/vue3'
import Avatar from './Avatar.vue'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente **Avatar** basado en Radix Vue y Figma Design Tokens. Estilizado con **CSS Modules** y **CSS Variables**.

🔗 **[Ver en Figma](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=2049-10768)**

---

### 📐 Layout & Sizing

| Propiedad | Tamaño | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|---|
| **Width / Height** | sm | \`sizing/sizing-9\` | \`--sizing-9\` | 24×24px |
| | md | \`sizing/sizing-10\` | \`--sizing-10\` | 32×32px |
| | lg | \`sizing/sizing-11\` | \`--sizing-11\` | 40×40px |

---

### ⬛ Shape

| Propiedad | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|
| **Border Radius** | \`radius/full\` | \`--radius-full\` | 999px (circular) |

---

### 🔤 Typography (Name fallback)

| Propiedad | Tamaño | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|---|
| **Font Family** | todos | \`font-family/body\` | \`--font-family-body\` | "Inter", sans-serif |
| **Font Weight** | todos | \`font-weight/medium\` | \`--font-weight-medium\` | 500 |
| **Font Size** | sm | \`font-size/caption/medium\` | \`--font-size-caption-medium\` | 11px |
| | md | \`font-size/caption/big\` | \`--font-size-caption-big\` | 12px |
| | lg | \`font-size/text/medium\` | \`--font-size-text-medium\` | 16px |
| **Line Height** | sm | \`line-height/leading-14\` | \`--leading-14\` | 14px |
| | md | \`line-height/leading-16\` | \`--leading-16\` | 16px |
| | lg | \`line-height/leading-24\` | \`--leading-24\` | 24px |

---

### 🎨 Colors

| Elemento | Propiedad | Token / Figma Variable | CSS Variable |
|---|---|---|---|
| **Fallback** | Background | \`color/surface/muted\` | \`--color-surface-muted\` |
| | Text | \`color/text/primary\` | \`--color-text-primary\` |
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Figma prop: **size**',
    },
    type: {
      control: 'radio',
      options: ['photo', 'name'],
      description: 'Figma prop: **type**',
    },
    label: {
      control: 'text',
      description: 'Texto de fallback cuando type="name" o la imagen no carga',
    },
    src: {
      control: 'text',
      description: 'URL de la imagen cuando type="photo"',
    },
  },
  args: {
    size: 'md',
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    label: 'AS',
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Photo: Story = {
  args: {
    size: 'md',
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  },
}

export const Name: Story = {
  args: {
    size: 'md',
    type: 'name',
    label: 'AS',
    src: '',
  },
}

export const Sizes: Story = {
  render: (args) => ({
    components: { Avatar },
    setup() { return { args } },
    template: `
      <div style="display: flex; align-items: center; gap: 16px;">
        <Avatar v-bind="args" size="sm" />
        <Avatar v-bind="args" size="md" />
        <Avatar v-bind="args" size="lg" />
      </div>
    `,
  }),
}
