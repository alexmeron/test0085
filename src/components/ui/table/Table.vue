<script setup lang="ts">
import { computed } from 'vue'
import { MoreVerticalIcon } from '../icon'
import { Checkbox } from '../checkbox'
import TableHeader from './TableHeader.vue'
import TableBody from './TableBody.vue'
import TableRow from './TableRow.vue'
import TableHead from './TableHead.vue'
import TableCell from './TableCell.vue'
import TableTop from './TableTop.vue'
import TablePagination from './TablePagination.vue'
import { ButtonIcon } from '../button'
import { cn } from '../../../lib/utils'
import styles from './Table.module.css'

export interface TableColumn {
  key: string
  label: string
  sortable?: boolean
}

interface Props {
  columns?: string | number | TableColumn[]
  data?: Record<string, any>[]
  checkbox?: boolean
  actions?: boolean
  Top?: boolean
  Bottom?: boolean
  showTop?: boolean
  showBottom?: boolean
  showPagination?: boolean
  title?: string
  showTitle?: boolean
  showFilters?: boolean
  selectedRows?: (string | number)[]
  rowKey?: string
  page?: number
  totalPages?: number
  totalItems?: number
  itemsPerPage?: number
  paginationText?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  columns: '6',
  data: undefined,
  checkbox: true,
  actions: true,
  Top: true,
  Bottom: true,
  showTop: undefined,
  showBottom: undefined,
  showPagination: undefined,
  title: 'Solicitudes',
  showTitle: true,
  showFilters: true,
  selectedRows: () => [],
  rowKey: 'id',
  page: 1,
  totalPages: 11,
  totalItems: 110,
  itemsPerPage: 10,
  paginationText: 'Total: 110 resultados',
})

const emits = defineEmits<{
  (e: 'update:selectedRows', selected: (string | number)[]): void
  (e: 'update:page', page: number): void
  (e: 'sort', key: string): void
  (e: 'action', row: Record<string, any>): void
}>()

const resolvedTop = computed(() => {
  if (props.showTop !== undefined) return props.showTop
  return props.Top
})

const resolvedBottom = computed(() => {
  if (props.showBottom !== undefined) return props.showBottom
  if (props.showPagination !== undefined) return props.showPagination
  return props.Bottom
})

const resolvedColumns = computed<TableColumn[]>(() => {
  if (Array.isArray(props.columns)) {
    return props.columns
  }
  const count = parseInt(String(props.columns), 10) || 6
  return Array.from({ length: count }, (_, i) => ({
    key: `col_${i + 1}`,
    label: 'ESTADO',
    sortable: true,
  }))
})

const resolvedData = computed<Record<string, any>[]>(() => {
  if (props.data && props.data.length > 0) {
    return props.data
  }
  return Array.from({ length: 10 }, (_, rowIdx) => {
    const row: Record<string, any> = { id: rowIdx + 1 }
    resolvedColumns.value.forEach((col) => {
      row[col.key] = 'Table item title'
    })
    return row
  })
})

function getRowId(row: Record<string, any>, index: number) {
  return row[props.rowKey] !== undefined ? row[props.rowKey] : index
}

const isAllSelected = computed(() => {
  if (resolvedData.value.length === 0) return false
  return resolvedData.value.every((row, i) => props.selectedRows.includes(getRowId(row, i)))
})

function toggleSelectAll() {
  if (isAllSelected.value) {
    emits('update:selectedRows', [])
  } else {
    const all = resolvedData.value.map((row, i) => getRowId(row, i))
    emits('update:selectedRows', all)
  }
}

function toggleSelectRow(row: Record<string, any>, index: number) {
  const id = getRowId(row, index)
  const next = [...props.selectedRows]
  const idx = next.indexOf(id)
  if (idx > -1) {
    next.splice(idx, 1)
  } else {
    next.push(id)
  }
  emits('update:selectedRows', next)
}
</script>

<template>
  <div :class="cn(styles.wrapper, props.class)">
    <!-- Optional Top Bar (Figma Atom Top) -->
    <slot name="top">
      <TableTop
        v-if="resolvedTop"
        :title="title"
        :show-title="showTitle"
      >
        <template v-if="$slots.title" #title>
          <slot name="title" />
        </template>
        <template v-if="$slots.filters" #filters>
          <slot name="filters" />
        </template>
      </TableTop>
    </slot>

    <!-- Main Table Container -->
    <div :class="styles.tableContainer">
      <table :class="styles.table">
        <!-- Header -->
        <slot name="header">
          <TableHeader>
            <tr :class="styles.header">
              <!-- Optional Checkbox Column Header -->
              <th v-if="checkbox" :class="styles.checkboxCell">
                <Checkbox
                  :checked="isAllSelected"
                  size="sm"
                  aria-label="Select all rows"
                  @change="toggleSelectAll"
                />
              </th>

              <!-- Column Headers -->
              <TableHead
                v-for="col in resolvedColumns"
                :key="col.key"
                :sortable="col.sortable"
                @sort="emits('sort', col.key)"
              >
                {{ col.label }}
              </TableHead>

              <!-- Optional Actions Column Header -->
              <th v-if="actions" :class="styles.actionCell" />
            </tr>
          </TableHeader>
        </slot>

        <!-- Body -->
        <slot>
          <TableBody>
            <TableRow
              v-for="(row, idx) in resolvedData"
              :key="getRowId(row, idx)"
              :selected="selectedRows.includes(getRowId(row, idx))"
            >
              <!-- Checkbox Cell -->
              <td v-if="checkbox" :class="styles.checkboxCell">
                <Checkbox
                  :checked="selectedRows.includes(getRowId(row, idx))"
                  size="sm"
                  aria-label="Select row"
                  @change="toggleSelectRow(row, idx)"
                />
              </td>

              <!-- Data Cells -->
              <TableCell v-for="col in resolvedColumns" :key="col.key">
                <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]">
                  {{ row[col.key] }}
                </slot>
              </TableCell>

              <!-- Actions Cell -->
              <td v-if="actions" :class="styles.actionCell">
                <slot name="action" :row="row">
                  <ButtonIcon
                    variant="ghost"
                    size="sm"
                    aria-label="More options"
                    @click="emits('action', row)"
                  >
                    <MoreVerticalIcon style="width: var(--sizing-7); height: var(--sizing-7);" />
                  </ButtonIcon>
                </slot>
              </td>
            </TableRow>
          </TableBody>
        </slot>
      </table>
    </div>

    <!-- Optional Bottom Bar (Figma Atom Bottom) -->
    <slot name="bottom">
      <TablePagination
        v-if="resolvedBottom"
        :page="page"
        :total-pages="totalPages"
        :total-items="totalItems"
        :items-per-page="itemsPerPage"
        :text="paginationText"
        @update:page="emits('update:page', $event)"
      >
        <template v-if="$slots.paginationText || $slots.text" #text>
          <slot name="paginationText">
            <slot name="text" />
          </slot>
        </template>
      </TablePagination>
    </slot>
  </div>
</template>
