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
        rel: "stylesheet preload",
        href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
      },
    ]
  }),

useSeoMeta({
  ogTitle: 'ReFi Intelligence Platform | CARBON Copy',
  description: 'The preeminent source of ReFi news, data, and analysis.',
  ogDescription: 'The preeminent source of ReFi news, data, and analysis.',
  twitterCard: 'summary_large_image',
  ogType: 'website',
  ogUrl: 'https://carboncopy.news',
  ogSiteName: 'CARBON Copy'

})

function acceptTracking() {
  useGtagConsent(true)
}

</script>


<template>
<NuxtLayout>
  <NuxtLoadingIndicator />
  <uApp>
    <NuxtPage />
  </uApp>
</NuxtLayout>
</template>
