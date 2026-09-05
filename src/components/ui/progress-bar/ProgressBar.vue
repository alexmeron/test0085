<script setup lang="ts">
import { computed } from 'vue'
import { ProgressRoot, ProgressIndicator } from 'radix-vue'
import { cn } from '../../../lib/utils'
import styles from './ProgressBar.module.css'
import { progressBarVariants, type ProgressBarVariants } from './progressBarVariants'

const props = withDefaults(
  defineProps<{
    modelValue?: number
    max?: number
    mode?: ProgressBarVariants['mode']
    state?: ProgressBarVariants['state']
    label?: ProgressBarVariants['label']
    labelText?: string
    class?: string
  }>(),
  {
    modelValue: 0,
    max: 100,
    mode: 'default',
    state: 'info',
    label: 'hidden',
  }
)

const percentage = computed(() => {
  const val = typeof props.modelValue === 'number' ? props.modelValue : 0
  const max = props.max || 100
  return Math.min(Math.max(Math.round((val / max) * 100), 0), 100)
})

const displayLabel = computed(() => {
  if (props.labelText !== undefined) return props.labelText
  return `${percentage.value}%`
})
</script>

<template>
  <div :class="cn(progressBarVariants({ mode, state, label }), props.class)">
    <ProgressRoot
      :model-value="percentage"
      :max="100"
      :class="styles.track"
    >
      <ProgressIndicator
        :class="styles.indicator"
        :style="{ transform: `translateX(-${100 - percentage}%)` }"
      />
    </ProgressRoot>

    <span v-if="label !== 'hidden'" :class="styles.label">
      <slot name="label">{{ displayLabel }}</slot>
    </span>
  </div>
</template>
