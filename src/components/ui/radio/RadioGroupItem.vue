<script setup lang="ts">
import { computed } from 'vue'
import { RadioGroupIndicator, RadioGroupItem, type RadioGroupItemProps, useForwardProps } from 'radix-vue'
import { radioVariants, type RadioVariants } from './radioVariants'
import styles from './RadioGroup.module.css'
import { cn } from '../../../lib/utils'

interface Props extends RadioGroupItemProps {
  class?: string
  variant?: RadioVariants['variant']
  size?: RadioVariants['size']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
})

const forwarded = useForwardProps(props)

const computedClass = computed(() => {
  return cn(radioVariants({ variant: props.variant, size: props.size }), props.class)
})

const dotClass = computed(() => {
  if (props.size === 'sm') return styles['dot-sm']
  if (props.size === 'lg') return styles['dot-lg']
  return styles['dot-md']
})
</script>

<template>
  <RadioGroupItem
    v-bind="forwarded"
    :class="computedClass"
  >
    <RadioGroupIndicator :class="styles.indicator">
      <span :class="[styles.dot, dotClass]" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
