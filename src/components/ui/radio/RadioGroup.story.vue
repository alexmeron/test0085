<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup, RadioGroupItem } from '.'

const val1 = ref('1')
const val2 = ref('1')
</script>

<template>
  <Story title="Radiobutton">
    <Variant title="Primary">
      <RadioGroup v-model="val1">
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="1" id="r1" variant="primary" />
          <label for="r1">Option 1</label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="2" id="r2" variant="primary" />
          <label for="r2">Option 2</label>
        </div>
      </RadioGroup>
    </Variant>
    <Variant title="Secondary">
      <RadioGroup v-model="val2">
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="1" id="r3" variant="secondary" />
          <label for="r3">Option 1</label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="2" id="r4" variant="secondary" />
          <label for="r4">Option 2</label>
        </div>
      </RadioGroup>
    </Variant>
  </Story>
</template>
