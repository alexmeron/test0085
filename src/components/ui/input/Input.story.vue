<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '.'

const text = ref('')
</script>

<template>
  <Story title="Input">
    <Variant title="Default">
      <Input v-model="text" placeholder="Enter text..." />
    </Variant>

    <Variant title="States">
      <div class="flex flex-col gap-4 max-w-sm">
        <Input placeholder="Default" state="default" />
        <Input placeholder="Hover" state="hover" />
        <Input placeholder="Focus" state="focus" />
        <Input placeholder="Filled" state="filled" value="Some value" />
        <Input placeholder="Disabled" state="disabled" disabled />
        <Input placeholder="Success" state="success" />
        <Input placeholder="Destructive" state="destructive" />
      </div>
    </Variant>

    <Variant title="Sizes">
      <div class="flex flex-col gap-4 max-w-sm">
        <Input placeholder="Small" size="sm" />
        <Input placeholder="Medium" size="md" />
        <Input placeholder="Large" size="lg" />
      </div>
    </Variant>
  </Story>
</template>
