<script setup lang="ts">
import { figmaTheme } from '../styles/tailwind-theme.js'

const colors = Object.entries(figmaTheme.colors)
</script>

<template>
  <div class="flex flex-col gap-spacing-9">
    <h3 class="text-heading-small font-semibold text-text-primary">Color Palette</h3>
    <p class="text-text-medium text-text-secondary">Extracted automatically from Figma Primitives and Semantic collections.</p>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-spacing-7">
      <div v-for="[name, val] in colors" :key="name" class="flex flex-col gap-2">
        <div 
          class="h-16 w-full rounded-radius-md border border-border-default shadow-sm"
          :style="{ backgroundColor: val }"
        ></div>
        <div class="text-text-small font-mono text-text-primary">
          <p class="font-semibold">{{ name }}</p>
          <p class="text-text-secondary truncate">{{ val }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
