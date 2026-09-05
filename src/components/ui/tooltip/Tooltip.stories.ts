import type { Meta, StoryObj } from '@storybook/vue3'
import { AddPlusIcon, TrashIcon, CircleHelpIcon } from '../icon'
import Tooltip from './Tooltip.vue'
import { Button, ButtonIcon } from '../button'

/**
 * ## Tooltip Component
 *
 * Etiqueta flotante de apoyo contextual que aparece al hacer hover o al recibir foco sobre un elemento interactivo.
 * Mapeado 1:1 a Figma.
 *
 * 🔗 **[Ver en Figma (node 4003:408)](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4003-408)**
 *
 * ---
 *
 * ### 📐 Layout & Sizing
 *
 * | Elemento | Token / Valor | Descripción |
 * |---|---|---|
 * | **Padding vertical** | `--spacing-4` (6px) | Espaciado superior e inferior |
 * | **Padding horizontal** | `--spacing-6` (12px) | Espaciado lateral |
 * | **Radio de borde** | `--radius-md` (6px) | Border radius del contenedor flotante |
 * | **Tipografía** | `--font-size-caption-big` (12px), `--leading-16` (16px) | Peso regular (400) |
 * | **Sombra** | `--shadow-elevation-md` | Elevación suave de capa superior |
 *
 * ---
 *
 * ### 🎨 Tokens de Color (theme=inverse)
 *
 * | Elemento | Token / Variable | Valor |
 * |---|---|---|
 * | **Fondo** | `--color-surface-inverse-default` | `#222427` (Wolf 900) |
 * | **Texto** | `--color-text-inverse-primary` | `#F8F8F8` (Blanco) |
 * | **Flecha (Arrow)** | `--color-surface-inverse-default` | Mismo color que el fondo |
 */
const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    arrow: {
      control: 'select',
      options: [
        'none',
        'bottom-center',
        'bottom-left',
        'bottom-right',
        'top-center',
        'top-left',
        'top-right',
        'left',
        'right',
      ],
      description: 'Posición y dirección de la flecha indicadora',
    },
    label: {
      control: 'text',
      description: 'Texto del tooltip',
    },
    delayDuration: {
      control: 'number',
      description: 'Retardo de aparición en ms (por defecto 250)',
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita el tooltip',
    },
  },
  args: {
    label: 'Guardar cambios (Ctrl+S)',
    arrow: 'bottom-center',
    delayDuration: 200,
    disabled: false,
  },
  render: (args) => ({
    components: { Tooltip, Button },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 60px; display: flex; justify-content: center;">
        <Tooltip v-bind="args">
          <Button>Pasa el ratón aquí</Button>
        </Tooltip>
      </div>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {}

export const OnIconButton: Story = {
  render: () => ({
    components: { Tooltip, ButtonIcon, AddPlusIcon, TrashIcon, CircleHelpIcon },
    setup() {
      return { AddPlusIcon, TrashIcon, CircleHelpIcon }
    },
    template: `
      <div style="padding: 60px; display: flex; gap: var(--spacing-6); justify-content: center;">
        <Tooltip label="Crear nuevo elemento" arrow="bottom-center">
          <ButtonIcon variant="secondary" aria-label="Crear">
            <AddPlusIcon style="width: var(--sizing-7); height: var(--sizing-7);" />
          </ButtonIcon>
        </Tooltip>

        <Tooltip label="Eliminar permanentemente" arrow="bottom-center">
          <ButtonIcon variant="danger" aria-label="Eliminar">
            <TrashIcon style="width: var(--sizing-7); height: var(--sizing-7);" />
          </ButtonIcon>
        </Tooltip>

        <Tooltip label="Centro de ayuda y soporte" arrow="bottom-center">
          <ButtonIcon variant="ghost" aria-label="Ayuda">
            <CircleHelpIcon style="width: var(--sizing-7); height: var(--sizing-7);" />
          </ButtonIcon>
        </Tooltip>
      </div>
    `,
  }),
}

export const Positions: Story = {
  render: () => ({
    components: { Tooltip, Button },
    template: `
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 80px; padding: 80px; justify-items: center;">
        <Tooltip label="Arrow: bottom-left" arrow="bottom-left">
          <Button variant="secondary" size="sm">Bottom Left</Button>
        </Tooltip>

        <Tooltip label="Arrow: bottom-center" arrow="bottom-center">
          <Button variant="secondary" size="sm">Bottom Center</Button>
        </Tooltip>

        <Tooltip label="Arrow: bottom-right" arrow="bottom-right">
          <Button variant="secondary" size="sm">Bottom Right</Button>
        </Tooltip>

        <Tooltip label="Arrow: right" arrow="right">
          <Button variant="secondary" size="sm">Right</Button>
        </Tooltip>

        <Tooltip label="Arrow: none" arrow="none">
          <Button variant="secondary" size="sm">No Arrow</Button>
        </Tooltip>

        <Tooltip label="Arrow: left" arrow="left">
          <Button variant="secondary" size="sm">Left</Button>
        </Tooltip>

        <Tooltip label="Arrow: top-left" arrow="top-left">
          <Button variant="secondary" size="sm">Top Left</Button>
        </Tooltip>

        <Tooltip label="Arrow: top-center" arrow="top-center">
          <Button variant="secondary" size="sm">Top Center</Button>
        </Tooltip>

        <Tooltip label="Arrow: top-right" arrow="top-right">
          <Button variant="secondary" size="sm">Top Right</Button>
        </Tooltip>
      </div>
    `,
  }),
}

export const WithoutArrow: Story = {
  args: {
    label: 'Tooltip simple sin flecha',
    arrow: 'none',
  },
}
