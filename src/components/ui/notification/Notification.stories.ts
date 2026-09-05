import type { Meta, StoryObj } from '@storybook/vue3'
import Notification from './Notification.vue'

/**
 * ## Notification Component
 *
 * Componente unificado 1:1 con Figma (nodo 4237:123980 y documentación 4237:124615).
 * Sin bordes visibles (strokes visible: false en Figma), con textos exactos del diseño.
 *
 * 🔗 **[Ver Componente en Figma (node 4237:123980)](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4237-123980)**  
 * 🔗 **[Ver Documentación Oficial en Figma (node 4237:124615)](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4237-124615)**
 *
 * ---
 *
 * ### 📐 Layout & Propiedades en Figma (4237:123980)
 *
 * | Capa / Propiedad en Figma | Prop en Vue | Valor por Defecto | Texto Oficial en Figma |
 * |---|---|---|---|
 * | `Icon-Placeholder` | `showIcon` | `true` | Icono semántico 20×20px |
 * | `title` | `title` | `'Título del alert'` | "Título del alert" |
 * | `description` | `description`, `showDescription` | `'Descripción del mensaje...'` | "Descripción del mensaje con información relevante para el usuario." |
 * | `action-inline` | `inlineActionLabel`, `showInlineAction` | `false` | "Cancelar" |
 * | `progress-bar` | `showProgress`, `progress` | `true`, `45` | Altura 6px, mode inverse en muted / default en solid, state info |
 * | `status-message` | `statusMessage`, `showStatusMessage` | `true` | "Mensaje progress-bar" |
 * | `two-actions / Button` | `primaryButtonLabel`, `showPrimaryButton` | `true` | "Acción principal" |
 * | `two-actions / Button` | `secondaryButtonLabel`, `showSecondaryAction` | `true` | "Descartar" |
 * | `one-action / action-secondary` | `secondaryActionLabel`, `showActionOne` | `true` | "Cancelar" |
 * | `Button-icon (Minimize)` | `showMinimize` | `true` | Botón icono minimizar 24×24px |
 * | `Button-icon (Close)` | `showClose` | `true` | Botón icono cerrar 24×24px |
 */
const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['default', 'success', 'warning', 'destructive', 'info', 'ready'],
      description: 'Estado semántico de la notificación',
    },
    type: {
      control: 'select',
      options: ['muted', 'solid'],
      description: 'Estilo visual (muted = suave sin borde, solid = fondo sólido de alto contraste)',
    },
    actionType: {
      control: 'select',
      options: ['button', 'link'],
      description: 'Tipo de acción: button (botones) o link (enlaces de texto)',
    },
    title: {
      control: 'text',
      description: 'Título principal de la notificación',
    },
    description: {
      control: 'text',
      description: 'Descripción detallada del mensaje',
    },
    showDescription: {
      control: 'boolean',
      description: 'Muestra u oculta la descripción (show-description)',
    },
    showIcon: {
      control: 'boolean',
      description: 'Muestra u oculta el icono semántico (show-icon)',
    },
    showClose: {
      control: 'boolean',
      description: 'Muestra el botón de cerrar (Show close)',
    },
    showMinimize: {
      control: 'boolean',
      description: 'Muestra el botón de minimizar (Show Minimize)',
    },
    showProgress: {
      control: 'boolean',
      description: 'Muestra la barra de progreso (show-progress)',
    },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 5 },
      description: 'Porcentaje de progreso (0 a 100)',
    },
    showStatusMessage: {
      control: 'boolean',
      description: 'Muestra el mensaje de estado de progreso (show-status-message)',
    },
    statusMessage: {
      control: 'text',
      description: 'Texto del mensaje de estado del progreso',
    },
    showActionsTwo: {
      control: 'boolean',
      description: 'Muestra el grupo de dos acciones (show-actions-two)',
    },
    showPrimaryButton: {
      control: 'boolean',
      description: 'Muestra la acción principal (Show primary button)',
    },
    primaryButtonLabel: {
      control: 'text',
      description: 'Etiqueta del botón de acción principal',
    },
    showSecondaryAction: {
      control: 'boolean',
      description: 'Muestra la segunda acción del grupo (show-secondary-action)',
    },
    secondaryButtonLabel: {
      control: 'text',
      description: 'Etiqueta del botón de descartar',
    },
    showActionOne: {
      control: 'boolean',
      description: 'Muestra la acción secundaria inferior (show-action-one)',
    },
    secondaryActionLabel: {
      control: 'text',
      description: 'Etiqueta de la acción secundaria inferior',
    },
    showInlineAction: {
      control: 'boolean',
      description: 'Muestra una acción inline alineada a la derecha del título (show-inline-action)',
    },
    inlineActionLabel: {
      control: 'text',
      description: 'Texto de la acción inline',
    },
  },
  args: {
    status: 'default',
    type: 'muted',
    actionType: 'button',
    title: 'Título del alert',
    description: 'Descripción del mensaje con información relevante para el usuario.',
    showDescription: true,
    showIcon: true,
    showClose: true,
    showMinimize: true,
    showProgress: true,
    progress: 45,
    showStatusMessage: true,
    statusMessage: 'Mensaje progress-bar',
    showActionsTwo: true,
    showPrimaryButton: true,
    primaryButtonLabel: 'Acción principal',
    showSecondaryAction: true,
    secondaryButtonLabel: 'Descartar',
    showActionOne: true,
    secondaryActionLabel: 'Cancelar',
    showInlineAction: false,
    inlineActionLabel: 'Cancelar',
  },
}

