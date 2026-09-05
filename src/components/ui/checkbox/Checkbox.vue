<script setup lang="ts">
import { computed } from 'vue'
import { CheckboxRoot, type CheckboxRootProps, CheckboxIndicator, type CheckboxRootEmits, useForwardPropsEmits } from 'radix-vue'
import { CheckIcon, RemoveMinusIcon } from '../icon'
import { checkboxVariants, type CheckboxVariants } from './checkboxVariants'
import styles from './Checkbox.module.css'
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

const computedClass = computed(() =>
  cn(checkboxVariants({ variant: props.variant, size: props.size }), props.class)
)

const iconClass = computed(() => {
  if (props.size === 'sm') return styles['icon-sm']
  if (props.size === 'lg') return styles['icon-lg']
  return styles['icon-md']
})
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="computedClass"
    v-slot="{ checked: isChecked }"
  >
    <CheckboxIndicator :class="styles.indicator">
      <slot :checked="isChecked">
        <RemoveMinusIcon v-if="isChecked === 'indeterminate'" :class="iconClass" />
        <CheckIcon v-else :class="iconClass" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
