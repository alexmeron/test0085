<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '.'

const checked1 = ref(false)
const checked2 = ref(true)
const checked3 = ref('indeterminate')
</script>

<template>
  <Story title="Checkbox">
    <Variant title="Primary">
      <div class="flex flex-col gap-4">
        <Checkbox v-model:checked="checked1" variant="primary" />
        <Checkbox v-model:checked="checked2" variant="primary" />
        <Checkbox v-model:checked="checked3" variant="primary" />
      </div>
    </Variant>
    <Variant title="Secondary">
      <div class="flex flex-col gap-4">
        <Checkbox v-model:checked="checked1" variant="secondary" />
        <Checkbox v-model:checked="checked2" variant="secondary" />
        <Checkbox v-model:checked="checked3" variant="secondary" />
      </div>
    </Variant>
    <Variant title="Sizes">
      <div class="flex flex-col gap-4">
        <Checkbox checked size="sm" />
        <Checkbox checked size="md" />
        <Checkbox checked size="lg" />
      </div>
    </Variant>
  </Story>
</template>
