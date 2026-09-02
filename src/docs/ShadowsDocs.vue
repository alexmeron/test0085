<script setup lang="ts">
import { figmaTheme } from '../styles/tailwind-theme.js'

const shadows = Object.entries(figmaTheme.boxShadow || {})
</script>

<template>
  <div class="flex flex-col gap-12">
    <section>
      <h3 class="text-heading-small font-semibold text-text-primary mb-4">Shadows (Effects)</h3>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div v-for="[name, val] in shadows" :key="name" class="flex flex-col items-center justify-center p-8 bg-basic-white rounded-md" :style="{ boxShadow: val }">
          <p class="text-text-medium font-semibold text-text-primary mb-1">shadow-{{ name }}</p>
          <p class="text-[10px] font-mono text-text-secondary text-center max-w-[200px] truncate">{{ val }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
