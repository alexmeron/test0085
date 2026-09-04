import type { Meta, StoryObj } from '@storybook/vue3'
import { ButtonIcon } from '.'
import { Search } from 'lucide-vue-next'

const meta = {
  title: 'Components/Button-icon',
  component: ButtonIcon,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger', 'outlined', 'ghost', 'on-inverse'],
    },
    size: {
      control: 'select',
      options: ['icon-sm', 'icon-md', 'icon-lg'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'primary',
    size: 'icon-md',
    disabled: false,
  },
  render: (args) => ({
    components: { ButtonIcon, Search },
    setup() {
      return { args }
    },
    template: `
      <ButtonIcon v-bind="args">
        <Search class="w-full h-full" />
      </ButtonIcon>
    `,
  }),
} satisfies Meta<typeof ButtonIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = { args: { variant: 'primary' } }
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Tertiary: Story = { args: { variant: 'tertiary' } }
export const Danger: Story = { args: { variant: 'danger' } }
export const Outlined: Story = { args: { variant: 'outlined' } }
export const Ghost: Story = { args: { variant: 'ghost' } }
export const OnInverse: Story = { 
  args: { variant: 'on-inverse' },
  parameters: { backgrounds: { default: 'dark' } } 
}
