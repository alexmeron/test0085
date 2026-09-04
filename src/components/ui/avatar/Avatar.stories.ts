import type { Meta, StoryObj } from '@storybook/vue3'
import Avatar from './Avatar.vue'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: 'radio',
      options: ['photo', 'name'],
    },
    label: {
      control: 'text',
    },
    src: {
      control: 'text',
    }
  },
  args: {
    size: 'md',
    type: 'photo',
    src: 'https://github.com/shadcn.png',
    label: 'AS',
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Photo: Story = {
  args: {
    size: 'md',
    type: 'photo',
    src: 'https://github.com/shadcn.png',
  }
}

export const Name: Story = {
  args: {
    size: 'md',
    type: 'name',
    label: 'AS',
    src: ''
  }
}
