<template>
    <h3 :id="id" class="mt-4 text-dark-emphasis">
      <slot />
    </h3>
  </template>
  
  <script setup lang="ts">
    import { computed, useRuntimeConfig } from '#imports'
  
    const props = defineProps<{ id?: string }>()
  
    const { headings } = useRuntimeConfig().public.mdc
  </script>