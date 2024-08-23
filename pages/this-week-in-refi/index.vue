<script setup>

  const { data } = await useAsyncData('recap-list', () => queryContent('/this-week-in-refi').find())

  useHead({
    title: 'The ReFi Recap',
    meta: [
      { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
      { hid: 'twitter:image', property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
    ]
  })

</script>

<template>

<h1 class="mt-lg-5 mb-3">Th ReFi Recap</h1>

<NewsletterSignup></NewsletterSignup>

<br>

<ArticleCard :data=data :col=4 :margin=3></ArticleCard>


</template>
