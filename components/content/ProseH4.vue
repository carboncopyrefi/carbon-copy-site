<template>
  <h4 class="mt-4" :id="id">
    <slot />
  </h4>
</template>

<script setup lang="ts">
  import { computed, useRuntimeConfig } from '#imports'

  const props = defineProps<{ id?: string }>()

  const { headings } = useRuntimeConfig().public.mdc
</script>
