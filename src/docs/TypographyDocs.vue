<script setup lang="ts">
import { figmaTheme } from '../styles/tailwind-theme.js'

const fontSizes = Object.entries(figmaTheme.fontSize)
const fontWeights = Object.entries(figmaTheme.fontWeight)
</script>

<template>
  <div class="flex flex-col gap-12">
    <section>
      <h3 class="text-heading-small font-semibold text-text-primary mb-4">Font Sizes</h3>
      <div class="flex flex-col gap-6">
        <div v-for="[name, val] in fontSizes" :key="name" class="flex flex-col gap-2 p-4 bg-surface-subtle border border-border-default rounded-md">
          <p class="text-text-small font-mono text-text-secondary mb-2">{{ name }} ({{ val }})</p>
          <p class="font-body text-text-primary" :style="{ fontSize: val }">The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
    </section>

    <section>
      <h3 class="text-heading-small font-semibold text-text-primary mb-4">Font Weights</h3>
      <div class="flex flex-col gap-6">
        <div v-for="[name, val] in fontWeights" :key="name" class="flex flex-col gap-2 p-4 bg-surface-subtle border border-border-default rounded-md">
          <p class="text-text-small font-mono text-text-secondary mb-2">{{ name }} ({{ val }})</p>
          <p class="font-body text-text-medium text-text-primary" :style="{ fontWeight: val }">The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
    </section>
  </div>
</template>
