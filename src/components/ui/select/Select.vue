<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { CaretDownIcon } from '../icon'
import { selectVariants, type SelectVariants } from './selectVariants'
import { Label } from '../label'
import { Dropdown, type DropdownOption } from '../dropdown'
import { Chip } from '../chip'
import { cn } from '../../../lib/utils'
import styles from './Select.module.css'

interface Props {
  modelValue?: string | number | (string | number)[]
  options?: DropdownOption[]
  label?: string
  showLabel?: boolean
  isMandatory?: boolean
  hintText?: string
  placeholder?: string
  size?: SelectVariants['size']
  state?: SelectVariants['state']
  disabled?: boolean
  leadingIcon?: any
  showChip?: boolean
  searchable?: boolean
  searchPlaceholder?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
  options: () => [],
  label: '',
  showLabel: true,
  isMandatory: false,
  placeholder: 'Select an option...',
  size: 'md',
  state: 'default',
  disabled: false,
  showChip: false,
  searchable: false,
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'change', value: any): void
  (e: 'open'): void
  (e: 'close'): void
  (e: 'update:open', value: boolean): void
}>()

const isOpen = ref(false)
const selectRef = ref<HTMLElement | null>(null)

function toggleOpen() {
  if (props.disabled) return
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    emits('open')
  } else {
    emits('close')
  }
}

function close() {
  if (isOpen.value) {
    isOpen.value = false
    emits('close')
  }
}

function handleSelect(option: DropdownOption) {
  if (Array.isArray(props.modelValue)) {
    const next = [...props.modelValue]
    const idx = next.indexOf(option.value)
    if (idx > -1) {
      next.splice(idx, 1)
    } else {
      next.push(option.value)
    }
    emits('update:modelValue', next)
    emits('change', next)
  } else {
    emits('update:modelValue', option.value)
    emits('change', option.value)
    close()
  }
}

const isFilled = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.length > 0
  }
  return props.modelValue !== undefined && props.modelValue !== ''
})

const selectedLabel = computed(() => {
  const mv = props.modelValue
  if (Array.isArray(mv)) {
    if (mv.length === 0) return ''
    if (mv.length === 1) {
      const first = mv[0]
      const match = props.options.find((o) => o.value === first)
      return match ? match.label : String(first)
    }
    return `${mv.length} selected`
  }
  const match = props.options.find((o) => o.value === mv)
  return match ? match.label : (mv !== undefined && mv !== '' ? String(mv) : '')
})

const selectedCount = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.length
  }
  return isFilled.value ? 1 : 0
})

const computedState = computed<SelectVariants['state']>(() => {
  if (props.disabled) return 'disabled'
  if (isOpen.value) return 'opened'
  if (props.state && props.state !== 'default') return props.state
  if (isFilled.value) return 'filled'
  return 'default'
})

function handleClickOutside(e: MouseEvent) {
  if (selectRef.value && !selectRef.value.contains(e.target as Node)) {
    close()
  }
}

function handleKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    close()
  } else if (e.key === 'Enter' || e.key === ' ') {
    if (!isOpen.value) {
      e.preventDefault()
      toggleOpen()
    }
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div ref="selectRef" :class="cn(styles.wrapper, props.class)" @keydown="handleKeyDown">
    <!-- Optional Label -->
    <Label
      v-if="showLabel && (label || $slots.label)"
      :label="label"
      :is-mandatory="isMandatory"
      :hint-text="hintText"
    >
      <slot name="label">{{ label }}</slot>
    </Label>

    <!-- Trigger Field -->
    <div
      role="combobox"
      :aria-expanded="isOpen"
      :aria-disabled="disabled"
      :tabindex="disabled ? -1 : 0"
      :class="cn(selectVariants({ size, state: computedState }))"
      @click="toggleOpen"
    >
      <div :class="styles.leftContent">
        <!-- Optional Leading Icon -->
        <span v-if="leadingIcon || $slots['leading-icon']" :class="styles.leadingIcon">
          <slot name="leading-icon">
            <component :is="leadingIcon" style="width: var(--sizing-7); height: var(--sizing-7);" />
          </slot>
        </span>

        <!-- Optional Chip for multi-select count -->
        <Chip
          v-if="showChip && selectedCount > 0"
          size="badge"
          state="info"
          variant="solid"
        >
          {{ selectedCount }}
        </Chip>

        <!-- Display Text / Placeholder -->
        <span :class="cn(styles.inputText, isFilled ? styles.valueText : styles.placeholder)">
          {{ isFilled ? selectedLabel : placeholder }}
        </span>
      </div>

      <!-- Trailing Chevron -->
      <span :class="cn(styles.trailingIcon, isOpen && styles.trailingIconOpen)">
        <CaretDownIcon style="width: var(--sizing-7); height: var(--sizing-7);" />
      </span>
    </div>

    <!-- Dropdown Popover -->
    <div v-if="isOpen" :class="styles.dropdownPopover">
      <Dropdown
        :items="options"
        :model-value="modelValue"
        :size="size === 'lg' ? 'big' : size === 'sm' ? 'small' : 'big'"
        :searchable="searchable"
        :search-placeholder="searchPlaceholder"
        @select="handleSelect"
      />
    </div>
  </div>
</template>
