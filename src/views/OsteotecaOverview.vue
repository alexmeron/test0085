<script setup lang="ts">
import { ref, computed } from 'vue'
import OsteotecaLogo from './components/OsteotecaLogo.vue'
import { Button, ButtonIcon } from '../components/ui/button'
import { Avatar } from '../components/ui/avatar'
import { Chip } from '../components/ui/chip'
import { Input } from '../components/ui/input'
import { Checkbox } from '../components/ui/checkbox'
import {
  SearchIcon,
  CaretDownIcon,
  MoreVerticalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  AddPlusIcon,
  CalendarDaysIcon,
  UnfoldMoreIcon,
} from '../components/ui/icon'
import styles from './OsteotecaOverview.module.css'

export interface SolicitudItem {
  id: string
  key: string
  estado: {
    state: 'destructive' | 'ready' | 'success' | 'info' | 'warning' | 'neutral'
    label: string
  }
  diagnostico: string
  localizacion: string
  creado: string
}

const defaultSolicitudes: SolicitudItem[] = [
  {
    id: '1',
    key: 'OST-234985',
    estado: { state: 'destructive', label: 'Error' },
    diagnostico: 'Sarcoma de pelvis ósea',
    localizacion: 'Pelvis',
    creado: '14 May, 2026',
  },
  {
    id: '2',
    key: 'OST-234985',
    estado: { state: 'ready', label: 'Listo para planificar' },
    diagnostico: 'Sarcoma de pelvis ósea',
    localizacion: 'Pelvis',
    creado: '14 May, 2026',
  },
  {
    id: '3',
    key: 'OST-234985',
    estado: { state: 'success', label: 'Completado' },
    diagnostico: 'Sarcoma de pelvis ósea',
    localizacion: 'Pelvis',
    creado: '14 May, 2026',
  },
  {
    id: '4',
    key: 'OST-234985',
    estado: { state: 'info', label: 'Procesando' },
    diagnostico: 'Sarcoma de pelvis ósea',
    localizacion: 'Pelvis',
    creado: '14 May, 2026',
  },
  {
    id: '5',
    key: 'OST-234985',
    estado: { state: 'warning', label: 'Matching en curso' },
    diagnostico: 'Sarcoma de pelvis ósea',
    localizacion: 'Pelvis',
    creado: '14 May, 2026',
  },
  {
    id: '6',
    key: 'OST-234985',
    estado: { state: 'neutral', label: 'Cancelado' },
    diagnostico: 'Sarcoma de pelvis ósea',
    localizacion: 'Pelvis',
    creado: '14 May, 2026',
  },
  {
    id: '7',
    key: 'OST-234985',
    estado: { state: 'ready', label: 'Listo para planificar' },
    diagnostico: 'Sarcoma de pelvis ósea',
    localizacion: 'Pelvis',
    creado: '14 May, 2026',
  },
  {
    id: '8',
    key: 'OST-234985',
    estado: { state: 'success', label: 'Completado' },
    diagnostico: 'Sarcoma de pelvis ósea',
    localizacion: 'Pelvis',
    creado: '14 May, 2026',
  },
  {
    id: '9',
    key: 'OST-234985',
    estado: { state: 'destructive', label: 'Error' },
    diagnostico: 'Sarcoma de pelvis ósea',
    localizacion: 'Pelvis',
    creado: '14 May, 2026',
  },
  {
    id: '10',
    key: 'OST-234985',
    estado: { state: 'neutral', label: 'Cancelado' },
    diagnostico: 'Sarcoma de pelvis ósea',
    localizacion: 'Pelvis',
    creado: '14 May, 2026',
  },
]

const activeTab = ref<'overview' | 'osteoteca'>('overview')
const searchQuery = ref('')
const selectedRows = ref<string[]>([])
const currentPage = ref(1)
const totalItems = ref(110)

const filteredItems = computed(() => {
  if (!searchQuery.value.trim()) return defaultSolicitudes
  const q = searchQuery.value.toLowerCase()
  return defaultSolicitudes.filter(
    (item) =>
      item.key.toLowerCase().includes(q) ||
      item.diagnostico.toLowerCase().includes(q) ||
      item.localizacion.toLowerCase().includes(q) ||
      item.estado.label.toLowerCase().includes(q)
  )
})

