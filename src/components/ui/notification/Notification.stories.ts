import type { Meta, StoryObj } from '@storybook/vue3'
import Notification from './Notification.vue'

/**
 * ## Notification Component
 *
 * Componente unificado 1:1 con Figma que cubre tres patrones de notificación:
 * - **Alert**: inline, persistente en el flujo del documento.
 * - **Toast**: flotante, efímero con auto-dismiss.
 * - **Progress Alert**: inline con barra de progreso para procesos en curso.
 *
 * 🔗 **[Ver Componente en Figma (node 4237:123980)](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4237-123980)**  
 * 🔗 **[Ver Documentación Oficial en Figma (node 4237:124615)](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4237-124615)**
 *
 * ---
 *
 * ### 📐 Layout & Estructura de Capas (Figma 4237:123980)
 *
 * | Capa en Figma | Prop en Vue | Valor por Defecto | Descripción |
 * |---|---|---|---|
 * | `Icon-Placeholder` | `showIcon` | `true` | Icono semántico según `status` (20×20px) |
 * | `body / top+progress` | — | — | Contenedor vertical superior con gap de 12px |
 * | `body / title-wrap` | `title`, `description` | Título / Descripción | Tipografía 14px semibold / 12px medium |
 * | `body / action-inline` | `showInlineAction` | `false` | Enlace ligero inline a la derecha del título |
 * | `body / progress-bar` | `showProgress`, `progress` | `true`, `45` | Barra de progreso con altura de 6px |
 * | `body / status-message` | `showStatusMessage`, `statusMessage` | `true`, `'Mensaje progress-bar'` | Icono 16×16 + texto caption 12px regular |
 * | `body / two-actions` | `showActionsTwo` | `true` | Fila con dos acciones principales |
 * | `two-actions / primary` | `showPrimaryButton`, `primaryButtonLabel` | `true`, `'Acción principal'` | Botón sm (secondary en muted / tertiary en solid) |
 * | `two-actions / secondary` | `showActionOne`, `secondaryButtonLabel` | `true`, `'Descartar'` | Botón sm ghost |
 * | `body / one-action` | `showSecondaryAction`, `secondaryActionLabel` | `true`, `'Cancelar'` | Acción secundaria tipo texto/enlace |
 * | `Button-icon (Minimize)` | `showMinimize` | `true` | Botón icono minimizar 24×24px |
 * | `Button-icon (Close)` | `showClose` | `true` | Botón icono cerrar 24×24px |
 *
 * ---
 *
 * ### 🎨 Tokens de Diseño Asociados
 *
 * | Token | Uso |
 * |---|---|
 * | `color/{status}/surface/*` | Fondo de la notificación (subtle / solid) |
 * | `color/{status}/border/*` | Borde de la notificación en variante muted |
 * | `color/{status}/icon/*` | Color del icono semántico |
 * | `color/text/primary` / `color/text-on-solid` | Color de títulos y textos |
 * | `spacing/spacing-5` (8px) | Espaciado interno horizontal y entre elementos |
 * | `spacing/spacing-3` (4px) | Espaciado vertical entre título y descripción |
 * | `radius/radius-md` (8px) | Redondeo del contenedor principal |
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
      description: 'Estilo visual (muted = suave con borde, solid = fondo sólido de alto contraste)',
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
    showActionOne: {
      control: 'boolean',
      description: 'Muestra la segunda acción del grupo (show-action-one)',
    },
    secondaryButtonLabel: {
      control: 'text',
      description: 'Etiqueta del botón de descartar',
    },
    showSecondaryAction: {
      control: 'boolean',
      description: 'Muestra la acción secundaria inferior (show-secondary-action)',
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
    showActionOne: true,
    secondaryButtonLabel: 'Descartar',
    showSecondaryAction: true,
    secondaryActionLabel: 'Cancelar',
    showInlineAction: false,
    inlineActionLabel: 'Cancelar',
  },
}

export default meta
type Story = StoryObj<typeof Notification>

/**
 * Estado por defecto de Figma (node 4237:123980: status=default, type=muted, action-type=button, todos los toggles por defecto en true salvo inline-action).
 */
export const Default: Story = {}

/**
 * Los 6 estados semánticos oficiales en variante suave (muted con borde).
 */
