<script setup lang="ts">
import { computed } from 'vue'
import { useVModel } from '@vueuse/core'
import { inputVariants, type InputVariants } from './inputVariants'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: string
  state?: InputVariants['state']
  size?: InputVariants['size']
  placeholder?: string
  disabled?: boolean
  type?: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const computedClass = computed(() => {
  return cn(inputVariants({ state: props.state, size: props.size }), props.class)
})
</script>

<template>
  <input
    v-model="modelValue"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled || state === 'disabled'"
    :class="computedClass"
  >
</template>
