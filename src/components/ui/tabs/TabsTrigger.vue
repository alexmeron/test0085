<script setup lang="ts">
import { TabsTrigger, type TabsTriggerProps } from 'radix-vue'
import { tabTriggerVariants, type TabTriggerVariants } from './tabTriggerVariants'
import { Chip } from '../chip'
import styles from './Tabs.module.css'
import { cn } from '../../../lib/utils'

interface Props extends TabsTriggerProps {
  label?: string
  icon?: any
  chip?: string | number
  chipState?: 'destructive' | 'info' | 'ready' | 'warning' | 'success' | 'neutral'
  state?: TabTriggerVariants['state']
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  chipState: 'destructive',
  state: 'default',
})
</script>

<template>
  <TabsTrigger
    :value="value"
    :disabled="disabled"
    :class="cn(tabTriggerVariants({ state }), props.class)"
  >
    <!-- Optional Leading Icon -->
    <span v-if="icon || $slots.icon" :class="styles.icon">
      <slot name="icon">
        <component :is="icon" style="width: var(--sizing-6); height: var(--sizing-6);" />
      </slot>
    </span>

    <!-- Tab Label -->
    <span :class="styles.label">
      <slot>{{ label }}</slot>
    </span>

    <!-- Optional Chip Badge -->
    <span v-if="chip !== undefined || $slots.chip" :class="styles.chip">
      <slot name="chip">
        <Chip size="badge" :state="chipState" variant="subtle">
          {{ chip }}
        </Chip>
      </slot>
    </span>
  </TabsTrigger>
</template>
