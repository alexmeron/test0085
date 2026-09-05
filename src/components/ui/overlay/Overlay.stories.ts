import type { Meta, StoryObj } from '@storybook/vue3'
import Overlay from './Overlay.vue'

const meta: Meta<typeof Overlay> = {
  title: 'Components/Overlay',
  component: Overlay,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente **Overlay** (capa de oscurecimiento o backdrop) mapeado 1:1 a Figma. Estilizado con **CSS Modules** y **CSS Variables**.

🔗 **[Ver en Figma](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=2052-759)**

---

### 🎨 Colors & Tokens

| Elemento | Propiedad | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|---|
| **Fondo (Backdrop)** | Background | \`color/surface/overlay\` | \`--color-surface-overlay\` | rgba(25, 26, 28, 0.40) |

---

### 📐 Layout

| Posición | Comportamiento |
|---|---|
| \`fixed\` | Ocupa toda la pantalla (\`inset: 0\`) con \`z-index: 50\` |
| \`absolute\` | Ocupa el contenedor relativo más cercano |
| \`static\` | Flujo en bloque para previews y documentación |
        `,
      },
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['fixed', 'absolute', 'static'],
      description: 'Tipo de posicionamiento CSS',
    },
  },
  args: {
    position: 'static',
  },
  render: (args) => ({
    components: { Overlay },
    setup() { return { args } },
    template: `
      <div style="position: relative; width: 100%; height: 280px; border-radius: 8px; overflow: hidden; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center;">
        <Overlay position="absolute">
          <div style="background: white; padding: 16px 24px; border-radius: 8px; font-family: var(--font-family-body); font-weight: 500;">
            Contenido sobre Overlay
          </div>
        </Overlay>
      </div>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof Overlay>

export const Default: Story = {}
