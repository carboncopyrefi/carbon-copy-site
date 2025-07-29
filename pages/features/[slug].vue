<script setup lang="ts">
  definePageMeta({
    layout: "article",
  });

  const route = useRoute()
  const img = useImage()

  const { data } = await useAsyncData(route.path, () => { return queryCollection('feature').path(route.path).first()});
  // const { data: articles } = await useAsyncData('articles', () => queryCollection('/features').where({authorSlug: data.value?.authorSlug}).limit(2).find())

  useHead({
    title: data.value.title,
    meta: [
      { property:'og:image', content: 'https://carboncopy.news' + img(data.value?.mainImage, { width: 800 }) },
      { name: 'description', content: () => data.value?.description },
      { property: 'og:description', content: () => data.value?.description },
      { property: 'og:title', content: () => data.value?.title },
      { name: 'twitter:description', content: data.value?.description },
      { name: 'twitter:image', content: 'https://carboncopy.news' + img(data.value?.mainImage, { width: 800 })},
    ],
    script: [
        {
            src: "https://platform.twitter.com/widgets.js",
            async: "true"
        }
    ]
  })


</script>

<template>
    <Article :data=data></Article>

</template>
