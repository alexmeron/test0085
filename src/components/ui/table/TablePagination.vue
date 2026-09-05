<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { Button } from '../button'
import styles from './Table.module.css'
import { cn } from '../../../lib/utils'

interface Props {
  page?: number
  totalPages?: number
  totalItems?: number
  itemsPerPage?: number
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  page: 1,
  totalPages: 1,
  totalItems: 0,
  itemsPerPage: 10,
})

const emits = defineEmits<{
  (e: 'update:page', page: number): void
  (e: 'prev'): void
  (e: 'next'): void
}>()

function prev() {
  if (props.page > 1) {
    emits('update:page', props.page - 1)
    emits('prev')
  }
}

function next() {
  if (props.page < props.totalPages) {
    emits('update:page', props.page + 1)
    emits('next')
  }
}
</script>

<template>
  <div :class="cn(styles.bottomBar, props.class)">
    <p :class="styles.paginationText">
      <slot name="text">
        Mostrando {{ (page - 1) * itemsPerPage + 1 }}–{{ Math.min(page * itemsPerPage, totalItems) }} de {{ totalItems }} resultados
      </slot>
    </p>

    <div :class="styles.paginationControls">
      <Button
        variant="secondary"
        size="sm"
        :disabled="page <= 1"
        @click="prev"
      >
        <ChevronLeft style="width: var(--sizing-6); height: var(--sizing-6); margin-right: var(--spacing-2);" />
        Anterior
      </Button>
      <Button
        variant="secondary"
        size="sm"
        :disabled="page >= totalPages"
        @click="next"
      >
        Siguiente
        <ChevronRight style="width: var(--sizing-6); height: var(--sizing-6); margin-left: var(--spacing-2);" />
      </Button>
    </div>
  </div>
</template>
