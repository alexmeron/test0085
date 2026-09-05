import type { Meta, StoryObj } from '@storybook/vue3'
import { ref, computed } from 'vue'
import Table, { type TableColumn } from './Table.vue'
import { Chip } from '../chip'
import { Input } from '../input'
import { Select } from '../select'

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
    columns: {
      control: 'select',
      options: ['6', '5', '4', '3', '2', '1'],
      description: 'Número de columnas (propiedad variant en Figma)',
    },
    checkbox: {
      control: 'boolean',
      description: 'Muestra la columna de selección con Checkbox (propiedad variant en Figma)',
    },
    actions: {
      control: 'boolean',
      description: 'Muestra la columna de menú de opciones rápidas (propiedad variant en Figma)',
    },
    Top: {
      control: 'boolean',
      description: 'Muestra la barra superior Top con título y filtros (propiedad boolean en Figma)',
    },
    Bottom: {
      control: 'boolean',
      description: 'Muestra la barra inferior Bottom con paginación (propiedad boolean en Figma)',
    },
    title: {
      control: 'text',
      description: 'Título superior de la tabla',
    },
    paginationText: {
      control: 'text',
      description: 'Texto resumen de la barra de paginación',
    },
  },
  args: {
    columns: '6',
    checkbox: true,
    actions: true,
    Top: true,
    Bottom: true,
    title: 'Solicitudes',
    paginationText: 'Total: 110 resultados',
  },
  render: (args) => ({
    components: { Table },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: var(--spacing-6); width: 100%; max-width: 982px; margin: 0 auto;">
        <Table v-bind="args" />
      </div>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof Table>

/**
 * 🟢 Variante principal 1:1 de Figma (node 4174:13333):
 * columns=6, checkbox=true, actions=true, Top=true, Bottom=true
 */
export const FigmaDefault: Story = {
  name: 'columns=6, checkbox=true, actions=true',
  args: {
    columns: '6',
    checkbox: true,
    actions: true,
    Top: true,
    Bottom: true,
  },
}

/**
 * columns=5, checkbox=true, actions=true
 */
export const Columns5: Story = {
  name: 'columns=5, checkbox=true, actions=true',
  args: {
    columns: '5',
    checkbox: true,
    actions: true,
    Top: true,
    Bottom: true,
  },
}

/**
 * columns=4, checkbox=true, actions=true
 */
export const Columns4: Story = {
  name: 'columns=4, checkbox=true, actions=true',
  args: {
    columns: '4',
    checkbox: true,
    actions: true,
    Top: true,
    Bottom: true,
  },
}

/**
 * columns=3, checkbox=true, actions=true
 */
export const Columns3: Story = {
  name: 'columns=3, checkbox=true, actions=true',
  args: {
    columns: '3',
    checkbox: true,
    actions: true,
    Top: true,
    Bottom: true,
  },
}

/**
 * columns=2, checkbox=true, actions=true
 */
export const Columns2: Story = {
  name: 'columns=2, checkbox=true, actions=true',
  args: {
    columns: '2',
    checkbox: true,
    actions: true,
    Top: true,
    Bottom: true,
  },
}

/**
 * columns=1, checkbox=true, actions=true
 */
export const Columns1: Story = {
  name: 'columns=1, checkbox=true, actions=true',
  args: {
    columns: '1',
    checkbox: true,
    actions: true,
    Top: true,
    Bottom: true,
  },
}

/**
 * columns=6, checkbox=false, actions=true
 */
export const WithoutCheckbox: Story = {
  name: 'columns=6, checkbox=false, actions=true',
  args: {
    columns: '6',
    checkbox: false,
    actions: true,
    Top: true,
    Bottom: true,
  },
}

/**
 * columns=6, checkbox=true, actions=false
 */
export const WithoutActions: Story = {
  name: 'columns=6, checkbox=true, actions=false',
  args: {
    columns: '6',
    checkbox: true,
    actions: false,
    Top: true,
    Bottom: true,
  },
}

/**
 * columns=6, checkbox=false, actions=false
 */
export const Minimal: Story = {
  name: 'columns=6, checkbox=false, actions=false',
  args: {
    columns: '6',
    checkbox: false,
    actions: false,
    Top: true,
    Bottom: true,
  },
}

/**
 * Top=false (solo contenido y paginación)
 */
export const WithoutTop: Story = {
  name: 'Top=false',
  args: {
    columns: '6',
    checkbox: true,
    actions: true,
    Top: false,
    Bottom: true,
  },
}

/**
 * Bottom=false (solo título, filtros y tabla)
 */
export const WithoutBottom: Story = {
  name: 'Bottom=false',
  args: {
    columns: '6',
    checkbox: true,
    actions: true,
    Top: true,
    Bottom: false,
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

