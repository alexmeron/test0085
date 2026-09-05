<script setup lang="ts">
import { computed } from 'vue'
import {
  CircleCheckIcon,
  CircleWarningIcon,
  InfoIcon,
  ArrowCircleUpIcon,
  CloseIcon,
  RemoveMinusIcon,
} from '../icon'
import { notificationVariants, type NotificationVariants } from './notificationVariants'
import { ProgressBar } from '../progress-bar'
import { Button } from '../button'
import { cn } from '../../../lib/utils'
import styles from './Notification.module.css'

export interface NotificationProps {
  /**
   * Estado semántico oficial de Figma: default | success | warning | destructive | info | ready
   */
  status?: NotificationVariants['status']
  /**
   * Estilo visual de Figma: muted (suave con borde) | solid (relleno sólido de alto contraste)
   */
  type?: NotificationVariants['type']
  /**
   * Tipo de acción: button (botones estructurados) | link (enlaces ligeros)
   */
  actionType?: 'button' | 'link'
  /**
   * Título principal de la notificación
   */
  title?: string
  /**
   * Descripción del mensaje
   */
  description?: string
  /**
   * Controla la visibilidad de la descripción (show-description en Figma)
   */
  showDescription?: boolean
  /**
   * Controla la visibilidad del icono semántico principal (show-icon en Figma)
   */
  showIcon?: boolean
  /**
   * Icono personalizado (opcional)
   */
  icon?: any
  /**
   * Controla la visibilidad del botón cerrar (Show close en Figma)
   */
  showClose?: boolean
  /**
   * Controla la visibilidad del botón minimizar (Show Minimize en Figma)
   */
  showMinimize?: boolean
  /**
   * Controla la visibilidad de la barra de progreso (show-progress en Figma)
   */
  showProgress?: boolean
  /**
   * Valor del progreso (0 a 100)
   */
  progress?: number
  /**
   * Controla la visibilidad del mensaje de progreso (show-status-message en Figma)
   */
  showStatusMessage?: boolean
  /**
   * Texto del mensaje de estado del progreso
   */
  statusMessage?: string
  /**
   * Controla la visibilidad del grupo de dos acciones (show-actions-two en Figma)
   */
  showActionsTwo?: boolean
  /**
   * Controla la visibilidad del botón primario (Show primary button en Figma)
   */
  showPrimaryButton?: boolean
  /**
   * Etiqueta del botón primario
   */
  primaryButtonLabel?: string
  /**
   * Controla la visibilidad del botón secundario / acción 1 (show-action-one en Figma)
   */
  showActionOne?: boolean
  /**
   * Etiqueta del botón secundario
   */
  secondaryButtonLabel?: string
  /**
   * Controla la visibilidad de la acción secundaria inferior (show-secondary-action en Figma)
   */
  showSecondaryAction?: boolean
  /**
   * Etiqueta de la acción secundaria inferior
   */
  secondaryActionLabel?: string
  /**
   * Controla la visibilidad de la acción inline junto al título (show-inline-action en Figma)
   */
  showInlineAction?: boolean
  /**
   * Etiqueta de la acción inline
   */
  inlineActionLabel?: string
  /**
   * Clases CSS adicionales
   */
  class?: string
}

const props = withDefaults(defineProps<NotificationProps>(), {
  status: 'default',
  type: 'muted',
  actionType: 'button',
  title: 'Título del alert',
  description: 'Descripción del mensaje con información relevante para el usuario.',
  showDescription: true,
  showIcon: true,
  icon: undefined,
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
})

const emits = defineEmits<{
  (e: 'close'): void
  (e: 'minimize'): void
  (e: 'primaryAction'): void
  (e: 'secondaryAction'): void
  (e: 'inlineAction'): void
}>()

// Default icons strictly mapped from Figma instances (node 4237:123980)
const defaultIcon = computed(() => {
  switch (props.status) {
    case 'success':
      return CircleCheckIcon
    case 'warning':
    case 'destructive':
      return CircleWarningIcon
    case 'info':
    case 'default':
      return InfoIcon
    case 'ready':
      return ArrowCircleUpIcon
    default:
      return InfoIcon
  }
})

const effectiveIcon = computed(() => props.icon || defaultIcon.value)

// Progress bar semantic state mapping
const progressState = computed(() => {
  switch (props.status) {
    case 'destructive':
      return 'danger'
    case 'warning':
      return 'warning'
    case 'success':
    case 'ready':
      return 'success'
    case 'info':
      return 'info'
    default:
      return 'neutral'
  }
})
</script>

