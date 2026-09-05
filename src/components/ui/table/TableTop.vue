<script setup lang="ts">
import { cn } from '../../../lib/utils'
import styles from './Table.module.css'

interface Props {
  title?: string
  showTitle?: boolean
  class?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Solicitudes',
  showTitle: true,
})
</script>

<template>
  <div :class="cn(styles.topBar, $props.class)">
    <h3 v-if="showTitle && (title || $slots.title)" :class="styles.title">
      <slot name="title">{{ title }}</slot>
    </h3>

    <div v-if="$slots.filters" :class="styles.filters">
      <slot name="filters" />
    </div>
  </div>
</template>

