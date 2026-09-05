<script setup lang="ts">
import { computed } from 'vue'
import { TabsTrigger, type TabsTriggerProps } from 'radix-vue'
import { tabTriggerVariants, type TabTriggerVariants } from './tabTriggerVariants'
import { Chip } from '../chip'
import { Image01Icon, Icon } from '../icon'
import styles from './Tabs.module.css'
import { cn } from '../../../lib/utils'

interface Props extends TabsTriggerProps {
  label?: string
  icon?: any
  leadingIcon?: boolean | any
  chip?: string | number
  chipState?: 'destructive' | 'info' | 'ready' | 'warning' | 'success' | 'neutral'
  state?: TabTriggerVariants['state']
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  chipState: 'destructive',
  state: 'default',
})

const resolvedIcon = computed(() => {
  const ic = props.leadingIcon ?? props.icon
  if (ic === true) return Image01Icon
  return ic
})
</script>

<template>
  <TabsTrigger
    :value="value"
    :disabled="disabled"
    :class="cn(tabTriggerVariants({ state }), props.class)"
  >
    <!-- Optional Leading Icon (12×12px, token --sizing-6 / size=2xs) -->
    <span v-if="resolvedIcon || $slots.icon" :class="styles.icon">
      <slot name="icon">
        <Icon
          v-if="typeof resolvedIcon === 'string'"
          :name="resolvedIcon"
          style="width: 100%; height: 100%;"
        />
        <component
          :is="resolvedIcon"
          v-else-if="resolvedIcon"
          style="width: 100%; height: 100%;"
        />
      </slot>
    </span>

    <!-- Tab Label -->
    <span :class="styles.label">
      <slot>{{ label }}</slot>
    </span>

    <!-- Optional Chip Badge (sub-component Chip size="badge") -->
    <span v-if="chip !== undefined || $slots.chip" :class="styles.chip">
      <slot name="chip">
        <Chip size="badge" :state="chipState" variant="subtle">
          {{ chip }}
        </Chip>
      </slot>
    </span>
  </TabsTrigger>
</template>
