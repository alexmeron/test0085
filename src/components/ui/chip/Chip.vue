<script setup lang="ts">
import { computed } from 'vue'
import {
  CircleWarningIcon,
  WipIcon,
  ArrowCircleUpIcon,
  AdvancedIcon,
  CircleCheckIcon,
  StopSignIcon,
  CloseSmIcon,
} from '../icon'
import { chipVariants, type ChipVariants } from './chipVariants'
import styles from './Chip.module.css'
import { cn } from '../../../lib/utils'

interface Props {
  state?: ChipVariants['state']
  variant?: ChipVariants['variant']
  size?: ChipVariants['size']
  class?: string
  label?: string
  leadingIcon?: boolean
  trailingIcon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  state: 'neutral',
  variant: 'subtle',
  size: 'md',
  leadingIcon: true,
  trailingIcon: true,
})

const emits = defineEmits<{
  (e: 'click:trailing'): void
}>()

const computedClass = computed(() =>
  cn(chipVariants({ state: props.state, variant: props.variant, size: props.size }), props.class)
)

const showIcons = computed(() => props.size !== 'badge' && props.state !== 'ended')

const defaultLeadingIcon = computed(() => {
  switch (props.state) {
    case 'destructive':
      return CircleWarningIcon
    case 'info':
      return WipIcon
    case 'ready':
      return ArrowCircleUpIcon
    case 'warning':
      return AdvancedIcon
    case 'success':
      return CircleCheckIcon
    case 'neutral':
      return StopSignIcon
    case 'ended':
    default:
      return null
  }
})
</script>

<template>
  <span :class="computedClass">
    <!-- Leading Icon (exact icon per Figma state) -->
    <span v-if="showIcons && leadingIcon" :class="styles.iconLeading">
      <slot name="leading">
        <component
          :is="defaultLeadingIcon"
          v-if="defaultLeadingIcon"
          style="width: 100%; height: 100%;"
        />
      </slot>
    </span>

    <!-- Label -->
    <span :class="styles.label">
      <slot>{{ label }}</slot>
    </span>

    <!-- Trailing Icon (Menu/Close_SM in Figma) -->
    <span
      v-if="showIcons && trailingIcon"
      :class="styles.iconTrailing"
      style="cursor: pointer;"
      @click.stop="emits('click:trailing')"
    >
      <slot name="trailing">
        <CloseSmIcon style="width: 100%; height: 100%;" />
      </slot>
    </span>
  </span>
</template>
