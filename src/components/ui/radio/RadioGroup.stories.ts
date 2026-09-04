import type { Meta, StoryObj } from '@storybook/vue3'
import { RadioGroup, RadioGroupItem } from './index'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
RadioGroup component using Radix Vue.

### Design Tokens Used
- **Border**: \`var(--color-brand-border-strong)\`
- **Indicator**: \`var(--color-brand-solid-default)\`
        `
      }
    }
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  args: {
    defaultValue: 'option-1',
  },
  render: (args) => ({
    components: { RadioGroup, RadioGroupItem },
    setup() {
      return { args }
    },
    template: `
      <RadioGroup v-bind="args" class="flex flex-col gap-spacing-4">
        <div class="flex items-center space-x-spacing-3">
          <RadioGroupItem value="option-1" id="option-1" />
          <label for="option-1" class="text-text-small font-medium font-body text-text-primary">Option 1</label>
        </div>
        <div class="flex items-center space-x-spacing-3">
          <RadioGroupItem value="option-2" id="option-2" />
          <label for="option-2" class="text-text-small font-medium font-body text-text-primary">Option 2</label>
        </div>
      </RadioGroup>
    `,
  }),
}
