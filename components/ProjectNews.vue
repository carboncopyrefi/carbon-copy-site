<script setup>

  const { pending, data } = await useFetch('https://carboncopy.pythonanywhere.com/news', {
    server: false,
    lazy: true
  })

</script>

<template>
  <div class="position-sticky" style="top: 2rem;">
    <div class="p-4 mb-3 bg-light rounded">
      <h2 class="pb-4 mb-1">Project News</h2>
      <div v-if="pending" class="d-flex justify-content-center my-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading project news...</span>
        </div>
      </div>
      <div v-if="data">
        <div v-for="item in data" class="border-bottom pb-4 mb-3">
          <p><small class="text-body-secondary">{{ item.date }}</small></p>
          <p class="fw-bold article-title">{{ item.title }}</p>
          <p class="article-description">{{ item.snippet }}</p>
          <NuxtLink :to="item.link" target="_blank">Read more</NuxtLink>
        </div>
      </div>
    </div>
  </div>

</template>
