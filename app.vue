<script setup lang="ts">
  useHead({
    titleTemplate: '%s | CARBON Copy',
    link: [
      {
        rel: 'icon',
        href: '/favicon.png'
      }
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
        tagPosition: 'bodyClose'
      },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-CJBPKLXNE9",
        async: true,
      },
      { src: "/js/analytics.js" },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "/css/custom.css"
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "stylesheet",  
        href: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400;1,700&display=swap"
      },
    ]
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