<template>
  <div
    :class="cn(notificationVariants({ status, type }), props.class)"
    :role="status === 'destructive' || status === 'warning' ? 'alert' : 'status'"
  >
    <!-- Leading Status Icon (Figma Icon-Placeholder, size=sm, 20x20px) -->
    <div v-if="showIcon" :class="styles.iconWrap">
      <slot name="icon">
        <component :is="effectiveIcon" />
      </slot>
    </div>

    <!-- Body Container (Figma body, width: 364, gap: 4, vertical) -->
    <div :class="styles.body">
      <!-- top+progress (Figma top+progress, gap: 12, vertical) -->
      <div :class="styles.topPlusProgress">
        <!-- top-body (Figma top-body, gap: 20, horizontal space-between) -->
        <div :class="styles.topBody">
          <!-- title-wrap (Figma title-wrap, gap: 4, vertical) -->
          <div :class="styles.titleWrap">
            <h4 v-if="title || $slots.title" :class="styles.title">
              <slot name="title">{{ title }}</slot>
            </h4>
            <p v-if="showDescription && (description || $slots.description)" :class="styles.description">
              <slot name="description">{{ description }}</slot>
            </p>
          </div>

          <!-- action-inline (Figma action-inline, 12px, controlled by showInlineAction) -->
          <button
            v-if="showInlineAction"
            type="button"
            :class="styles.actionInline"
            @click="emits('inlineAction')"
          >
            <slot name="inline-action">{{ inlineActionLabel }}</slot>
          </button>
        </div>

        <!-- progress-bar (Figma progress-bar, height: 6px, controlled by showProgress) -->
        <div v-if="showProgress" :class="styles.progressWrap">
          <ProgressBar
            :model-value="progress"
            :state="progressState"
            :mode="type === 'solid' ? 'inverse' : 'default'"
            label="hidden"
          />
        </div>
      </div>

      <!-- status-message (Figma status-message, height: 20px, controlled by showStatusMessage) -->
      <div v-if="showStatusMessage && (statusMessage || $slots['status-message'])" :class="styles.statusMessage">
        <span :class="styles.statusMessageIcon">
          <CircleWarningIcon />
        </span>
        <span>
          <slot name="status-message">{{ statusMessage }}</slot>
        </span>
      </div>

      <!-- two-actions (Figma two-actions, controlled by showActionsTwo) -->
      <div v-if="showActionsTwo && (showPrimaryButton || showActionOne)" :class="styles.twoActions">
        <slot name="two-actions">
          <template v-if="actionType === 'button'">
            <Button
              v-if="showPrimaryButton"
              size="sm"
              :variant="type === 'solid' ? 'tertiary' : 'secondary'"
              @click="emits('primaryAction')"
            >
              {{ primaryButtonLabel }}
            </Button>
            <Button
              v-if="showActionOne"
              size="sm"
              variant="ghost"
              @click="emits('secondaryAction')"
            >
              {{ secondaryButtonLabel }}
            </Button>
          </template>
          <template v-else>
            <button
              v-if="showPrimaryButton"
              type="button"
              :class="styles.actionSecondary"
              @click="emits('primaryAction')"
            >
              {{ primaryButtonLabel }}
            </button>
            <button
              v-if="showActionOne"
              type="button"
              :class="styles.actionSecondary"
              @click="emits('secondaryAction')"
            >
              {{ secondaryButtonLabel }}
            </button>
          </template>
        </slot>
      </div>

      <!-- one-action (Figma one-action, controlled by showSecondaryAction) -->
      <div v-if="showSecondaryAction && (secondaryActionLabel || $slots['secondary-action'])" :class="styles.oneAction">
        <slot name="secondary-action">
          <button
            type="button"
            :class="styles.actionSecondary"
            @click="emits('secondaryAction')"
          >
            {{ secondaryActionLabel }}
          </button>
        </slot>
      </div>
    </div>

    <!-- Header Controls (Figma Minimize & Close button-icons) -->
    <div v-if="showMinimize || showClose" :class="styles.controls">
      <button
        v-if="showMinimize"
        type="button"
        :class="styles.controlButton"
        aria-label="Minimizar notificación"
        @click="emits('minimize')"
      >
        <RemoveMinusIcon />
      </button>
      <button
        v-if="showClose"
        type="button"
        :class="styles.controlButton"
        aria-label="Cerrar notificación"
        @click="emits('close')"
      >
        <CloseIcon />
      </button>
    </div>
  </div>
</template>
