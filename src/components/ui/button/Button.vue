<script setup lang="ts">
import { computed } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { buttonVariants, type ButtonVariants } from './buttonVariants'
import styles from './Button.module.css'
import { cn } from '../../../lib/utils'
import { Image01Icon } from '../icon'

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

const iconWrapperClass = computed(() => {
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
    :class="computedClass"
  >
    <span v-if="leadingIcon" :class="iconWrapperClass">
      <slot name="leading">
        <component
          :is="resolveIcon(leadingIcon, Image01Icon)"
          style="width: 100%; height: 100%;"
        />
      </slot>
    </span>
    <slot />
    <span v-if="trailingIcon" :class="iconWrapperClass">
      <slot name="trailing">
        <component
          :is="resolveIcon(trailingIcon, Image01Icon)"
          style="width: 100%; height: 100%;"
        />
      </slot>
    </span>
  </Primitive>
</template>
