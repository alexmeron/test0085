<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { AvatarRoot } from 'radix-vue'
import { type AvatarVariants, avatarVariants } from './avatarVariants'
import { cn } from '../../../lib/utils'

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class']
  size?: AvatarVariants['size']
}>(), {
  size: 'md',
})
</script>

<template>
  <AvatarRoot :class="cn(avatarVariants({ size }), props.class)">
    <slot />
  </AvatarRoot>
</template>
