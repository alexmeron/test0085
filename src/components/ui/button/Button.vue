<script setup lang="ts">
import { computed } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { buttonVariants, type ButtonVariants } from './buttonVariants'
import styles from './Button.module.css'
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
  variant: 'primary',
  size: 'md',
})

const computedClass = computed(() =>
  cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)
)

const resolveIcon = (icon: boolean | any, fallback: any) =>
  icon === true ? fallback : icon

const iconClass = computed(() => {
  if (props.size === 'lg') {
    return `${styles.icon} ${styles['icon-lg']}`
  }
  return `${styles.icon} ${styles['icon-md']}`
})
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
