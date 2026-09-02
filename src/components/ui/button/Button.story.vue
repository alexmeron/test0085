<script setup lang="ts">
import { Button } from '.'
</script>

<template>
  <Story title="Button">
    <Variant title="Primary">
      <Button variant="primary">Primary Button</Button>
    </Variant>
    
    <Variant title="Secondary">
      <Button variant="secondary">Secondary Button</Button>
    </Variant>

    <Variant title="Tertiary">
      <Button variant="tertiary">Tertiary Button</Button>
    </Variant>

    <Variant title="Danger">
      <Button variant="danger">Danger Button</Button>
    </Variant>

    <Variant title="Outlined">
      <Button variant="outlined">Outlined Button</Button>
    </Variant>

    <Variant title="Ghost">
      <Button variant="ghost">Ghost Button</Button>
    </Variant>

    <Variant title="Sizes">
      <div class="flex items-center gap-4">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </Variant>
  </Story>
</template>
