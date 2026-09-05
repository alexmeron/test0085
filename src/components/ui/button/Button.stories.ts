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
Botón de acción. Mapeado 1:1 al componente **Button** de Figma.

### Token mapping

| Propiedad | Figma variable | CSS variable | Tailwind class |
|---|---|---|---|
| Border radius | \`radius/radius-lg\` | \`--radius-lg\` | \`rounded-radius-lg\` |
| Gap | \`spacing/spacing-3\` | \`--spacing-3\` | \`gap-spacing-3\` |
| Font family | \`font-family/body\` | \`--font-family-body\` | \`font-body\` |
| Font weight | \`font-weight/regular\` | \`--font-weight-regular\` | \`font-regular\` |
| Focus ring | \`color/border/focus\` | \`--color-border-focus\` | \`ring-border-focus\` |
| **sm** height | \`sizing/sizing-9\` | \`--sizing-9\` | \`h-sizing-9\` |
| **sm** padding H | \`spacing/spacing-5\` | \`--spacing-5\` | \`px-spacing-5\` |
| **sm** padding V | \`spacing/spacing-3\` | \`--spacing-3\` | \`py-spacing-3\` |
| **sm** font size | \`font-size/caption/big\` | \`--font-size-caption-big\` | \`text-caption-big\` |
| **sm** line height | \`line-height/leading-16\` | \`--leading-16\` | \`leading-leading-16\` |
| **md** height | \`sizing/sizing-10\` | \`--sizing-10\` | \`h-sizing-10\` |
| **md** padding H | \`spacing/spacing-5\` | \`--spacing-5\` | \`px-spacing-5\` |
| **md** padding V | \`spacing/spacing-4\` | \`--spacing-4\` | \`py-spacing-4\` |
| **md** font size | \`font-size/text/small\` | \`--font-size-text-small\` | \`text-text-small\` |
| **md** line height | \`line-height/leading-20\` | \`--leading-20\` | \`leading-leading-20\` |
| **lg** height | \`sizing/sizing-11\` | \`--sizing-11\` | \`h-sizing-11\` |
| **lg** padding H | \`spacing/spacing-6\` | \`--spacing-6\` | \`px-spacing-6\` |
| **lg** padding V | \`spacing/spacing-5-5\` | \`--spacing-5-5\` | \`py-spacing-5-5\` |
| **lg** font size | \`font-size/text/small\` | \`--font-size-text-small\` | \`text-text-small\` |
| **lg** line height | \`line-height/leading-20\` | \`--leading-20\` | \`leading-leading-20\` |
| icon sm/md | \`sizing/sizing-7\` | \`--sizing-7\` | \`w-sizing-7 h-sizing-7\` |
| icon lg | \`sizing/sizing-8\` | \`--sizing-8\` | \`w-sizing-8 h-sizing-8\` |
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

// ─── Sizes (agrupados sm, md, lg en una sola historia) ─────────────────────

export const Sizes: Story = {
  render: (args) => ({
    components: { Button },
    setup() { return { args } },
    template: `
      <div class="flex items-center gap-4">
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
