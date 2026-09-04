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
A button component built with Radix Vue and Tailwind CSS, mapped directly to Figma design tokens.

### Design Tokens Used
- **Backgrounds**: \`var(--color-brand-solid-default)\`, \`var(--color-secondary-solid-default)\`, etc.
- **Text**: \`var(--color-brand-text-on-solid)\`, \`var(--color-text-primary)\`, etc.
- **Radius**: \`var(--radius-radius-lg)\`
- **Typography**: \`var(--font-family-body)\`, \`var(--font-weight-medium)\`
- **Sizing**: 
  - \`sm\`: Height 24px (\`sizing-9\`), padding 8px horizontal, 4px vertical
  - \`md\`: Height 32px (\`sizing-10\`), padding 8px horizontal, 6px vertical
  - \`lg\`: Height 40px (\`sizing-11\`), padding 12px horizontal, 10px vertical
        `
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger', 'outlined', 'ghost', 'on-inverse'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    leadingIcon: {
      control: 'boolean',
      description: 'Show leading icon',
    },
    trailingIcon: {
      control: 'boolean',
      description: 'Show trailing icon',
    },
    default: {
      control: 'text',
      description: 'The text content of the button slot',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    leadingIcon: false,
    trailingIcon: false,
    default: 'Continue',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
}

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
    default: 'Secondary Button',
  },
  render: Primary.render,
}

export const Tertiary: Story = {
  args: {
    ...Primary.args,
    variant: 'tertiary',
    default: 'Tertiary Button',
  },
  render: Primary.render,
}

export const Danger: Story = {
  args: {
    ...Primary.args,
    variant: 'danger',
    default: 'Danger Button',
  },
  render: Primary.render,
}

export const Outlined: Story = {
  args: {
    ...Primary.args,
    variant: 'outlined',
    default: 'Outlined Button',
  },
  render: Primary.render,
}

export const Ghost: Story = {
  args: {
    ...Primary.args,
    variant: 'ghost',
    default: 'Ghost Button',
  },
  render: Primary.render,
}

export const OnInverse: Story = {
  args: {
    ...Primary.args,
    variant: 'on-inverse',
    default: 'On Inverse Button',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: Primary.render,
}
