<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { type ButtonIconVariants, buttonIconVariants } from './buttonIconVariants'
import styles from './ButtonIcon.module.css'
import { cn } from '../../../lib/utils'
import { Image01Icon } from '../icon'

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

const iconClass = computed(() => {
  if (props.size === 'lg') {
    return `${styles.icon} ${styles['icon-lg']}`
  }
  if (props.size === 'sm') {
    return `${styles.icon} ${styles['icon-sm']}`
  }
  return `${styles.icon} ${styles['icon-md']}`
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :disabled="disabled"
    :class="cn(buttonIconVariants({ variant, size }), props.class)"
  >
    <span :class="iconClass">
      <slot>
        <Image01Icon style="width: 100%; height: 100%;" />
      </slot>
    </span>
  </Primitive>
</template>
