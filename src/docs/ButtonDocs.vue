<script setup lang="ts">
import { Button } from '../components/ui/button'
</script>

<template>
  <div class="flex flex-col gap-12">
    
    <section>
      <h3 class="text-heading-small font-semibold mb-4 text-text-primary">Variants</h3>
      <div class="flex flex-wrap gap-4 p-6 bg-surface-subtle rounded-md border border-border-default">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="on-inverse" class="bg-basic-black !text-basic-white hover:bg-subtle-surface-strong">On Inverse</Button>
      </div>
    </section>

    <section>
      <h3 class="text-heading-small font-semibold mb-4 text-text-primary">Sizes</h3>
      <div class="flex flex-wrap items-center gap-4 p-6 bg-surface-subtle rounded-md border border-border-default">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </section>

    <section>
      <h3 class="text-heading-small font-semibold mb-4 text-text-primary">Usage</h3>
      <pre class="bg-basic-black text-basic-white p-4 rounded-md text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { Button } from '@/components/ui/button'
&lt;/script&gt;

&lt;template&gt;
  &lt;Button variant="primary" size="md"&gt;Click me&lt;/Button&gt;
&lt;/template&gt;</code></pre>
    </section>
  </div>
</template>
