import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger', 'outlined', 'ghost', 'on-inverse'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    leadingIcon: {
      control: 'boolean',
    },
    trailingIcon: {
      control: 'boolean',
    },
    default: {
      control: 'text',
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

export const WithLeadingIcon: Story = {
  args: {
    ...Primary.args,
    leadingIcon: true,
    default: 'Search',
  },
  render: Primary.render,
}

export const WithTrailingIcon: Story = {
  args: {
    ...Primary.args,
    trailingIcon: true,
    default: 'Next Step',
  },
  render: Primary.render,
}
