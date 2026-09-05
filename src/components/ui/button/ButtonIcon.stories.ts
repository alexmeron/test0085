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
        component: `
Botón de icono único (sin label). Mapeado 1:1 al componente **Button-icon** de Figma.

### Token mapping

| Propiedad | Figma variable | CSS variable | Tailwind class |
|---|---|---|---|
| Border radius | \`radius/radius-lg\` | \`--radius-lg\` | \`rounded-radius-lg\` |
| Focus ring | \`color/border/focus\` | \`--color-border-focus\` | \`ring-border-focus\` |
| **sm** height/width | \`sizing/sizing-9\` | \`--sizing-9\` | \`h-sizing-9 w-sizing-9\` |
| **sm** padding | \`spacing/spacing-3\` | \`--spacing-3\` | \`p-spacing-3\` |
| **md** height/width | \`sizing/sizing-10\` | \`--sizing-10\` | \`h-sizing-10 w-sizing-10\` |
| **md** padding | \`spacing/spacing-5\` | \`--spacing-5\` | \`p-spacing-5\` |
| **lg** height/width | \`sizing/sizing-11\` | \`--sizing-11\` | \`h-sizing-11 w-sizing-11\` |
| **lg** padding | \`spacing/spacing-5-5\` | \`--spacing-5-5\` | \`p-spacing-5-5\` |
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

// ─── Sizes (agrupados sm, md, lg en una sola historia) ─────────────────────

export const Sizes: Story = {
  render: (args) => ({
    components: { ButtonIcon, Search },
    setup() { return { args } },
    template: `
      <div class="flex items-center gap-4">
        <ButtonIcon v-bind="args" size="sm"><Search class="w-full h-full" /></ButtonIcon>
        <ButtonIcon v-bind="args" size="md"><Search class="w-full h-full" /></ButtonIcon>
        <ButtonIcon v-bind="args" size="lg"><Search class="w-full h-full" /></ButtonIcon>
      </div>
    `,
  }),
}

// ─── States ─────────────────────────────────────────────────────────────────

export const Disabled: Story = { args: { disabled: true } }
