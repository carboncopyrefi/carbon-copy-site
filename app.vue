<script setup lang="ts">
  useHead({
    titleTemplate: '%s | CARBON Copy',
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
      {
        rel: 'icon',
        href: '/favicon.png'
      }
    ]
  }),

useSeoMeta({
  ogTitle: '%s | CARBON Copy',
  description: 'The preeminent source of ReFi news, information, and analysis.',
  ogDescription: 'The preeminent source of ReFi news, information, and analysis.',
  ogImage: 'https://flat-term-5905.on.fleek.co/_ipx/_/meta.jpg',
  twitterCard: 'https://flat-term-5905.on.fleek.co/_ipx/_/meta.jpg',
})
</script>




<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
