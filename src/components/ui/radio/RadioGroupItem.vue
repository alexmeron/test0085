<script setup lang="ts">
import { computed } from 'vue'
import { RadioGroupIndicator, RadioGroupItem, type RadioGroupItemProps, useForwardProps } from 'radix-vue'
import { radioVariants, type RadioVariants } from './radioVariants'
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

// Exact Figma inner dot dimensions:
// sm: 6x6px, md: 7x7px, lg: 9x9px
const dotClass = computed(() => {
  if (props.size === 'sm') return 'w-[6px] h-[6px]'
  if (props.size === 'lg') return 'w-[9px] h-[9px]'
  return 'w-[7px] h-[7px]'
})
</script>

<template>
  <RadioGroupItem
    v-bind="forwarded"
    :class="computedClass"
  >
    <RadioGroupIndicator class="flex items-center justify-center">
      <span class="rounded-full bg-current" :class="dotClass" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
