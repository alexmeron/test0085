<script setup lang="ts">
import { computed } from 'vue'
import { RadioGroupIndicator, RadioGroupItem, type RadioGroupItemProps, useForwardProps } from 'radix-vue'
import { Circle } from 'lucide-vue-next'
import { radioVariants, type RadioVariants } from './radioVariants'
import { cn } from '../../../lib/utils'

const props = defineProps<RadioGroupItemProps & { class?: string, variant?: RadioVariants['variant'], size?: RadioVariants['size'] }>()

const forwarded = useForwardProps(props)

const computedClass = computed(() => {
  return cn(radioVariants({ variant: props.variant, size: props.size }), props.class)
})
</script>

<template>
  <RadioGroupItem
    v-bind="forwarded"
    :class="computedClass"
  >
    <RadioGroupIndicator class="flex items-center justify-center">
      <Circle class="h-2.5 w-2.5 fill-current text-current" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
