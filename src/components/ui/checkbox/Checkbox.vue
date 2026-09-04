<script setup lang="ts">
import { computed } from 'vue'
import { CheckboxRoot, type CheckboxRootProps, CheckboxIndicator, type CheckboxRootEmits, useForwardPropsEmits } from 'radix-vue'
import { Check, Minus } from 'lucide-vue-next'
import { checkboxVariants, type CheckboxVariants } from './checkboxVariants'
import { cn } from '../../../lib/utils'

const props = defineProps<CheckboxRootProps & { class?: string, variant?: CheckboxVariants['variant'], size?: CheckboxVariants['size'] }>()
const emits = defineEmits<CheckboxRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)

const computedClass = computed(() => {
  return cn(checkboxVariants({ variant: props.variant, size: props.size }), props.class)
})
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="computedClass"
  >
    <CheckboxIndicator class="flex h-full w-full items-center justify-center text-current">
      <slot>
        <Check v-if="checked === true" class="h-3.5 w-3.5" />
        <Minus v-else-if="checked === 'indeterminate'" class="h-3.5 w-3.5" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
