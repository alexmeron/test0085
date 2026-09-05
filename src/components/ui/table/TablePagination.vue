<script setup lang="ts">
import styles from './Table.module.css'
import { cn } from '../../../lib/utils'

interface Props {
  page?: number
  totalPages?: number
  totalItems?: number
  itemsPerPage?: number
  text?: string
  class?: string
}

withDefaults(defineProps<Props>(), {
  page: 1,
  totalPages: 1,
  totalItems: 0,
  itemsPerPage: 10,
  text: '',
})
</script>

<template>
  <div :class="cn(styles.bottomBar, $props.class)">
    <p :class="styles.paginationText">
      <slot name="text">
        {{ text || `Total: ${totalItems} resultados` }}
      </slot>
    </p>

    <div v-if="$slots.pagination || $slots.actions || $slots.default" :class="styles.paginationControls">
      <slot name="pagination">
        <slot name="actions">
          <slot />
        </slot>
      </slot>
    </div>
  </div>
</template>

