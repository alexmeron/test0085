<script setup lang="ts">
import { cn } from '../../../lib/utils'
import styles from './Table.module.css'

interface Props {
  class?: string
}

defineProps<Props>()
</script>

<template>
  <td :class="cn(styles.cell, $props.class)">
    <slot />
  </td>
</template>
