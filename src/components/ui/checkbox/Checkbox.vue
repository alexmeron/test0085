<script setup lang="ts">
import { computed } from 'vue'
import { CheckboxRoot, type CheckboxRootProps, CheckboxIndicator, type CheckboxRootEmits, useForwardPropsEmits } from 'radix-vue'
import { Check, Minus } from 'lucide-vue-next'
import { checkboxVariants, type CheckboxVariants } from './checkboxVariants'
import { cn } from '../../../lib/utils'

interface Props extends CheckboxRootProps {
  class?: string
  variant?: CheckboxVariants['variant']
  size?: CheckboxVariants['size']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
})
const emits = defineEmits<CheckboxRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)

const computedClass = computed(() => {
  return cn(checkboxVariants({ variant: props.variant, size: props.size }), props.class)
})

const iconClass = computed(() => {
  if (props.size === 'sm') return 'h-2.5 w-2.5 stroke-[3]'
  if (props.size === 'lg') return 'h-3.5 w-3.5 stroke-[2.5]'
  return 'h-3 w-3 stroke-[3]'
})
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="computedClass"
    v-slot="{ checked: isChecked }"
  >
    <CheckboxIndicator class="flex h-full w-full items-center justify-center text-current">
      <slot :checked="isChecked">
        <Minus v-if="isChecked === 'indeterminate'" :class="iconClass" />
        <Check v-else :class="iconClass" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
