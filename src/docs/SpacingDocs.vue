<script setup lang="ts">
import { figmaTheme } from '../styles/tailwind-theme.js'

// Convert pixel string variables to readable pixel values (assuming base 16px if rem, but here it's var)
// Actually we'll just show the variable name and let the user see it.
const spacing = Object.entries(figmaTheme.spacing).filter(([k]) => k.startsWith('spacing-'))
const sizing = Object.entries(figmaTheme.spacing).filter(([k]) => k.startsWith('sizing-'))
const radius = Object.entries(figmaTheme.borderRadius)
</script>

<template>
  <div class="flex flex-col gap-spacing-11">
    <section>
      <h3 class="text-heading-small font-semibold text-text-primary mb-spacing-5">Spacing</h3>
      <div class="flex flex-col gap-2">
        <div v-for="[name, val] in spacing" :key="name" class="flex items-center gap-spacing-5 py-spacing-3 border-b border-border-default last:border-0">
          <div class="w-48 text-text-small font-mono text-text-secondary">{{ name }}</div>
          <div class="flex-1 text-text-small text-text-secondary">{{ val }}</div>
          <div class="bg-brand-solid-default rounded-sm" :style="{ width: val, height: '16px' }"></div>
        </div>
      </div>
    </section>

    <section>
      <h3 class="text-heading-small font-semibold text-text-primary mb-spacing-5">Sizing</h3>
      <div class="flex flex-col gap-2">
        <div v-for="[name, val] in sizing" :key="name" class="flex items-center gap-spacing-5 py-spacing-3 border-b border-border-default last:border-0">
          <div class="w-48 text-text-small font-mono text-text-secondary">{{ name }}</div>
          <div class="flex-1 text-text-small text-text-secondary">{{ val }}</div>
          <div class="bg-secondary-solid-default rounded-sm" :style="{ width: val, height: '16px' }"></div>
        </div>
      </div>
    </section>

    <section>
      <h3 class="text-heading-small font-semibold text-text-primary mb-spacing-5">Border Radius</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-spacing-7">
        <div v-for="[name, val] in radius" :key="name" class="flex flex-col gap-2">
          <div class="h-16 bg-surface-subtle border border-border-strong" :style="{ borderRadius: val }"></div>
          <div class="text-text-small font-mono text-text-secondary text-center">{{ name }}<br><span class="text-[10px]">{{ val }}</span></div>
        </div>
      </div>
    </section>
  </div>
</template>
