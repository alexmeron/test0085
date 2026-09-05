<script setup lang="ts">
import { TooltipArrow, type TooltipArrowProps } from 'radix-vue'
import styles from './Tooltip.module.css'
import { cn } from '../../../lib/utils'

interface Props extends TooltipArrowProps {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: 10,
  height: 5,
})
</script>

<template>
  <TooltipArrow v-bind="props" :class="cn(styles.arrow, props.class)" />
</template>
