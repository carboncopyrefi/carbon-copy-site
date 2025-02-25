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
      { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news' + img(data.value?.mainImage, { width: 800 }) },
      { hid: 'twitter:description', name: 'twitter:description', content: data.value?.description },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://carboncopy.news' + img(data.value?.mainImage, { width: 800 })},
    ]
  })

</script>

<template>

  <Article :data=data></Article>

</template>
