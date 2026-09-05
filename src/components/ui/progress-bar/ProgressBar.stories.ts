import type { Meta, StoryObj } from '@storybook/vue3'
import ProgressBar from './ProgressBar.vue'

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente **Progress bar** para indicar el progreso de una tarea. Mapeado 1:1 a Figma.
Construido con **Radix Vue** (\`ProgressRoot\`, \`ProgressIndicator\`), **CSS Modules** y **Design Tokens**.

🔗 **[Ver en Figma (node 2186:816)](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=2186-816)**

---

### 📐 Layout & Sizing

| Posición Label | Altura Contenedor | Altura Barra | Gap | Radio |
|---|---|---|---|---|
| **hidden** | 6px | 6px | - | \`radius/full\` (999px) |
| **right** | 16px | 6px | \`spacing/spacing-4\` (6px) | \`radius/full\` (999px) |
| **bottom** | 28px | 6px | \`spacing/spacing-4\` (6px) | \`radius/full\` (999px) |

---

### 🎨 Colors & Token Mapping

#### Fondo de la barra (Track background)
| Modo | Token / Figma Variable | CSS Variable |
|---|---|---|
| **default** | \`color/surface/subtle\` | \`--color-surface-subtle\` |
| **inverse** | \`color/surface/inverse/subtle\` | \`--color-surface-inverse-subtle\` |

#### Indicador de progreso (Indicator fill)
| Estado | Token / Figma Variable | CSS Variable |
|---|---|---|
| **info** | \`color/info/surface/strong\` | \`--color-info-surface-strong\` |
| **danger** | \`color/destructive/surface/strong\` | \`--color-destructive-surface-strong\` |
| **warning** | \`color/warning/surface/strong\` | \`--color-warning-surface-strong\` |
| **success** | \`color/success/surface/strong\` | \`--color-success-surface-strong\` |
| **neutral** | \`color/subtle/surface/strong\` | \`--color-subtle-surface-strong\` |

#### Texto del label
| Modo | Token / Figma Variable | CSS Variable | Tipografía |
|---|---|---|---|
| **default** | \`color/text/secondary\` | \`--color-text-secondary\` | 12px / 16px Regular |
| **inverse** | \`color/text/inverse/secondary\` | \`--color-text-inverse-secondary\` | 12px / 16px Regular |
        `,
      },
    },
  },
  argTypes: {
    modelValue: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Valor del progreso (0 a 100)',
    },
    mode: {
      control: 'select',
      options: ['default', 'inverse'],
      description: 'Modo visual (default para fondos claros, inverse para fondos oscuros)',
    },
    state: {
      control: 'select',
      options: ['info', 'danger', 'warning', 'success', 'neutral'],
      description: 'Estado semántico del progreso',
    },
    label: {
      control: 'select',
      options: ['hidden', 'right', 'bottom'],
      description: 'Ubicación de la etiqueta de porcentaje',
    },
    labelText: {
      control: 'text',
      description: 'Texto personalizado para la etiqueta (opcional)',
    },
  },
  args: {
    modelValue: 36,
    mode: 'default',
    state: 'info',
    label: 'right',
  },
  render: (args) => ({
    components: { ProgressBar },
    setup() {
      return { args }
    },
    template: '<ProgressBar v-bind="args" style="max-width: 360px;" />',
  }),
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Default: Story = {}

export const LabelRight: Story = {
  args: {
    label: 'right',
    modelValue: 36,
  },
}

export const LabelBottom: Story = {
  args: {
    label: 'bottom',
    modelValue: 64,
  },
}

export const LabelHidden: Story = {
  args: {
    label: 'hidden',
    modelValue: 50,
  },
}

export const AllStates: Story = {
  render: () => ({
    components: { ProgressBar },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-9); max-width: 400px;">
        <div>
          <span style="font-size: var(--font-size-caption-medium); font-weight: var(--font-weight-semibold); text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: var(--spacing-4); display: block;">Info</span>
          <ProgressBar state="info" label="right" :modelValue="45" />
        </div>
        <div>
          <span style="font-size: var(--font-size-caption-medium); font-weight: var(--font-weight-semibold); text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: var(--spacing-4); display: block;">Success</span>
          <ProgressBar state="success" label="right" :modelValue="100" />
        </div>
        <div>
          <span style="font-size: var(--font-size-caption-medium); font-weight: var(--font-weight-semibold); text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: var(--spacing-4); display: block;">Warning</span>
          <ProgressBar state="warning" label="right" :modelValue="75" />
        </div>
        <div>
          <span style="font-size: var(--font-size-caption-medium); font-weight: var(--font-weight-semibold); text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: var(--spacing-4); display: block;">Danger</span>
          <ProgressBar state="danger" label="right" :modelValue="25" />
        </div>
        <div>
          <span style="font-size: var(--font-size-caption-medium); font-weight: var(--font-weight-semibold); text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: var(--spacing-4); display: block;">Neutral</span>
          <ProgressBar state="neutral" label="right" :modelValue="60" />
        </div>
      </div>
    `,
  }),
}

export const InverseMode: Story = {
  render: () => ({
    components: { ProgressBar },
    template: `
      <div style="background-color: var(--color-wolf-950); padding: var(--spacing-9); border-radius: var(--radius-lg); display: flex; flex-direction: column; gap: var(--spacing-8); max-width: 400px;">
        <span style="color: var(--color-basic-white); font-size: var(--font-size-text-small); font-weight: var(--font-weight-medium);">Modo Inverse (Fondo Oscuro)</span>
        <ProgressBar mode="inverse" state="info" label="right" :modelValue="36" />
        <ProgressBar mode="inverse" state="success" label="right" :modelValue="100" />
        <ProgressBar mode="inverse" state="warning" label="bottom" :modelValue="80" />
        <ProgressBar mode="inverse" state="danger" label="hidden" :modelValue="20" />
      </div>
    `,
  }),
}
