<script setup>

  const route = useRoute()
  const img = useImage()

  const { data } = await useAsyncData(route.path, () => queryCollection('guide').path(route.path).first())

  useHead({
    title: data.value.title,
    meta: [
      { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news' + img(data.value?.meta.mainImage, { width: 800, quality:80 }) },
      { hid: 'twitter:description', name: 'twitter:description', content: data.value?.description },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://carboncopy.news' + img(data.value?.meta.mainImage, { width: 800, quality:80})},
    ]
  })

</script>

<template>

<h1 class="mt-lg-5">{{ data.title }}</h1>

<div class="col-xl-8 fs-5 guide-body">
    <ContentRenderer :value="data.body"/>
</div>

</template>
