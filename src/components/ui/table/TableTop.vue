<script setup lang="ts">
import { ref } from 'vue'
import { Search } from 'lucide-vue-next'
import { Input } from '../input'
import { Select } from '../select'
import type { DropdownOption } from '../dropdown'
import { cn } from '../../../lib/utils'
import styles from './Table.module.css'

interface Props {
  title?: string
  showTitle?: boolean
  showFilters?: boolean
  searchValue?: string
  statusValue?: string
  dateValue?: string
  statusOptions?: DropdownOption[]
  dateOptions?: DropdownOption[]
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Solicitudes',
  showTitle: true,
  showFilters: true,
  searchValue: '',
  statusValue: 'Estado',
  dateValue: 'Fecha',
  statusOptions: () => [
    { label: 'Estado', value: 'Estado' },
    { label: 'Activo', value: 'Activo' },
    { label: 'Pendiente', value: 'Pendiente' },
    { label: 'Inactivo', value: 'Inactivo' },
  ],
  dateOptions: () => [
    { label: 'Fecha', value: 'Fecha' },
    { label: 'Hoy', value: 'Hoy' },
    { label: 'Esta semana', value: 'Esta semana' },
    { label: 'Este mes', value: 'Este mes' },
  ],
})

const emits = defineEmits<{
  (e: 'update:searchValue', val: string): void
  (e: 'update:statusValue', val: string): void
  (e: 'update:dateValue', val: string): void
}>()

const searchModel = ref(props.searchValue)
const statusModel = ref(props.statusValue)
const dateModel = ref(props.dateValue)

function handleSearch(val: string | number) {
  searchModel.value = String(val)
  emits('update:searchValue', String(val))
}

function handleStatus(val: string) {
  statusModel.value = val
  emits('update:statusValue', val)
}

function handleDate(val: string) {
  dateModel.value = val
  emits('update:dateValue', val)
}
</script>

<template>
  <div :class="cn(styles.topBar, props.class)">
    <h3 v-if="showTitle && (title || $slots.title)" :class="styles.title">
      <slot name="title">{{ title }}</slot>
    </h3>

    <div v-if="showFilters || $slots.filters" :class="styles.filters">
      <slot name="filters">
        <!-- Input Search 1:1 with Figma (width ~299px, size md, leading icon Search) -->
        <Input
          :model-value="searchModel"
          size="md"
          :leading-icon="Search"
          placeholder="Buscar por NHC, ID..."
          :show-helper="false"
          style="width: 299px;"
          @update:model-value="handleSearch"
        />

        <!-- Select Estado 1:1 with Figma (size md, chip count 1) -->
        <Select
          :model-value="statusModel"
          :options="statusOptions"
          :show-label="false"
          size="md"
          :show-chip="true"
          placeholder="Estado"
          style="min-width: 90px;"
          @update:model-value="handleStatus"
        />

        <!-- Select Fecha 1:1 with Figma (size md, chip count 1) -->
        <Select
          :model-value="dateModel"
          :options="dateOptions"
          :show-label="false"
          size="md"
          :show-chip="true"
          placeholder="Fecha"
          style="min-width: 85px;"
          @update:model-value="handleDate"
        />
      </slot>
    </div>
  </div>
</template>
