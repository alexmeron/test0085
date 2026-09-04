<script setup lang="ts">
import { computed } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { buttonVariants, type ButtonVariants } from './buttonVariants'
import { cn } from '../../../lib/utils'
import { Search, ArrowRight } from 'lucide-vue-next'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  disabled?: boolean
  leadingIcon?: boolean | any
  trailingIcon?: boolean | any
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})

const computedClass = computed(() => {
  return cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)
})

const resolveIcon = (icon: boolean | any, defaultIcon: any) => {
  if (icon === true) return defaultIcon
  return icon
}
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="computedClass"
  >
    <component 
      :is="resolveIcon(leadingIcon, Search)" 
      v-if="leadingIcon" 
      class="w-sizing-7 h-sizing-7 shrink-0" 
    />
    <slot />
    <component 
      :is="resolveIcon(trailingIcon, ArrowRight)" 
      v-if="trailingIcon" 
      class="w-sizing-7 h-sizing-7 shrink-0" 
    />
  </Primitive>
</template>
