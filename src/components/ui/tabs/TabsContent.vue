<script setup lang="ts">
import { TabsContent, type TabsContentProps } from 'radix-vue'
import styles from './Tabs.module.css'
import { cn } from '../../../lib/utils'

const props = defineProps<TabsContentProps & { class?: string }>()
</script>

<template>
  <TabsContent v-bind="props" :class="cn(styles.content, props.class)">
    <slot />
  </TabsContent>
</template>
