<script setup lang="ts">

const route = useRoute()

const { data } = await useFetch(`https://carboncopy.pythonanywhere.com/projects/${route.params.slug}`)
// const { data } = await useFetch(`http://127.0.0.1:5000/projects/${route.params.slug}`)

</script>


<template>
  <div class="mt-5">
    <div class="row">
      <div class="col-2">
        <nuxt-img :src="data.logo" :alt="data.name" class="img-fluid" width="100%" />
      </div>
    </div>

    <h1>{{ data.name }}</h1>
    <span class="badge text-bg-secondary rounded-pill me-2" v-for="sector in data.sectors">{{ sector.value }}</span>
    <span class="badge text-bg-secondary rounded-pill me-2" v-for="category in data.categories">{{ category.value }}</span>
    <p>{{ data.description_short }}</p>
    <p>{{ data.description_long }}</p>
    <h2>Contacts</h2>
    <div v-for="link in data.links">
      <NuxtLink :to="link.url" target="_blank" class="text-decoration-none">{{ link.platform }}</NuxtLink>
    </div>
    <h2>Team</h2>
    <div v-if="!data.team.length">
      <p>No coverage available</p>
    </div>
    <div v-for="person in data.team">
      {{ person.value }}
    </div>
    <h2>Coverage</h2>
    <div v-if="!data.coverage.length">
      <p>No coverage available</p>
    </div>
    <div v-for="article in data.coverage">
      <NuxtLink :to="article.url" target="_blank" class="text-decoration-none">{{ article.headline }}</NuxtLink>
      <p>{{ article.publication }}</p>
      <p>{{ article.publish_date }}</p>
    </div>
    <h2>Project News</h2>
    <div v-if="!data.news.length">
      <p>No news available</p>
    </div>
    <div v-for="article in data.news">
      <NuxtLink :to="article.url" target="_blank" class="text-decoration-none">{{ article.headline }}</NuxtLink>
      <p>{{ article.snippet }}</p>
      <p>{{ article.publish_date }}</p>
    </div>


  </div>
</template>
