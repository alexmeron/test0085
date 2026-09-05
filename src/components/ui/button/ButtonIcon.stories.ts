import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonIcon from './ButtonIcon.vue'
import { Search } from 'lucide-vue-next'

const meta: Meta<typeof ButtonIcon> = {
  title: 'Components/Button-icon',
  component: ButtonIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Botón de icono único (sin label). Mapeado 1:1 al componente Button-icon de Figma.',
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
    components: { ButtonIcon, Search },
    setup() { return { args } },
    template: `<ButtonIcon v-bind="args"><Search class="w-full h-full" /></ButtonIcon>`,
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

export const Small: Story = { args: { size: 'sm' } }
export const Medium: Story = { args: { size: 'md' } }
export const Large: Story = { args: { size: 'lg' } }

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
## Button-icon — Figma → Token → Tailwind

### Layout (todas las variantes)

| Propiedad | Figma variable | CSS variable | Tailwind class |
|---|---|---|---|
| Border radius | \`radius/radius-lg\` | \`--radius-lg\` | \`rounded-radius-lg\` |
| Focus ring | \`color/border/focus\` | \`--color-border-focus\` | \`ring-border-focus\` |

### Sizes

| Size | Propiedad | Figma variable | CSS variable | Tailwind class |
|---|---|---|---|---|
| **sm** | Height / Width | \`sizing/sizing-9\` | \`--sizing-9\` | \`h-sizing-9 w-sizing-9\` |
| | Padding (todos) | \`spacing/spacing-3\` | \`--spacing-3\` | \`p-spacing-3\` |
| **md** | Height / Width | \`sizing/sizing-10\` | \`--sizing-10\` | \`h-sizing-10 w-sizing-10\` |
| | Padding (todos) | \`spacing/spacing-5\` | \`--spacing-5\` | \`p-spacing-5\` |
| **lg** | Height / Width | \`sizing/sizing-11\` | \`--sizing-11\` | \`h-sizing-11 w-sizing-11\` |
| | Padding (todos) | \`spacing/spacing-5-5\` | \`--spacing-5-5\` | \`p-spacing-5-5\` |

### Colores por variante

| Variant | Figma variable (bg) | Figma variable (icon color) |
|---|---|---|
| **primary** | \`color/brand/solid/default\` | \`color/brand/text/on-solid\` |
| **secondary** | \`color/secondary/solid/default\` | \`color/secondary/text/on-solid\` |
| **tertiary** | \`color/subtle/solid/default\` | \`color/subtle/text/on-solid\` |
| **danger** | \`color/destructive/solid/default\` | \`color/destructive/text/on-solid\` |
| **outlined** | transparent + \`color/subtle/border/default\` | \`color/subtle/text/on-solid\` |
| **ghost** | transparent | \`color/subtle/text/on-solid\` |
| **on-inverse** | \`color/secondary/solid/default\` | \`color/secondary/text/on-solid\` |
        `,
      },
      canvas: { sourceState: 'none' },
    },
    controls: { disable: true },
  },
  render: () => ({
    components: { ButtonIcon, Search },
    template: `<ButtonIcon variant="primary" size="md"><Search class="w-full h-full" /></ButtonIcon>`,
  }),
}
