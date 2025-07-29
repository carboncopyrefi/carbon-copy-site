<script setup lang="ts">

const data = await queryCollection('learn').all()

  useHead({
    title: 'Learn',
    meta: [
      { property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
      { property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
      { property: 'og:description', content: 'Educational articles about key ReFi concepts and solutions.' },
      { property: 'og:title', content: 'Learn | CARBON Copy' },
    ]
  })

</script>

<template>

<h1 class="mt-lg-5 mb-3">Learn</h1>

<ArticleCard :data=data :col=4 :margin=3></ArticleCard>


</template>
