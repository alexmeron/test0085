<script setup lang="ts">
import { computed } from 'vue'
import figmaIcons from '../../../assets/figmaIcons.json'

export type IconSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | string

export interface IconProps {
  name?: string
  size?: IconSize
  color?: string
  class?: string
}

const props = withDefaults(defineProps<IconProps>(), {
  name: 'Search_Magnifying_Glass',
  size: 'md',
  color: undefined,
  class: undefined,
})

const sizeTokens: Record<string, string> = {
  '2xs': 'var(--sizing-6, 12px)',
  'xs': 'var(--sizing-7, 16px)',
  'sm': 'var(--sizing-8, 20px)',
  'md': 'var(--sizing-9, 24px)',
  'lg': 'var(--sizing-10, 32px)',
  'xl': 'var(--sizing-11, 40px)',
}

const aliasMap: Record<string, string> = {
  // Search
  'search': 'Search_Magnifying_Glass',
  'Search': 'Search_Magnifying_Glass',
  'SearchIcon': 'Search_Magnifying_Glass',
  'magnifying-glass': 'Search_Magnifying_Glass',

  // Check
  'check': 'Check',
  'Check': 'Check',
  'CheckIcon': 'Check',
  'check-circle': 'Circle_Check',
  'CheckCircle': 'Circle_Check',
  'CheckCircle2': 'Circle_Check',
  'CircleCheck': 'Circle_Check',

  // Close / X
  'x': 'Close_MD',
  'X': 'Close_MD',
  'XIcon': 'Close_MD',
  'close': 'Close_MD',
  'Close': 'Close_MD',
  'CloseIcon': 'Close_MD',
  'close-sm': 'Close_SM',
  'close-md': 'Close_MD',
  'close-lg': 'Close_LG',

  // Info / Warning / Alert / Help
  'info': 'Info',
  'Info': 'Info',
  'InfoIcon': 'Info',
  'alert': 'Warning',
  'Alert': 'Warning',
  'alert-circle': 'Circle_Warning',
  'AlertCircle': 'Circle_Warning',
  'alert-triangle': 'Triangle_Warning',
  'AlertTriangle': 'Triangle_Warning',
  'help': 'Help',
  'Help': 'Help',
  'help-circle': 'Circle_Help',
  'HelpCircle': 'Circle_Help',
  'CircleHelp': 'Circle_Help',

  // Chevrons & Carets
  'chevron-left': 'Chevron_Left_MD',
  'ChevronLeft': 'Chevron_Left_MD',
  'chevron-right': 'Chevron_Right_MD',
  'ChevronRight': 'Chevron_Right_MD',
  'chevron-down': 'Caret_Down_MD',
  'ChevronDown': 'Caret_Down_MD',
  'chevron-up': 'Caret_Up_MD',
  'ChevronUp': 'Caret_Up_MD',
  'chevrons-up-down': 'Arrow_Down_Up',
  'ChevronsUpDown': 'Arrow_Down_Up',
  'arrow-down-up': 'Arrow_Down_Up',
  'caret-down': 'Caret_Down_MD',
  'caret-up': 'Caret_Up_MD',

  // Arrows
  'arrow-right': 'Arrow_Right_MD',
  'ArrowRight': 'Arrow_Right_MD',
  'arrow-left': 'Arrow_Left_MD',
  'ArrowLeft': 'Arrow_Left_MD',

  // Menu & Actions
  'more-vertical': 'More_Vertical',
  'MoreVertical': 'More_Vertical',
  'more-horizontal': 'More_Horizontal',
  'MoreHorizontal': 'More_Horizontal',
  'plus': 'Add_Plus',
  'Plus': 'Add_Plus',
  'minus': 'Remove_Minus',
  'Minus': 'Remove_Minus',
  'trash': 'Trash_Empty',
  'Trash': 'Trash_Empty',
  'trash-2': 'Trash_Empty',
  'Trash2': 'Trash_Empty',

  // Objects & Domain
  'user': 'User_01',
  'User': 'User_01',
  'users': 'Users',
  'Users': 'Users',
  'bell': 'Bell',
  'Bell': 'Bell',
  'shield': 'Shield',
  'Shield': 'Shield',
  'sparkles': 'Star',
  'Sparkles': 'Star',
  'star': 'Star',
  'Star': 'Star',
  'globe': 'Globe',
  'Globe': 'Globe',
  'mail': 'Mail',
  'Mail': 'Mail',
  'eye': 'Search_Magnifying_Glass',
  'Eye': 'Search_Magnifying_Glass',
}

const iconItem = computed(() => {
  if (!props.name) return null
  const query = props.name.trim()
  const resolved = aliasMap[query] || query

  return (
    figmaIcons.find((i) => i.name === resolved || i.fullName === resolved) ||
    figmaIcons.find((i) => i.name.toLowerCase() === resolved.toLowerCase()) ||
    figmaIcons.find((i) => i.fullName.toLowerCase() === resolved.toLowerCase()) ||
    figmaIcons.find((i) => i.name.toLowerCase().includes(resolved.toLowerCase())) ||
    null
  )
})

const resolvedSvg = computed(() => {
  return iconItem.value?.svg || ''
})

const computedSize = computed(() => {
  if (typeof props.size === 'number') {
    return `${props.size}px`
  }
  if (props.size && sizeTokens[props.size]) {
    return sizeTokens[props.size]
  }
  return props.size || 'var(--sizing-9, 24px)'
})
</script>

<template>
  <span
    :class="['ds-icon', props.class]"
    :style="{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: computedSize,
      height: computedSize,
      minWidth: computedSize,
      minHeight: computedSize,
      color: props.color || 'currentColor',
      lineHeight: '0',
    }"
    v-html="resolvedSvg"
  />
</template>

<style scoped>
.ds-icon :deep(svg) {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
