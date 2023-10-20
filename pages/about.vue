<script setup lang="ts">

useHead({
    meta: [
      { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
      { hid: 'twitter:image', property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
    ]
  })

  definePageMeta({
    layout: "article",
  });

  const { data } = await useAsyncData('about', () => queryContent().findOne())

</script>

<template>

  <div class="about-body">
    <ContentDoc />
  </div>

</template>
