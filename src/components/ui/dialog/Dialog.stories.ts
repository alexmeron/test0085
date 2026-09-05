import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Dialog from './Dialog.vue'
import { Button } from '../button'
import { Input } from '../input'
import { Overlay } from '../overlay'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente **Dialog / Drawer** mapeado 1:1 al componente de Figma. Estilizado con **CSS Modules**, **CSS Variables**, **Drop Shadows** exactos de Figma y respaldado por el componente **Overlay**.

🔗 **[Ver Dialog en Figma](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4246-17453)** | 🔗 **[Ver Overlay en Figma](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=2052-759)**

---

### 📐 Layout & Sizing

| Modo | Ancho | Padding | Gap Interior |
|---|---|---|---|
| **Dialog** | 480px | \`spacing/9\` (24px) | \`spacing/9\` (24px) |
| **Drawer** | 400px | \`spacing/9\` (24px) | \`spacing/6\` (12px) |
| **Header** | 100% | — | \`spacing/3\` (4px entre título y descripción) |
| **Separadores (Dividers)** | 100% (1px alto) | \`spacing/7\` (16px vert) | — |
| **Footer** | 100% (min 40px) | — | \`spacing/5\` (8px entre botones) |

---

### ⬛ Shape

| Elemento | Modo | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|---|
| **Border Radius** | Dialog | \`radius/radius-3xl\` | \`--radius-3xl\` | 16px |
| | Drawer | \`radius/sm\` | \`--radius-sm\` | 4px |
| **Botón Cerrar** | ambos | \`radius/radius-lg\` | \`--radius-lg\` | 8px |
| **Botones Acción** | ambos | \`radius/radius-lg\` | \`--radius-lg\` | 8px |

---

### 🔤 Typography

| Elemento | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|
| **Título** | \`font-size/text-big\`, \`font-weight/semibold\` | \`--font-size-text-big\`, \`--font-weight-semibold\` | 18px (600), leading 28px |
| **Descripción** | \`font-size/text-small\`, \`font-weight/regular\` | \`--font-size-text-small\`, \`--font-weight-regular\` | 14px (400), leading 20px |
| **Texto Secundario (Status)** | \`font-size/caption/big\`, \`font-weight/medium\` | \`--font-size-caption-big\`, \`--font-weight-medium\` | 12px (500), leading 16px |

---

### 🎨 Colors & Tokens

| Elemento | Propiedad | Token / Figma Variable | CSS Variable |
|---|---|---|---|
| **Panel Surface** | Background | \`color/surface/raised\` | \`--color-surface-raised\` |
| **Overlay (Backdrop)** | Background | \`color/surface/overlay\` | \`--color-surface-overlay\` |
| **Título** | Color | \`color/text/primary\` | \`--color-text-primary\` |
| **Descripción** | Color | \`color/text/secondary\` | \`--color-text-secondary\` |
| **Líneas Divisoras** | Background | \`color/surface/muted\` | \`--color-surface-muted\` |
| **Dot Status** | Background | \`color/success/solid/default\` | \`--color-success-solid-default\` |
| **Texto Status** | Color | \`color/text/tertiary\` | \`--color-text-tertiary\` |

---

### 🌫️ Drop Shadows (Figma Effects)

| Modo | Sombras (Box Shadow) |
|---|---|
| **Dialog** | \`0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(16, 24, 40, 0.10)\` |
| **Drawer** | \`0 4px 16px 0 rgba(0, 0, 0, 0.08), 0 1px 4px 0 rgba(0, 0, 0, 0.04)\` |
        `,
      },
    },
  },
  argTypes: {
    mode: {
      control: 'select',
      options: ['dialog', 'drawer'],
      description: 'Figma prop: **Mode**',
    },
    title: { control: 'text' },
    description: { control: 'text' },
    showHeader: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
    showDescription: { control: 'boolean' },
    showDividerTop: { control: 'boolean' },
    showBody: { control: 'boolean' },
    showDividerBottom: { control: 'boolean' },
    showFooter: { control: 'boolean' },
    secondaryAction: { control: 'boolean' },
    cancelText: { control: 'text' },
    confirmText: { control: 'text' },
  },
  args: {
    mode: 'dialog',
    title: 'Dialog title',
    description: 'Optional description goes here.',
    showHeader: true,
    showCloseButton: true,
    showDescription: true,
    showDividerTop: true,
    showBody: true,
    showDividerBottom: true,
    showFooter: true,
    secondaryAction: true,
    cancelText: 'Cancel',
    confirmText: 'Confirm',
    asModal: false,
  },
  render: (args) => ({
    components: { Dialog },
    setup() { return { args } },
    template: `
      <div style="background-color: var(--color-surface-subtle); padding: 40px; display: flex; justify-content: center;">
        <Dialog v-bind="args" />
      </div>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {}

export const Drawer: Story = {
  args: {
    mode: 'drawer',
    title: 'Drawer title',
    description: 'Drawer description with complementary information.',
  },
}

export const WithoutDividers: Story = {
  args: {
    showDividerTop: false,
    showDividerBottom: false,
  },
}

export const WithFormContent: Story = {
  render: (args) => ({
    components: { Dialog, Input },
    setup() { return { args } },
    template: `
      <div style="background-color: var(--color-surface-subtle); padding: 40px; display: flex; justify-content: center;">
        <Dialog v-bind="args" title="Create project" description="Fill out the project details to continue.">
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div>
              <label style="display: block; font-size: 12px; margin-bottom: 4px; color: var(--color-text-secondary);">Project name</label>
              <Input placeholder="Enter project name..." />
            </div>
            <div>
              <label style="display: block; font-size: 12px; margin-bottom: 4px; color: var(--color-text-secondary);">Description</label>
              <Input placeholder="Enter short description..." />
            </div>
          </div>
        </Dialog>
      </div>
    `,
  }),
}

// Visual Preview of Dialog with Overlay directly visible in Docs
export const WithOverlayPreview: Story = {
  render: (args) => ({
    components: { Dialog, Overlay },
    setup() { return { args } },
    template: `
      <div style="position: relative; width: 100%; min-height: 440px; border-radius: 8px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
        <Overlay position="absolute">
          <Dialog v-bind="args" />
        </Overlay>
      </div>
    `,
  }),
}

// Full interactive modal with Teleport to body
export const InteractiveModal: Story = {
  render: () => ({
    components: { Dialog, Button },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div style="padding: 40px; min-height: 120px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px;">
        <Button variant="primary" @click="isOpen = true">Open Dialog Modal</Button>
        <span style="font-size: 12px; color: var(--color-text-tertiary);">
          Opens an accessible full-screen modal using Teleport and the Overlay component
        </span>
        <Dialog
          v-if="isOpen"
          :as-modal="true"
          title="Interactive Dialog Modal"
          description="Rendered with Teleport to body, centered on top of the Overlay component."
          @close="isOpen = false"
          @cancel="isOpen = false"
          @confirm="isOpen = false"
        >
          <p style="margin: 0; color: var(--color-text-secondary);">
            The modal floats over the entire screen using the Figma Overlay component. Click outside or use Cancel/Confirm to close.
          </p>
        </Dialog>
      </div>
    `,
  }),
}
