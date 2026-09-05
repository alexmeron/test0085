<script setup lang="ts">
import { type Component } from 'vue'
import { Label as RadixLabel } from 'radix-vue'
import { CircleHelpIcon } from '../icon'
import { cn } from '../../../lib/utils'
import styles from './Label.module.css'

const props = withDefaults(
  defineProps<{
    for?: string
    label?: string
    isMandatory?: boolean
    hintText?: string
    showHint?: boolean
    leadingIcon?: boolean | Component
    trailingIcon?: boolean | Component
    class?: string
  }>(),
  {
    label: 'Label',
    isMandatory: false,
    showHint: true,
    leadingIcon: false,
    trailingIcon: false,
  }
)
</script>

<template>
  <div :class="cn(styles.header, props.class)">
    <div :class="styles.topWrapper">
      <div :class="styles.container">
        <!-- Leading Icon -->
        <span
          v-if="leadingIcon || $slots['leading-icon']"
          :class="styles.icon"
        >
          <slot name="leading-icon">
            <component :is="leadingIcon" v-if="typeof leadingIcon === 'object'" />
            <CircleHelpIcon v-else />
          </slot>
        </span>

        <!-- Label + Asterisk -->
        <div :class="styles.labelWrapper">
          <RadixLabel :for="props.for" :class="styles.label">
            <slot>{{ label }}</slot>
          </RadixLabel>
          <span v-if="isMandatory" :class="styles.mandatory">*</span>
        </div>

        <!-- Trailing Icon -->
        <span
          v-if="trailingIcon || $slots['trailing-icon']"
          :class="styles.icon"
        >
          <slot name="trailing-icon">
            <component :is="trailingIcon" v-if="typeof trailingIcon === 'object'" />
            <CircleHelpIcon v-else />
          </slot>
        </span>
      </div>
    </div>

    <!-- Hint Text -->
    <div
      v-if="(hintText || $slots.hint) && showHint"
      :class="styles.hintText"
    >
      <slot name="hint">{{ hintText }}</slot>
    </div>
  </div>
</template>
