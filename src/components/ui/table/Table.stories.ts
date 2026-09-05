import type { Meta, StoryObj } from '@storybook/vue3'
import Table from './Table.vue'

/**
 * ## Table Component
 *
 * Componente de tabla de datos estructurada, reactiva y accesible. Mapeado 1:1 a Figma.
 *
 * 🔗 **[Ver en Figma (node 4174:13333)](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4174-13333)**
 *
 * ---
 *
 * ### 🧩 Composición de Átomos de Figma
 *
 * 1. **Top Bar (`Top`, 32px)**:
 *    - Título: `"Solicitudes"` (`16px`, `--font-weight-semibold`, `--color-text-primary`)
 *
 * 2. **Header (`Header`, 28px)**:
 *    - Checkbox de selección completa `size="sm"`, `variant="primary"`
 *    - Celdas de cabecera con tipografía `11px` en mayúsculas (`--font-size-caption-medium`, `--color-text-tertiary`) e icono `ChevronsUpDown` (`12px`)
 *    - Celda de acción vacía de `24px`
 *
 * 3. **Rows (`_table-row`, 52px)**:
 *    - Checkbox individual `size="sm"`
 *    - Celdas con tipografía `14px` (`--font-size-text-small`, `--color-text-primary`)
 *    - Celda de acción con botón `ButtonIcon` `variant="ghost"` `size="sm"` y `MoreVertical`
 *
 * 4. **Bottom Bar (`Bottom`, 32px)**:
 *    - Texto resumen: `"Total: 110 resultados"` (`12px`, `--color-text-secondary`)
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
      description: 'Muestra la barra superior Top con título (propiedad boolean en Figma)',
    },
    Bottom: {
      control: 'boolean',
      description: 'Muestra la barra inferior Bottom con texto de resumen (propiedad boolean en Figma)',
    },
    title: {
      control: 'text',
      description: 'Título superior de la tabla',
    },
    paginationText: {
      control: 'text',
      description: 'Texto resumen de la barra inferior',
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
 * Bottom=false (solo título y tabla)
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