export const AllStatesMuted: Story = {
  render: () => ({
    components: { Notification },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-5); max-width: 500px;">
        <Notification status="default" type="muted" title="Estado Default" description="Mensaje con información general para el usuario." />
        <Notification status="success" type="muted" title="Operación Exitosa" description="Los cambios se han guardado correctamente." />
        <Notification status="warning" type="muted" title="Advertencia de Sistema" description="Esta acción no se puede deshacer una vez confirmada." />
        <Notification status="destructive" type="muted" title="Error Crítico" description="No se ha podido conectar con el servidor central." />
        <Notification status="info" type="muted" title="Nueva Información" description="Hay una actualización disponible para esta sección." />
        <Notification status="ready" type="muted" title="Listo para Ejecutar" description="Todos los requisitos han sido completados exitosamente." />
      </div>
    `,
  }),
}

/**
 * Los 6 estados semánticos oficiales en variante sólida de alto contraste (solid).
 */
export const AllStatesSolid: Story = {
  render: () => ({
    components: { Notification },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-5); max-width: 500px;">
        <Notification status="default" type="solid" title="Estado Default Sólido" description="Mensaje general en fondo de alto contraste." />
        <Notification status="success" type="solid" title="Completado con Éxito" description="El paciente ha sido registrado en la base de datos." />
        <Notification status="warning" type="solid" title="Atención Requerida" description="Revisa los campos obligatorios antes de continuar." />
        <Notification status="destructive" type="solid" title="Error de Autenticación" description="Tu sesión ha expirado. Inicia sesión nuevamente." />
        <Notification status="info" type="solid" title="Aviso Informativo" description="El mantenimiento del sistema comenzará en 15 minutos." />
        <Notification status="ready" type="solid" title="Planificación Lista" description="El caso OST-234985 está listo para ser planificado." />
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
      <div style="display: flex; flex-direction: column; gap: var(--spacing-5); max-width: 500px;">
        <Notification
          status="destructive"
          type="muted"
          title="Fallo en la importación de datos"
          description="El archivo DICOM seleccionado no contiene metadatos válidos de paciente."
          primary-button-label="Reintentar subida"
          secondary-button-label="Ver registro de errores"
          secondary-action-label="Cancelar operación"
        />
        <Notification
          status="destructive"
          type="solid"
          title="Fallo en la importación de datos"
          description="El archivo DICOM seleccionado no contiene metadatos válidos de paciente."
          primary-button-label="Reintentar subida"
          secondary-button-label="Ver registro de errores"
          secondary-action-label="Cancelar operación"
        />
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
      <div style="display: flex; flex-direction: column; gap: var(--spacing-5); max-width: 500px;">
        <Notification
          status="success"
          type="muted"
          title="Segmentación 3D completada"
          description="El modelo anatómico ha sido generado y verificado correctamente."
          :show-progress="false"
          :show-status-message="false"
          primary-button-label="Abrir visualizador"
          secondary-button-label="Exportar STL"
          :show-secondary-action="false"
        />
        <Notification
          status="success"
          type="solid"
          title="Segmentación 3D completada"
          description="El modelo anatómico ha sido generado y verificado correctamente."
          :show-progress="false"
          :show-status-message="false"
          primary-button-label="Abrir visualizador"
          secondary-button-label="Exportar STL"
          :show-secondary-action="false"
        />
      </div>
    `,
  }),
}

/**
 * Patrón Alert Banner estándar (sin barra de progreso, con acciones principales).
 */
export const AlertBanner: Story = {
  args: {
    status: 'warning',
    type: 'muted',
    title: 'Modo sin conexión',
    description: 'Los cambios se sincronizarán localmente hasta recuperar la conexión a red.',
    showProgress: false,
    showStatusMessage: false,
    showActionsTwo: true,
    primaryButtonLabel: 'Reconectar ahora',
    secondaryButtonLabel: 'Ignorar',
    showSecondaryAction: false,
    showMinimize: false,
  },
}

/**
 * Patrón Toast flotante (compacto, sin acciones ni progreso, con botón cerrar).
 */
export const Toast: Story = {
  args: {
    status: 'success',
    type: 'solid',
    title: 'Expediente actualizado',
    description: 'Los datos del caso OST-234985 han sido sincronizados.',
    showProgress: false,
    showStatusMessage: false,
    showActionsTwo: false,
    showSecondaryAction: false,
    showMinimize: false,
    showClose: true,
  },
}

/**
 * Patrón con acción inline a la derecha del título (showInlineAction=true).
 */
export const WithInlineAction: Story = {
  args: {
    status: 'info',
    type: 'muted',
    title: 'Sincronizando modelos anatómicos',
    description: 'Descargando datos tomográficos de alta resolución.',
    showInlineAction: true,
    inlineActionLabel: 'Detener sincronización',
    showProgress: true,
    progress: 65,
    showStatusMessage: true,
    statusMessage: 'Descargando lote 3 de 5 (45.2 MB)...',
    showActionsTwo: false,
    showSecondaryAction: false,
  },
}
