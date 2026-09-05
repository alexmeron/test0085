import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Botón de acción. Mapeado 1:1 al componente Button de Figma.',
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

export const Small: Story = { args: { size: 'sm' } }
export const Medium: Story = { args: { size: 'md' } }
export const Large: Story = { args: { size: 'lg' } }

// ─── Icons ──────────────────────────────────────────────────────────────────

export const WithLeadingIcon: Story = { args: { leadingIcon: true } }
export const WithTrailingIcon: Story = { args: { trailingIcon: true } }
export const WithBothIcons: Story = { args: { leadingIcon: true, trailingIcon: true } }

// ─── States ─────────────────────────────────────────────────────────────────

export const Disabled: Story = { args: { disabled: true } }

// ─── Token Map (separate tab) ────────────────────────────────────────────────

export const TokenMap: Story = {
  name: '📐 Token Map',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      description: {
        story: `
## Button — Figma → Token → Tailwind

### Layout (todas las variantes)

| Propiedad | Figma variable | CSS variable | Tailwind class |
|---|---|---|---|
| Border radius | \`radius/radius-lg\` | \`--radius-lg\` | \`rounded-radius-lg\` |
| Gap | \`spacing/spacing-3\` | \`--spacing-3\` | \`gap-spacing-3\` |
| Font family | \`font-family/body\` | \`--font-family-body\` | \`font-body\` |
| Font weight | \`font-weight/regular\` | \`--font-weight-regular\` | \`font-regular\` |
| Focus ring | \`color/border/focus\` | \`--color-border-focus\` | \`ring-border-focus\` |

### Sizes

| Size | Propiedad | Figma variable | CSS variable | Tailwind class |
|---|---|---|---|---|
| **sm** | Height | \`sizing/sizing-9\` | \`--sizing-9\` | \`h-sizing-9\` |
| | Padding H | \`spacing/spacing-5\` | \`--spacing-5\` | \`px-spacing-5\` |
| | Padding V | \`spacing/spacing-3\` | \`--spacing-3\` | \`py-spacing-3\` |
| | Font size | \`font-size/caption/big\` | \`--font-size-caption-big\` | \`text-caption-big\` |
| | Line height | \`line-height/leading-16\` | \`--leading-16\` | \`leading-leading-16\` |
| **md** | Height | \`sizing/sizing-10\` | \`--sizing-10\` | \`h-sizing-10\` |
| | Padding H | \`spacing/spacing-5\` | \`--spacing-5\` | \`px-spacing-5\` |
| | Padding V | \`spacing/spacing-4\` | \`--spacing-4\` | \`py-spacing-4\` |
| | Font size | \`font-size/text/small\` | \`--font-size-text-small\` | \`text-text-small\` |
| | Line height | \`line-height/leading-20\` | \`--leading-20\` | \`leading-leading-20\` |
| **lg** | Height | \`sizing/sizing-11\` | \`--sizing-11\` | \`h-sizing-11\` |
| | Padding H | \`spacing/spacing-6\` | \`--spacing-6\` | \`px-spacing-6\` |
| | Padding V | \`spacing/spacing-5-5\` | \`--spacing-5-5\` | \`py-spacing-5-5\` |
| | Font size | \`font-size/text/small\` | \`--font-size-text-small\` | \`text-text-small\` |
| | Line height | \`line-height/leading-20\` | \`--leading-20\` | \`leading-leading-20\` |

### Colores por variante

| Variant | Estado | Figma variable (bg) | Figma variable (text) |
|---|---|---|---|
| **primary** | default | \`color/brand/solid/default\` | \`color/brand/text/on-solid\` |
| | hover | \`color/brand/solid/hover\` | ← |
| | pressed | \`color/brand/solid/pressed\` | ← |
| **secondary** | default | \`color/secondary/solid/default\` | \`color/secondary/text/on-solid\` |
| **tertiary** | default | \`color/subtle/solid/default\` | \`color/subtle/text/on-solid\` |
| **danger** | default | \`color/destructive/solid/default\` | \`color/destructive/text/on-solid\` |
| **outlined** | default | transparent | \`color/subtle/text/on-solid\` |
| | border | \`color/subtle/border/default\` | — |
| **ghost** | default | transparent | \`color/subtle/text/on-solid\` |
| **on-inverse** | default | \`color/surface/default\` | \`color/text/primary\` |

### Iconos

| Size | Figma variable | CSS variable | Tailwind class |
|---|---|---|---|
| sm / md | \`sizing/sizing-7\` | \`--sizing-7\` | \`w-sizing-7 h-sizing-7\` |
| lg | \`sizing/sizing-8\` | \`--sizing-8\` | \`w-sizing-8 h-sizing-8\` |
        `,
      },
      canvas: { sourceState: 'none' },
    },
    controls: { disable: true },
  },
  render: () => ({
    components: { Button },
    template: '<Button variant="primary" size="md">Button</Button>',
  }),
}
