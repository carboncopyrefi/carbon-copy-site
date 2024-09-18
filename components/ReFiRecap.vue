<script setup lang="ts">

const { status, data: content } = await useFetch(`https://api.carboncopy.news/newsletter`, {
  lazy: true,
  server: false,
})

// const { status, data: content } = await useFetch(`http://127.0.0.1:5000/newsletter`, {
//   lazy: true,
//   server: false,
// })

</script>

<template>

<div class="mb-5">
    <h2 class="pb-4 mb-1">
    The ReFi Recap
    </h2>

    <ArticleCard :data=content :col=4 :margin=3 :external="true"></ArticleCard>
    <div class="d-none d-md-block"><NewsletterSignup></NewsletterSignup></div>

</div>

</template>
