<script setup lang="ts">
import { cn } from '../../../lib/utils'
import styles from './Table.module.css'

interface Props {
  selected?: boolean
  class?: string
}

defineProps<Props>()
</script>

<template>
  <tr :class="cn(styles.row, selected && styles.rowSelected, $props.class)">
    <slot />
  </tr>
</template>
