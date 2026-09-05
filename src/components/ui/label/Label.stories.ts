import type { Meta, StoryObj } from '@storybook/vue3'
import Label from './Label.vue'
import { InfoIcon, CircleHelpIcon } from '../icon'

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente **Label** para formularios. Mapeado 1:1 a Figma.
Construido con **Radix Vue** (\`Label\`), **CSS Modules** y **Design Tokens**.

🔗 **[Ver en Figma (node 4099:5009)](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4099-5009)**

---

### 📐 Layout & Sizing

| Propiedad | Token / Figma Variable | CSS Variable | Valor |
|---|---|---|---|
| **Vertical Gap (Header - Hint)** | \`spacing/spacing-3\` | \`--spacing-3\` | 4px |
| **Horizontal Gap (Container)** | \`spacing/spacing-3\` | \`--spacing-3\` | 4px |
| **Label - Asterisk Gap** | \`spacing/spacing-1-5\` | \`--spacing-1-5\` | 2px |
| **Icons Size** | - | - | 16×16px |

---

### 🔤 Typography & Colors

| Elemento | Token / Figma Variable | CSS Variable | Valor / Color |
|---|---|---|---|
| **Label Text** | \`font-size/text/small\` | \`--font-size-text-small\` | 14px Medium (w500) / \`color/text/primary\` |
| **Asterisk (*)** | \`font-size/text/small\` | \`--font-size-text-small\` | 14px Medium (w500) / \`color/destructive/text/default\` |
| **Hint Text** | \`font-size/text/small\` | \`--font-size-text-small\` | 14px Regular (w400) / \`color/text/tertiary\` |
| **Icons Color** | \`color/text/secondary\` | \`--color-text-secondary\` | \`var(--color-text-secondary)\` |
        `,
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Texto de la etiqueta' },
    isMandatory: { control: 'boolean', description: 'Muestra asterisco de obligatoriedad (*)' },
    hintText: { control: 'text', description: 'Texto explicativo adicional' },
    showHint: { control: 'boolean', description: 'Mostrar u ocultar el texto de ayuda' },
    leadingIcon: { control: 'boolean', description: 'Mostrar icono inicial (16x16)' },
    trailingIcon: { control: 'boolean', description: 'Mostrar icono final (16x16)' },
    for: { control: 'text', description: 'ID del elemento HTML al que está asociado el label' },
  },
  args: {
    label: 'Label',
    isMandatory: true,
    hintText: 'This is a hint text to help user.',
    showHint: true,
    leadingIcon: true,
    trailingIcon: true,
  },
  render: (args) => ({
    components: { Label },
    setup() {
      return { args }
    },
    template: '<Label v-bind="args" style="max-width: 320px;" />',
  }),
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {}

export const MandatoryOnly: Story = {
  args: {
    label: 'Required Field',
    isMandatory: true,
    leadingIcon: false,
    trailingIcon: false,
    hintText: '',
    showHint: false,
  },
}

export const WithHint: Story = {
  args: {
    label: 'Email address',
    isMandatory: false,
    leadingIcon: false,
    trailingIcon: false,
    hintText: 'We will never share your email with anyone else.',
    showHint: true,
  },
}

export const WithTrailingIcon: Story = {
  args: {
    label: 'Username',
    isMandatory: true,
    leadingIcon: false,
    trailingIcon: true,
    hintText: 'Unique identifier for your account.',
  },
}

export const CustomIcons: Story = {
  render: () => ({
    components: { Label, InfoIcon, CircleHelpIcon },
    setup() {
      return { InfoIcon, CircleHelpIcon }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-8); max-width: 320px;">
        <Label
          label="Password"
          isMandatory
          :trailingIcon="CircleHelpIcon"
          hintText="Must be at least 8 characters long."
        />
        <Label
          label="Security Question"
          :leadingIcon="InfoIcon"
          hintText="Used for account recovery purposes."
        />
      </div>
    `,
  }),
}
