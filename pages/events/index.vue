<script setup lang="ts">

const { pending, data } = await useFetch('https://api.carboncopy.news/events', {
  server: false,
  lazy: true
})
// const { data } = await useFetch('http://127.0.0.1:5000/events')

  useHead({
    title: 'ReFi Events',
  })

</script>

<template>

  <h1 class="mt-5 mb-3">Upcoming ReFi Events</h1>
  <div v-if="pending" class="d-flex justify-content-center my-5">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading project news...</span>
    </div>
  </div>
  <div v-if="data">
    <EventCard :data=data></EventCard>
  </div> 

</template>
