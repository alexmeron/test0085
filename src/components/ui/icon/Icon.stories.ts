import type { Meta, StoryObj } from '@storybook/vue3'
import Icon from './Icon.vue'

/**
 * ## Icon Component
 * 
 * Componente unificado para renderizar cualquiera de los **456 iconos** oficiales del Design System extraídos directamente de Figma.
 * 
 * 🔗 **[Ver en Figma (node 46:5055)](https://www.figma.com/design/CF42I4tCscSnq4oiOSPgKP/Foundations?node-id=46-5055)**  
 * 🔗 **[Ver Tabla de Tamaños (node 75:167)](https://www.figma.com/design/CF42I4tCscSnq4oiOSPgKP/Foundations?node-id=75-167)**
 * 
 * ---
 * 
 * ### 📐 Escala de Tamaños
 * - **2xs**: `12px` (`var(--sizing-6)`)
 * - **xs**: `16px` (`var(--sizing-7)`)
 * - **sm**: `20px` (`var(--sizing-8)`)
 * - **md**: `24px` (`var(--sizing-9)`)
 * - **lg**: `32px` (`var(--sizing-10)`)
 * - **xl**: `40px` (`var(--sizing-11)`)
 */
const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Nombre del icono en Figma (o alias)',
    },
    size: {
      control: 'select',
      options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Tamaño del icono según tokens',
    },
    color: {
      control: 'color',
      description: 'Color opcional (por defecto hereda currentColor)',
    },
  },
  args: {
    name: 'Search_Magnifying_Glass',
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const Default: Story = {}

export const Sizes: Story = {
  render: (args) => ({
    components: { Icon },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; align-items: center; gap: var(--spacing-7);">
        <div style="text-align: center;">
          <Icon name="Search_Magnifying_Glass" size="2xs" />
          <div style="font-size: 11px; color: var(--color-text-secondary); margin-top: 4px;">2xs (12px)</div>
        </div>
        <div style="text-align: center;">
          <Icon name="Search_Magnifying_Glass" size="xs" />
          <div style="font-size: 11px; color: var(--color-text-secondary); margin-top: 4px;">xs (16px)</div>
        </div>
        <div style="text-align: center;">
          <Icon name="Search_Magnifying_Glass" size="sm" />
          <div style="font-size: 11px; color: var(--color-text-secondary); margin-top: 4px;">sm (20px)</div>
        </div>
        <div style="text-align: center;">
          <Icon name="Search_Magnifying_Glass" size="md" />
          <div style="font-size: 11px; color: var(--color-text-secondary); margin-top: 4px;">md (24px)</div>
        </div>
        <div style="text-align: center;">
          <Icon name="Search_Magnifying_Glass" size="lg" />
          <div style="font-size: 11px; color: var(--color-text-secondary); margin-top: 4px;">lg (32px)</div>
        </div>
        <div style="text-align: center;">
          <Icon name="Search_Magnifying_Glass" size="xl" />
          <div style="font-size: 11px; color: var(--color-text-secondary); margin-top: 4px;">xl (40px)</div>
        </div>
      </div>
    `,
  }),
}

export const ColorVariants: Story = {
  render: () => ({
    components: { Icon },
    template: `
      <div style="display: flex; align-items: center; gap: var(--spacing-8);">
        <Icon name="Circle_Check" size="lg" color="var(--color-success-solid-default, #22c55e)" />
        <Icon name="Circle_Warning" size="lg" color="var(--color-destructive-solid-default, #ef4444)" />
        <Icon name="Info" size="lg" color="var(--color-brand-solid-default, #3b82f6)" />
        <Icon name="Star" size="lg" color="var(--color-warning-solid-default, #f59e0b)" />
      </div>
    `,
  }),
}
