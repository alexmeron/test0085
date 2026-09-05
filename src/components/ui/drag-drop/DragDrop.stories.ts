import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import DragDrop from './DragDrop.vue'

/**
 * ## Drag & Drop
 *
 * File upload area supporting drag and drop or browsing from the device.
 *
 * **Figma Link:**
 * [Figma - Drag & Drop](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4500-34)
 *
 * ### Design Tokens Mapping
 *
 * #### 📐 Layout & Sizing
 * | Element | Token / Value | Description |
 * |---|---|---|
 * | Width | `556px` | Container maximum width |
 * | Min Height | `204px` | Figma default height: 208px (default), 202px (hover) |
 * | Padding vertical | `32px` (`--spacing-10` / `spacing/10`) | Top and bottom container padding |
 * | Gap | `--spacing-7` (16px) | Vertical gap between icon and text group |
 * | Text group gap | `--spacing-3` (4px) | Vertical gap between title and subtitles |
 * | Icon size | `58×69px` | File type illustration dimensions |
 *
 * #### ⬛ Shape
 * | Element | Token / Value | Description |
 * |---|---|---|
 * | Border radius | `--radius-xl` (10px) | Container rounded corners |
 * | Border | `1px dashed var(--color-border-default)` | Dashed border outline |
 * | Hover border | `1px dashed var(--color-brand-solid-default)` | Highlighted dashed border on hover |
 *
 * #### 🔤 Typography
 * | Element | Token / Value | Description |
 * |---|---|---|
 * | Title | `--font-family-body`, `--font-size-text-small` (14px), font-weight: 600, `--leading-20` | Main prompt |
 * | Subtitle | `--font-family-body`, `--font-size-caption-big` (12px), `--leading-16` | Action hint |
 * | Link text | `--color-brand-link-default` | "haz clic para explorar" action link |
 * | Caption | `--font-family-body`, `--font-size-caption-big` (12px), `--leading-16` | File formats & size limits |
 *
 * #### 🎨 Colors & States
 * | State / Element | Token | Description |
 * |---|---|---|
 * | Default bg | `--color-surface-subtle` | Subtle background with white diagonal stripes |
 * | Hover / Dragging bg | `--color-brand-surface-muted` | Highlighted soft blue background |
 * | Title color | `--color-text-primary` | Primary text color |
 * | Subtitle & caption color | `--color-text-secondary` | Secondary muted text color |
 * | Disabled | `opacity: 0.5` | Disabled interaction |
 *
 * #### 🔘 Icons / Illustrations
 * | Element | Token / Value | Description |
 * |---|---|---|
 * | File Type Icon | 58×69px, `--color-brand-solid-default` | Blue layered document illustration |
 */
const meta: Meta<typeof DragDrop> = {
  title: 'Components/Drag&Drop',
  component: DragDrop,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover'],
      description: 'Visual state of the drop area',
    },
    title: {
      control: 'text',
      description: 'Primary title text',
    },
    subtitle: {
      control: 'text',
      description: 'Secondary action text',
    },
    caption: {
      control: 'text',
      description: 'Supported file formats and limits',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable user interaction',
    },
  },
}

export default meta
type Story = StoryObj<typeof DragDrop>

export const Default: Story = {
  args: {
    state: 'default',
    title: 'Arrastre y suelte sus archivos aquí',
    subtitle: 'o haz clic para explorar',
    caption: '.STL o .DICOM hasta 2GB',
    disabled: false,
  },
}

export const HoverState: Story = {
  args: {
    state: 'hover',
    title: 'Arrastre y suelte sus archivos aquí',
    subtitle: 'o haz clic para explorar',
    caption: '.STL o .DICOM hasta 2GB',
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    state: 'default',
    title: 'Arrastre y suelte sus archivos aquí',
    subtitle: 'o haz clic para explorar',
    caption: '.STL o .DICOM hasta 2GB',
    disabled: true,
  },
}

export const CustomContent: Story = {
  args: {
    state: 'default',
    title: 'Sube tus imágenes médicas o radiografías',
    subtitle: 'o busca en tu ordenador',
    caption: 'PNG, JPG, TIFF hasta 50MB',
    accept: 'image/*',
  },
}

export const Interactive: Story = {
  render: () => ({
    components: { DragDrop },
    setup() {
      const uploadedFiles = ref<string[]>([])

      function onFiles(files: File[]) {
        uploadedFiles.value = files.map((f) => `${f.name} (${(f.size / 1024).toFixed(1)} KB)`)
      }

      function reset() {
        uploadedFiles.value = []
      }

      return { uploadedFiles, onFiles, reset }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 556px;">
        <DragDrop @change="onFiles" />

        <div v-if="uploadedFiles.length > 0" style="padding: 12px 16px; background: var(--color-surface-subtle); border-radius: var(--radius-md); border: 1px solid var(--color-border-default);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 12px; font-weight: 600; color: var(--color-text-primary);">Archivos seleccionados:</span>
            <button
              type="button"
              @click="reset"
              style="font-size: 12px; color: var(--color-destructive-text-default, red); background: none; border: none; cursor: pointer;"
            >
              Eliminar
            </button>
          </div>
          <ul style="margin: 0; padding-left: 20px; font-size: 12px; color: var(--color-text-secondary);">
            <li v-for="file in uploadedFiles" :key="file">{{ file }}</li>
          </ul>
        </div>
      </div>
    `,
  }),
}
