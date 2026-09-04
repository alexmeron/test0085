<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { AvatarRoot, AvatarImage, AvatarFallback } from 'radix-vue'
import { type AvatarVariants, avatarVariants } from './avatarVariants'
import { cn } from '../../../lib/utils'

interface Props {
  class?: HTMLAttributes['class']
  size?: AvatarVariants['size']
  type?: 'photo' | 'name'
  label?: string
  src?: string
  alt?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  type: 'photo',
  label: 'AS',
})
</script>

<template>
  <AvatarRoot :class="cn(avatarVariants({ size }), props.class)">
    <AvatarImage 
      v-if="type === 'photo' && src" 
      :src="src" 
      :alt="alt" 
      class="aspect-square h-full w-full object-cover rounded-radius-full overflow-hidden" 
    />
    <AvatarFallback 
      v-if="type === 'name' || !src"
      class="flex h-full w-full items-center justify-center rounded-radius-full bg-surface-muted text-text-primary"
    >
      {{ label }}
    </AvatarFallback>
  </AvatarRoot>
</template>
