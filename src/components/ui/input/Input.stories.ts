import type { Meta, StoryObj } from '@storybook/vue3'
import Input from './Input.vue'
import { Search, Eye, Mail, CheckCircle2 } from 'lucide-vue-next'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente **Input** (Input Text) para formularios. Mapeado 1:1 a Figma. Estilizado con **CSS Modules** y **Design Tokens (CSS Variables)**.

🔗 **[Ver en Figma (node 4115:21221)](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4115-21221)**

---

### 📐 Layout & Sizing

| Propiedad | Tamaño | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|---|
| **Height** | sm | \`sizing/sizing-9\` | \`--sizing-9\` | 24px |
| | md | \`sizing/sizing-10\` | \`--sizing-10\` | 32px |
| | lg | \`sizing/sizing-11\` | \`--sizing-11\` | 40px |
| **Padding Horizontal** | sm, md | \`spacing/spacing-5\` | \`--spacing-5\` | 8px |
| | lg | \`spacing/spacing-6\` | \`--spacing-6\` | 12px |
| **Padding Vertical** | sm | \`spacing/spacing-3\` | \`--spacing-3\` | 4px |
| | md | \`spacing/spacing-4\` | \`--spacing-4\` | 6px |
| | lg | \`spacing/spacing-5-5\` | \`--spacing-5-5\` | 10px |
| **Wrapper Gap** | todos | \`spacing/spacing-4\` | \`--spacing-4\` | 6px |
| **Header / Icon Gap** | todos | \`spacing/spacing-3\` | \`--spacing-3\` | 4px |
| **Icons Size** | leading / trailing | - | - | 16×16px |
| **Helper Icon Size** | status-icon | - | - | 12×12px |

---

### ⬛ Shape & Radius

| Propiedad | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|
| **Border Radius** | \`radius/radius-lg\` | \`--radius-lg\` | 8px |

---

### 🔤 Typography

| Elemento | Tamaño | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|---|
| **Label** | todos | \`font-size/text/small\` | \`--font-size-text-small\` | 14px (w500) |
| **Hint text** | todos | \`font-size/text/small\` | \`--font-size-text-small\` | 14px (w400) |
| **Input text** | sm | \`font-size/caption/big\` | \`--font-size-caption-big\` | 12px (line-height 16px) |
| | md, lg | \`font-size/text/small\` | \`--font-size-text-small\` | 14px (line-height 20px) |
| **Helper text** | todos | \`font-size/caption/big\` | \`--font-size-caption-big\` | 12px (line-height 16px) |

---

### 🎨 Colors & States

> **Nota sobre Focus:** En Figma el estado \`focus\` utiliza exclusivamente un borde de **2px** con el token \`color/border/focus\`. No tiene ningún box-shadow / ring exterior.

| Estado | Fondo (Fill) | Borde (Stroke) | Grosor Borde | Texto / Icono |
|---|---|---|---|---|
| **default** | \`color/surface/subtle\` (\`--color-surface-subtle\`) | \`color/border/default\` (\`--color-border-default\`) | 1px | \`color/text/primary\` (\`--color-text-primary\`) |
| **hover** | \`color/surface/subtle\` (\`--color-surface-subtle\`) | \`color/border/strong\` (\`--color-border-strong\`) | 1px | \`color/text/primary\` (\`--color-text-primary\`) |
| **focus** | \`color/surface/subtle\` (\`--color-surface-subtle\`) | \`color/border/focus\` (\`--color-border-focus\`) | **2px** | \`color/text/primary\` (\`--color-text-primary\`) |
| **filled** | \`color/surface/subtle\` (\`--color-surface-subtle\`) | \`color/border/default\` (\`--color-border-default\`) | 1px | \`color/text/primary\` (\`--color-text-primary\`) |
| **disabled** | \`color/surface/disabled\` (\`--color-surface-disabled\`) | \`color/border/disabled\` (\`--color-border-disabled\`) | 1px (opacity 0.5) | \`color/text/placeholder\` |
| **success** | \`color/success/surface/default\` (\`--color-success-surface-default\`) | \`color/success/border/strong\` (\`--color-success-border-strong\`) | **2px** | \`color/success/text/default\` (\`--color-success-text-default\`) |
| **destructive** | \`color/destructive/surface/default\` (\`--color-destructive-surface-default\`) | \`color/destructive/border/strong\` (\`--color-destructive-border-strong\`) | **2px** | \`color/destructive/text/default\` (\`--color-destructive-text-default\`) |
        `,
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus', 'filled', 'disabled', 'success', 'destructive'],
      description: 'Estado del input según Figma',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del componente (altura sm=24px, md=32px, lg=40px)',
    },
    label: { control: 'text', description: 'Texto del label' },
    isMandatory: { control: 'boolean', description: 'Indica si el campo es obligatorio (muestra asterisco rojo)' },
    hint: { control: 'text', description: 'Texto explicativo adicional bajo el label' },
    placeholder: { control: 'text', description: 'Texto placeholder del input' },
    helperText: { control: 'text', description: 'Texto del helper row inferior' },
    showHelper: { control: 'boolean', description: 'Mostrar u ocultar la fila de helper' },
    showHelperIcon: { control: 'boolean', description: 'Mostrar icono de estado en la fila de helper' },
    disabled: { control: 'boolean', description: 'Deshabilitar el input' },
    type: { control: 'text', description: 'Tipo de input HTML (text, password, email, etc.)' },
  },
  args: {
    state: 'default',
    size: 'md',
    label: 'Label',
    isMandatory: true,
    hint: 'This is a hint text to help user.',
    placeholder: 'Placeholder text...',
    helperText: 'Helper text',
    showHelper: true,
    showHelperIcon: true,
    disabled: false,
    type: 'text',
  },
  render: (args) => ({
    components: { Input },
    setup() {
      return { args }
    },
    template: '<Input v-bind="args" style="max-width: 360px;" />',
  }),
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {}

