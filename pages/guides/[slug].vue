<script setup>

  const { path } = useRoute()
  const img = useImage()

  const { data } = await useAsyncData(`content-${path}`, () => queryContent().where({_path:path.slice(-1) == '/' ? path.slice(0,-1) : path}).findOne())

  useHead({
    meta: [
      { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news' + img(data.value?.mainImage, { width: 800, quality:80 }) },
      { hid: 'twitter:description', name: 'twitter:description', content: data.value?.description },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://carboncopy.news' + img(data.value?.mainImage, { width: 800, quality:80})},
    ]
  })

</script>

<template>

<h1 class="mt-lg-5">{{ data.title }}</h1>

<div class="col-xl-8 fs-5 guide-body">
    <ContentDoc />
</div>

</template>
