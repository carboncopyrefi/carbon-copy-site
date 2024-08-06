<template>
  <h2 :id="id" class="mb-3 mt-5">
      <slot />
  </h2>
</template>

<script setup lang="ts">
  import { computed, useRuntimeConfig } from '#imports'

  const props = defineProps<{ id?: string }>()

  const { headings } = useRuntimeConfig().public.mdc
</script>
