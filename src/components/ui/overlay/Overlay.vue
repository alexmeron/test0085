<script setup lang="ts">
import styles from './Overlay.module.css'
import { cn } from '../../../lib/utils'

interface Props {
  fixed?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  fixed: false,
})

const emits = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>

<template>
  <div
    :class="cn(styles.overlay, props.fixed && styles.fixed, props.class)"
    @click="emits('click', $event)"
  >
    <slot />
  </div>
</template>
