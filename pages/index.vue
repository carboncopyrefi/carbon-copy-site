<script setup lang="ts">
  useHead({
    title: 'Leading ReFi Information Platform',
    meta: [
      { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
      { hid: 'twitter:image', property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
    ]
  })

  const { data: learn } = await useAsyncData('learn', () => queryContent('/learn').limit(3).find())
  const { data: features } = await useAsyncData('features', () => queryContent('/features').limit(3).find())

</script>

<template>

  <Ticker></Ticker>

  <Features :data=features />

  <Reports />

  <ReFiRecap />

  <div class="row mb-5">
    <div class="col-12">
      <Learn :data=learn />
      <Feed />
    </div>
  </div>
  <!-- <Projects /> -->
</template>
