<script setup lang="ts">
import { computed } from 'vue'
import { linkVariants, type LinkVariants } from './linkVariants'
import { cn } from '../../../lib/utils'

interface Props {
  as?: string
  href?: string
  variant?: LinkVariants['variant']
  size?: LinkVariants['size']
  state?: LinkVariants['state']
  disabled?: boolean
  label?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'a',
  variant: 'brand',
  size: 'sm',
  state: 'default',
  disabled: false,
})

const computedState = computed(() => (props.disabled ? 'disabled' : props.state))
</script>

<template>
  <component
    :is="as"
    :href="disabled ? undefined : href"
    :class="cn(linkVariants({ variant, size, state: computedState }), props.class)"
    :aria-disabled="disabled ? 'true' : undefined"
    :tabindex="disabled ? -1 : undefined"
  >
    <slot>{{ label }}</slot>
  </component>
</template>
