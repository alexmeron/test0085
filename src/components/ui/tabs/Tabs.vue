<script setup lang="ts">
import { TabsRoot, type TabsRootProps, type TabsRootEmits } from 'radix-vue'
import { useForwardPropsEmits } from 'radix-vue'
import styles from './Tabs.module.css'
import { cn } from '../../../lib/utils'

const props = defineProps<TabsRootProps & { class?: string }>()
const emits = defineEmits<TabsRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <TabsRoot v-bind="forwarded" :class="cn(styles.root, props.class)">
    <slot />
  </TabsRoot>
</template>
