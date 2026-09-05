<script setup lang="ts">
import { ref, computed } from 'vue'
import { Search } from 'lucide-vue-next'
import DropdownItem from './DropdownItem.vue'
import type { DropdownItemVariants } from './dropdownVariants'
import styles from './Dropdown.module.css'
import { cn } from '../../../lib/utils'

export interface DropdownOption {
  label: string
  value: string | number
  disabled?: boolean
  checkbox?: boolean
  leadingIcon?: boolean
  trailingIcon?: boolean
}

interface Props {
  items?: DropdownOption[]
  modelValue?: string | number | (string | number)[]
  searchable?: boolean
  searchPlaceholder?: string
  size?: DropdownItemVariants['size']
  class?: string
  style?: any
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  searchable: false,
  searchPlaceholder: 'Search framework...',
  size: 'big',
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'select', option: DropdownOption): void
  (e: 'search', query: string): void
}>()

const searchQuery = ref('')

const filteredItems = computed(() => {
  if (!props.searchable || !searchQuery.value.trim()) {
    return props.items
  }
  const q = searchQuery.value.toLowerCase()
  return props.items.filter((item) => item.label.toLowerCase().includes(q))
})

function isSelected(val: string | number) {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(val)
  }
  return props.modelValue === val
}

function handleSelect(item: DropdownOption) {
  if (item.disabled) return
  emits('select', item)

  if (Array.isArray(props.modelValue)) {
    const next = [...props.modelValue]
    const idx = next.indexOf(item.value)
    if (idx > -1) {
      next.splice(idx, 1)
    } else {
      next.push(item.value)
    }
    emits('update:modelValue', next)
  } else {
    emits('update:modelValue', item.value)
  }
}

function onSearchInput(event: Event) {
  const target = event.target as HTMLInputElement
  searchQuery.value = target.value
  emits('search', target.value)
}
</script>

<template>
  <div :class="cn(styles.menu, props.class)" :style="style" role="menu">
    <!-- Optional Search Header -->
    <div v-if="searchable" :class="styles.searchHeader">
      <span :class="styles.searchIcon">
        <Search style="width: 14px; height: 14px;" />
      </span>
      <input
        type="text"
        :value="searchQuery"
        :placeholder="searchPlaceholder"
        :class="styles.searchInput"
        @input="onSearchInput"
      />
    </div>

    <!-- Items container -->
    <div :class="styles.itemsContainer">
      <slot>
        <DropdownItem
          v-for="item in filteredItems"
          :key="item.value"
          :label="item.label"
          :size="size"
          :state="isSelected(item.value) ? 'selected' : 'default'"
          :checked="isSelected(item.value)"
          :checkbox="item.checkbox"
          :leading-icon="item.leadingIcon"
          :trailing-icon="item.trailingIcon"
          :disabled="item.disabled"
          @click="handleSelect(item)"
        />
      </slot>
    </div>
  </div>
</template>
