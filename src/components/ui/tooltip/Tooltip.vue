<script setup lang="ts">
import { computed } from 'vue'
import TooltipProvider from './TooltipProvider.vue'
import TooltipRoot from './TooltipRoot.vue'
import TooltipTrigger from './TooltipTrigger.vue'
import TooltipContent from './TooltipContent.vue'
import TooltipArrow from './TooltipArrow.vue'

export type TooltipArrowPosition =
  | 'none'
  | 'bottom-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'top-left'
  | 'top-right'
  | 'left'
  | 'right'

interface Props {
  label?: string
  arrow?: TooltipArrowPosition
  delayDuration?: number
  disabled?: boolean
  sideOffset?: number
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  arrow: 'bottom-center',
  delayDuration: 250,
  disabled: false,
  sideOffset: 6,
})

const placement = computed(() => {
  switch (props.arrow) {
    case 'bottom-center':
      return { side: 'top' as const, align: 'center' as const }
    case 'bottom-left':
      return { side: 'top' as const, align: 'start' as const }
    case 'bottom-right':
      return { side: 'top' as const, align: 'end' as const }
    case 'top-center':
      return { side: 'bottom' as const, align: 'center' as const }
    case 'top-left':
      return { side: 'bottom' as const, align: 'start' as const }
    case 'top-right':
      return { side: 'bottom' as const, align: 'end' as const }
    case 'left':
      return { side: 'right' as const, align: 'center' as const }
    case 'right':
      return { side: 'left' as const, align: 'center' as const }
    case 'none':
    default:
      return { side: 'top' as const, align: 'center' as const }
  }
})
</script>

<template>
  <TooltipProvider :delay-duration="delayDuration">
    <TooltipRoot :disabled="disabled">
      <TooltipTrigger as-child>
        <slot />
      </TooltipTrigger>

      <TooltipContent
        :side="placement.side"
        :align="placement.align"
        :side-offset="sideOffset"
        :class="props.class"
      >
        <slot name="content">{{ label }}</slot>
        <TooltipArrow v-if="arrow !== 'none'" />
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>
