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
 * La variante se determina por la posición y comportamiento que el front-end le asigne, no por el componente en sí.
 *
 * 🔗 **[Ver Componente en Figma (node 4237:123980)](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4237-123980)**  
 * 🔗 **[Ver Documentación Oficial en Figma (node 4237:124615)](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4237-124615)**
 *
 * ---
 *
 * ### 📐 Layout & Tokens de Diseño (Figma 4237:124615)
 *
 * | Token | Valor | Uso |
 * |---|---|---|
 * | `color/{status}/surface` | Varía por status | Fondo de la Notification |
 * | `color/{status}/border` | Varía por status | Borde de la Notification |
 * | `color/{status}/icon` | Varía por status | Color del icono |
 * | `color/{status}/text` | Varía por status | Título y descripción |
 * | `spacing/spacing-4` | 16px | Padding interno (o 12px en variantes compactas) |
 * | `spacing/spacing-3` | 12px | Gap entre icon, body y close |
 * | `radius/radius-md` | 8px | Border radius del contenedor |
 * | `color/link/brand/default` | `bronx/700` | Color de la acción primaria (link) |
 * | `color/link/secondary/default` | `wolf/950` | Color de la acción secundaria (Descartar) |
 * | `font-size/text-small` | 14px | Tamaño del título (font-weight: 600) |
 * | `font-size/caption-big` | 12px | Tamaño de la descripción y status-message |
 *
 * ---
 *
 * ### 📋 Do's & Don'ts
 * - **✓ Do**: Usar como Toast cuando el mensaje es respuesta directa a una acción del usuario y no requiere atención sostenida.
 * - **✓ Do**: Usar como Alert cuando el estado persiste y el usuario necesita verlo mientras siga siendo relevante.
 * - **✓ Do**: Usar Progress Alert con `show-progress=true` solo en status `default`, `info`, `warning` o `destructive` — nunca en `success` o `ready`.
 * - **✓ Do**: Usar `action-type="button"` cuando la acción primaria tiene peso real (guardar, reintentar, confirmar).
 * - **✕ Don't**: Activar `show-progress=true` en `success` o `ready` — el proceso ya terminó, no hay progreso que mostrar.
 * - **✕ Don't**: Usar `status="destructive"` para mensajes puramente informativos o de éxito.
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
      description: 'Estilo visual de fondo (suave con borde o sólido de alto contraste)',
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
      description: 'Tipo de acción (enlace ligero o botón estructurado)',
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
      description: 'Muestra una acción inline alineada a la derecha del título',
    },
    inlineActionLabel: {
      control: 'text',
      description: 'Texto de la acción inline',
    },
    showProgress: {
      control: 'boolean',
      description: 'Muestra la barra de progreso integrada',
    },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 5 },
      description: 'Porcentaje de progreso (0–100)',
    },
    showStatusMessage: {
      control: 'boolean',
      description: 'Muestra el mensaje secundario debajo de la barra de progreso',
    },
    statusMessage: {
      control: 'text',
      description: 'Texto del mensaje de estado del proceso',
    },
  },
  args: {
    status: 'default',
    type: 'muted',
    title: 'Título del alert',
    description: 'Descripción del mensaje con información relevante para el usuario.',
    showDescription: true,
    showIcon: true,
    showClose: true,
    showMinimize: false,
    showActions: false,
    actionType: 'link',
    primaryActionLabel: 'Acción principal',
    secondaryActionLabel: 'Descartar',
    showInlineAction: false,
    inlineActionLabel: 'Cancelar',
    showProgress: false,
    progress: 45,
    showStatusMessage: false,
    statusMessage: 'Mensaje progress-bar',
  },
}

export default meta
type Story = StoryObj<typeof Notification>

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
 * Los 6 estados semánticos oficiales en variante sólida de alto contraste.
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
 * Con botones de acción estructurados (actionType="button").
 * En muted: botón secundario + botón ghost.
 * En solid: botón terciario + botón ghost.
 */
export const WithButtonActions: Story = {
  render: () => ({
    components: { Notification },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-5); max-width: 500px;">
        <Notification
          status="warning"
          type="muted"
          title="Cambios sin guardar"
          description="Perderás los cambios no guardados si sales de esta pantalla."
          :show-actions="true"
          action-type="button"
          primary-action-label="Guardar cambios"
          secondary-action-label="Descartar"
        />
        <Notification
          status="destructive"
          type="solid"
          title="Eliminar registro médico"
          description="¿Estás seguro de que deseas eliminar permanentemente este caso?"
          :show-actions="true"
          action-type="button"
          primary-action-label="Eliminar caso"
          secondary-action-label="Cancelar"
        />
      </div>
    `,
  }),
}

/**
 * Con enlaces de acción ligeros (actionType="link").
 */
export const WithLinkActions: Story = {
  render: () => ({
    components: { Notification },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-5); max-width: 500px;">
        <Notification
          status="info"
          type="muted"
          title="Actualización del protocolo"
          description="Consulta las nuevas guías clínicas actualizadas para 2026."
          :show-actions="true"
          action-type="link"
          primary-action-label="Ver guías clínicas"
          secondary-action-label="Descartar"
        />
      </div>
    `,
  }),
}

/**
 * Con acción inline alineada a la derecha del título.
 */
export const WithInlineAction: Story = {
  args: {
    status: 'info',
    type: 'muted',
    title: 'Sincronizando expedientes',
    description: 'Se están descargando los últimos estudios radiológicos.',
    showInlineAction: true,
    inlineActionLabel: 'Cancelar',
  },
}

/**
 * Progress Alert: inline con barra de progreso y mensaje de estado para procesos activos.
 */
export const ProgressAlert: Story = {
  args: {
    status: 'info',
    type: 'muted',
    title: 'Importando archivos DICOM',
    description: 'El proceso puede tardar unos minutos según el tamaño.',
    showProgress: true,
    progress: 60,
    showStatusMessage: true,
    statusMessage: 'Procesando serie tomográfica (120 de 200 cortes)...',
    showInlineAction: true,
    inlineActionLabel: 'Cancelar',
    showMinimize: true,
  },
}

/**
 * Variante Toast: flotante, efímera con botón de cierre.
 */
export const Toast: Story = {
  args: {
    status: 'success',
    type: 'solid',
    title: 'Solicitud creada con éxito',
    description: 'Se ha asignado el identificador OST-234985.',
    showClose: true,
    showMinimize: false,
    showActions: false,
  },
}
