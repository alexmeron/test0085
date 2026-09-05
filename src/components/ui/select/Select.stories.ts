import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Globe } from 'lucide-vue-next'
import Select from './Select.vue'

const sampleOptions = [
  { label: 'Vue.js', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Angular', value: 'angular' },
  { label: 'Solid', value: 'solid' },
]

/**
 * ## Select Component
 *
 * Selector desplegable interactivo compuesto por Label, input-field y Dropdown.
 * Mapeado 1:1 a Figma.
 *
 * 🔗 **[Ver en Figma (node 4115:21928)](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4115-21928)**
 *
 * ---
 *
 * ### 📐 Layout & Sizing
 *
 * | Talla | Altura Mínima | Padding Vertical | Padding Horizontal | Tamaño Fuente |
 * |---|---|---|---|---|
 * | **sm** | `--sizing-9` (24px) | `--spacing-3` (4px) | `--spacing-5` (8px) | `--font-size-caption-big` (12px) |
 * | **md** | `--sizing-10` (32px) | `--spacing-4` (6px) | `--spacing-5` (8px) | `--font-size-text-small` (14px) |
 * | **lg** | `--sizing-11` (40px) | `--spacing-5-5` (10px) | `--spacing-6` (12px) | `--font-size-text-small` (14px) |
 *
 * ---
 *
 * ### 🎨 Tokens de Color por Estado
 *
 * | Estado | Fondo | Borde | Texto |
 * |---|---|---|---|
 * | **default** | `--color-surface-subtle` | `1px solid var(--color-border-default)` | `--color-text-placeholder` |
 * | **hover** | `--color-surface-subtle` | `1px solid var(--color-border-strong)` | `--color-text-placeholder` |
 * | **focus / opened** | `--color-surface-subtle` | `2px solid var(--color-border-focus)` | `--color-text-placeholder` |
 * | **filled** | `--color-surface-subtle` | `1px solid var(--color-border-default)` | `--color-text-primary` |
 * | **disabled** | `--color-surface-disabled` | `1px solid var(--color-border-disabled)` | `opacity: 0.5` |
 * | **success** | `--color-success-surface-default` | `2px solid var(--color-success-border-strong)` | `--color-text-primary` |
 * | **destructive** | `--color-destructive-surface-default` | `2px solid var(--color-destructive-border-strong)` | `--color-text-primary` |
 */
const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del selector',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus', 'filled', 'opened', 'disabled', 'success', 'destructive'],
      description: 'Estado visual para previsualización',
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita el selector',
    },
    label: {
      control: 'text',
      description: 'Etiqueta del selector',
    },
    showLabel: {
      control: 'boolean',
      description: 'Muestra u oculta la etiqueta',
    },
    isMandatory: {
      control: 'boolean',
      description: 'Muestra asterisco de obligatoriedad',
    },
    hintText: {
      control: 'text',
      description: 'Texto de ayuda inferior',
    },
    placeholder: {
      control: 'text',
      description: 'Texto de marcador de posición',
    },
    showChip: {
      control: 'boolean',
      description: 'Muestra chip con contador de seleccionados',
    },
    searchable: {
      control: 'boolean',
      description: 'Habilita buscador dentro del dropdown',
    },
  },
  args: {
    label: 'Framework',
    placeholder: 'Select a framework...',
    size: 'md',
    state: 'default',
    disabled: false,
    options: sampleOptions,
    showLabel: true,
  },
  render: (args) => ({
    components: { Select },
    setup() {
      const selected = ref(undefined)
      return { args, selected }
    },
    template: `
      <div style="padding-bottom: 220px; max-width: 320px;">
        <Select v-bind="args" v-model="selected" />
      </div>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {}

export const WithLabelAndHint: Story = {
  args: {
    label: 'Frontend Technology',
    isMandatory: true,
    hintText: 'Choose the library or framework for your project',
    placeholder: 'Choose framework...',
  },
}

export const WithLeadingIcon: Story = {
  render: (args) => ({
    components: { Select, Globe },
    setup() {
      const selected = ref('vue')
      return { args, selected, Globe }
    },
    template: `
      <div style="padding-bottom: 220px; max-width: 320px;">
        <Select
          v-bind="args"
          v-model="selected"
          :leading-icon="Globe"
          label="Country / Region"
          placeholder="Select country..."
        />
      </div>
    `,
  }),
}

export const MultiSelectWithChips: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const selected = ref(['vue', 'react'])
      return { selected, sampleOptions }
    },
    template: `
      <div style="padding-bottom: 220px; max-width: 320px;">
        <Select
          v-model="selected"
          :options="sampleOptions"
          label="Frameworks (Multi-select)"
          show-chip
          placeholder="Choose frameworks..."
        />
      </div>
    `,
  }),
}

export const WithSearch: Story = {
  args: {
    label: 'Searchable Options',
    searchable: true,
    searchPlaceholder: 'Search frameworks...',
  },
}

export const AllStates: Story = {
  render: () => ({
    components: { Select },
    setup() {
      return { sampleOptions }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-7); max-width: 320px;">
        <Select label="Default State" state="default" :options="sampleOptions" />
        <Select label="Hover State" state="hover" :options="sampleOptions" />
        <Select label="Focus State" state="focus" :options="sampleOptions" />
        <Select label="Filled State" state="filled" model-value="vue" :options="sampleOptions" />
        <Select label="Disabled State" disabled :options="sampleOptions" />
        <Select label="Success State" state="success" model-value="vue" :options="sampleOptions" />
        <Select label="Destructive State" state="destructive" model-value="vue" :options="sampleOptions" />
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Select },
    setup() {
      return { sampleOptions }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-8); max-width: 320px;">
        <div>
          <span style="font-size: var(--font-size-caption-medium); color: var(--color-text-secondary); text-transform: uppercase; font-weight: var(--font-weight-semibold); display: block; margin-bottom: var(--spacing-3);">Small (24px)</span>
          <Select size="sm" label="Small Select" :options="sampleOptions" />
        </div>
        <div>
          <span style="font-size: var(--font-size-caption-medium); color: var(--color-text-secondary); text-transform: uppercase; font-weight: var(--font-weight-semibold); display: block; margin-bottom: var(--spacing-3);">Medium (32px)</span>
          <Select size="md" label="Medium Select" :options="sampleOptions" />
        </div>
        <div>
          <span style="font-size: var(--font-size-caption-medium); color: var(--color-text-secondary); text-transform: uppercase; font-weight: var(--font-weight-semibold); display: block; margin-bottom: var(--spacing-3);">Large (40px)</span>
          <Select size="lg" label="Large Select" :options="sampleOptions" />
        </div>
      </div>
    `,
  }),
}
