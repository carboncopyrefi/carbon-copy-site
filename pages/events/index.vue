<script setup lang="ts">

const { pending, data } = await useFetch('https://api.carboncopy.news/events', {
  server: false,
  lazy: true
})
// const { data } = await useFetch('http://127.0.0.1:5000/events')

  useHead({
    title: 'ReFi Events',
    meta: [
      { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
      { hid: 'twitter:image', property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
    ]
  })

</script>

<template>

  <h1 class="mt-lg-5 mb-3">Upcoming ReFi Events</h1>
  <div v-if="pending" class="d-flex justify-content-center my-5">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading ReFi events...</span>
    </div>
  </div>
  <div v-if="data">
    <EventCard :data=data></EventCard>
  </div> 

</template>
