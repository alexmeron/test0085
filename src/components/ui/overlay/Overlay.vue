<script setup lang="ts">
import { computed } from 'vue'
import styles from './Overlay.module.css'
import { cn } from '../../../lib/utils'

interface Props {
  position?: 'fixed' | 'absolute' | 'static'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  position: 'fixed',
})

const emits = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const computedClass = computed(() => {
  return cn(
    styles.overlay,
    props.position === 'fixed' && styles['position-fixed'],
    props.position === 'absolute' && styles['position-absolute'],
    props.position === 'static' && styles['position-static'],
    props.class
  )
})
</script>

<template>
  <div :class="computedClass" @click="emits('click', $event)">
    <slot />
  </div>
</template>
