import type { Meta, StoryObj } from '@storybook/vue3'
import RadioGroup from './RadioGroup.vue'
import RadioGroupItem from './RadioGroupItem.vue'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente **Radiobutton** basado en Radix Vue y Tailwind CSS, mapeado 1:1 a Figma.

### Token mapping

| Propiedad | Figma variable | CSS variable | Tailwind class |
|---|---|---|---|
| Shape | \`radius/full\` | \`--radius-full\` | \`rounded-full\` |
| **sm** (14px) | \`Size/size-formControll-sm\` | *Missing token* | \`h-[14px] w-[14px]\` (Dot: 6px) |
| **md** (16px) | \`Size/size-formControll-md\` / \`sizing/7\` | \`--sizing-7\` | \`h-sizing-7 w-sizing-7\` (Dot: 7px) |
| **lg** (20px) | \`Size/size-formControll-lg\` / \`sizing/8\` | \`--sizing-8\` | \`h-sizing-8 w-sizing-8\` (Dot: 9px) |
| Unchecked BG | \`color/surface/default\` | \`--color-surface-default\` | \`bg-surface-default\` |
| Unchecked Border | \`color/border/strong\` | \`--color-border-strong\` | \`border-border-strong\` |
| Primary Checked Border/Dot | \`color/brand/solid/default\` | \`--color-brand-solid-default\` | \`border-brand-solid-default\` |
| Secondary Checked Border/Dot | \`color/secondary/solid/default\` | \`--color-secondary-solid-default\` | \`border-secondary-solid-default\` |
| Focus ring | \`color/border/focus\` | \`--color-border-focus\` | \`ring-border-focus\` |
| Disabled | \`Opacity/disabled\` | — | \`opacity-50\` |
        `,
      },
    },
  },
  argTypes: {
    disabled: { control: 'boolean', description: 'Figma prop: **State** = Disabled' },
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

// ─── Variants ───────────────────────────────────────────────────────────────

export const Primary: Story = {
  render: (args) => ({
    components: { RadioGroup, RadioGroupItem },
    setup() { return { args } },
    template: `
      <RadioGroup v-bind="args" default-value="opt1" class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <RadioGroupItem id="p1" value="opt1" variant="primary" />
          <label for="p1" class="text-text-small cursor-pointer">Option 1 (Selected)</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="p2" value="opt2" variant="primary" />
          <label for="p2" class="text-text-small cursor-pointer">Option 2</label>
        </div>
      </RadioGroup>
    `,
  }),
}

export const Secondary: Story = {
  render: (args) => ({
    components: { RadioGroup, RadioGroupItem },
    setup() { return { args } },
    template: `
      <RadioGroup v-bind="args" default-value="opt1" class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <RadioGroupItem id="s1" value="opt1" variant="secondary" />
          <label for="s1" class="text-text-small cursor-pointer">Secondary Option 1 (Selected)</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="s2" value="opt2" variant="secondary" />
          <label for="s2" class="text-text-small cursor-pointer">Secondary Option 2</label>
        </div>
      </RadioGroup>
    `,
  }),
}

// ─── Sizes (agrupados sm, md, lg en una sola historia) ─────────────────────

export const Sizes: Story = {
  render: (args) => ({
    components: { RadioGroup, RadioGroupItem },
    setup() { return { args } },
    template: `
      <div class="flex items-center gap-8">
        <div class="flex items-center gap-2">
          <RadioGroup default-value="sm-opt">
            <RadioGroupItem id="r-sm" value="sm-opt" size="sm" />
          </RadioGroup>
          <label for="r-sm" class="text-caption-big">Small (14px / Dot 6px)</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroup default-value="md-opt">
            <RadioGroupItem id="r-md" value="md-opt" size="md" />
          </RadioGroup>
          <label for="r-md" class="text-text-small">Medium (16px / Dot 7px)</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroup default-value="lg-opt">
            <RadioGroupItem id="r-lg" value="lg-opt" size="lg" />
          </RadioGroup>
          <label for="r-lg" class="text-text-small">Large (20px / Dot 9px)</label>
        </div>
      </div>
    `,
  }),
}

// ─── States ─────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: (args) => ({
    components: { RadioGroup, RadioGroupItem },
    setup() { return { args } },
    template: `
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <RadioGroup>
            <RadioGroupItem id="d-un" value="val1" disabled />
          </RadioGroup>
          <label for="d-un" class="text-text-small text-text-disabled">Unchecked Disabled</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroup default-value="val2">
            <RadioGroupItem id="d-chk" value="val2" disabled />
          </RadioGroup>
          <label for="d-chk" class="text-text-small text-text-disabled">Checked Disabled</label>
        </div>
      </div>
    `,
  }),
}
