<script setup lang="ts">
  useHead({
    titleTemplate: '%s | CARBON Copy',
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
        tagPosition: 'bodyClose'
      },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "/css/custom.css"
      },
      {
        rel: 'icon',
        href: '/favicon.png'
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css",
      },
    ]
  }),

useSeoMeta({
  ogTitle: '%s | CARBON Copy',
  description: 'The preeminent source of ReFi news, information, and analysis.',
  ogDescription: 'The preeminent source of ReFi news, information, and analysis.',
  ogImage: 'https://flat-term-5905.on.fleek.co/meta.jpg',
  twitterCard: 'https://flat-term-5905.on.fleek.co/meta.jpg',
})

function acceptTracking() {
  useGtagConsent(true)
}

</script>


<template>
<NuxtLayout>
  <NuxtLoadingIndicator />
  <NuxtPage />
</NuxtLayout>
</template>