export const FocusState: Story = {
  name: 'Focus',
  args: {
    state: 'focus',
    label: 'Focus State',
    placeholder: 'Focused input...',
    helperText: 'Focus state with 2px border',
  },
}

export const WithLeadingIcon: Story = {
  render: (args) => ({
    components: { Input, Search },
    setup() {
      return { args, Search }
    },
    template: `
      <Input
        v-bind="args"
        :leadingIcon="Search"
        label="Search"
        placeholder="Search components..."
        helperText="Leading icon 16x16px"
        style="max-width: 360px;"
      />
    `,
  }),
}

export const WithTrailingIcon: Story = {
  render: (args) => ({
    components: { Input, Eye },
    setup() {
      return { args, Eye }
    },
    template: `
      <Input
        v-bind="args"
        :trailingIcon="Eye"
        type="password"
        label="Password"
        placeholder="••••••••"
        helperText="Trailing icon 16x16px"
        style="max-width: 360px;"
      />
    `,
  }),
}

export const WithBothIcons: Story = {
  render: (args) => ({
    components: { Input, Mail, CheckCircle2 },
    setup() {
      return { args, Mail, CheckCircle2 }
    },
    template: `
      <Input
        v-bind="args"
        :leadingIcon="Mail"
        :trailingIcon="CheckCircle2"
        label="Email"
        placeholder="user@example.com"
        helperText="Both leading and trailing icons"
        style="max-width: 360px;"
      />
    `,
  }),
}

export const SuccessState: Story = {
  args: {
    state: 'success',
    label: 'Success Input',
    modelValue: 'valid.username',
    helperText: 'Username is available!',
  },
}

export const DestructiveState: Story = {
  args: {
    state: 'destructive',
    label: 'Destructive / Error Input',
    modelValue: 'invalid-email@',
    helperText: 'Please enter a valid email address.',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled Input',
    placeholder: 'Disabled content...',
    helperText: 'This field cannot be edited.',
  },
}

export const AllStates: Story = {
  render: () => ({
    components: { Input, Search },
    setup() {
      return { Search }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-8); max-width: 400px;">
        <Input
          label="Default State"
          isMandatory
          placeholder="Default placeholder..."
          helperText="Default state with 1px border"
          :leadingIcon="Search"
        />
        <Input
          state="hover"
          label="Hover State"
          placeholder="Hovered input..."
          helperText="Hover state with color/border/strong"
          :leadingIcon="Search"
        />
        <Input
          state="focus"
          label="Focus State"
          placeholder="Focused input..."
          helperText="Focus state with 2px color/border/focus"
          :leadingIcon="Search"
        />
        <Input
          state="filled"
          label="Filled State"
          modelValue="Filled value text"
          helperText="Filled with primary text color"
          :leadingIcon="Search"
        />
        <Input
          state="success"
          label="Success State"
          modelValue="Everything is good"
          helperText="Success with bambi surface & 2px border"
          :leadingIcon="Search"
        />
        <Input
          state="destructive"
          label="Destructive State"
          modelValue="Invalid input value"
          helperText="Destructive with brooklyn surface & 2px border"
          :leadingIcon="Search"
        />
        <Input
          state="disabled"
          label="Disabled State"
          modelValue="Disabled text"
          helperText="Disabled with 0.5 opacity"
          :leadingIcon="Search"
        />
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Input, Search },
    setup() {
      return { Search }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-9); max-width: 400px;">
        <div>
          <span style="font-size: var(--font-size-caption-medium); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: 0.05em; font-weight: var(--font-weight-semibold); display: block; margin-bottom: var(--spacing-4);">Small (24px field height)</span>
          <Input
            size="sm"
            label="Small Input"
            placeholder="Small input field..."
            helperText="Field height: 24px, font 12px"
            :leadingIcon="Search"
          />
        </div>
        <div>
          <span style="font-size: var(--font-size-caption-medium); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: 0.05em; font-weight: var(--font-weight-semibold); display: block; margin-bottom: var(--spacing-4);">Medium (32px field height) - Default</span>
          <Input
            size="md"
            label="Medium Input"
            placeholder="Medium input field..."
            helperText="Field height: 32px, font 14px"
            :leadingIcon="Search"
          />
        </div>
        <div>
          <span style="font-size: var(--font-size-caption-medium); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: 0.05em; font-weight: var(--font-weight-semibold); display: block; margin-bottom: var(--spacing-4);">Large (40px field height)</span>
          <Input
            size="lg"
            label="Large Input"
            placeholder="Large input field..."
            helperText="Field height: 40px, font 14px"
            :leadingIcon="Search"
          />
        </div>
      </div>
    `,
  }),
}
