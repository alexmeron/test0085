<script setup lang="ts">
import { computed } from 'vue'
import { RadioGroupRoot, type RadioGroupRootEmits, type RadioGroupRootProps, useForwardPropsEmits } from 'radix-vue'
import styles from './RadioGroup.module.css'
import { cn } from '../../../lib/utils'

const props = defineProps<RadioGroupRootProps & { class?: string }>()
const emits = defineEmits<RadioGroupRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)

const computedClass = computed(() => {
  return cn(styles.root, props.class)
})
</script>

<template>
  <RadioGroupRoot
    v-bind="forwarded"
    :class="computedClass"
  >
    <slot />
  </RadioGroupRoot>
</template>
