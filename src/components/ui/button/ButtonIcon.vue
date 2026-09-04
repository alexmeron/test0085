<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { type ButtonIconVariants, buttonIconVariants } from './buttonIconVariants'
import { cn } from '../../../lib/utils'

interface Props extends PrimitiveProps {
  variant?: ButtonIconVariants['variant']
  size?: ButtonIconVariants['size']
  disabled?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  variant: 'primary',
  size: 'md',
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonIconVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
