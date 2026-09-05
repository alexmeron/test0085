import type { Meta, StoryObj } from '@storybook/vue3'
import RadioGroup from './RadioGroup.vue'
import RadioGroupItem from './RadioGroupItem.vue'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] }
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: (args) => ({
    components: { RadioGroup, RadioGroupItem },
    setup() {
      return { args }
    },
    template: `
      <RadioGroup v-bind="args" class="flex flex-col gap-4">
        <div class="flex items-center space-x-3">
          <RadioGroupItem id="r1" value="default" />
          <label for="r1">Default Option</label>
        </div>
        <div class="flex items-center space-x-3">
          <RadioGroupItem id="r2" value="comfortable" />
          <label for="r2">Comfortable</label>
        </div>
      </RadioGroup>
    `,
  }),
}
