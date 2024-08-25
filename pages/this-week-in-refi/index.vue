<script setup>

const { status, data: content } = await useFetch(`https://api.carboncopy.news/newsletter`, {
  lazy: true,
  server: false,
})

// const { status, data: content } = await useFetch(`http://127.0.0.1:5000/newsletter`, {
//   lazy: true,
//   server: false,
// })

  useHead({
    title: 'The ReFi Recap',
    meta: [
      { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
      { hid: 'twitter:image', property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
    ]
  })

</script>

<template>

<h1 class="mt-lg-5 mb-3">The ReFi Recap</h1>

  <span v-if="status === 'pending'" class="d-flex justify-content-center my-5">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading impact data...</span>
    </div>
  </span>
  <div v-else>
    <ArticleCard :data=content :col=4 :margin=3></ArticleCard>
  </div>

<NewsletterSignup></NewsletterSignup>

<br><br>

<NuxtLink to="archive" class="text-decoration-none">See Past Editions</NuxtLink>

</template>
