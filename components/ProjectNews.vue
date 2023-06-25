<script setup>

  const { data } = await useFetch('https://carboncopy.pythonanywhere.com/news')

</script>

<template>
  <div v-if="data" class="position-sticky" style="top: 2rem;">
    <div class="p-4 mb-3 bg-light rounded">
      <h3 class="pb-4 mb-1">Project News</h3>
      <div v-for="item in data" class="border-bottom pb-4 mb-3">
        <p><small class="text-body-secondary">{{ item.date }}</small></p>
        <p class="fw-bold">{{ item.title }}</p>
        <p>{{ item.snippet }}</p>
        <NuxtLink :to="item.link" target="_blank">Read more</NuxtLink>
      </div>
    </div>
  </div>

</template>
