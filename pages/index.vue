<script setup lang="ts">
  useHead({
    title: 'Leading ReFi Information Platform',
    meta: [
      { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
      { hid: 'twitter:image', property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
    ]
  })

  const { data: learn } = await useAsyncData('learn', () => queryContent('/learn').limit(4).find())
  const { data: features } = await useAsyncData('features', () => queryContent('/features').limit(3).find())
  const { data: week } = await useAsyncData('week', () => queryContent('/this-week-in-refi').limit(3).find())

</script>

<template>

  <Features :data=features />

  <Reports />

  <Week :data=week />

  <div class="row mb-5">
    <div class="col-md-8">
      <Learn :data=learn />
      <Feed />
    </div>
    <div class="col-md-4">
      <ProjectNews />
    </div>
  </div>
  <Projects />
</template>
