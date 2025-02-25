<script setup lang="ts">

const data = await queryCollection('learn').all()

  useHead({
    title: 'Learn',
    meta: [
      { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
      { hid: 'twitter:image', property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
    ]
  })

</script>

<template>

<h1 class="mt-lg-5 mb-3">Learn</h1>

<ArticleCard :data=data :col=4 :margin=3></ArticleCard>


</template>
