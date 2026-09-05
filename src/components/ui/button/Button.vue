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
  /**
   * Leading icon. Figma prop: "leading-icon"
   * Pass `true` for the default Search icon, or pass a component directly.
   */
  leadingIcon?: boolean | any
  /**
   * Trailing icon. Figma prop: "trailing-icon"
   * Pass `true` for the default ArrowRight icon, or pass a component directly.
   */
  trailingIcon?: boolean | any
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  variant: 'primary',
  size: 'md',
})

const computedClass = computed(() =>
  cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)
)

const resolveIcon = (icon: boolean | any, fallback: any) =>
  icon === true ? fallback : icon

// Icon sizes per Figma:
//   sm/md: 16×16 → sizing/sizing-7
//   lg:    20×20 → sizing/sizing-8
const iconClass = computed(() =>
  props.size === 'lg'
    ? 'w-sizing-8 h-sizing-8 shrink-0'   // sizing/sizing-8 = 20px
    : 'w-sizing-7 h-sizing-7 shrink-0'   // sizing/sizing-7 = 16px
)
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :disabled="disabled"
    :class="computedClass"
  >
    <component
      :is="resolveIcon(leadingIcon, Search)"
      v-if="leadingIcon"
      :class="iconClass"
    />
    <slot />
    <component
      :is="resolveIcon(trailingIcon, ArrowRight)"
      v-if="trailingIcon"
      :class="iconClass"
    />
  </Primitive>
</template>
