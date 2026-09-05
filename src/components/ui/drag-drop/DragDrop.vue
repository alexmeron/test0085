<script setup lang="ts">
import { ref, computed } from 'vue'
import { dragDropVariants, type DragDropVariants } from './dragDropVariants'
import styles from './DragDrop.module.css'
import { cn } from '../../../lib/utils'

interface Props {
  state?: DragDropVariants['state']
  title?: string
  subtitle?: string
  clickableText?: string
  caption?: string
  accept?: string
  multiple?: boolean
  disabled?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  state: 'default',
  title: 'Arrastre y suelte sus archivos aquí',
  subtitle: 'o haz clic para explorar',
  caption: '.STL o .DICOM hasta 2GB',
  accept: '',
  multiple: true,
  disabled: false,
})

const emits = defineEmits<{
  (e: 'files-dropped', files: File[]): void
  (e: 'files-selected', files: File[]): void
  (e: 'change', files: File[]): void
}>()

const fileInputRef = ref<HTMLInputElement | null>(null)
const isDragging = ref(false)

const currentState = computed(() => {
  if (props.state === 'hover' || isDragging.value) {
    return 'hover'
  }
  return 'default'
})

function onDragEnter(e: DragEvent) {
  if (props.disabled) return
  e.preventDefault()
  isDragging.value = true
}

function onDragOver(e: DragEvent) {
  if (props.disabled) return
  e.preventDefault()
  isDragging.value = true
}

function onDragLeave(e: DragEvent) {
  if (props.disabled) return
  e.preventDefault()
  isDragging.value = false
}

function onDrop(e: DragEvent) {
  if (props.disabled) return
  e.preventDefault()
  isDragging.value = false

  if (e.dataTransfer?.files) {
    const files = Array.from(e.dataTransfer.files)
    emits('files-dropped', files)
    emits('change', files)
  }
}

function triggerFileInput() {
  if (props.disabled) return
  fileInputRef.value?.click()
}

function onFileInputChange(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files) {
    const files = Array.from(target.files)
    emits('files-selected', files)
    emits('change', files)
  }
}

function onKeyDown(e: KeyboardEvent) {
  if (props.disabled) return
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    triggerFileInput()
  }
}
</script>

