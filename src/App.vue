<script setup lang="ts">
import { ref } from 'vue'
import ButtonDocs from './docs/ButtonDocs.vue'
import InputDocs from './docs/InputDocs.vue'
import CheckboxDocs from './docs/CheckboxDocs.vue'
import RadioDocs from './docs/RadioDocs.vue'
import ColorsDocs from './docs/ColorsDocs.vue'
import TypographyDocs from './docs/TypographyDocs.vue'
import SpacingDocs from './docs/SpacingDocs.vue'
import ShadowsDocs from './docs/ShadowsDocs.vue'

const sections = [
  {
    title: 'Foundations',
    items: [
      { name: 'Colors', component: ColorsDocs },
      { name: 'Typography', component: TypographyDocs },
      { name: 'Spacing & Radius', component: SpacingDocs },
      { name: 'Shadows', component: ShadowsDocs },
    ]
  },
  {
    title: 'Components',
    items: [
      { name: 'Button', component: ButtonDocs },
      { name: 'Input Text', component: InputDocs },
      { name: 'Checkbox', component: CheckboxDocs },
      { name: 'Radiobutton', component: RadioDocs },
    ]
  }
]

const activeComponent = ref(sections[0].items[0])
</script>

<template>
  <div class="min-h-screen bg-surface-subtle flex flex-col md:flex-row font-body text-text-primary">
    <!-- Sidebar -->
    <aside class="w-full md:w-64 bg-basic-white border-r border-border-default h-screen sticky top-0 overflow-y-auto">
      <div class="p-spacing-7 border-b border-border-default">
        <h1 class="text-heading-small font-bold text-text-primary">Design System</h1>
        <p class="text-text-small text-text-secondary mt-1">Component Library</p>
      </div>
      <nav class="p-spacing-5 flex flex-col gap-spacing-7">
        <div v-for="section in sections" :key="section.title">
          <h4 class="text-caption-small font-semibold text-text-secondary uppercase tracking-wider mb-2 px-2">{{ section.title }}</h4>
          <div class="flex flex-col gap-1">
            <button
              v-for="item in section.items"
              :key="item.name"
              @click="activeComponent = item"
              :class="[
                'text-left px-spacing-5 py-spacing-3 rounded-radius-md text-text-medium transition-colors',
                activeComponent.name === item.name
                  ? 'bg-brand-surface-muted text-brand-text-default font-medium'
                  : 'text-text-primary hover:bg-surface-muted'
              ]"
            >
              {{ item.name }}
            </button>
          </div>
        </div>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-spacing-9 md:p-12 overflow-y-auto">
      <div class="max-w-5xl mx-auto bg-basic-white rounded-radius-lg border border-border-default shadow-sm p-spacing-9">
        <h2 class="text-heading-medium font-bold text-text-primary border-b border-border-default pb-4 mb-spacing-9">
          {{ activeComponent.name }}
        </h2>
        
        <component :is="activeComponent.component" />
      </div>
    </main>
  </div>
</template>
