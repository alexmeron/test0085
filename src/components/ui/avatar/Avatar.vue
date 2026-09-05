<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { AvatarRoot, AvatarImage, AvatarFallback } from 'radix-vue'
import { type AvatarVariants, avatarVariants } from './avatarVariants'
import styles from './Avatar.module.css'
import { cn } from '../../../lib/utils'

interface Props {
  class?: HTMLAttributes['class']
  size?: AvatarVariants['size']
  type?: 'photo' | 'name'
  label?: string
  src?: string
  alt?: string
}

withDefaults(defineProps<Props>(), {
  size: 'md',
  type: 'photo',
  label: 'AS',
})
</script>

<template>
  <AvatarRoot :class="cn(avatarVariants({ size }), $props.class)">
    <AvatarImage 
      v-if="type === 'photo' && src" 
      :src="src" 
      :alt="alt" 
      :class="styles.image" 
    />
    <AvatarFallback 
      v-if="type === 'name' || !src"
      :class="styles.fallback"
    >
      {{ label }}
    </AvatarFallback>
  </AvatarRoot>
</template>