<template>
  <div
    role="button"
    tabindex="0"
    :aria-disabled="disabled"
    :class="cn(dragDropVariants({ state: currentState, disabled }), props.class)"
    @click="triggerFileInput"
    @keydown="onKeyDown"
    @dragenter="onDragEnter"
    @dragover="onDragOver"
    @dragleave="onDragLeave"
    @drop="onDrop"
  >
    <!-- Background stripe pattern from Figma -->
    <div :class="styles.stripePattern" aria-hidden="true" />

    <div :class="styles.content">
      <!-- Icon -->
      <div :class="styles.iconWrapper">
        <slot name="icon">
          <svg width="58" height="69" viewBox="0 0 58 69" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23.8291 20.2285C23.9383 20.1696 24.0605 20.1387 24.1846 20.1387C24.3088 20.1387 24.4309 20.1696 24.5402 20.2285L34.2783 25.4721C34.3973 25.5363 34.4966 25.6314 34.5658 25.7475C34.6351 25.8635 34.6716 25.9962 34.6716 26.1313C34.6716 26.2664 34.6351 26.399 34.5658 26.5151C34.4966 26.6311 34.3973 26.7263 34.2783 26.7905L24.5402 32.0341C24.4309 32.093 24.3088 32.1239 24.1846 32.1239C24.0605 32.1239 23.9383 32.093 23.8291 32.0341L14.0909 26.7905C13.972 26.7263 13.8726 26.6311 13.8034 26.5151C13.7342 26.399 13.6976 26.2664 13.6976 26.1313C13.6976 25.9962 13.7342 25.8635 13.8034 25.7475C13.8726 25.6314 13.972 25.5363 14.0909 25.4721L23.8291 20.2285Z"
              fill="var(--color-brand-solid-default, #007BFF)"
            />
            <path
              d="M15.4602 29.2295L23.1189 33.3535C23.4464 33.5299 23.8126 33.6222 24.1846 33.6222C24.5566 33.6222 24.9228 33.5299 25.2503 33.3535L32.909 29.2285L34.2773 29.9666C34.3962 30.0308 34.4956 30.1259 34.5648 30.242C34.634 30.358 34.6706 30.4907 34.6706 30.6258C34.6706 30.7609 34.634 30.8935 34.5648 31.0096C34.4956 31.1256 34.3962 31.2208 34.2773 31.285L24.5391 36.5286C24.4301 36.5872 24.3083 36.6178 24.1846 36.6178C24.0608 36.6178 23.939 36.5872 23.83 36.5286L14.0919 31.285C13.9729 31.2208 13.8736 31.1256 13.8044 31.0096C13.7351 30.8935 13.6986 30.7609 13.6986 30.6258C13.6986 30.4907 13.7351 30.358 13.8044 30.242C13.8736 30.1259 13.9729 30.0308 14.0919 29.9666L15.4602 29.2295Z"
              fill="var(--color-brand-solid-default, #007BFF)"
            />
            <path
              d="M23.1189 37.848L15.4602 33.7231L14.0919 34.4612C13.9729 34.5253 13.8736 34.6205 13.8044 34.7366C13.7351 34.8526 13.6986 34.9852 13.6986 35.1204C13.6986 35.2555 13.7351 35.3881 13.8044 35.5042C13.8736 35.6202 13.9729 35.7154 14.0919 35.7796L23.83 41.0232C24.0507 41.143 24.3184 41.143 24.5391 41.0232L34.2773 35.7796C34.3962 35.7154 34.4956 35.6202 34.5648 35.5042C34.634 35.3881 34.6706 35.2555 34.6706 35.1204C34.6706 34.9852 34.634 34.8526 34.5648 34.7366C34.4956 34.6205 34.3962 34.5253 34.2773 34.4612L32.909 33.7241L25.2503 37.849C24.9227 38.0253 24.5565 38.1175 24.1845 38.1173C23.8124 38.1171 23.4463 38.0246 23.1189 37.848Z"
              fill="var(--color-brand-solid-default, #007BFF)"
            />
            <g opacity="0.3">
              <path
                d="M39.8573 14.0543C38.2966 14.0528 36.8004 13.432 35.6971 12.3282C34.5938 11.2244 33.9737 9.72784 33.973 8.16721V0H7.67927C5.64262 0 3.68935 0.809047 2.24922 2.24918C0.809082 3.68932 0 5.64258 0 7.67924V53.9715C0 56.0081 0.809082 57.9614 2.24922 59.4015C3.68935 60.8416 5.64262 61.6507 7.67927 61.6507H39.2408C41.2775 61.6507 43.2308 60.8416 44.6709 59.4015C46.111 57.9614 46.9201 56.0081 46.9201 53.9715V14.0543H39.8573Z"
                fill="var(--color-brand-solid-default, #007BFF)"
              />
            </g>
            <path
              d="M46.9201 14.0543H39.8572C38.2966 14.0528 36.8003 13.432 35.6971 12.3282C34.5938 11.2244 33.9737 9.72784 33.9729 8.16721V0L46.9201 14.0543Z"
              fill="var(--color-brand-solid-default, #007BFF)"
            />
          </svg>
        </slot>
      </div>

      <!-- Text Group -->
      <div :class="styles.textGroup">
        <p :class="styles.title">
          <slot name="title">{{ title }}</slot>
        </p>

        <p :class="styles.subtitle">
          <slot name="subtitle">
            o <span :class="styles.linkText">haz clic para explorar</span>
          </slot>
        </p>

        <p :class="styles.caption">
          <slot name="caption">{{ caption }}</slot>
        </p>
      </div>
    </div>

    <!-- Hidden file input -->
    <input
      ref="fileInputRef"
      type="file"
      :accept="accept"
      :multiple="multiple"
      :class="styles.fileInput"
      @change="onFileInputChange"
    />
  </div>
</template>
