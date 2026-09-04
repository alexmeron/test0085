<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { type ButtonVariants, buttonVariants } from './buttonVariants'
import { cn } from '../../../lib/utils'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: 'icon-sm' | 'icon-md' | 'icon-lg'
  disabled?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  variant: 'primary',
  size: 'icon-md',
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
