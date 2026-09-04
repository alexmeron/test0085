<script setup lang="ts">
import { AvatarFallback, type AvatarFallbackProps } from 'radix-vue'

const props = defineProps<AvatarFallbackProps & { class?: string }>()
</script>

<template>
  <AvatarFallback
    v-bind="props"
    class="flex h-full w-full items-center justify-center rounded-radius-full bg-surface-muted text-text-primary"
  >
    <slot />
  </AvatarFallback>
</template>
