<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '../icon'
import ButtonIcon from '../button/ButtonIcon.vue'
import styles from './Datepicker.module.css'
import { cn } from '../../../lib/utils'

interface Props {
  variant?: 'simple' | 'range'
  modelValue?: Date | string | null
  startDate?: Date | string | null
  endDate?: Date | string | null
  disabled?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'simple',
  disabled: false,
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: Date): void
  (e: 'update:startDate', value: Date): void
  (e: 'update:endDate', value: Date): void
}>()

// Current view month (year, month: 0-11)
const viewDate = ref(new Date())

const currentYear = computed(() => viewDate.value.getFullYear())
const currentMonth = computed(() => viewDate.value.getMonth())

const nextMonthDate = computed(() => {
  return new Date(currentYear.value, currentMonth.value + 1, 1)
})

const monthNames = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]

const weekdays = ['L', 'M', 'X', 'J', 'V', 'S', 'D']

function prevMonth() {
  viewDate.value = new Date(currentYear.value, currentMonth.value - 1, 1)
}

function nextMonth() {
  viewDate.value = new Date(currentYear.value, currentMonth.value + 1, 1)
}

// Generate days for a month (42 cells: 6 rows x 7 days)
interface DayItem {
  date: Date
  day: number
  isCurrentMonth: boolean
  isToday: boolean
}

function getDaysForMonth(year: number, month: number): DayItem[] {
  const days: DayItem[] = []
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const firstDay = new Date(year, month, 1)
  let startOffset = firstDay.getDay() - 1
  if (startOffset < 0) startOffset = 6

  // Days from previous month
  const prevMonthDays = new Date(year, month, 0).getDate()
  for (let i = startOffset - 1; i >= 0; i--) {
    const d = new Date(year, month - 1, prevMonthDays - i)
    d.setHours(0, 0, 0, 0)
    days.push({
      date: d,
      day: prevMonthDays - i,
      isCurrentMonth: false,
      isToday: d.getTime() === today.getTime(),
    })
  }

  // Days of current month
  const totalDays = new Date(year, month + 1, 0).getDate()
  for (let i = 1; i <= totalDays; i++) {
    const d = new Date(year, month, i)
    d.setHours(0, 0, 0, 0)
    days.push({
      date: d,
      day: i,
      isCurrentMonth: true,
      isToday: d.getTime() === today.getTime(),
    })
  }

  // Days for next month to complete 42 cells
  const remaining = 42 - days.length
  for (let i = 1; i <= remaining; i++) {
    const d = new Date(year, month + 1, i)
    d.setHours(0, 0, 0, 0)
    days.push({
      date: d,
      day: i,
      isCurrentMonth: false,
      isToday: d.getTime() === today.getTime(),
    })
  }

  return days
}

const leftMonthDays = computed(() => getDaysForMonth(currentYear.value, currentMonth.value))
const rightMonthDays = computed(() => getDaysForMonth(nextMonthDate.value.getFullYear(), nextMonthDate.value.getMonth()))

// Internal selection state
const selectedDate = ref<Date | null>(
  props.modelValue ? new Date(props.modelValue) : new Date(2026, 4, 15)
)
const rangeStart = ref<Date | null>(
  props.startDate ? new Date(props.startDate) : new Date(2026, 4, 23)
)
const rangeEnd = ref<Date | null>(
  props.endDate ? new Date(props.endDate) : new Date(2026, 5, 12)
)

function isSameDay(d1: Date | null, d2: Date | null) {
  if (!d1 || !d2) return false
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  )
}

function handleDayClick(day: DayItem) {
  if (props.disabled) return

  if (props.variant === 'simple') {
    selectedDate.value = day.date
    emits('update:modelValue', day.date)
  } else {
    // Range logic
    if (!rangeStart.value || (rangeStart.value && rangeEnd.value)) {
      rangeStart.value = day.date
      rangeEnd.value = null
      emits('update:startDate', day.date)
    } else {
      if (day.date < rangeStart.value) {
        rangeStart.value = day.date
        emits('update:startDate', day.date)
      } else {
        rangeEnd.value = day.date
        emits('update:endDate', day.date)
      }
    }
  }
}

function getCellClasses(day: DayItem) {
  const classes = [styles.cell]
  if (!day.isCurrentMonth) classes.push(styles.outside)
  if (day.isToday) classes.push(styles.today)

  if (props.variant === 'simple') {
    if (isSameDay(day.date, selectedDate.value)) {
      classes.push(styles.selected)
    }
  } else {
    const isStart = isSameDay(day.date, rangeStart.value)
    const isEnd = isSameDay(day.date, rangeEnd.value)
    const isBetween =
      rangeStart.value &&
      rangeEnd.value &&
      day.date > rangeStart.value &&
      day.date < rangeEnd.value

    if (isStart) classes.push(styles.rangeStart)
    if (isEnd) classes.push(styles.rangeEnd)
    if (isBetween) classes.push(styles.rangeBetween)
  }

  return classes
}
</script>

