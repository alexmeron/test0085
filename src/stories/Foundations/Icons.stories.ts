import type { Meta, StoryObj } from '@storybook/vue3'
import IconGallery from './IconGallery.vue'

const meta: Meta<typeof IconGallery> = {
  title: 'Foundations/Icons',
  component: IconGallery,
}

export default meta
type Story = StoryObj<typeof meta>

export const Explorer: Story = {
  render: () => ({
    components: { IconGallery },
    template: '<IconGallery />',
  }),
}
