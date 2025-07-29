<script setup lang="ts">
  useHead({
    title: 'ReFi Intelligence Platform',
    meta: [
      { property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
      { property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
    ]
  })

  const learn = await queryCollection('learn').limit(3).all()
  const features = await queryCollection('feature').limit(3).order('sortDate', 'DESC').all()

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
