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
  text?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  page: 1,
  totalPages: 1,
  totalItems: 0,
  itemsPerPage: 10,
  text: '',
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
        {{ text || `Total: ${totalItems} resultados` }}
      </slot>
    </p>

    <div :class="styles.paginationControls">
      <Button
        variant="outlined"
        size="md"
        :disabled="page <= 1"
        :leading-icon="ChevronLeft"
        @click="prev"
      >
        Anterior
      </Button>
      <Button
        variant="outlined"
        size="md"
        :disabled="page >= totalPages"
        :trailing-icon="ChevronRight"
        @click="next"
      >
        Siguiente
      </Button>
    </div>
  </div>
</template>
