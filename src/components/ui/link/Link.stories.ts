import type { Meta, StoryObj } from '@storybook/vue3'
import Link from './Link.vue'

/**
 * ## Link Component
 *
 * Componente de enlace tipográfico interactivo. Mapeado 1:1 a Figma.
 *
 * 🔗 **[Ver en Figma (node 4244:275)](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4244-275)**
 *
 * ---
 *
 * ### 📐 Layout & Sizing
 *
 * | Talla | Fuente | Altura de Línea | Altura Mínima | Padding |
 * |---|---|---|---|---|
 * | **sm** | `--font-size-text-small` (14px) | `--leading-20` (20px) | `--sizing-9` (24px) | `--spacing-2` (2px) |
 * | **md** | `--font-size-text-medium` (16px) | `--leading-24` (24px) | `calc(var(--sizing-7) + var(--sizing-6))` (28px) | `--spacing-2` (2px) |
 * | **lg** | `--font-size-text-large` (20px) | `--leading-28` (28px) | `--sizing-10` (32px) | `--spacing-2` (2px) |
 *
 * ---
 *
 * ### 🎨 Tokens de Color por Variante y Estado
 *
 * | Variante | Default | Hover | Pressed | Focus | Disabled |
 * |---|---|---|---|---|---|
 * | **brand** | `--color-brand-link-default` | `--color-brand-link-hover` | `--color-brand-link-pressed` | `--color-brand-link-focus` | `--color-brand-link-disabled` |
 * | **secondary** | `--color-secondary-link-default` | `--color-secondary-link-hover` | `--color-secondary-link-pressed` | `--color-secondary-link-focus` | `--color-secondary-link-disabled` |
 * | **subtle** | `--color-subtle-link-default` | `--color-subtle-link-hover` | `--color-subtle-link-pressed` | `--color-subtle-link-focus` | `--color-subtle-link-disabled` |
 * | **danger** | `--color-destructive-link-default` | `--color-destructive-link-hover` | `--color-destructive-link-pressed` | `--color-destructive-link-focus` | `--color-destructive-link-disabled` |
 * | **success** | `--color-success-link-default` | `--color-success-link-hover` | `--color-success-link-pressed` | `--color-success-link-focus` | `--color-success-link-disabled` |
 * | **ready** | `--color-ready-link-default` | `--color-ready-link-hover` | `--color-ready-link-pressed` | `--color-ready-link-focus` | `--color-ready-link-disabled` |
 *
 * ---
 *
 * ### 🔍 Focus Ring
 * - **Border / Stroke**: `2px solid var(--color-border-focus)`
 * - **Offset**: `--spacing-2` (2px)
 * - **Border Radius**: `--radius-sm` (4px)
 */
const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['brand', 'secondary', 'subtle', 'danger', 'success', 'ready'],
      description: 'Variante de color semántica del enlace',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del texto del enlace',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'pressed', 'focus', 'disabled'],
      description: 'Estado visual (para previsualización interactiva o forzada)',
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita el enlace e impide interacciones',
    },
    href: {
      control: 'text',
      description: 'URL destino del enlace',
    },
    label: {
      control: 'text',
      description: 'Texto del enlace',
    },
    as: {
      control: 'text',
      description: 'Elemento HTML a renderizar (por defecto a)',
    },
  },
  args: {
    label: 'Link text',
    variant: 'brand',
    size: 'sm',
    state: 'default',
    disabled: false,
    href: '#',
  },
  render: (args) => ({
    components: { Link },
    setup() {
      return { args }
    },
    template: '<Link v-bind="args" />',
  }),
}

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {}

export const AllVariants: Story = {
  render: () => ({
    components: { Link },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-7); padding: var(--spacing-5);">
        <div style="display: flex; align-items: center; gap: var(--spacing-6);">
          <span style="width: 100px; font-size: var(--font-size-caption-big); color: var(--color-text-secondary);">Brand:</span>
          <Link variant="brand" label="Brand link" href="#" />
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-6);">
          <span style="width: 100px; font-size: var(--font-size-caption-big); color: var(--color-text-secondary);">Secondary:</span>
          <Link variant="secondary" label="Secondary link" href="#" />
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-6); background-color: var(--color-wolf-900); padding: var(--spacing-4); border-radius: var(--radius-md);">
          <span style="width: 100px; font-size: var(--font-size-caption-big); color: var(--color-wolf-200);">Subtle (dark):</span>
          <Link variant="subtle" label="Subtle link" href="#" />
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-6);">
          <span style="width: 100px; font-size: var(--font-size-caption-big); color: var(--color-text-secondary);">Danger:</span>
          <Link variant="danger" label="Danger link" href="#" />
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-6);">
          <span style="width: 100px; font-size: var(--font-size-caption-big); color: var(--color-text-secondary);">Success:</span>
          <Link variant="success" label="Success link" href="#" />
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-6);">
          <span style="width: 100px; font-size: var(--font-size-caption-big); color: var(--color-text-secondary);">Ready:</span>
          <Link variant="ready" label="Ready link" href="#" />
        </div>
      </div>
    `,
  }),
}

export const AllStates: Story = {
  render: () => ({
    components: { Link },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-7); padding: var(--spacing-5);">
        <div style="display: flex; align-items: center; gap: var(--spacing-6);">
          <span style="width: 100px; font-size: var(--font-size-caption-big); color: var(--color-text-secondary);">Default:</span>
          <Link variant="brand" state="default" label="Default state" href="#" />
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-6);">
          <span style="width: 100px; font-size: var(--font-size-caption-big); color: var(--color-text-secondary);">Hover:</span>
          <Link variant="brand" state="hover" label="Hover state" href="#" />
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-6);">
          <span style="width: 100px; font-size: var(--font-size-caption-big); color: var(--color-text-secondary);">Pressed:</span>
          <Link variant="brand" state="pressed" label="Pressed state" href="#" />
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-6);">
          <span style="width: 100px; font-size: var(--font-size-caption-big); color: var(--color-text-secondary);">Focus:</span>
          <Link variant="brand" state="focus" label="Focus state" href="#" />
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-6);">
          <span style="width: 100px; font-size: var(--font-size-caption-big); color: var(--color-text-secondary);">Disabled:</span>
          <Link variant="brand" disabled label="Disabled state" href="#" />
        </div>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Link },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-7); padding: var(--spacing-5);">
        <div style="display: flex; align-items: center; gap: var(--spacing-6);">
          <span style="width: 140px; font-size: var(--font-size-caption-big); color: var(--color-text-secondary);">Small (14px):</span>
          <Link size="sm" label="Small link text" href="#" />
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-6);">
          <span style="width: 140px; font-size: var(--font-size-caption-big); color: var(--color-text-secondary);">Medium (16px):</span>
          <Link size="md" label="Medium link text" href="#" />
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-6);">
          <span style="width: 140px; font-size: var(--font-size-caption-big); color: var(--color-text-secondary);">Large (20px):</span>
          <Link size="lg" label="Large link text" href="#" />
        </div>
      </div>
    `,
  }),
}

export const AsButton: Story = {
  args: {
    as: 'button',
    label: 'Rendered as HTML button',
  },
}
