<script setup lang="ts">
import { TabsList, type TabsListProps } from 'radix-vue'
import styles from './Tabs.module.css'
import { cn } from '../../../lib/utils'

const props = defineProps<TabsListProps & { class?: string }>()
</script>

<template>
  <TabsList v-bind="props" :class="cn(styles.list, props.class)">
    <slot />
  </TabsList>
</template>
