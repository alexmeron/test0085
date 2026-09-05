<script setup lang="ts">
import { computed } from 'vue'
import { radioVariants, type RadioVariants } from './radioVariants'
import styles from './RadioGroup.module.css'
import { cn } from '../../../lib/utils'

interface Props {
  checked?: boolean
  disabled?: boolean
  variant?: RadioVariants['variant']
  size?: RadioVariants['size']
  class?: string
  value?: string | number
  name?: string
}

const props = withDefaults(defineProps<Props>(), {
  checked: false,
  disabled: false,
  variant: 'primary',
  size: 'md',
})

const emits = defineEmits<{
  (e: 'update:checked', value: boolean): void
  (e: 'change', value: boolean): void
}>()

const computedClass = computed(() =>
  cn(radioVariants({ variant: props.variant, size: props.size }), props.class)
)

const dotClass = computed(() => {
  if (props.size === 'sm') return styles['dot-sm']
  if (props.size === 'lg') return styles['dot-lg']
  return styles['dot-md']
})

function handleClick() {
  if (props.disabled) return
  emits('update:checked', !props.checked)
  emits('change', !props.checked)
}
</script>

<template>
  <button
    type="button"
    role="radio"
    :aria-checked="checked"
    :data-state="checked ? 'checked' : 'unchecked'"
    :disabled="disabled"
    :data-disabled="disabled ? '' : undefined"
    :class="computedClass"
    @click="handleClick"
  >
    <span v-if="checked" :class="styles.indicator">
      <span :class="[styles.dot, dotClass]" />
    </span>
  </button>
</template>
