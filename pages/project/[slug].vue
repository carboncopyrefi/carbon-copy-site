<script setup lang="ts">

const route = useRoute()

const { data } = await useFetch(`https://carboncopy.pythonanywhere.com/projects/${route.params.slug}`)
// const { data } = await useFetch(`http://127.0.0.1:5000/projects/${route.params.slug}`)

useHead({
  title: () => data.value?.name,
  meta: [
    { name: 'description', content: () => data.value?.description_short },
    { name: 'og:description', content: () => data.value?.description_short },
    { property: 'og:description', content: () => data.value?.description_short },
  ]
})

</script>


<template>
  <div class="mt-5">
    <div class="row">
      <div class="col-lg-8">
        <div class="row">
          <div class="col-lg-3 align-self-center text-center">
            <nuxt-img :src="data.logo" :alt="data.name" class="img-fluid" width="100%" />
          </div>
          <div class="col-lg-9">
            <div class="row">
              <div class="col-12">
                <h1>{{ data.name }}</h1>
              </div>
              <div class="col-12">
                <p class="lead">{{ data.description_short }}</p>
              </div>
              <div class="col-12">
              <span class="badge text-bg-secondary rounded-pill me-2" v-for="sector in data.sectors">{{ sector.value }}</span>
              <span class="badge text-bg-secondary rounded-pill me-2" v-for="category in data.categories">{{ category.value }}</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col mt-5">
              <p style="white-space: pre-line" v-html=data.description_long></p>
            </div>
          </div>
          <div class="row">
            <div class="col mt-4">
              <h2>Evaluation</h2>
              <PolarChart />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h2>Coverage</h2>
              <div v-if="!data.coverage.length">
                <p>No coverage available</p>
              </div>
              <div v-for="article in data.coverage">
                <span>{{ article.publication }} | <small class="text-body-secondary">{{ article.date }}</small></span>
                <NuxtLink :to="article.url" target="_blank" class="text-decoration-none text-dark"><p class="fw-bold">{{ article.headline }}&nbsp;&nbsp;<i class="bi bi-box-arrow-up-right"></i></p></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 offset-lg-1">
        <div class="mb-5">
          <h2>Contacts</h2>
          <div v-for="link in data.links">
            <NuxtLink :to="link.url" target="_blank" class="text-decoration-none">{{ link.platform }}</NuxtLink>
          </div>
        </div>
        <div class="mb-5">
          <h2>Team</h2>
          <div v-if="!data.team.length">
            <p>No team members available</p>
          </div>
          <div v-for="person in data.team">
            {{ person.value }}
          </div>
        </div>
        <div class="">
          <h2>Project News</h2>
          <div v-if="!data.news.length">
            <p>No news available</p>
          </div>
          <div v-for="article in data.news">
            <small class="text-body-secondary">{{ article.date }}</small>
            <NuxtLink :to="article.url" target="_blank" class="text-decoration-none text-dark"><p class="fw-bold">{{ article.headline }}&nbsp;&nbsp;<i class="bi bi-box-arrow-up-right"></i></p></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
