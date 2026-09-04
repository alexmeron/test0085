import type { Meta, StoryObj } from '@storybook/vue3'
import Checkbox from './Checkbox.vue'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Checkbox component using Radix Vue.

### Design Tokens Used
- **Border**: \`var(--color-brand-border-strong)\`
- **Background**: \`var(--color-brand-solid-default)\` (when checked)
        `
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    }
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    checked: true,
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args }
    },
    template: '<Checkbox v-bind="args" />',
  }),
}
