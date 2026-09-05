<script setup lang="ts">
import { cn } from '../../../lib/utils'
import styles from './Table.module.css'

interface Props {
  class?: string
}

defineProps<Props>()
</script>

<template>
  <thead :class="cn(styles.header, $props.class)">
    <slot />
  </thead>
</template>
