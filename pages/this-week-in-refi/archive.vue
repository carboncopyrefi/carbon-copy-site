<script setup>

const data = await queryCollection('recap').all()

  useHead({
    title: 'The ReFi Recap Archive',
    meta: [
      { property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
      { property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
      { property: 'og:title', content: 'The ReFi Recap Archive' },
    ]
  })

</script>

<template>

<h1 class="mt-lg-5 mb-3">The ReFi Recap Archive</h1>

<ArticleCard :data=data :col=4 :margin=3></ArticleCard>


</template>
