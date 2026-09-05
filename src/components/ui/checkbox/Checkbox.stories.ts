import type { Meta, StoryObj } from '@storybook/vue3'
import Checkbox from './Checkbox.vue'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente **Checkbox** basado en Radix Vue y Tailwind CSS, mapeado 1:1 a Figma.

### Token mapping

| Propiedad | Figma variable | CSS variable | Tailwind class |
|---|---|---|---|
| Border radius | \`radius/radius-sm\` | \`--radius-sm\` | \`rounded-radius-sm\` |
| **sm** (14px) | \`Size/size-formControll-sm\` | *Missing token* | \`h-[14px] w-[14px]\` |
| **md** (16px) | \`Size/size-formControll-md\` / \`sizing/7\` | \`--sizing-7\` | \`h-sizing-7 w-sizing-7\` |
| **lg** (20px) | \`Size/size-formControll-lg\` / \`sizing/8\` | \`--sizing-8\` | \`h-sizing-8 w-sizing-8\` |
| Unchecked BG | \`color/surface/default\` | \`--color-surface-default\` | \`bg-surface-default\` |
| Unchecked Border | \`color/border/default\` | \`--color-border-default\` | \`border-border-default\` |
| Unchecked Hover Border | \`color/border/strong\` | \`--color-border-strong\` | \`hover:border-border-strong\` |
| Primary Checked BG | \`color/brand/solid/default\` | \`--color-brand-solid-default\` | \`data-[state=checked]:bg-brand-solid-default\` |
| Secondary Checked BG | \`color/secondary/solid/default\` | \`--color-secondary-solid-default\` | \`data-[state=checked]:bg-secondary-solid-default\` |
| Focus ring | \`color/border/focus\` | \`--color-border-focus\` | \`ring-border-focus\` |
| Disabled | \`Opacity/disabled\` | — | \`opacity-50\` |
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Figma prop: **Variant**',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Figma prop: **Size**',
    },
    checked: {
      control: 'select',
      options: [false, true, 'indeterminate'],
      description: 'Figma props: **Checked** y **Indeterminate**',
    },
    disabled: {
      control: 'boolean',
      description: 'Figma prop: **State** = Disabled',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    checked: true,
    disabled: false,
  },
  render: (args) => ({
    components: { Checkbox },
    setup() { return { args } },
    template: '<Checkbox v-bind="args" />',
  }),
}

export default meta
type Story = StoryObj<typeof Checkbox>

// ─── Variants ───────────────────────────────────────────────────────────────

export const Primary: Story = {
  args: { variant: 'primary', checked: true },
}

export const Secondary: Story = {
  args: { variant: 'secondary', checked: true },
}

// ─── Sizes (agrupados sm, md, lg en una sola historia) ─────────────────────

export const Sizes: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() { return { args } },
    template: `
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <Checkbox v-bind="args" size="sm" id="c-sm" />
          <label for="c-sm" class="text-caption-big">Small (14px)</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-bind="args" size="md" id="c-md" />
          <label for="c-md" class="text-text-small">Medium (16px)</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-bind="args" size="lg" id="c-lg" />
          <label for="c-lg" class="text-text-small">Large (20px)</label>
        </div>
      </div>
    `,
  }),
}

// ─── Checked / States ───────────────────────────────────────────────────────

export const Unchecked: Story = {
  args: { checked: false },
}

export const Checked: Story = {
  args: { checked: true },
}

export const Indeterminate: Story = {
  args: { checked: 'indeterminate' },
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() { return { args } },
    template: `
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <Checkbox v-bind="args" :checked="false" disabled id="d-un" />
          <label for="d-un" class="text-text-small text-text-disabled">Unchecked Disabled</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-bind="args" :checked="true" disabled id="d-chk" />
          <label for="d-chk" class="text-text-small text-text-disabled">Checked Disabled</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-bind="args" checked="indeterminate" disabled id="d-ind" />
          <label for="d-ind" class="text-text-small text-text-disabled">Indeterminate Disabled</label>
        </div>
      </div>
    `,
  }),
}
