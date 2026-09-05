import type { Meta, StoryObj } from '@storybook/vue3'
import IconGallery from './IconGallery.vue'

/**
 * ## Icons Foundation & Library
 *
 * Catálogo completo con los 456 iconos extraídos 1:1 directamente de la biblioteca de Figma (`Foundations / Icons / Library`).
 *
 * 🔗 **[Figma Foundations - Icons (node 14:1534)](https://www.figma.com/design/CF42I4tCscSnq4oiOSPgKP/Foundations?node-id=14-1534)**  
 * 🔗 **[Figma Foundations - Icon Sizes (node 75:167)](https://www.figma.com/design/CF42I4tCscSnq4oiOSPgKP/Foundations?node-id=75-167)**
 *
 * ### 📏 Tamaños de Icono en el Sistema de Diseño
 * - **2xs (`12px`)**: `var(--sizing-6)` — Micro badges, tabs, compact indicators
 * - **xs (`16px`)**: `var(--sizing-7)` — Small labels, inline icons in text
 * - **sm (`20px`)**: `var(--sizing-8)` — Icons in secondary buttons
 * - **md (`24px`)**: `var(--sizing-9)` — Standard size, navigation, actions
 * - **lg (`32px`)**: `var(--sizing-10)` — Small illustrations, section headers
 * - **xl (`40px`)**: `var(--sizing-11)` — Highlighted or illustrative use cases
 */
const meta: Meta<typeof IconGallery> = {
  title: 'Foundations/Icons',
  component: IconGallery,
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof IconGallery>

/**
 * 🌟 Catálogo interactivo de los 456 iconos de Figma con buscador, selector de tamaño (2xs a xl) y selector de color.
 */
export const FigmaLibrary: Story = {
  name: 'Figma Icon Library (456 Icons)',
  render: () => ({
    components: { IconGallery },
    template: `<IconGallery />`,
  }),
}
