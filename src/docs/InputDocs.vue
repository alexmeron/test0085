<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '../components/ui/input'

const text = ref('')
</script>

<template>
  <div class="flex flex-col gap-12">
    <section>
      <h3 class="text-heading-small font-semibold mb-4 text-text-primary">Interactive Demo</h3>
      <div class="max-w-sm p-6 bg-surface-subtle rounded-md border border-border-default">
        <Input v-model="text" placeholder="Type something..." />
        <p class="mt-4 text-text-small text-text-secondary">Value: {{ text || 'empty' }}</p>
      </div>
    </section>

    <section>
      <h3 class="text-heading-small font-semibold mb-4 text-text-primary">States</h3>
      <div class="flex flex-col gap-4 max-w-sm p-6 bg-surface-subtle rounded-md border border-border-default">
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
      <h3 class="text-heading-small font-semibold mb-4 text-text-primary">Sizes</h3>
      <div class="flex flex-col gap-4 max-w-sm p-6 bg-surface-subtle rounded-md border border-border-default">
        <Input placeholder="Small" size="sm" />
        <Input placeholder="Medium" size="md" />
        <Input placeholder="Large" size="lg" />
      </div>
    </section>
  </div>
</template>
