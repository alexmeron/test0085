<script setup lang="ts">
import { ref, computed } from 'vue'
import figmaIcons from '../../assets/figmaIcons.json'

interface IconItem {
  id: string
  fullName: string
  category: string
  name: string
  svg: string
  rawSvg: string
}

const icons = figmaIcons as IconItem[]

const search = ref('')
const selectedCategory = ref('All')
const selectedSize = ref<'2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md')
const selectedColor = ref('currentColor')
const copiedIndex = ref<string | null>(null)

const sizeMap = {
  '2xs': { size: '12px', token: 'var(--sizing-6)' },
  'xs': { size: '16px', token: 'var(--sizing-7)' },
  'sm': { size: '20px', token: 'var(--sizing-8)' },
  'md': { size: '24px', token: 'var(--sizing-9)' },
  'lg': { size: '32px', token: 'var(--sizing-10)' },
  'xl': { size: '40px', token: 'var(--sizing-11)' },
}

const categories = computed(() => {
  const set = new Set<string>()
  icons.forEach((i) => {
    if (i.category) set.add(i.category)
  })
  return ['All', ...Array.from(set).sort()]
})

const filteredIcons = computed(() => {
  const query = search.value.toLowerCase().trim()
  return icons.filter((i) => {
    const matchCategory = selectedCategory.value === 'All' || i.category === selectedCategory.value
    const matchSearch =
      !query ||
      i.name.toLowerCase().includes(query) ||
      i.fullName.toLowerCase().includes(query) ||
      i.category.toLowerCase().includes(query)
    return matchCategory && matchSearch
  })
})

function copyIcon(item: IconItem) {
  navigator.clipboard.writeText(item.fullName)
  copiedIndex.value = item.id
  setTimeout(() => {
    if (copiedIndex.value === item.id) {
      copiedIndex.value = null
    }
  }, 1200)
}
</script>

<template>
  <div class="icon-browser">
    <!-- Controls Header -->
    <div class="controls-container">
      <div class="search-and-stats">
        <input
          v-model="search"
          type="text"
          class="search-input"
          :placeholder="`Buscar entre ${icons.length} iconos de Figma...`"
        />
        <span class="stats-badge">{{ filteredIcons.length }} / {{ icons.length }} iconos</span>
      </div>

      <div class="filters-row">
        <!-- Size selector -->
        <div class="size-selector">
          <span class="filter-label">Tamaño:</span>
          <div class="btn-group">
            <button
              v-for="sz in (['2xs', 'xs', 'sm', 'md', 'lg', 'xl'] as const)"
              :key="sz"
              :class="['btn-filter', { active: selectedSize === sz }]"
              @click="selectedSize = sz"
            >
              {{ sz }} ({{ sizeMap[sz].size }})
            </button>
          </div>
        </div>

        <!-- Color selector -->
        <div class="color-selector">
          <span class="filter-label">Color:</span>
          <div class="btn-group">
            <button
              :class="['btn-filter', { active: selectedColor === 'currentColor' }]"
              @click="selectedColor = 'currentColor'"
            >
              Neutral
            </button>
            <button
              :class="['btn-filter', { active: selectedColor === 'var(--color-brand-solid-default, #1059df)' }]"
              @click="selectedColor = 'var(--color-brand-solid-default, #1059df)'"
            >
              Brand
            </button>
            <button
              :class="['btn-filter', { active: selectedColor === 'var(--color-destructive-solid-default, #ef4444)' }]"
              @click="selectedColor = 'var(--color-destructive-solid-default, #ef4444)'"
            >
              Destructive
            </button>
            <button
              :class="['btn-filter', { active: selectedColor === 'var(--color-success-solid-default, #22c55e)' }]"
              @click="selectedColor = 'var(--color-success-solid-default, #22c55e)'"
            >
              Success
            </button>
          </div>
        </div>
      </div>

      <!-- Categories Pills -->
      <div class="category-pills">
        <button
          v-for="cat in categories"
          :key="cat"
          :class="['cat-pill', { active: selectedCategory === cat }]"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Icons Grid -->
    <div v-if="filteredIcons.length > 0" class="icons-grid">
      <div
        v-for="icon in filteredIcons"
        :key="icon.id"
        class="icon-item-card"
        :title="`Click para copiar: ${icon.fullName}`"
        @click="copyIcon(icon)"
      >
        <div
          class="icon-preview-wrapper"
          :style="{
            width: sizeMap[selectedSize].size,
            height: sizeMap[selectedSize].size,
            color: selectedColor
          }"
          v-html="icon.svg"
        />
        <span class="icon-label">{{ icon.name }}</span>
        <span class="icon-cat">{{ icon.category }}</span>

        <span v-if="copiedIndex === icon.id" class="copied-badge">¡Copiado!</span>
      </div>
    </div>

    <div v-else class="empty-state">
      No se encontraron iconos para "<strong>{{ search }}</strong>" en la categoría <em>{{ selectedCategory }}</em>.
    </div>
  </div>
