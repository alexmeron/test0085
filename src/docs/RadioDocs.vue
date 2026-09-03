<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup, RadioGroupItem } from '../components/ui/radio'

const val1 = ref('1')
const val2 = ref('1')
</script>

<template>
  <div class="flex flex-col gap-spacing-11">
    <section>
      <h3 class="text-heading-small font-semibold mb-spacing-5 text-text-primary">Primary Variant</h3>
      <div class="p-spacing-7 bg-surface-subtle rounded-radius-md border border-border-default max-w-sm">
        <RadioGroup v-model="val1">
          <div class="flex items-center gap-2">
            <RadioGroupItem value="1" id="r1" variant="primary" />
            <label for="r1" class="text-text-medium cursor-pointer">Option One</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioGroupItem value="2" id="r2" variant="primary" />
            <label for="r2" class="text-text-medium cursor-pointer">Option Two</label>
          </div>
        </RadioGroup>
        <p class="mt-4 text-text-small text-text-secondary">Selected: {{ val1 }}</p>
      </div>
    </section>

    <section>
      <h3 class="text-heading-small font-semibold mb-spacing-5 text-text-primary">Secondary Variant</h3>
      <div class="p-spacing-7 bg-surface-subtle rounded-radius-md border border-border-default max-w-sm">
        <RadioGroup v-model="val2">
          <div class="flex items-center gap-2">
            <RadioGroupItem value="1" id="r3" variant="secondary" />
            <label for="r3" class="text-text-medium cursor-pointer">Option One</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioGroupItem value="2" id="r4" variant="secondary" />
            <label for="r4" class="text-text-medium cursor-pointer">Option Two</label>
          </div>
        </RadioGroup>
      </div>
    </section>
  </div>
</template>
