<script setup lang="ts">
import { ref, computed } from 'vue'
import figmaIcons from '../../assets/figmaIcons.json'

interface IconData {
  id: string
  fullName: string
  category: string
  name: string
  svg: string
  rawSvg: string
}

const icons = figmaIcons as IconData[]

const sizeMap = {
  '2xs': { label: '2xs (12px)', size: '12px', token: 'var(--sizing-6)' },
  'xs': { label: 'xs (16px)', size: '16px', token: 'var(--sizing-7)' },
  'sm': { label: 'sm (20px)', size: '20px', token: 'var(--sizing-8)' },
  'md': { label: 'md (24px)', size: '24px', token: 'var(--sizing-9)' },
  'lg': { label: 'lg (32px)', size: '32px', token: 'var(--sizing-10)' },
  'xl': { label: 'xl (40px)', size: '40px', token: 'var(--sizing-11)' },
} as const

type SizeKey = keyof typeof sizeMap

const colorOptions = [
  { label: 'Defecto', value: 'currentColor' },
  { label: 'Marca', value: 'var(--color-brand-solid-default, #1E4EAE)' },
  { label: 'Destructive', value: 'var(--color-destructive-solid-default, #EF4444)' },
  { label: 'Success', value: 'var(--color-success-solid-default, #22C55E)' },
  { label: 'Secundario', value: 'var(--color-text-secondary, #64748B)' },
]

const search = ref('')
const selectedCategory = ref('Todas')
const selectedSize = ref<SizeKey>('md')
const selectedColor = ref('currentColor')
const copiedIndex = ref<string | null>(null)
const copyMode = ref<'name' | 'vue'>('vue')

const categories = computed(() => {
  const cats = Array.from(new Set(icons.map((i) => i.category || 'General'))).sort()
  return ['Todas', ...cats]
})

const filteredIcons = computed(() => {
  return icons.filter((icon) => {
    const matchesCat =
      selectedCategory.value === 'Todas' || (icon.category || 'General') === selectedCategory.value

    if (!matchesCat) return false

    if (!search.value.trim()) return true

    const q = search.value.toLowerCase().trim()
    return (
      icon.name.toLowerCase().includes(q) ||
      icon.fullName.toLowerCase().includes(q) ||
      (icon.category && icon.category.toLowerCase().includes(q))
    )
  })
})

async function copyIcon(icon: IconData) {
  const textToCopy =
    copyMode.value === 'vue'
      ? `<Icon name="${icon.name}" size="${selectedSize.value}" />`
      : icon.name

  try {
    await navigator.clipboard.writeText(textToCopy)
    copiedIndex.value = icon.id
    setTimeout(() => {
      if (copiedIndex.value === icon.id) {
        copiedIndex.value = null
      }
    }, 1800)
  } catch (err) {
    console.error('Error al copiar al portapapeles:', err)
  }
}
</script>