</template>

<style scoped>
.icon-browser {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  font-family: var(--font-family-body, sans-serif);
}

.controls-container {
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: var(--color-surface-subtle, #f8fafc);
  border: 1px solid var(--color-border-default, #e2e8f0);
  border-radius: 12px;
  padding: 16px;
}

.search-and-stats {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.search-input {
  flex: 1;
  height: 40px;
  padding: 0 14px;
  border-radius: 8px;
  border: 1px solid var(--color-border-default, #cbd5e1);
  background: var(--color-surface-default, #ffffff);
  font-size: 14px;
  color: var(--color-text-primary, #0f172a);
  outline: none;
  transition: border-color 0.2s;
}

.search-input:focus {
  border-color: var(--color-brand-solid-default, #3b82f6);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);
}

.stats-badge {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-secondary, #64748b);
  white-space: nowrap;
}

.filters-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
}

.size-selector, .color-selector {
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-text-secondary, #64748b);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-group {
  display: flex;
  gap: 4px;
}

.btn-filter {
  height: 28px;
  padding: 0 10px;
  border-radius: 6px;
  border: 1px solid var(--color-border-default, #cbd5e1);
  background: var(--color-surface-default, #ffffff);
  font-size: 12px;
  font-weight: 500;
  color: var(--color-text-primary, #334155);
  cursor: pointer;
  transition: all 0.15s ease;
}

.btn-filter:hover {
  background: var(--color-wolf-100, #f1f5f9);
}

.btn-filter.active {
  background: var(--color-text-primary, #0f172a);
  color: #ffffff;
  border-color: var(--color-text-primary, #0f172a);
}

.category-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding-top: 4px;
}

.cat-pill {
  height: 26px;
  padding: 0 10px;
  border-radius: 9999px;
  border: 1px solid var(--color-border-default, #e2e8f0);
  background: var(--color-surface-default, #ffffff);
  font-size: 12px;
  color: var(--color-text-secondary, #64748b);
  cursor: pointer;
  transition: all 0.15s ease;
}

.cat-pill:hover {
  border-color: var(--color-brand-solid-default, #3b82f6);
  color: var(--color-brand-solid-default, #3b82f6);
}

.cat-pill.active {
  background: var(--color-brand-surface-default, #eff6ff);
  border-color: var(--color-brand-solid-default, #3b82f6);
  color: var(--color-brand-solid-default, #1d4ed8);
  font-weight: 600;
}

.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
}

.icon-item-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 8px 12px;
  background: var(--color-surface-default, #ffffff);
  border: 1px solid var(--color-border-default, #e2e8f0);
  border-radius: 10px;
  gap: 8px;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
}

.icon-item-card:hover {
  border-color: var(--color-brand-solid-default, #3b82f6);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

.icon-preview-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-preview-wrapper :deep(svg) {
  width: 100%;
  height: 100%;
}

.icon-label {
  font-size: 11px;
  font-weight: 500;
  color: var(--color-text-primary, #0f172a);
  text-align: center;
  word-break: break-word;
  line-height: 1.3;
}

.icon-cat {
  font-size: 10px;
  color: var(--color-text-secondary, #94a3b8);
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.copied-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  background: #10b981;
  color: #ffffff;
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
  animation: fadeIn 0.15s ease;
}

.empty-state {
  padding: 40px;
  text-align: center;
  color: var(--color-text-secondary, #64748b);
  background: var(--color-surface-subtle, #f8fafc);
  border-radius: 12px;
  border: 1px dashed var(--color-border-default, #cbd5e1);
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
</style>
