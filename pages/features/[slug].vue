<script setup>
  definePageMeta({
    layout: "article",
  });

  const { path } = useRoute()

  const { data } = await useAsyncData(`content-${path}`, () => queryContent().where({_path:path}).findOne())

  const img = useImage()


  useHead({
  meta: [
    { name: 'og:image', content: 'https://carboncopy.news' + img(data.value?.image, { width: 800, quality:80 }) },
    { property: 'og:image', content: 'https://carboncopy.news' + img(data.value?.image, { width: 800, quality:80 }) },
  ]
})


</script>

<template>
  <div>
    <Article :data=data></Article>
  </div>
</template>
