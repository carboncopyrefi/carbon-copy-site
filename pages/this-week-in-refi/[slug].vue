<script setup lang="ts">

  const { path } = useRoute()
  const img = useImage()

  const { data } = await useAsyncData(`content-${path}`, () => queryContent().where({_path:path.slice(-1) == '/' ? path.slice(0,-1) : path}).findOne())

  definePageMeta({
    layout: "article",
  });

  useHead({
    meta: [
      { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news' + img(data.value?.mainImage, { width: 800, quality:80 }) },
      { hid: 'twitter:description', name: 'twitter:description', content: data.value?.description },
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
