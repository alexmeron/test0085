import type { Meta, StoryObj } from '@storybook/vue3'
import Notification from './Notification.vue'

/**
 * ## Notification Component
 *
 * Componente unificado que cubre tres patrones de notificación:
 * - **Alert**: inline, persistente en el flujo del documento.
 * - **Toast**: flotante, efímero con auto-dismiss.
 * - **Progress Alert**: inline con barra de progreso para procesos en curso.
 *
 * 🔗 **[Ver en Figma (node 4076:1416)](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4076-1416)**
 *
 * ---
 *
 * ### 📐 Layout & Sizing
 * - **Padding interno**: `--spacing-6` (12px)
 * - **Border Radius**: `--radius-lg` (8px)
 * - **Gap entre elementos**: `--spacing-5` (8px)
 * - **Icono de estado**: 20×20px (`--sizing-8`)
 * - **Icono de cierre**: 16×16px (`--sizing-7`)
 *
 * ---
 *
 * ### 🎨 Tokens de Color
 * | Elemento | Muted | Solid |
 * |---|---|---|
 * | **Fondo** | `--color-{status}-surface-default` | `--color-{status}-surface-strong` |
 * | **Borde** | `1px solid var(--color-{status}-border-default)` | `transparent` |
 * | **Icono** | `--color-{status}-icon-default` | `--color-basic-white` |
 * | **Título** | `--color-text-primary` | `--color-basic-white` |
 * | **Descripción** | `--color-text-secondary` | `rgba(255, 255, 255, 0.9)` |
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
      description: 'Estilo visual de fondo (suave con borde o sólido)',
    },
    title: {
      control: 'text',
      description: 'Título de la notificación',
    },
    description: {
      control: 'text',
      description: 'Mensaje descriptivo',
    },
    showDescription: {
      control: 'boolean',
      description: 'Muestra u oculta la descripción',
    },
    showIcon: {
      control: 'boolean',
      description: 'Muestra u oculta el icono semántico',
    },
    showClose: {
      control: 'boolean',
      description: 'Muestra el botón de cerrar',
    },
    showMinimize: {
      control: 'boolean',
      description: 'Muestra el botón de minimizar',
    },
    showActions: {
      control: 'boolean',
      description: 'Muestra el bloque de acciones',
    },
    actionType: {
      control: 'select',
      options: ['link', 'button'],
      description: 'Tipo visual de las acciones (enlace o botón)',
    },
    primaryActionLabel: {
      control: 'text',
      description: 'Texto de la acción primaria',
    },
    secondaryActionLabel: {
      control: 'text',
      description: 'Texto de la acción secundaria',
    },
    showInlineAction: {
      control: 'boolean',
      description: 'Muestra una acción inline junto al título',
    },
    inlineActionLabel: {
      control: 'text',
      description: 'Texto de la acción inline',
    },
    showProgress: {
      control: 'boolean',
      description: 'Muestra una barra de progreso integrada',
    },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progreso actual (0 a 100)',
    },
    showStatusMessage: {
      control: 'boolean',
      description: 'Muestra un mensaje de estado complementario',
    },
    statusMessage: {
      control: 'text',
      description: 'Texto del mensaje de estado complementario',
    },
  },
  args: {
    status: 'info',
    type: 'muted',
    title: 'Información del sistema',
    description: 'Los cambios se guardarán automáticamente en segundo plano.',
    showDescription: true,
    showIcon: true,
    showClose: true,
    showMinimize: false,
    showActions: false,
    actionType: 'link',
  },
  render: (args) => ({
    components: { Notification },
    setup() {
      return { args }
    },
    template: '<Notification v-bind="args" style="max-width: 520px;" />',
  }),
}

export default meta
type Story = StoryObj<typeof Notification>

export const Default: Story = {}

export const AllStatusesMuted: Story = {
  render: () => ({
    components: { Notification },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-6); max-width: 520px;">
        <Notification
          status="info"
          type="muted"
          title="Actualización disponible"
          description="Una nueva versión de la aplicación está lista para instalar."
        />
        <Notification
          status="success"
          type="muted"
          title="Cambios guardados con éxito"
          description="Tu configuración ha sido actualizada correctamente."
        />
        <Notification
          status="warning"
          type="muted"
          title="Conexión inestable"
          description="Algunos servicios pueden tardar más de lo habitual en responder."
        />
        <Notification
          status="destructive"
          type="muted"
          title="Error al procesar la solicitud"
          description="No pudimos cargar los datos. Por favor, inténtalo de nuevo."
        />
        <Notification
          status="ready"
          type="muted"
          title="Nuevas funciones listas"
          description="Descubre las herramientas añadidas en esta versión."
        />
        <Notification
          status="default"
          type="muted"
          title="Notificación general"
          description="Este es un aviso informativo para el usuario."
        />
      </div>
    `,
  }),
}

export const AllStatusesSolid: Story = {
  render: () => ({
    components: { Notification },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-6); max-width: 520px;">
        <Notification
          status="info"
          type="solid"
          title="Actualización disponible"
          description="Una nueva versión de la aplicación está lista para instalar."
        />
        <Notification
          status="success"
          type="solid"
          title="Cambios guardados con éxito"
          description="Tu configuración ha sido actualizada correctamente."
        />
        <Notification
          status="warning"
          type="solid"
          title="Conexión inestable"
          description="Algunos servicios pueden tardar más de lo habitual en responder."
        />
        <Notification
          status="destructive"
          type="solid"
          title="Error crítico del sistema"
          description="Se ha producido un fallo y no se pudo completar la operación."
        />
        <Notification
          status="ready"
          type="solid"
          title="Nuevas funciones listas"
          description="Descubre las herramientas añadidas en esta versión."
        />
        <Notification
          status="default"
          type="solid"
          title="Notificación general"
          description="Este es un aviso informativo para el usuario."
        />
      </div>
    `,
  }),
}

export const WithActionsButton: Story = {
  args: {
    status: 'warning',
    type: 'muted',
    title: 'Cambios sin guardar',
    description: 'Perderás los cambios no guardados si sales de esta página ahora.',
    showActions: true,
    actionType: 'button',
    primaryActionLabel: 'Guardar cambios',
    secondaryActionLabel: 'Descartar',
  },
}

export const WithActionsLink: Story = {
  args: {
    status: 'info',
    type: 'muted',
    title: 'Nueva versión disponible',
    description: 'Hemos renovado la interfaz con mejoras de rendimiento.',
    showActions: true,
    actionType: 'link',
    primaryActionLabel: 'Ver novedades',
    secondaryActionLabel: 'Descartar',
  },
}

export const ProgressAlert: Story = {
  args: {
    status: 'info',
    type: 'muted',
    title: 'Cargando recursos del proyecto',
    description: 'Sincronizando archivos con el servidor remoto...',
    showProgress: true,
    progress: 68,
    showActions: true,
    actionType: 'link',
    primaryActionLabel: 'Cancelar',
    secondaryActionLabel: '',
  },
}

export const WithStatusMessage: Story = {
  args: {
    status: 'warning',
    type: 'muted',
    title: 'Procesando exportación',
    description: 'El archivo es grande y tomará unos minutos.',
    showProgress: true,
    progress: 42,
    showStatusMessage: true,
    statusMessage: 'Conexión lenta detectada, continuando en segundo plano...',
    showActions: true,
    actionType: 'link',
    primaryActionLabel: 'Cancelar proceso',
    secondaryActionLabel: '',
  },
}
