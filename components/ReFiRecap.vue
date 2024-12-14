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
    The CARBON Copy Newsletter
    </h2>
    <div v-if="status === 'pending'" class="d-flex justify-content-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading news feed...</span>
      </div>
    </div>
    <div v-if="content">
      <ArticleCard :data=content :col=4 :margin=3 :external="true"></ArticleCard>
    </div>
    <!-- <div class="d-none d-md-block"><NewsletterSignup></NewsletterSignup></div> -->

</div>

</template>
