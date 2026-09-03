<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '../components/ui/checkbox'

const chk1 = ref(false)
const chk2 = ref(true)
const chk3 = ref<boolean | 'indeterminate'>('indeterminate')
</script>

<template>
  <div class="flex flex-col gap-spacing-11">
    <section>
      <h3 class="text-heading-small font-semibold mb-spacing-5 text-text-primary">Interactive States</h3>
      <div class="flex gap-spacing-9 p-spacing-7 bg-surface-subtle rounded-radius-md border border-border-default">
        <div class="flex items-center gap-2">
          <Checkbox v-model:checked="chk1" id="c1" />
          <label for="c1" class="text-text-medium cursor-pointer">Unchecked</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model:checked="chk2" id="c2" />
          <label for="c2" class="text-text-medium cursor-pointer">Checked</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model:checked="chk3" id="c3" />
          <label for="c3" class="text-text-medium cursor-pointer">Indeterminate</label>
        </div>
      </div>
    </section>

    <section>
      <h3 class="text-heading-small font-semibold mb-spacing-5 text-text-primary">Variants</h3>
      <div class="flex gap-spacing-9 p-spacing-7 bg-surface-subtle rounded-radius-md border border-border-default">
        <div class="flex items-center gap-2">
          <Checkbox checked variant="primary" id="c4" />
          <label for="c4" class="text-text-medium cursor-pointer">Primary</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox checked variant="secondary" id="c5" />
          <label for="c5" class="text-text-medium cursor-pointer">Secondary</label>
        </div>
      </div>
    </section>
  </div>
</template>
