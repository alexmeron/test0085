<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '../components/ui/input'

const text = ref('')
</script>

<template>
  <div class="flex flex-col gap-spacing-11">
    <section>
      <h3 class="text-heading-small font-semibold mb-spacing-5 text-text-primary">Interactive Demo</h3>
      <div class="max-w-sm p-spacing-7 bg-surface-subtle rounded-radius-md border border-border-default">
        <Input v-model="text" placeholder="Type something..." />
        <p class="mt-4 text-text-small text-text-secondary">Value: {{ text || 'empty' }}</p>
      </div>
    </section>

    <section>
      <h3 class="text-heading-small font-semibold mb-spacing-5 text-text-primary">States</h3>
      <div class="flex flex-col gap-spacing-5 max-w-sm p-spacing-7 bg-surface-subtle rounded-radius-md border border-border-default">
        <Input placeholder="Default state" state="default" />
        <Input placeholder="Hover state" state="hover" />
        <Input placeholder="Focus state" state="focus" />
        <Input placeholder="Filled state" state="filled" value="Filled content" />
        <Input placeholder="Disabled state" state="disabled" disabled />
        <Input placeholder="Success state" state="success" />
        <Input placeholder="Destructive state" state="destructive" />
      </div>
    </section>

    <section>
      <h3 class="text-heading-small font-semibold mb-spacing-5 text-text-primary">Sizes</h3>
      <div class="flex flex-col gap-spacing-5 max-w-sm p-spacing-7 bg-surface-subtle rounded-radius-md border border-border-default">
        <Input placeholder="Small" size="sm" />
        <Input placeholder="Medium" size="md" />
        <Input placeholder="Large" size="lg" />
      </div>
    </section>
  </div>
</template>