<template>
  <div class="icon-browser">
    <!-- Panel Superior de Controles y Búsqueda -->
    <div class="controls-container">
      <div class="search-and-stats">
        <div class="search-wrap">
          <svg class="search-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            v-model="search"
            type="text"
            placeholder="Buscar por nombre, categoría o alias (ej. search, arrow, chevron, close)..."
            class="search-input"
          />
          <button v-if="search" type="button" class="clear-search-btn" @click="search = ''">✕</button>
        </div>
        <span class="stats-badge">
          <strong>{{ filteredIcons.length }}</strong> de {{ icons.length }} iconos
        </span>
      </div>

      <!-- Filtros de Tamaño, Color y Modo de Copia -->
      <div class="filters-row">
        <!-- Selector de Tamaño -->
        <div class="filter-group">
          <span class="filter-label">Tamaño:</span>
          <div class="btn-group">
            <button
              v-for="(_, key) in sizeMap"
              :key="key"
              type="button"
              :class="['btn-filter', { active: selectedSize === key }]"
              @click="selectedSize = key"
            >
              {{ key }}
            </button>
          </div>
        </div>

        <!-- Selector de Color -->
        <div class="filter-group">
          <span class="filter-label">Color:</span>
          <div class="btn-group">
            <button
              v-for="opt in colorOptions"
              :key="opt.value"
              type="button"
              :class="['btn-filter', { active: selectedColor === opt.value }]"
              @click="selectedColor = opt.value"
            >
              {{ opt.label }}
            </button>
          </div>
        </div>

        <!-- Modo de Copia -->
        <div class="filter-group">
          <span class="filter-label">Al hacer click:</span>
          <div class="btn-group">
            <button
              type="button"
              :class="['btn-filter', { active: copyMode === 'vue' }]"
              @click="copyMode = 'vue'"
            >
              Snippet Vue
            </button>
            <button
              type="button"
              :class="['btn-filter', { active: copyMode === 'name' }]"
              @click="copyMode = 'name'"
            >
              Solo Nombre
            </button>
          </div>
        </div>
      </div>

      <!-- Píldoras de Categorías -->
      <div class="category-pills">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          :class="['cat-pill', { active: selectedCategory === cat }]"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Cuadrícula de Iconos -->
    <div v-if="filteredIcons.length > 0" class="icons-grid">
      <div
        v-for="icon in filteredIcons"
        :key="icon.id"
        class="icon-item-card"
        :title="`Click para copiar: ${copyMode === 'vue' ? `<Icon name='${icon.name}' />` : icon.name}`"
        @click="copyIcon(icon)"
      >
        <div
          class="icon-preview-wrapper"
          :style="{
            width: sizeMap[selectedSize].size,
            height: sizeMap[selectedSize].size,
            color: selectedColor,
          }"
          v-html="icon.svg"
        />
        <span class="icon-label">{{ icon.name }}</span>
        <span class="icon-cat">{{ icon.category || 'General' }}</span>

        <span v-if="copiedIndex === icon.id" class="copied-badge">¡Copiado!</span>
      </div>
    </div>

    <!-- Estado Vacío -->
    <div v-else class="empty-state">
      <p>No se encontraron iconos para "<strong>{{ search }}</strong>" en la categoría <em>{{ selectedCategory }}</em>.</p>
      <button type="button" class="btn-reset" @click="search = ''; selectedCategory = 'Todas'">
        Restablecer filtros
      </button>
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
  margin-top: 1.5rem;
}

.controls-container {
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: var(--color-surface-subtle, #f8fafc);
  border: 1px solid var(--color-border-default, #e2e8f0);
  border-radius: 12px;
  padding: 16px;
  box-sizing: border-box;
}

.search-and-stats {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.search-wrap {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
}

.search-icon-svg {
  position: absolute;
  left: 12px;
  width: 16px;
  height: 16px;
  color: var(--color-text-secondary, #64748b);
  pointer-events: none;
}

.search-input {
  width: 100%;
  height: 40px;
  padding: 0 36px 0 36px;
  border-radius: 8px;
  border: 1px solid var(--color-border-default, #cbd5e1);
  background: var(--color-surface-default, #ffffff);
  font-size: 14px;
  color: var(--color-text-primary, #0f172a);
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.search-input:focus {
  border-color: var(--color-blue-700, #1e4eae);
  box-shadow: 0 0 0 2px rgba(30, 78, 174, 0.15);
}

.clear-search-btn {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  color: var(--color-text-secondary, #64748b);
  cursor: pointer;
  padding: 4px;
  font-size: 14px;
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
  gap: 20px;
}

.filter-group {
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
  background: var(--color-surface-subtle, #f1f5f9);
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
  max-height: 90px;
  overflow-y: auto;
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
  border-color: var(--color-blue-700, #1e4eae);
  color: var(--color-blue-700, #1e4eae);
}

.cat-pill.active {
  background: var(--color-blue-50, #eff6ff);
  border-color: var(--color-blue-700, #1e4eae);
  color: var(--color-blue-700, #1e4eae);
  font-weight: 600;
}

.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
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
  min-height: 100px;
  box-sizing: border-box;
}

.icon-item-card:hover {
  border-color: var(--color-blue-700, #1e4eae);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.btn-reset {
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid var(--color-border-default, #cbd5e1);
  background: white;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
</style>
