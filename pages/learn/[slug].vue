<script setup>
  definePageMeta({
    layout: "article",
  });

  const route = useRoute()
  const img = useImage()

  const { data } = await useAsyncData(route.path, () => { return queryCollection('learn').path(route.path).first()});

  useHead({
    title: data.value.title,
    meta: [
      { property:'og:image', content: 'https://carboncopy.news' + img(data.value?.mainImage, { width: 800 }) },
      { name: 'twitter:description', content: data.value?.description },
      { name: 'twitter:image', content: 'https://carboncopy.news' + img(data.value?.mainImage, { width: 800 })},
      { property: 'og:description', content: () => data.value?.description },
      { property: 'og:title', content: () => data.value?.title },
    ]
  })

</script>

<template>

  <Article :data=data></Article>

</template>
