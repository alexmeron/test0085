import type { Meta, StoryObj } from '@storybook/vue3'
import Input from './Input.vue'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Input component following Cella Design System.

### Design Tokens Used
- **Border**: \`var(--color-border-default)\`, \`var(--color-border-focus)\`
- **Background**: Transparent or \`var(--color-surface-subtle)\` (filled)
- **Text**: \`var(--font-family-body)\`
- **Sizing**: \`sm\` (24px), \`md\` (32px), \`lg\` (40px) matching Button heights.
        `
      }
    }
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus', 'filled', 'disabled', 'success', 'destructive'],
      description: 'Visual state of the input',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Height and padding size',
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    }
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    state: 'default',
    size: 'md',
    placeholder: 'Enter text here...',
    disabled: false,
  },
  render: (args) => ({
    components: { Input },
    setup() {
      return { args }
    },
    template: '<Input v-bind="args" />',
  }),
}

export const Success: Story = {
  args: {
    ...Default.args,
    state: 'success',
    placeholder: 'Valid input',
  },
  render: Default.render,
}

export const Destructive: Story = {
  args: {
    ...Default.args,
    state: 'destructive',
    placeholder: 'Invalid input',
  },
  render: Default.render,
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    state: 'disabled',
    disabled: true,
    placeholder: 'Disabled input',
  },
  render: Default.render,
}