<template>
  <div
    :class="cn(
      styles.datepicker,
      variant === 'range' ? styles['variant-range'] : styles['variant-simple'],
      disabled && styles.disabledRoot,
      props.class
    )"
  >
    <!-- Simple Variant (Single Month: w=224 inside 248 container) -->
    <template v-if="variant === 'simple'">
      <div :class="styles.simplePanel">
        <!-- head-datepicker using ButtonIcon variant="outlined" size="md" -->
        <div :class="styles.header">
          <ButtonIcon
            variant="outlined"
            size="md"
            :disabled="disabled"
            aria-label="Mes anterior"
            @click="prevMonth"
          >
            <ChevronLeftIcon style="width: 16px; height: 16px;" />
          </ButtonIcon>
          <span :class="styles.title">{{ monthNames[currentMonth] }}</span>
          <ButtonIcon
            variant="outlined"
            size="md"
            :disabled="disabled"
            aria-label="Mes siguiente"
            @click="nextMonth"
          >
            <ChevronRightIcon style="width: 16px; height: 16px;" />
          </ButtonIcon>
        </div>

        <div :class="styles.calendarDays">
          <div :class="styles.weekdays">
            <span v-for="wd in weekdays" :key="wd" :class="styles.weekday">{{ wd }}</span>
          </div>

          <div :class="styles.daysGrid">
            <button
              v-for="(item, idx) in leftMonthDays"
              :key="idx"
              type="button"
              :disabled="disabled"
              :class="getCellClasses(item)"
              @click="handleDayClick(item)"
            >
              {{ item.day }}
            </button>
          </div>
        </div>
      </div>
    </template>

    <!-- Range Variant (Two Calendar panels side-by-side: 248 + 12 + 248 + 24 = 532px) -->
    <template v-else>
      <div :class="styles.rangePanels">
        <!-- Left Month Calendar Panel -->
        <div :class="styles.calendarPanel">
          <div :class="styles.header">
            <ButtonIcon
              variant="outlined"
              size="md"
              :disabled="disabled"
              aria-label="Mes anterior"
              @click="prevMonth"
            >
              <ChevronLeftIcon style="width: 16px; height: 16px;" />
            </ButtonIcon>
            <span :class="styles.title">{{ monthNames[currentMonth] }}</span>
            <ButtonIcon
              variant="outlined"
              size="md"
              :disabled="disabled"
              aria-label="Mes siguiente"
              @click="nextMonth"
            >
              <ChevronRightIcon style="width: 16px; height: 16px;" />
            </ButtonIcon>
          </div>

          <div :class="styles.calendarDays">
            <div :class="styles.weekdays">
              <span v-for="wd in weekdays" :key="wd" :class="styles.weekday">{{ wd }}</span>
            </div>

            <div :class="styles.daysGrid">
              <button
                v-for="(item, idx) in leftMonthDays"
                :key="idx"
                type="button"
                :disabled="disabled"
                :class="getCellClasses(item)"
                @click="handleDayClick(item)"
              >
                {{ item.day }}
              </button>
            </div>
          </div>
        </div>

        <!-- Right Month Calendar Panel -->
        <div :class="styles.calendarPanel">
          <div :class="styles.header">
            <ButtonIcon
              variant="outlined"
              size="md"
              :disabled="disabled"
              aria-label="Mes anterior"
              @click="prevMonth"
            >
              <ChevronLeftIcon style="width: 16px; height: 16px;" />
            </ButtonIcon>
            <span :class="styles.title">{{ monthNames[nextMonthDate.getMonth()] }}</span>
            <ButtonIcon
              variant="outlined"
              size="md"
              :disabled="disabled"
              aria-label="Mes siguiente"
              @click="nextMonth"
            >
              <ChevronRightIcon style="width: 16px; height: 16px;" />
            </ButtonIcon>
          </div>

          <div :class="styles.calendarDays">
            <div :class="styles.weekdays">
              <span v-for="wd in weekdays" :key="wd" :class="styles.weekday">{{ wd }}</span>
            </div>

            <div :class="styles.daysGrid">
              <button
                v-for="(item, idx) in rightMonthDays"
                :key="idx"
                type="button"
                :disabled="disabled"
                :class="getCellClasses(item)"
                @click="handleDayClick(item)"
              >
                {{ item.day }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
