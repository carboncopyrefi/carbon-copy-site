<script setup lang="ts">

  const route = useRoute()
  const img = useImage()

  const { data } = await useAsyncData(route.path, () => { return queryCollection('recap').path(route.path).first()});

  definePageMeta({
    layout: "article",
  });

  useHead({
    title: data.value.title,
    meta: [
      { hid: 'og:image', property: 'og:image', content: 'https://carboncopy.news' + img(data.value?.mainImage, { width: 800, quality:80 }) },
      { hid: 'og:title', property: 'og:title', content: 'The ReFi Recap: ' + data.value?.title },
      { hid: 'twitter:description', name: 'twitter:description', content: data.value?.description },
      { hid: 'twitter:title', name: 'twitter:title', content: 'The ReFi Recap: ' + data.value?.title },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://carboncopy.news' + img(data.value?.mainImage, { width: 800, quality:80})},
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
  <div>
    <Article :data=data></Article>
  </div>
</template>
