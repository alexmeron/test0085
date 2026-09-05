<script setup lang="ts">
import { computed } from 'vue'
import { Check } from 'lucide-vue-next'
import { Checkbox } from '../checkbox'
import { dropdownItemVariants, type DropdownItemVariants } from './dropdownVariants'
import styles from './Dropdown.module.css'
import { cn } from '../../../lib/utils'

interface Props {
  label?: string
  size?: DropdownItemVariants['size']
  state?: DropdownItemVariants['state']
  checkbox?: boolean
  checked?: boolean
  leadingIcon?: boolean
  trailingIcon?: boolean
  disabled?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'big',
  state: 'default',
  checkbox: false,
  checked: false,
  leadingIcon: false,
  trailingIcon: false,
  disabled: false,
})

const emits = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const computedClass = computed(() => {
  const currentState = props.disabled ? 'disabled' : props.state
  return cn(dropdownItemVariants({ size: props.size, state: currentState }), props.class)
})

const isSelected = computed(() => props.state === 'selected' || props.state === 'selected+hovered' || props.checked)
</script>

<template>
  <button
    type="button"
    role="menuitem"
    :disabled="disabled"
    :class="computedClass"
    @click="emits('click', $event)"
  >
    <div :class="styles.itemContent">
      <!-- Optional leading icon -->
      <span v-if="leadingIcon" :class="styles.iconLeading">
        <slot name="leading" />
      </span>

      <!-- Optional Checkbox -->
      <Checkbox
        v-if="checkbox"
        :checked="isSelected"
        :disabled="disabled"
        size="sm"
        style="pointer-events: none;"
      />

      <!-- Label -->
      <span :class="styles.label">
        <slot>{{ label }}</slot>
      </span>
    </div>

    <!-- Optional trailing icon -->
    <span v-if="trailingIcon" :class="styles.iconTrailing">
      <slot name="trailing" />
    </span>

    <!-- Check indicator when selected and no checkbox -->
    <span v-if="isSelected && !checkbox" :class="styles.checkIndicator">
      <Check style="width: 14px; height: 14px;" />
    </span>
  </button>
</template>
