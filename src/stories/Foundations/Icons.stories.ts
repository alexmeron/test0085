import type { Meta, StoryObj } from '@storybook/vue3'
import IconGallery from './IconGallery.vue'

const meta: Meta<typeof IconGallery> = {
  title: 'Foundations/Icons',
  component: IconGallery,
  parameters: {
    docs: {
      description: {
        component:
          'Catálogo interactivo con buscador en tiempo real, selector de tamaños, colores y filtros de categoría para los 456 iconos oficiales del Design System.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Catalogo: Story = {
  name: 'Catálogo de Iconos',
  render: () => ({
    components: { IconGallery },
    template: '<IconGallery />',
  }),
}
