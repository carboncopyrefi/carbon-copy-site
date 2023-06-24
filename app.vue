<script setup lang="ts">
  useHead({
    titleTemplate: '%s | CARBON Copy',
  }),

useSeoMeta({
  ogTitle: '%s | CARBON Copy',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>




<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
