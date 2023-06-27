<script setup lang="ts">
  useHead({
    titleTemplate: '%s | CARBON Copy',
    link: [
      {
        rel: 'icon',
        href: 'favicon.png'
      }
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
        tagPosition: 'bodyClose'
      }
    ],
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
