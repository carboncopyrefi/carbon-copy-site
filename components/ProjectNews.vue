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
        <div v-for="item in data" class="border-bottom mb-3">
          <small class="text-body-secondary">{{ item.date }}</small>
          <NuxtLink :to="item.link" target="_blank" class="text-decoration-none text-dark"><p class="fw-bold article-title">{{ item.title }}&nbsp;&nbsp;<i class="bi bi-box-arrow-up-right"></i></p></NuxtLink>
          <p class="article-description">{{ item.snippet }}</p>
        </div>
      </div>
    </div>
  </div>

</template>
