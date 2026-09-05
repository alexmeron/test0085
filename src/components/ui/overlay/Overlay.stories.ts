import type { Meta, StoryObj } from '@storybook/vue3'
import Overlay from './Overlay.vue'

/**
 * ## Overlay
 *
 * Capa de oscurecimiento o backdrop definida en Figma.
 * En Figma este componente es una superficie base sin variantes de propiedades (`props: {}`)
 * con dimensiones de 1440×1024px y relleno `color/surface/overlay`.
 *
 * **Figma Link:**
 * [Figma - Overlay (Node 2019:11)](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=2019-11)
 *
 * ### Design Tokens Mapping
 *
 * #### 🎨 Colors & States
 * | Elemento | Token Figma | Variable CSS | Valor Figma |
 * |---|---|---|---|
 * | **Backdrop** | `color/surface/overlay` | `--color-surface-overlay` | `rgba(25, 26, 28, 0.40)` |
 *
 * #### 📐 Layout & Sizing
 * | Propiedad | Valor en Figma | Descripción |
 * |---|---|---|
 * | **Width** | `1440px` | Ancho de pantalla base en Figma |
 * | **Height** | `1024px` | Alto de pantalla base en Figma |
 * | **Variantes** | *Ninguna* (`props: {}`) | Componente atómico único en Figma |
 *
 * #### ⬛ Shape
 * | Elemento | Token / Valor | Descripción |
 * |---|---|---|
 * | **Border Radius** | `0` (`--radius-none`) | Sin esquinas redondeadas |
 * | **Border** | *Ninguno* | Superficie sin trazo |
 */
const meta: Meta<typeof Overlay> = {
  title: 'Components/Overlay',
  component: Overlay,
  tags: ['autodocs'],
  argTypes: {
    fixed: {
      control: 'boolean',
      description: 'Activa posicionamiento fixed inset:0 para usar como backdrop de modal/drawer en el viewport',
    },
  },
  args: {
    fixed: false,
  },
}

export default meta
type Story = StoryObj<typeof Overlay>

export const Default: Story = {
  render: (args) => ({
    components: { Overlay },
    setup() {
      return { args }
    },
    template: `
      <div style="width: 100%; height: 320px; border: 1px solid var(--color-border-default); border-radius: var(--radius-md); overflow: hidden; background: repeating-conic-gradient(var(--color-surface-subtle) 0% 25%, var(--color-surface-default) 0% 50%) 50% / 20px 20px;">
        <Overlay v-bind="args" style="width: 100%; height: 100%;" />
      </div>
    `,
  }),
}

export const FigmaDimensions: Story = {
  render: () => ({
    components: { Overlay },
    template: `
      <div>
        <p style="font-family: var(--font-family-body); font-size: 12px; color: var(--color-text-secondary); margin-bottom: 8px;">
          Escala representativa de las proporciones en Figma (1440 × 1024 px):
        </p>
        <div style="width: 720px; height: 512px; max-width: 100%; border: 1px solid var(--color-border-default); border-radius: var(--radius-md); overflow: hidden; background: repeating-conic-gradient(var(--color-surface-subtle) 0% 25%, var(--color-surface-default) 0% 50%) 50% / 20px 20px;">
          <Overlay style="width: 100%; height: 100%;" />
        </div>
      </div>
    `,
  }),
}

export const AsBackdrop: Story = {
  render: () => ({
    components: { Overlay },
    template: `
      <div style="position: relative; width: 100%; height: 300px; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--color-border-default);">
        <!-- Simulación de fondo de página -->
        <div style="padding: 24px; background: var(--color-surface-default); height: 100%; box-sizing: border-box;">
          <h3 style="margin: 0 0 12px 0; font-family: var(--font-family-body); font-size: 18px; color: var(--color-text-primary);">
            Panel de control principal
          </h3>
          <p style="margin: 0 0 16px 0; font-family: var(--font-family-body); font-size: 14px; color: var(--color-text-secondary);">
            Este texto y elementos simulan el contenido subyacente que queda atenuado bajo el Overlay.
          </p>
          <div style="display: flex; gap: 12px;">
            <div style="width: 80px; height: 32px; background: var(--color-surface-muted); border-radius: 6px;"></div>
            <div style="width: 120px; height: 32px; background: var(--color-surface-muted); border-radius: 6px;"></div>
          </div>
        </div>

        <!-- Overlay oscureciendo el fondo -->
        <Overlay style="position: absolute; inset: 0;" />
      </div>
    `,
  }),
}
