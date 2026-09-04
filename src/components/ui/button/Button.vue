<script setup lang="ts">
import { computed } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { buttonVariants, type ButtonVariants } from './buttonVariants'
import { cn } from '../../../lib/utils'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  disabled?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})

const computedClass = computed(() => {
  console.log("Button computedClass:", cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)); return cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="computedClass"
  >
    <slot />
  </Primitive>
</template>
