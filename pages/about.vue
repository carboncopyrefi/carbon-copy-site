<script setup lang="ts">

const route = useRoute()

useHead({
    title: 'About Us',
    meta: [
      { property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
      { property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
      { property: 'og:title', content: 'About Us' },
    ]
  })

  definePageMeta({
    layout: "article",
  });

  const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection('content').path(route.path).first()
  })

</script>

<template>

  <div class="about-body">
    <ContentRenderer :value="page" />
  </div>

</template>
