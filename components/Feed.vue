<script setup>

   const { pending, data } = await useFetch('https://carboncopy.pythonanywhere.com/articles', {
    lazy: true,
    server: false
  })
  // const { pending, data } = await useFetch('http://127.0.0.1:5000/articles', {
  //  lazy: true,
  //  server: false
  // })

</script>

<template>

  <h2 class="pb-4 mb-1 mt-5">
  Climate News
  </h2>
  <div v-if="pending" class="d-flex justify-content-center mt-5">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading news feed...</span>
    </div>
  </div>
  <div v-if="data">
    <ArticleCard :data=data :col=4 :margin=3></ArticleCard>
  </div>

</template>
