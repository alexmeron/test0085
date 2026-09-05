<script setup lang="ts">
import { TooltipContent, TooltipPortal, type TooltipContentProps, type TooltipContentEmits, useForwardPropsEmits } from 'radix-vue'
import styles from './Tooltip.module.css'
import { cn } from '../../../lib/utils'

interface Props extends TooltipContentProps {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  sideOffset: 6,
})
const emits = defineEmits<TooltipContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <TooltipPortal>
    <TooltipContent v-bind="forwarded" :class="cn(styles.content, props.class)">
      <slot />
    </TooltipContent>
  </TooltipPortal>
</template>
