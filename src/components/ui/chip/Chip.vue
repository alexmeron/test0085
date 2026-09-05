<script setup lang="ts">
import { computed } from 'vue'
import { chipVariants, type ChipVariants } from './chipVariants'
import { cn } from '../../../lib/utils'

interface Props {
  state?: ChipVariants['state']
  variant?: ChipVariants['variant']
  size?: ChipVariants['size']
  class?: string
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  state: 'neutral',
  variant: 'subtle',
  size: 'md',
})

const computedClass = computed(() =>
  cn(chipVariants({ state: props.state, variant: props.variant, size: props.size }), props.class)
)
</script>

<template>
  <span :class="computedClass">
    <slot>{{ label }}</slot>
  </span>
</template>
