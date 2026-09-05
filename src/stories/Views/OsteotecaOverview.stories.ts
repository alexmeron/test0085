import type { Meta, StoryObj } from '@storybook/vue3'
import OsteotecaOverview from '../../views/OsteotecaOverview.vue'

/**
 * ## Vista Principal: Osteoteca Overview
 *
 * Implementación 1:1 en Vue de la vista principal de la aplicación **Osteoteca** a partir del diseño oficial en Figma.
 *
 * 🔗 **[Ver en Figma (node 1851:140109)](https://www.figma.com/design/Y2P7sfLbRqHD5Y4WNuaOQF/Osteoteca?node-id=1851-140109)**
 *
 * ---
 *
 * ### 🧩 Composición de Componentes de la Librería
 *
 * - **Topbar**:
 *   - Isotipo y logotipo vectorial oficial de Osteoteca by Cella.
 *   - Menú de navegación interactivo ("Overview" activo con indicador inferior azul, "Osteoteca").
 *   - Componente `Avatar` (`size="md"`, `type="name"`, iniciales "AS").
 * - **Page Header**:
 *   - Título de sección (`Overview`, 20px semibold).
 *   - Componente `Button` (`variant="primary"`, `size="lg"`, leadingIcon=`AddPlusIcon`, "Nueva solicitud").
 * - **Card Contenedor**:
 *   - Superficie `var(--color-surface-default)`, borde `var(--color-border-subtle)`, radio `var(--radius-sm)` (4px).
 * - **Barra de Filtros (Top)**:
 *   - Título `Solicitudes` (16px semibold).
 *   - Buscador reactivo utilizando el componente `Input` (`size="md"`, leadingIcon=`SearchIcon`, placeholder "Buscar por NHC, ID...").
 *   - Filtros de estado y fecha con chip badge integrado.
 * - **Tabla de Solicitudes**:
 *   - Cabecera con `Checkbox` (`size="sm"`) y ordenación por columnas.
 *   - 10 filas reales de Figma con el componente `Chip` (`variant="subtle"`):
 *     - `destructive`: "Error"
 *     - `ready`: "Listo para planificar"
 *     - `success`: "Completado"
 *     - `info`: "Procesando"
 *     - `warning`: "Matching en curso"
 *     - `neutral`: "Cancelado"
 *   - Columna "CREADO" con icono `CalendarDaysIcon`.
 *   - Menú contextual de fila con `ButtonIcon` (`variant="ghost"`, `size="sm"`, `MoreVerticalIcon`).
 * - **Paginación (Bottom)**:
 *   - Texto resumen "Total: 110 resultados".
 *   - Componentes `Button` (`variant="outlined"`, `size="md"`) para "Anterior" y "Siguiente".
 */
const meta: Meta<typeof OsteotecaOverview> = {
  title: 'Views/Osteoteca Overview',
  component: OsteotecaOverview,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Pantalla principal completa de Osteoteca construida 1:1 en Vue utilizando exclusivamente los componentes de Storybook y tokens del Design System.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof OsteotecaOverview>

export const Default: Story = {
  render: () => ({
    components: { OsteotecaOverview },
    template: '<OsteotecaOverview />',
  }),
}
