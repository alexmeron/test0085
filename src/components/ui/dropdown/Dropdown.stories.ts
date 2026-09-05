import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'

/**
 * ## Dropdown & Dropdown Item
 *
 * Menu and option items following the design system tokens.
 *
 * **Figma Links:**
 * - Dropdown: [Figma - Dropdown](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4578-17088)
 * - Dropdown Item: [Figma - Dropdown Item](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4123-39725)
 *
 * ### Design Tokens Mapping
 *
 * #### 📐 Layout & Sizing
 * | Element | Token / Value | Description |
 * |---|---|---|
 * | Menu padding | `--spacing-3` (4px) | Container inner padding |
 * | Menu min-width | `180px` / `152px` | Figma default width is 152px (big) / 141px (small) |
 * | Item min-height (big) | `--sizing-10` (32px) | Height for `size="big"` |
 * | Item min-height (small) | `28px` | Height for `size="small"` |
 * | Item padding (big) | horizontal: `--spacing-5` (8px), vertical: `--spacing-4` (6px) | Padding for `size="big"` |
 * | Item padding (small) | horizontal: `--spacing-5` (8px), vertical: `--spacing-3` (4px) | Padding for `size="small"` |
 * | Item gap | `--spacing-5` (8px) | Space between icon and label |
 * | Search header padding | `--spacing-4` (6px) `--spacing-5` (8px) | Header search area |
 *
 * #### ⬛ Shape
 * | Element | Token / Value | Description |
 * |---|---|---|
 * | Menu radius | `--radius-lg` (8px) | Container border-radius |
 * | Item radius | `--radius-sm` (4px) | Hover / focus item border-radius |
 * | Menu border | `1px solid var(--color-border-default)` | Border outline |
 * | Menu shadow | `0 1px 2px 0 rgba(0, 0, 0, 0.05)` | Elevation shadow matching Figma drop-shadow |
 *
 * #### 🔤 Typography
 * | Element | Token / Value | Description |
 * |---|---|---|
 * | Item font (big) | `--font-family-body`, `--font-size-text-small` (14px), `--leading-20` | Primary item text |
 * | Item font (small) | `--font-family-body`, `--font-size-caption-big` (12px), `--leading-16` | Compact item text |
 * | Search placeholder | `--font-family-body`, `--font-size-text-small` (14px), `--color-text-placeholder` | Search input |
 *
 * #### 🎨 Colors & States
 * | State / Element | Token | Description |
 * |---|---|---|
 * | Menu background | `--color-surface-default` | Card surface |
 * | Item default bg | `transparent` | Rest state |
 * | Item hovered bg | `--color-surface-subtle` | Hovered state |
 * | Item selected bg | `--color-surface-subtle` | Selected state |
 * | Item text | `--color-text-primary` | Standard text color |
 * | Item disabled | `opacity: 0.5` | Disabled state |
 *
 * #### 🔘 Icons / Indicators
 * | Element | Token / Value | Description |
 * |---|---|---|
 * | Leading / Trailing icon | 16×16px, `--color-text-secondary` | Decorative or status icon |
 * | Check indicator | 14×14px, `--color-brand-solid-default` | Selected check mark indicator |
 * | Checkbox | `size="sm"` | Sub-component checkbox indicator |
 */
const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['big', 'small'],
      description: 'Dropdown item size',
    },
    searchable: {
      control: 'boolean',
      description: 'Show optional search header',
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder for the search input',
    },
  },
}

export default meta
type Story = StoryObj<typeof Dropdown>

const sampleItems = [
  { label: 'Next.js', value: 'nextjs' },
  { label: 'SvelteKit', value: 'sveltekit' },
  { label: 'Nuxt.js', value: 'nuxtjs' },
  { label: 'Remix', value: 'remix' },
  { label: 'Astro', value: 'astro' },
]

export const Default: Story = {
  render: (args) => ({
    components: { Dropdown },
    setup() {
      const selected = ref('nextjs')
      return { args, selected, sampleItems }
    },
    template: `
      <div style="padding: 24px;">
        <Dropdown
          v-bind="args"
          :items="sampleItems"
          v-model="selected"
          style="width: 200px;"
        />
      </div>
    `,
  }),
  args: {
    size: 'big',
    searchable: false,
  },
}

export const WithSearch: Story = {
  render: (args) => ({
    components: { Dropdown },
    setup() {
      const selected = ref('nuxtjs')
      return { args, selected, sampleItems }
    },
    template: `
      <div style="padding: 24px;">
        <Dropdown
          v-bind="args"
          :items="sampleItems"
          v-model="selected"
          searchable
          searchPlaceholder="Search framework..."
          style="width: 220px;"
        />
      </div>
    `,
  }),
  args: {
    size: 'big',
    searchable: true,
    searchPlaceholder: 'Search framework...',
  },
}

export const WithCheckboxes: Story = {
  render: () => ({
    components: { Dropdown },
    setup() {
      const selected = ref(['nextjs', 'remix'])
      const checkboxItems = [
        { label: 'Next.js', value: 'nextjs', checkbox: true },
        { label: 'SvelteKit', value: 'sveltekit', checkbox: true },
        { label: 'Nuxt.js', value: 'nuxtjs', checkbox: true },
        { label: 'Remix', value: 'remix', checkbox: true },
        { label: 'Astro', value: 'astro', checkbox: true, disabled: true },
      ]
      return { selected, checkboxItems }
    },
    template: `
      <div style="padding: 24px;">
        <Dropdown
          :items="checkboxItems"
          v-model="selected"
          searchable
          style="width: 220px;"
        />
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Dropdown },
    setup() {
      const selBig = ref('nextjs')
      const selSmall = ref('nextjs')
      return { selBig, selSmall, sampleItems }
    },
    template: `
      <div style="display: flex; gap: 32px; padding: 24px; align-items: flex-start;">
        <div>
          <p style="font-family: var(--font-family-body); font-size: 12px; color: var(--color-text-secondary); margin-bottom: 8px;">
            Size: Big (32px item height, 14px font)
          </p>
          <Dropdown
            :items="sampleItems"
            v-model="selBig"
            size="big"
            style="width: 200px;"
          />
        </div>

        <div>
          <p style="font-family: var(--font-family-body); font-size: 12px; color: var(--color-text-secondary); margin-bottom: 8px;">
            Size: Small (28px item height, 12px font)
          </p>
          <Dropdown
            :items="sampleItems"
            v-model="selSmall"
            size="small"
            style="width: 180px;"
          />
        </div>
      </div>
    `,
  }),
}

export const ItemStates: Story = {
  render: () => ({
    components: { DropdownItem, Dropdown },
    setup() {
      return {}
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; padding: 24px; width: 220px; background: var(--color-surface-default); border: 1px solid var(--color-border-default); border-radius: 8px;">
        <DropdownItem label="Default state" state="default" />
        <DropdownItem label="Hovered state" state="hovered" />
        <DropdownItem label="Selected state" state="selected" />
        <DropdownItem label="Selected + Hovered" state="selected+hovered" />
        <DropdownItem label="Disabled item" disabled />
        <DropdownItem label="With Checkbox" checkbox :checked="true" />
      </div>
    `,
  }),
}
