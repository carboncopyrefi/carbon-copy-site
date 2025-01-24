<script setup>

const { status, data: content } = await useFetch(`https://api.carboncopy.news/newsletter`, {
  lazy: true,
  server: false,
})

const { data: recap } = await useFetch(`https://api.carboncopy.news/refirecap`, {
  lazy: true,
  server: false,
})

// const { status, data: content } = await useFetch(`http://127.0.0.1:5000/newsletter`, {
//   lazy: true,
//   server: false,
// })

  useHead({
    title: 'Newsletters',
    meta: [
      { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
      { hid: 'twitter:image', property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
    ]
  })

</script>

<template>

<h1 class="mt-lg-5 mb-3">The CARBON Copy Newsletter</h1>

  <span v-if="status === 'pending'" class="d-flex justify-content-center my-5">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading newsletter editions...</span>
    </div>
  </span>
  <div v-else>
    <ArticleCard :data=content :col=4 :margin=3></ArticleCard>
  </div>

  <NewsletterSignup></NewsletterSignup>

<br><br>

<h1 class="mt-lg-5 mb-3">ReFi Recap</h1>

<span v-if="status === 'pending'" class="d-flex justify-content-center my-5">
  <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading newsletter editions...</span>
  </div>
</span>
<div v-else>
  <ArticleCard :data=recap :col=4 :margin=3></ArticleCard>
</div>

<br /><br />

<NuxtLink to="/this-week-in-refi/archive/" class="text-decoration-none">See Past ReFi Recap Editions</NuxtLink>

</template>
