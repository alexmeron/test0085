import type { Meta, StoryObj } from '@storybook/vue3'
import Input from './Input.vue'
import { Search } from 'lucide-vue-next'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
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
    setup() {
      return { args }
    },
    template: '<Input v-bind="args" />',
  }),
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {}

export const WithIcon: Story = {
  render: (args) => ({
    components: { Input, Search },
    setup() {
      return { args }
    },
    template: `
      <div class="relative w-full max-w-sm items-center">
        <Input v-bind="args" class="pl-10" />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-3 text-text-muted">
          <Search class="size-4" />
        </span>
      </div>
    `,
  })
}

export const Error: Story = {
  args: {
    variant: 'error',
    placeholder: 'Error state...',
  }
}

export const Success: Story = {
  args: {
    variant: 'success',
    placeholder: 'Success state...',
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled state...',
  }
}
