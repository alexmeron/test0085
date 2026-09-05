<script setup lang="ts">
interface Props {
  class?: string
}

defineProps<Props>()
</script>

<template>
  <tbody :class="$props.class">
    <slot />
  </tbody>
</template>
