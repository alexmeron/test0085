import type { Meta, StoryObj } from '@storybook/vue3'
import Datepicker from './Datepicker.vue'

const meta: Meta<typeof Datepicker> = {
  title: 'Components/Datepicker',
  component: Datepicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente **Datepicker** (selector de fecha y rango) mapeado 1:1 a Figma. Estilizado con **CSS Modules** y **CSS Variables**, utilizando el componente **ButtonIcon** integrado para la navegación.

🔗 **[Ver en Figma](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4124-3793)**

---

### 📐 Layout & Sizing

| Propiedad | Variante | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|---|
| **Width** | simple | — | — | 248px |
| | range | — | — | 532px |
| **Padding Contenedor** | ambos | \`spacing/spacing-6\` | \`--spacing-6\` | 12px |
| **Cabecera (\`head-datepicker\`)** | ambos | — | — | 224×32px |
| **Botón Navegación** | ambos | \`Button-icon (outlined, md)\` | — | 32×32px |
| **Celda Día (\`_calenderCell\`)** | ambos | — | — | 32×32px |
| **Gap Paneles (Range)** | range | \`spacing/spacing-6\` | \`--spacing-6\` | 12px |

---

### ⬛ Shape

| Propiedad | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|
| **Border Radius Contenedor** | \`radius/sm\` | \`--radius-sm\` | 4px |
| **Border Radius Celda** | \`radius/md\` | \`--radius-md\` | 6px |
| **Border Radius ButtonIcon** | \`radius/radius-lg\` | \`--radius-lg\` | 8px |

---

### 🔤 Typography

| Elemento | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|
| **Font Family** | \`font-family/body\` | \`--font-family-body\` | "Inter", sans-serif |
| **Título Mes** | \`font-size/text-small\` | \`--font-size-text-small\` | 14px (500) |
| **Día de la semana** | \`font-size/caption/big\` | \`--font-size-caption-big\` | 12px (500) |
| **Número de día** | \`font-size/caption/big\` | \`--font-size-caption-big\` | 12px (400) |

---

### 🎨 Colors & States

| Elemento | Estado | Propiedad | Token / Figma Variable | CSS Variable |
|---|---|---|---|---|
| **Contenedor** | Default | Background | \`color/surface/default\` | \`--color-surface-default\` |
| | | Border | \`color/border/default\` | \`--color-border-default\` |
| **ButtonIcon (Nav)** | Default | Variant | \`outlined\`, \`size="md"\` | — |
| | | Stroke | \`color/subtle/border/default\` | \`--color-subtle-border-default\` |
| **Celda Día** | Default | Background | \`color/surface/default\` | \`--color-surface-default\` |
| | | Text | \`color/text/primary\` | \`--color-text-primary\` |
| | Hover | Background | \`color/surface/muted\` | \`--color-surface-muted\` |
| | Selected / Range Start & End | Background | \`color/brand/solid/default\` | \`--color-brand-solid-default\` |
| | | Text | \`color/brand/text/on-solid\` | \`--color-brand-text-on-solid\` |
| | **Rango Intermedio (Range Between)** | **Background** | **\`color/surface/muted\`** | **\`--color-surface-muted\`** |
| | | Text | \`color/text/primary\` | \`--color-text-primary\` |
| | Mes ajeno (Outside) | Text | \`color/text/disabled\` | \`--color-text-disabled\` |
| **Día Actual (Today)** | Default | Border | \`color/border/strong\` | \`--color-border-strong\` |
| **Deshabilitado** | Disabled | Opacity | \`Opacity/disabled\` | 0.5 |
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['simple', 'range'],
      description: 'Figma prop: **variant**',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado',
    },
  },
  args: {
    variant: 'simple',
    disabled: false,
  },
  render: (args) => ({
    components: { Datepicker },
    setup() { return { args } },
    template: '<Datepicker v-bind="args" />',
  }),
}

export default meta
type Story = StoryObj<typeof Datepicker>

export const Simple: Story = {
  args: {
    variant: 'simple',
  },
}

export const Range: Story = {
  args: {
    variant: 'range',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'simple',
    disabled: true,
  },
}