export default meta
type Story = StoryObj<typeof Notification>

/**
 * Estado por defecto de Figma (node 4387:131: status=default, action-type=button, type=muted).
 * Sin bordes, con barra de progreso (track oscuro, indicador azul), botones exactos de Figma y textos oficiales.
 */
export const Default: Story = {}

/**
 * Los 6 estados oficiales en variante suave (muted), 100% idénticos a Figma (sin bordes y con textos oficiales).
 */
export const AllStatesMuted: Story = {
  render: () => ({
    components: { Notification },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-5); max-width: 480px;">
        <Notification status="default" type="muted" />
        <Notification status="success" type="muted" />
        <Notification status="warning" type="muted" />
        <Notification status="destructive" type="muted" />
        <Notification status="info" type="muted" />
        <Notification status="ready" type="muted" />
      </div>
    `,
  }),
}

/**
 * Los 6 estados oficiales en variante sólida de alto contraste (solid), 100% idénticos a Figma con textos oficiales.
 */
export const AllStatesSolid: Story = {
  render: () => ({
    components: { Notification },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-5); max-width: 480px;">
        <Notification status="default" type="solid" />
        <Notification status="success" type="solid" />
        <Notification status="warning" type="solid" />
        <Notification status="destructive" type="solid" />
        <Notification status="info" type="solid" />
        <Notification status="ready" type="solid" />
      </div>
    `,
  }),
}

/**
 * Estado Destructive en ambas variantes (muted y solid).
 */
export const Destructive: Story = {
  render: () => ({
    components: { Notification },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-5); max-width: 480px;">
        <Notification status="destructive" type="muted" />
        <Notification status="destructive" type="solid" />
      </div>
    `,
  }),
}

/**
 * Estado Warning en ambas variantes (muted y solid).
 */
export const Warning: Story = {
  render: () => ({
    components: { Notification },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-5); max-width: 480px;">
        <Notification status="warning" type="muted" />
        <Notification status="warning" type="solid" />
      </div>
    `,
  }),
}

/**
 * Estado Success en ambas variantes (muted y solid).
 */
export const Success: Story = {
  render: () => ({
    components: { Notification },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-5); max-width: 480px;">
        <Notification status="success" type="muted" />
        <Notification status="success" type="solid" />
      </div>
    `,
  }),
}

/**
 * Estado Info en ambas variantes (muted y solid).
 */
export const Info: Story = {
  render: () => ({
    components: { Notification },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-5); max-width: 480px;">
        <Notification status="info" type="muted" />
        <Notification status="info" type="solid" />
      </div>
    `,
  }),
}

/**
 * Estado Ready en ambas variantes (muted y solid).
 */
export const Ready: Story = {
  render: () => ({
    components: { Notification },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-5); max-width: 480px;">
        <Notification status="ready" type="muted" />
        <Notification status="ready" type="solid" />
      </div>
    `,
  }),
}

/**
 * Con acción inline (showInlineAction: true, texto "Cancelar").
 */
export const WithInlineAction: Story = {
  args: {
    showInlineAction: true,
    inlineActionLabel: 'Cancelar',
  },
}
