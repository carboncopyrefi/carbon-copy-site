<script setup lang="ts">

const route = useRoute()

useHead({
    title: 'About Us',
    meta: [
      { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
      { hid: 'twitter:image', property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
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
