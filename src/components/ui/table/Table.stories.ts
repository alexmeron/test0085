import type { Meta, StoryObj } from '@storybook/vue3'
import { ref, computed } from 'vue'
import Table, { type TableColumn } from './Table.vue'
import { Chip } from '../chip'
import { Input } from '../input'
import { Select } from '../select'
import { Button } from '../button'

// 6 columns matching Figma "columns=6, checkbox=true, actions=true"
const figmaColumns6: TableColumn[] = [
  { key: 'status', label: 'ESTADO', sortable: true },
  { key: 'nhc', label: 'NHC / ID', sortable: true },
  { key: 'patient', label: 'PACIENTE', sortable: true },
  { key: 'specialty', label: 'ESPECIALIDAD', sortable: true },
  { key: 'date', label: 'FECHA SOLICITUD', sortable: true },
  { key: 'priority', label: 'PRIORIDAD', sortable: true },
]

// 10 sample rows matching Figma's 10 rows per page
const figmaRows10 = [
  { id: 1, status: 'Urgente', state: 'destructive', nhc: 'NHC-84920', patient: 'Elena García López', specialty: 'Cardiología', date: '04 Sep 2026', priority: 'Alta' },
  { id: 2, status: 'Pendiente', state: 'warning', nhc: 'NHC-19482', patient: 'Carlos Morales Ruiz', specialty: 'Neurología', date: '03 Sep 2026', priority: 'Media' },
  { id: 3, status: 'Completado', state: 'success', nhc: 'NHC-72819', patient: 'Sofía Romero Gómez', specialty: 'Traumatología', date: '02 Sep 2026', priority: 'Baja' },
  { id: 4, status: 'En curso', state: 'info', nhc: 'NHC-39184', patient: 'David Navarro Sanz', specialty: 'Oftalmología', date: '01 Sep 2026', priority: 'Media' },
  { id: 5, status: 'Urgente', state: 'destructive', nhc: 'NHC-50192', patient: 'Lucía Blanco Martín', specialty: 'Oncología', date: '31 Ago 2026', priority: 'Alta' },
  { id: 6, status: 'Completado', state: 'success', nhc: 'NHC-66281', patient: 'Javier Castillo Pons', specialty: 'Dermatología', date: '30 Ago 2026', priority: 'Baja' },
  { id: 7, status: 'Pendiente', state: 'warning', nhc: 'NHC-48192', patient: 'Marta Torres Gil', specialty: 'Pediatría', date: '29 Ago 2026', priority: 'Media' },
  { id: 8, status: 'Borrador', state: 'neutral', nhc: 'NHC-10293', patient: 'Alejandro Vega Cano', specialty: 'Medicina Interna', date: '28 Ago 2026', priority: 'Baja' },
  { id: 9, status: 'En curso', state: 'info', nhc: 'NHC-77291', patient: 'Beatriz Ortiz Ramos', specialty: 'Ginecología', date: '27 Ago 2026', priority: 'Media' },
  { id: 10, status: 'Completado', state: 'success', nhc: 'NHC-91024', patient: 'Marcos Serrano Vidal', specialty: 'Urología', date: '26 Ago 2026', priority: 'Baja' },
]

/**
 * ## Table Component
 *
 * Componente de tabla de datos estructurada, reactiva y accesible. Mapeado 1:1 a Figma.
 *
 * 🔗 **[Ver en Figma (node 4129:3958)](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4129-3958)**
 *
 * ---
 *
 * ### 🧩 Composición de Átomos de Figma
 *
 * 1. **Top Bar (`Top`, 32px)**:
 *    - Título: `"Solicitudes"` (`16px`, `--font-weight-semibold`, `--color-text-primary`)
 *    - Filtros:
 *      - `Input`: Buscador `size="md"` con icono Search y placeholder `"Buscar por NHC, ID..."`
 *      - `Select`: Selector `size="md"` con `Chip` badge `1` para `"Estado"`
 *      - `Select`: Selector `size="md"` con `Chip` badge `1` para `"Fecha"`
 *
 * 2. **Header (`Header`, 28px)**:
 *    - Checkbox de selección completa `size="sm"`, `variant="primary"`
 *    - Celdas de cabecera con tipografía `11px` en mayúsculas (`--font-size-caption-medium`, `--color-text-tertiary`) e icono `ChevronsUpDown` (`12px`)
 *    - Celda de acción vacía de `24px`
 *
 * 3. **Rows (`_table-row`, 52px)**:
 *    - Checkbox individual `size="sm"`
 *    - Celdas con tipografía `14px` (`--font-size-text-small`, `--color-text-primary`) y soporte para `Chip`
 *    - Celda de acción con botón `ButtonIcon` `variant="ghost"` `size="sm"` y `MoreVertical`
 *
 * 4. **Bottom Bar (`Bottom`, 32px)**:
 *    - Texto resumen: `"Total: 110 resultados"` (`12px`, `--color-text-secondary`)
 *    - Botones de paginación:
 *      - `Button` `variant="outlined"` `size="md"` con `ChevronLeft` ("Anterior")
 *      - `Button` `variant="outlined"` `size="md"` con `ChevronRight` ("Siguiente")
 */