const isAllSelected = computed(() => {
  if (filteredItems.value.length === 0) return false
  return filteredItems.value.every((item) => selectedRows.value.includes(item.id))
})

function toggleSelectAll() {
  if (isAllSelected.value) {
    selectedRows.value = []
  } else {
    selectedRows.value = filteredItems.value.map((item) => item.id)
  }
}

function toggleRow(id: string) {
  const index = selectedRows.value.indexOf(id)
  if (index > -1) {
    selectedRows.value.splice(index, 1)
  } else {
    selectedRows.value.push(id)
  }
}
</script>

<template>
  <div :class="styles.page">
    <!-- Ambient glow decorative background from Figma Group 2 -->
    <svg
      :class="styles.ambientGlow"
      viewBox="0 0 788 414"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g filter="url(#glow-filter-1)">
        <circle cx="189.5" cy="189.5" r="189.5" transform="matrix(-1 0 0 1 596 -65)" fill="#E5EBF9" />
      </g>
      <g filter="url(#glow-filter-2)">
        <circle cx="79" cy="79" r="79" transform="matrix(-1 0 0 1 688 -7)" fill="#F7E9FF" />
      </g>
      <g filter="url(#glow-filter-3)">
        <circle cx="79" cy="79" r="79" transform="matrix(-1 0 0 1 258 83)" fill="#F7E9FF" />
      </g>
      <defs>
        <filter id="glow-filter-1" x="117" y="-165" width="579" height="579" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur" />
        </filter>
        <filter id="glow-filter-2" x="430" y="-107" width="358" height="358" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur" />
        </filter>
        <filter id="glow-filter-3" x="0" y="-17" width="358" height="358" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>

    <!-- Topbar (Figma 1851:140116) -->
    <header :class="styles.topbar">
      <div :class="styles.topbarInner">
        <div :class="styles.topbarLeft">
          <OsteotecaLogo />

          <!-- Topbar Menu -->
          <nav :class="styles.navMenu" aria-label="Main Navigation">
            <button
              type="button"
              :class="[styles.navItem, activeTab === 'overview' && styles.navItemActive]"
              @click="activeTab = 'overview'"
            >
              Overview
            </button>
            <button
              type="button"
              :class="[styles.navItem, activeTab === 'osteoteca' && styles.navItemActive]"
              @click="activeTab = 'osteoteca'"
            >
              Osteoteca
            </button>
          </nav>
        </div>

        <!-- User Avatar -->
        <Avatar
          size="md"
          type="name"
          name="AS"
        />
      </div>
    </header>

    <!-- Main Content Container (Figma 1851:140131) -->
    <main :class="styles.main">
      <!-- Section Header (Figma 1851:140132) -->
      <div :class="styles.header">
        <h1 :class="styles.headerTitle">Overview</h1>
        <Button variant="primary" size="lg">
          <template #leadingIcon>
            <AddPlusIcon style="width: 20px; height: 20px;" />
          </template>
          Nueva solicitud
        </Button>
      </div>

      <!-- Table Card (Figma 1851:140135) -->
      <section :class="styles.card">
        <!-- Toolbar Top (Figma 1851:140137) -->
        <div :class="styles.toolbar">
          <h2 :class="styles.toolbarTitle">Solicitudes</h2>

          <div :class="styles.filters">
            <!-- Search Input -->
            <div :class="styles.searchField">
              <Input
                v-model="searchQuery"
                size="md"
                placeholder="Buscar por NHC, ID..."
              >
                <template #leadingIcon>
                  <SearchIcon style="width: 16px; height: 16px;" />
                </template>
              </Input>
            </div>

            <!-- Filter Estado (Select filled with Chip badge) -->
            <button type="button" :class="styles.filterTrigger" aria-label="Filtrar por estado">
              <Chip state="info" variant="solid" size="badge">1</Chip>
              <span>Estado</span>
              <CaretDownIcon style="width: 14px; height: 14px; color: var(--color-text-secondary);" />
            </button>

            <!-- Filter Fecha (Select filled with Chip badge) -->
            <button type="button" :class="styles.filterTrigger" aria-label="Filtrar por fecha">
              <Chip state="info" variant="solid" size="badge">1</Chip>
              <span>Fecha</span>
              <CaretDownIcon style="width: 14px; height: 14px; color: var(--color-text-secondary);" />
            </button>
          </div>
        </div>

        <!-- Table Container -->
        <div :class="styles.tableContainer">
          <table :class="styles.table">
            <thead>
              <tr>
                <th :class="[styles.th, styles.thCheckbox]">
                  <Checkbox
                    :checked="isAllSelected"
                    size="sm"
                    aria-label="Seleccionar todas las filas"
                    @change="toggleSelectAll"
                  />
                </th>
                <th :class="styles.th" style="width: 100px;">
                  <span :class="styles.thContent">
                    <UnfoldMoreIcon :class="styles.thSortIcon" />
                    ID
                  </span>
                </th>
                <th :class="styles.th" style="width: 200px;">
                  <span :class="styles.thContent">
                    <UnfoldMoreIcon :class="styles.thSortIcon" />
                    ESTADO
                  </span>
                </th>
                <th :class="styles.th" style="width: 300px;">
                  <span :class="styles.thContent">
                    <UnfoldMoreIcon :class="styles.thSortIcon" />
                    DIAGNÓSTICO
                  </span>
                </th>
                <th :class="styles.th" style="width: 180px;">
                  <span :class="styles.thContent">
                    <UnfoldMoreIcon :class="styles.thSortIcon" />
                    LOCALIZACIÓN
                  </span>
                </th>
                <th :class="styles.th" style="width: 120px;">
                  <span :class="styles.thContent">
                    <UnfoldMoreIcon :class="styles.thSortIcon" />
                    CREADO
                  </span>
                </th>
                <th :class="[styles.th, styles.tdAction]" />
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in filteredItems"
                :key="item.id"
                :class="[styles.tr, selectedRows.includes(item.id) && styles.trSelected]"
              >
                <!-- Checkbox -->
                <td :class="[styles.td, styles.tdCheckbox]">
                  <Checkbox
                    :checked="selectedRows.includes(item.id)"
                    size="sm"
                    :aria-label="`Seleccionar solicitud ${item.key}`"
                    @change="toggleRow(item.id)"
                  />
                </td>

                <!-- ID -->
                <td :class="[styles.td, styles.tdId]">
                  {{ item.key }}
                </td>

                <!-- ESTADO (Chip) -->
                <td :class="styles.td">
                  <Chip
                    :state="item.estado.state"
                    variant="subtle"
                    size="sm"
                  >
                    {{ item.estado.label }}
                  </Chip>
                </td>

                <!-- DIAGNÓSTICO -->
                <td :class="styles.td">
                  {{ item.diagnostico }}
                </td>

                <!-- LOCALIZACIÓN -->
                <td :class="styles.td">
                  {{ item.localizacion }}
                </td>

                <!-- CREADO -->
                <td :class="styles.td">
                  <span :class="styles.dateContent">
                    <CalendarDaysIcon style="width: 14px; height: 14px;" />
                    {{ item.creado }}
                  </span>
                </td>

                <!-- Actions -->
                <td :class="[styles.td, styles.tdAction]">
                  <ButtonIcon
                    variant="ghost"
                    size="sm"
                    :aria-label="`Acciones para solicitud ${item.key}`"
                  >
                    <MoreVerticalIcon style="width: 16px; height: 16px;" />
                  </ButtonIcon>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Table Bottom / Pagination (Figma 1851:140259) -->
        <footer :class="styles.bottom">
          <p :class="styles.bottomText">Total: {{ totalItems }} resultados</p>

          <div :class="styles.pagination">
            <Button
              variant="outlined"
              size="md"
              :disabled="currentPage <= 1"
              @click="currentPage > 1 && currentPage--"
            >
              <template #leadingIcon>
                <ChevronLeftIcon style="width: 14px; height: 14px;" />
              </template>
              Anterior
            </Button>
            <Button
              variant="outlined"
              size="md"
              @click="currentPage++"
            >
              Siguiente
              <template #trailingIcon>
                <ChevronRightIcon style="width: 14px; height: 14px;" />
              </template>
            </Button>
          </div>
        </footer>
      </section>
    </main>
  </div>
</template>
