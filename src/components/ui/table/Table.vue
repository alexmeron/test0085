<script setup lang="ts">
import { computed } from 'vue'
import { MoreVertical } from 'lucide-vue-next'
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
  columns?: TableColumn[]
  data?: Record<string, any>[]
  checkbox?: boolean
  actions?: boolean
  selectedRows?: (string | number)[]
  rowKey?: string
  title?: string
  showTop?: boolean
  showPagination?: boolean
  page?: number
  totalPages?: number
  totalItems?: number
  itemsPerPage?: number
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  columns: () => [],
  data: () => [],
  checkbox: false,
  actions: false,
  selectedRows: () => [],
  rowKey: 'id',
  title: '',
  showTop: false,
  showPagination: false,
  page: 1,
  totalPages: 1,
  totalItems: 0,
  itemsPerPage: 10,
})

const emits = defineEmits<{
  (e: 'update:selectedRows', selected: (string | number)[]): void
  (e: 'update:page', page: number): void
  (e: 'sort', key: string): void
  (e: 'action', row: Record<string, any>): void
}>()

function getRowId(row: Record<string, any>, index: number) {
  return row[props.rowKey] !== undefined ? row[props.rowKey] : index
}

const isAllSelected = computed(() => {
  if (props.data.length === 0) return false
  return props.data.every((row, i) => props.selectedRows.includes(getRowId(row, i)))
})

function toggleSelectAll() {
  if (isAllSelected.value) {
    emits('update:selectedRows', [])
  } else {
    const all = props.data.map((row, i) => getRowId(row, i))
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
    <!-- Optional Top Bar -->
    <slot name="top">
      <TableTop v-if="showTop || title" :title="title">
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
                v-for="col in columns"
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
              v-for="(row, idx) in data"
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
              <TableCell v-for="col in columns" :key="col.key">
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
                    <MoreVertical style="width: var(--sizing-7); height: var(--sizing-7);" />
                  </ButtonIcon>
                </slot>
              </td>
            </TableRow>
          </TableBody>
        </slot>
      </table>
    </div>

    <!-- Optional Bottom Bar (Pagination) -->
    <slot name="bottom">
      <TablePagination
        v-if="showPagination"
        :page="page"
        :total-pages="totalPages"
        :total-items="totalItems"
        :items-per-page="itemsPerPage"
        @update:page="emits('update:page', $event)"
      />
    </slot>
  </div>
</template>
