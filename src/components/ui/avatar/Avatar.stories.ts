import type { Meta, StoryObj } from '@storybook/vue3'
import { Avatar, AvatarImage, AvatarFallback } from '.'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    src: {
      control: 'text',
      description: 'Image URL for type=photo',
    },
    fallback: {
      control: 'text',
      description: 'Text initials for type=name',
    }
  },
  args: {
    size: 'md',
    src: 'https://github.com/shadcn.png',
    fallback: 'AS'
  },
  render: (args) => ({
    components: { Avatar, AvatarImage, AvatarFallback },
    setup() {
      return { args }
    },
    template: `
      <Avatar :size="args.size">
        <AvatarImage :src="args.src" alt="Avatar" />
        <AvatarFallback>{{ args.fallback }}</AvatarFallback>
      </Avatar>
    `,
  }),
} satisfies Meta<any>

export default meta
type Story = StoryObj<any>

export const Photo: Story = {
  args: {
    size: 'md',
    src: 'https://github.com/shadcn.png',
  }
}

export const Name: Story = {
  args: {
    size: 'md',
    src: '',
    fallback: 'AS'
  }
}
