<script setup>

const { data } = await useFetch('https://api.carboncopy.news/events')
// const { data } = await useFetch('http://127.0.0.1:5000/events')

  useHead({
    title: 'ReFi Events',
  })

</script>

<template>

<h1 class="mt-5 mb-3">Upcoming ReFi Events</h1>

<EventCard :data=data></EventCard>


</template>