const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    checkbox: {
      control: 'boolean',
      description: 'Muestra columna de selección múltiple con Checkbox size="sm"',
    },
    actions: {
      control: 'boolean',
      description: 'Muestra columna de acciones rápidas con ButtonIcon',
    },
    title: {
      control: 'text',
      description: 'Título superior de la tabla (Figma Top atom)',
    },
    showTitle: {
      control: 'boolean',
      description: 'Muestra el título en la barra superior',
    },
    showFilters: {
      control: 'boolean',
      description: 'Muestra los filtros integrados (Input y Selects)',
    },
    showTop: {
      control: 'boolean',
      description: 'Muestra el contenedor superior Top',
    },
    showBottom: {
      control: 'boolean',
      description: 'Muestra el contenedor inferior Bottom de paginación',
    },
    paginationText: {
      control: 'text',
      description: 'Texto resumen de la barra inferior de paginación',
    },
    page: {
      control: 'number',
      description: 'Página activa',
    },
    totalPages: {
      control: 'number',
      description: 'Número total de páginas',
    },
    totalItems: {
      control: 'number',
      description: 'Número total de elementos',
    },
    itemsPerPage: {
      control: 'number',
      description: 'Elementos mostrados por página',
    },
  },
  args: {
    columns: figmaColumns6,
    data: figmaRows10,
    checkbox: true,
    actions: true,
    title: 'Solicitudes',
    showTitle: true,
    showFilters: true,
    showTop: true,
    showBottom: true,
    paginationText: 'Total: 110 resultados',
    page: 1,
    totalPages: 11,
    totalItems: 110,
    itemsPerPage: 10,
  },
  render: (args) => ({
    components: { Table, Chip, Input, Select, Button },
    setup() {
      const selected = ref<number[]>([1])
      return { args, selected }
    },
    template: `
      <div style="padding: var(--spacing-6); width: 100%; max-width: 1080px; margin: 0 auto;">
        <Table v-bind="args" v-model:selected-rows="selected">
          <template #cell-status="{ row }">
            <Chip
              size="sm"
              :state="row.state"
              variant="subtle"
            >
              {{ row.status }}
            </Chip>
          </template>
        </Table>
      </div>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof Table>

/**
 * 🟢 Variante principal 1:1 de Figma: 6 columnas, checkbox activado, acciones activadas, Top y Bottom completos.
 */
export const FigmaDefault: Story = {
  name: 'Figma Default (Columns=6, Checkbox=true, Actions=true)',
  args: {
    columns: figmaColumns6,
    data: figmaRows10,
    checkbox: true,
    actions: true,
    title: 'Solicitudes',
    showTop: true,
    showBottom: true,
    paginationText: 'Total: 110 resultados',
  },
}

/**
 * 5 Columnas (columns=5, checkbox=true, actions=true)
 */
export const Columns5: Story = {
  name: 'Columns: 5',
  args: {
    columns: figmaColumns6.slice(0, 5),
    data: figmaRows10,
    checkbox: true,
    actions: true,
    title: 'Solicitudes (5 columnas)',
  },
}

/**
 * 4 Columnas (columns=4, checkbox=true, actions=true)
 */
export const Columns4: Story = {
  name: 'Columns: 4',
  args: {
    columns: figmaColumns6.slice(0, 4),
    data: figmaRows10,
    checkbox: true,
    actions: true,
    title: 'Solicitudes (4 columnas)',
  },
}

/**
 * 3 Columnas (columns=3, checkbox=true, actions=true)
 */
export const Columns3: Story = {
  name: 'Columns: 3',
  args: {
    columns: figmaColumns6.slice(0, 3),
    data: figmaRows10,
    checkbox: true,
    actions: true,
    title: 'Solicitudes (3 columnas)',
  },
}

/**
 * 2 Columnas (columns=2, checkbox=true, actions=true)
 */
export const Columns2: Story = {
  name: 'Columns: 2',
  args: {
    columns: figmaColumns6.slice(0, 2),
    data: figmaRows10,
    checkbox: true,
    actions: true,
    title: 'Solicitudes (2 columnas)',
  },
}

/**
 * 1 Columna (columns=1, checkbox=true, actions=true)
 */
export const Columns1: Story = {
  name: 'Columns: 1',
  args: {
    columns: figmaColumns6.slice(0, 1),
    data: figmaRows10,
    checkbox: true,
    actions: true,
    title: 'Solicitudes (1 columna)',
  },
}

/**
 * Sin Checkbox (checkbox=false)
 */
export const WithoutCheckbox: Story = {
  name: 'Variant: Without Checkbox',
  args: {
    columns: figmaColumns6,
    data: figmaRows10,
    checkbox: false,
    actions: true,
    title: 'Solicitudes',
  },
}

/**
 * Sin Acciones (actions=false)
 */
export const WithoutActions: Story = {
  name: 'Variant: Without Actions',
  args: {
    columns: figmaColumns6,
    data: figmaRows10,
    checkbox: true,
    actions: false,
    title: 'Solicitudes',
  },
}

/**
 * Solo tabla de contenido sin Top
 */
export const WithoutTop: Story = {
  name: 'Variant: Without Top',
  args: {
    columns: figmaColumns6,
    data: figmaRows10,
    showTop: false,
    checkbox: true,
    actions: true,
  },
}

/**
 * Solo tabla sin Bottom (paginación)
 */
export const WithoutBottom: Story = {
  name: 'Variant: Without Bottom',
  args: {
    columns: figmaColumns6,
    data: figmaRows10,
    showBottom: false,
    checkbox: true,
    actions: true,
    title: 'Solicitudes',
  },
}

/**
 * Ejemplo interactivo completo con búsqueda y filtrado en vivo usando Input y Select
 */
export const Interactive: Story = {
  name: 'Interactive Full Example',
  render: () => ({
    components: { Table, Chip, Input, Select },
    setup() {
      const selected = ref<number[]>([1, 2])
      const search = ref('')
      const statusFilter = ref('Estado')
      const currentPage = ref(1)

      const statusOptions = [
        { label: 'Todos los estados', value: 'Estado' },
        { label: 'Urgente', value: 'Urgente' },
        { label: 'Pendiente', value: 'Pendiente' },
        { label: 'En curso', value: 'En curso' },
        { label: 'Completado', value: 'Completado' },
        { label: 'Borrador', value: 'Borrador' },
      ]

      const filteredData = computed(() => {
        return figmaRows10.filter((row) => {
          const matchSearch =
            !search.value ||
            row.patient.toLowerCase().includes(search.value.toLowerCase()) ||
            row.nhc.toLowerCase().includes(search.value.toLowerCase()) ||
            row.specialty.toLowerCase().includes(search.value.toLowerCase())
          const matchStatus = statusFilter.value === 'Estado' || row.status === statusFilter.value
          return matchSearch && matchStatus
        })
      })

      return {
        columns: figmaColumns6,
        filteredData,
        selected,
        search,
        statusFilter,
        statusOptions,
        currentPage,
      }
    },
    template: `
      <div style="padding: var(--spacing-6); width: 100%; max-width: 1080px; margin: 0 auto;">
        <Table
          :columns="columns"
          :data="filteredData"
          :checkbox="true"
          :actions="true"
          title="Solicitudes"
          :page="currentPage"
          :total-pages="Math.ceil(filteredData.length / 5)"
          :total-items="filteredData.length"
          :items-per-page="5"
          :pagination-text="'Total: ' + filteredData.length + ' resultados'"
          v-model:selected-rows="selected"
          @update:page="currentPage = $event"
          @action="alert('Acción seleccionada para: ' + $event.patient)"
        >
          <template #cell-status="{ row }">
            <Chip
              size="sm"
              :state="row.state"
              variant="subtle"
            >
              {{ row.status }}
            </Chip>
          </template>
        </Table>
      </div>
    `,
  }),
}

