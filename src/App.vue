<script setup lang="ts">
import { ref, computed } from 'vue'
import ButtonDocs from './docs/ButtonDocs.vue'
import InputDocs from './docs/InputDocs.vue'
import CheckboxDocs from './docs/CheckboxDocs.vue'
import RadioDocs from './docs/RadioDocs.vue'

const components = [
  { name: 'Button', component: ButtonDocs },
  { name: 'Input Text', component: InputDocs },
  { name: 'Checkbox', component: CheckboxDocs },
  { name: 'Radiobutton', component: RadioDocs },
]

const activeComponent = ref(components[0])
</script>

<template>
  <div class="min-h-screen bg-surface-subtle flex flex-col md:flex-row">
    <!-- Sidebar -->
    <aside class="w-full md:w-64 bg-basic-white border-r border-border-default h-screen sticky top-0 overflow-y-auto">
      <div class="p-6 border-b border-border-default">
        <h1 class="text-heading-small font-bold text-text-primary">Design System</h1>
        <p class="text-text-small text-text-secondary mt-1">Component Library</p>
      </div>
      <nav class="p-4 flex flex-col gap-1">
        <button
          v-for="item in components"
          :key="item.name"
          @click="activeComponent = item"
          :class="[
            'text-left px-4 py-2 rounded-md text-text-medium transition-colors',
            activeComponent.name === item.name
              ? 'bg-brand-surface-muted text-brand-text-default font-medium'
              : 'text-text-primary hover:bg-surface-muted'
          ]"
        >
          {{ item.name }}
        </button>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8 md:p-12 overflow-y-auto">
      <div class="max-w-5xl mx-auto bg-basic-white rounded-lg border border-border-default shadow-sm p-8">
        <h2 class="text-heading-medium font-bold text-text-primary border-b border-border-default pb-4 mb-8">
          {{ activeComponent.name }}
        </h2>
        
        <component :is="activeComponent.component" />
      </div>
    </main>
  </div>
</template>
