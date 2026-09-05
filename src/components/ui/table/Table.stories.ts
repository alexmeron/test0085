import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Table, { type TableColumn } from './Table.vue'
import { Chip } from '../chip'
import { Input } from '../input'
import { Select } from '../select'

const sampleColumns: TableColumn[] = [
  { key: 'name', label: 'Nombre', sortable: true },
  { key: 'role', label: 'Rol', sortable: true },
  { key: 'status', label: 'Estado', sortable: true },
  { key: 'department', label: 'Departamento' },
  { key: 'email', label: 'Email' },
  { key: 'date', label: 'Fecha Alta', sortable: true },
]

const sampleData = [
  { id: 1, name: 'Elena García', role: 'Diseñadora UI', status: 'Activo', department: 'Diseño', email: 'elena@example.com', date: '12 Ene 2024' },
  { id: 2, name: 'Carlos Morales', role: 'Frontend Lead', status: 'Activo', department: 'Ingeniería', email: 'carlos@example.com', date: '04 Mar 2023' },
  { id: 3, name: 'Sofía Romero', role: 'Product Manager', status: 'Pendiente', department: 'Producto', email: 'sofia@example.com', date: '18 Jun 2024' },
  { id: 4, name: 'David Navarro', role: 'Backend Engineer', status: 'Inactivo', department: 'Ingeniería', email: 'david@example.com', date: '22 Oct 2022' },
  { id: 5, name: 'Lucía Blanco', role: 'QA Analyst', status: 'Activo', department: 'Calidad', email: 'lucia@example.com', date: '15 Feb 2024' },
]

/**
 * ## Table Component
 *
 * Componente complejo de tabla de datos estructurada y accesible. Mapeado 1:1 a Figma.
 *
 * 🔗 **[Ver en Figma (node 4129:3958)](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4129-3958)**
 *
 * ---
 *
 * ### 📐 Layout & Sizing
 *
 * | Elemento | Altura | Padding | Tipografía | Borde / Separador |
 * |---|---|---|---|---|
 * | **Header** | `28px` | `0` horizontal `--spacing-5` (8px) | `--font-size-caption-medium` (11px), `--color-text-tertiary`, UPPERCASE | `1px solid var(--color-border-subtle)` |
 * | **Row / Item** | `52px` | vertical `--spacing-4` (6px), horizontal `--spacing-5` (8px) | `--font-size-text-small` (14px), `--color-text-primary` | `1px solid var(--color-border-subtle)` |
 * | **Checkbox cell** | `52px` | `--sizing-10` (32px) width | Sub-componente Checkbox `size="sm"` | `1px solid var(--color-border-subtle)` |
 * | **Actions cell** | `52px` | `--sizing-11` (40px) width | ButtonIcon `size="sm"`, variant="ghost" | `1px solid var(--color-border-subtle)` |
 * | **Contenedor** | Auto | - | - | Border radius `--radius-lg` (8px), border `--color-border-subtle` |
 *
 * ---
 *
 * ### 🎨 Tokens de Color
 * | Elemento | Token / Variable | Descripción |
 * |---|---|---|
 * | **Fondo de fila (base)** | `--color-surface-default` | Blanco de fondo por defecto |
 * | **Fondo de fila (hover / selected)** | `--color-surface-subtle` | Color de realce al pasar el cursor o seleccionar |
 * | **Separadores de fila** | `--color-border-subtle` | Líneas divisorias horizontales |
 * | **Texto de cabecera** | `--color-text-tertiary` | Texto secundario/terciario en mayúsculas |
 * | **Texto de celdas** | `--color-text-primary` | Texto principal de alto contraste |
 */
const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    checkbox: {
      control: 'boolean',
      description: 'Muestra columna de selección múltiple con checkbox',
    },
    actions: {
      control: 'boolean',
      description: 'Muestra columna de acciones rápidas',
    },
    title: {
      control: 'text',
      description: 'Título superior de la tabla',
    },
    showTop: {
      control: 'boolean',
      description: 'Muestra la barra superior de título y filtros',
    },
    showPagination: {
      control: 'boolean',
      description: 'Muestra la barra inferior de paginación',
    },
  },
  args: {
    columns: sampleColumns,
    data: sampleData,
    checkbox: true,
    actions: true,
    title: 'Lista de Empleados',
    showTop: true,
    showPagination: true,
    page: 1,
    totalPages: 5,
    totalItems: 48,
    itemsPerPage: 5,
  },
  render: (args) => ({
    components: { Table, Chip, Input, Select },
    setup() {
      const selected = ref<number[]>([1])
      return { args, selected }
    },
    template: `
      <div style="padding: var(--spacing-6); width: 100%;">
        <Table v-bind="args" v-model:selected-rows="selected">
          <template #filters>
            <Input placeholder="Buscar..." size="sm" style="width: 180px;" />
            <Select placeholder="Departamento" size="sm" style="width: 150px;" />
          </template>
          <template #cell-status="{ value }">
            <Chip
              size="sm"
              :state="value === 'Activo' ? 'success' : value === 'Pendiente' ? 'warning' : 'neutral'"
              variant="subtle"
            >
              {{ value }}
            </Chip>
          </template>
        </Table>
      </div>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  args: {
    checkbox: false,
    actions: false,
    showTop: false,
    showPagination: false,
  },
}

export const WithSelection: Story = {
  args: {
    checkbox: true,
    actions: false,
    showTop: false,
    showPagination: false,
  },
}

export const WithActions: Story = {
  args: {
    checkbox: false,
    actions: true,
    showTop: false,
    showPagination: false,
  },
}

export const FullTable: Story = {
  args: {
    checkbox: true,
    actions: true,
    showTop: true,
    showPagination: true,
  },
}
