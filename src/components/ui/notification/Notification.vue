<script setup lang="ts">
import { computed } from 'vue'
import {
  CircleCheckIcon,
  TriangleWarningIcon,
  CircleWarningIcon,
  InfoIcon,
  StarIcon,
  BellIcon,
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
  title: '',
  description: '',
  showDescription: true,
  showIcon: true,
  showClose: true,
  showMinimize: false,
  showActions: false,
  actionType: 'link',
  primaryActionLabel: 'Aceptar',
  secondaryActionLabel: 'Cancelar',
  showInlineAction: false,
  inlineActionLabel: 'Acción',
  showProgress: false,
  progress: 0,
  showStatusMessage: false,
  statusMessage: '',
})

const emits = defineEmits<{
  (e: 'close'): void
  (e: 'minimize'): void
  (e: 'primaryAction'): void
  (e: 'secondaryAction'): void
  (e: 'inlineAction'): void
}>()

const defaultIcon = computed(() => {
  switch (props.status) {
    case 'success':
      return CircleCheckIcon
    case 'warning':
      return TriangleWarningIcon
    case 'destructive':
      return CircleWarningIcon
    case 'info':
      return InfoIcon
    case 'ready':
      return StarIcon
    default:
      return BellIcon
  }
})

const effectiveIcon = computed(() => props.icon || defaultIcon.value)

// Progress bar semantic mapping to status
const progressState = computed(() => {
  switch (props.status) {
    case 'destructive':
      return 'danger'
    case 'warning':
      return 'warning'
    case 'success':
      return 'success'
    case 'ready':
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
    <!-- Leading Status Icon -->
    <div v-if="showIcon" :class="styles.iconWrap">
      <slot name="icon">
        <component :is="effectiveIcon" style="width: var(--sizing-8); height: var(--sizing-8);" />
      </slot>
    </div>

    <!-- Body -->
    <div :class="styles.body">
      <!-- Title & Description row -->
      <div :class="styles.topRow">
        <div :class="styles.titleWrap">
          <h4 v-if="title || $slots.title" :class="styles.title">
            <slot name="title">{{ title }}</slot>
          </h4>
          <p v-if="showDescription && (description || $slots.description)" :class="styles.description">
            <slot name="description">{{ description }}</slot>
          </p>
        </div>

        <!-- Optional Inline Action -->
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

      <!-- Optional Progress Bar -->
      <div v-if="showProgress && status !== 'success' && status !== 'ready'" :class="styles.progressWrap">
        <ProgressBar
          :model-value="progress"
          :state="progressState"
          :mode="type === 'solid' ? 'inverse' : 'default'"
          label="right"
        />
      </div>

      <!-- Optional Status Message -->
      <div v-if="showStatusMessage && (statusMessage || $slots['status-message'])" :class="styles.statusMessage">
        <span :class="styles.statusMessageIcon">
          <CircleWarningIcon style="width: var(--sizing-7); height: var(--sizing-7);" />
        </span>
        <span>
          <slot name="status-message">{{ statusMessage }}</slot>
        </span>
      </div>

      <!-- Actions (button or link) -->
      <div v-if="showActions" :class="styles.actionsRow">
        <slot name="actions">
          <template v-if="actionType === 'button'">
            <Button
              size="sm"
              :variant="type === 'solid' ? 'secondary' : 'primary'"
              @click="emits('primaryAction')"
            >
              {{ primaryActionLabel }}
            </Button>
            <Button
              v-if="secondaryActionLabel"
              size="sm"
              variant="tertiary"
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
        aria-label="Minimize notification"
        @click="emits('minimize')"
      >
        <RemoveMinusIcon style="width: var(--sizing-7); height: var(--sizing-7);" />
      </button>
      <button
        v-if="showClose"
        type="button"
        :class="styles.controlButton"
        aria-label="Close notification"
        @click="emits('close')"
      >
        <CloseIcon style="width: var(--sizing-7); height: var(--sizing-7);" />
      </button>
    </div>
  </div>
</template>
