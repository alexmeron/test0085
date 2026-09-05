import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonIcon from './ButtonIcon.vue'
import { Search } from 'lucide-vue-next'

const meta: Meta<typeof ButtonIcon> = {
  title: 'Components/Button-icon',
  component: ButtonIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Botón de acción con icono único (sin label). Implementación fiel al componente Button-icon de Figma.

**Figma:** [Button-icon](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4031-1331)

### Props de Figma
- **variant**: primary · secondary · tertiary · danger · outlined · ghost · on-inverse
- **size**: sm · md · lg
- **state**: default · hover · pressed · focus · disabled *(gestionado por CSS)*

### Token mapping
| Propiedad | Figma variable | CSS var | Tailwind |
|---|---|---|---|
| Radius | radius/radius-lg | --radius-lg | rounded-radius-lg |
| sm h/w | sizing/sizing-9 | --sizing-9 | h-sizing-9 w-sizing-9 |
| sm padding | spacing/spacing-3 | --spacing-3 | p-spacing-3 |
| md h/w | sizing/sizing-10 | --sizing-10 | h-sizing-10 w-sizing-10 |
| md padding | spacing/spacing-5 | --spacing-5 | p-spacing-5 |
| lg h/w | sizing/sizing-11 | --sizing-11 | h-sizing-11 w-sizing-11 |
| lg padding | spacing/spacing-5-5 | --spacing-5-5 | p-spacing-5-5 |
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger', 'outlined', 'ghost', 'on-inverse'],
      description: 'Figma prop: variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Figma prop: size',
    },
    disabled: {
      control: 'boolean',
      description: 'Figma prop: state=disabled',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    components: { ButtonIcon, Search },
    setup() { return { args } },
    template: `<ButtonIcon v-bind="args"><Search class="w-full h-full" /></ButtonIcon>`,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = { args: { variant: 'primary' } }
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Tertiary: Story = { args: { variant: 'tertiary' } }
export const Danger: Story = { args: { variant: 'danger' } }
export const Outlined: Story = { args: { variant: 'outlined' } }
export const Ghost: Story = { args: { variant: 'ghost' } }
export const OnInverse: Story = {
  args: { variant: 'on-inverse' },
  parameters: { backgrounds: { default: 'dark' } },
}
export const Small: Story = { args: { size: 'sm' } }
export const Large: Story = { args: { size: 'lg' } }
export const Disabled: Story = { args: { disabled: true } }
