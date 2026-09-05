<script setup lang="ts">
import { computed, type Component } from 'vue'
import { useVModel } from '@vueuse/core'
import { inputVariants, type InputVariants } from './inputVariants'
import { cn } from '../../../lib/utils'
import styles from './Input.module.css'
import { Check, AlertCircle, Info } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    defaultValue?: string | number
    modelValue?: string | number
    class?: string
    inputClass?: string
    size?: InputVariants['size']
    state?: InputVariants['state']
    variant?: 'default' | 'error' | 'success'
    placeholder?: string
    disabled?: boolean
    type?: string
    id?: string
    name?: string
    label?: string
    isMandatory?: boolean
    hint?: string
    helperText?: string
    showHelper?: boolean
    showHelperIcon?: boolean
    leadingIcon?: Component
    trailingIcon?: Component
  }>(),
  {
    size: 'md',
    state: 'default',
    type: 'text',
    disabled: false,
    showHelper: true,
    showHelperIcon: true,
    isMandatory: false,
  }
)

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

// Resolve state: maps backwards-compatible variant='error' to 'destructive', etc.
const resolvedState = computed(() => {
  if (props.disabled) return 'disabled'
  if (props.variant === 'error') return 'destructive'
  if (props.variant === 'success') return 'success'
  if (props.state) return props.state
  if (modelValue.value !== undefined && modelValue.value !== '' && modelValue.value !== null) {
    return 'filled'
  }
  return 'default'
})

const isDestructive = computed(() => resolvedState.value === 'destructive')
const isSuccess = computed(() => resolvedState.value === 'success')

const fieldClasses = computed(() => {
  return cn(
    inputVariants({
      size: props.size,
      state: resolvedState.value,
    }),
    props.disabled && styles.disabled,
    props.inputClass
  )
})
</script>

<template>
  <div :class="cn(styles.wrapper, props.class)">
    <!-- Label Header -->
    <div v-if="label || hint || $slots.label || $slots.hint" :class="styles.labelHeader">
      <div :class="styles.labelTop">
        <label v-if="label || $slots.label" :for="id" :class="styles.label">
          <slot name="label">{{ label }}</slot>
          <span v-if="isMandatory" :class="styles.mandatory">*</span>
        </label>
      </div>
      <div v-if="hint || $slots.hint" :class="styles.hintText">
        <slot name="hint">{{ hint }}</slot>
      </div>
    </div>

    <!-- Input Field -->
    <div :class="fieldClasses">
      <!-- Leading Icon -->
      <span v-if="leadingIcon || $slots['leading-icon']" :class="styles.icon">
        <slot name="leading-icon">
          <component :is="leadingIcon" v-if="leadingIcon" />
        </slot>
      </span>

      <!-- Native Input -->
      <input
        :id="id"
        :name="name"
        v-model="modelValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled || resolvedState === 'disabled'"
        :class="styles.nativeInput"
      >

      <!-- Trailing Icon -->
      <span v-if="trailingIcon || $slots['trailing-icon']" :class="styles.icon">
        <slot name="trailing-icon">
          <component :is="trailingIcon" v-if="trailingIcon" />
        </slot>
      </span>
    </div>

    <!-- Helper Row -->
    <div
      v-if="(helperText || $slots.helper) && showHelper"
      :class="[
        styles.helperRow,
        isDestructive && styles['helper-destructive'],
        isSuccess && styles['helper-success'],
      ]"
    >
      <span v-if="showHelperIcon" :class="styles.helperIcon">
        <slot name="helper-icon">
          <AlertCircle v-if="isDestructive" />
          <Check v-else-if="isSuccess" />
          <Info v-else />
        </slot>
      </span>
      <span :class="styles.helperText">
        <slot name="helper">{{ helperText }}</slot>
      </span>
    </div>
  </div>
</template>
