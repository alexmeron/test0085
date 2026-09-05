<script setup lang="ts">
import { ArrowUpDown } from 'lucide-vue-next'
import { cn } from '../../../lib/utils'
import styles from './Table.module.css'

interface Props {
  sortable?: boolean
  class?: string
}

defineProps<Props>()
const emits = defineEmits<{
  (e: 'sort'): void
}>()
</script>

<template>
  <th :class="cn(styles.headCell, $props.class)">
    <div
      v-if="sortable"
      :class="styles.sortableHeader"
      role="button"
      tabindex="0"
      @click="emits('sort')"
      @keydown.enter="emits('sort')"
    >
      <slot />
      <span :class="styles.sortIcon">
        <ArrowUpDown style="width: var(--sizing-6); height: var(--sizing-6);" />
      </span>
    </div>
    <template v-else>
      <slot />
    </template>
  </th>
</template>
