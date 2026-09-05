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
import { Link } from '../link'
import { cn } from '../../../lib/utils'
import styles from './Notification.module.css'

interface Props {
  status?: NotificationVariants['status']
  type?: NotificationVariants['type']
  title?: string
  description?: string
  showDescription?: boolean
  showIcon?: boolean
  icon?: any
  showClose?: boolean
  showMinimize?: boolean
  showActions?: boolean
  actionType?: 'link' | 'button'
  primaryActionLabel?: string
  secondaryActionLabel?: string
  showInlineAction?: boolean
  inlineActionLabel?: string
  showProgress?: boolean
  progress?: number
  showStatusMessage?: boolean
  statusMessage?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  status: 'default',
  type: 'muted',
  title: 'Título del alert',
  description: 'Descripción del mensaje con información relevante para el usuario.',
  showDescription: true,
  showIcon: true,
  icon: undefined,
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

    <!-- Body Container -->
    <div :class="styles.body">
      <!-- Title, Description & optional Inline Action -->
      <div :class="styles.topRow">
        <div :class="styles.titleWrap">
          <h4 v-if="title || $slots.title" :class="styles.title">
            <slot name="title">{{ title }}</slot>
          </h4>
          <p v-if="showDescription && (description || $slots.description)" :class="styles.description">
            <slot name="description">{{ description }}</slot>
          </p>
        </div>

        <!-- Optional Inline Action (action-inline, 12px) -->
        <div v-if="showInlineAction" :class="styles.inlineAction">
          <Link
            :variant="status === 'destructive' ? 'danger' : 'brand'"
            size="sm"
            @click.prevent="emits('inlineAction')"
          >
            {{ inlineActionLabel }}
          </Link>
        </div>
      </div>

      <!-- Optional Progress Bar (ProgressBar instance, 6px height) -->
      <div v-if="showProgress && status !== 'success' && status !== 'ready'" :class="styles.progressWrap">
        <ProgressBar
          :model-value="progress"
          :state="progressState"
          :mode="type === 'solid' ? 'inverse' : 'default'"
          label="hidden"
        />
      </div>

      <!-- Optional Status Message (CircleWarningIcon + 12px text) -->
      <div v-if="showStatusMessage && (statusMessage || $slots['status-message'])" :class="styles.statusMessage">
        <span :class="styles.statusMessageIcon">
          <CircleWarningIcon />
        </span>
        <span>
          <slot name="status-message">{{ statusMessage }}</slot>
        </span>
      </div>

      <!-- Actions (button or link, 1:1 with Figma) -->
      <div v-if="showActions" :class="styles.actionsRow">
        <slot name="actions">
          <template v-if="actionType === 'button'">
            <Button
              size="sm"
              :variant="type === 'solid' ? 'tertiary' : 'secondary'"
              @click="emits('primaryAction')"
            >
              {{ primaryActionLabel }}
            </Button>
            <Button
              v-if="secondaryActionLabel"
              size="sm"
              variant="ghost"
              @click="emits('secondaryAction')"
            >
              {{ secondaryActionLabel }}
            </Button>
          </template>
          <template v-else>
            <Link
              :variant="status === 'destructive' ? 'danger' : 'brand'"
              size="sm"
              @click.prevent="emits('primaryAction')"
            >
              {{ primaryActionLabel }}
            </Link>
            <Link
              v-if="secondaryActionLabel"
              variant="secondary"
              size="sm"
              @click.prevent="emits('secondaryAction')"
            >
              {{ secondaryActionLabel }}
            </Link>
          </template>
        </slot>
      </div>
    </div>

    <!-- Header Controls (Minimize & Close) -->
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
