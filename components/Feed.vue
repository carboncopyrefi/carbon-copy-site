<script setup>

  const { status, data } = await useFetch('https://api.carboncopy.news/articles', {
    lazy: true,
    server: false
  })
  // const { status, data } = await useFetch('http://127.0.0.1:5000/articles', {
  // lazy: true,
  // server: false
  // })

</script>

<template>

  <h2 class="pb-4 mb-1 mt-5">
  Climate News
  </h2>
  <div v-if="status === 'pending'" class="d-flex justify-content-center my-5">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading news feed...</span>
    </div>
  </div>
  <div v-if="data">
    <ArticleCard :data=data :col=3 :margin=3 target="_blank" :external="true"></ArticleCard>
  </div>

</template>
