<script setup lang="ts">

const route = useRoute()
const img = useImage()

const { data } = await useFetch(`https://api.carboncopy.news/projects/${route.params.slug}`)
// const { data } = await useFetch(`http://127.0.0.1:5000/projects/${route.params.slug}`)

useHead({
  title: () => data.value?.name,
  meta: [
    { hid: 'description', name: 'description', content: () => data.value?.description_short },
    { hid: 'twitter:description', name: 'twitter:description', content: () => data.value?.description_short },
    { hid: 'og:description', property: 'og:description', content: () => data.value?.description_short },
    { hid: 'og:image', property:'og:image', content: data.value?.logo },
  ]
})

</script>


<template>
  <div class="mt-5">
    <div class="row">
      <div class="col-lg-8">
        <div class="row">
          <div class="col-lg-3 col-6 align-self-center text-center p-lg-3 mb-5 mb-lg-0">
            <NuxtImg :src="data.logo" :alt="data.name" sizes="400px" class="img-fluid" width="100%" height="100%" />
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
        </div>
        <div class="row">
          <div class="col my-4">
            <p style="white-space: pre-line" v-html=data.description_long></p>
          </div>
        </div>
        <!-- <div class="row">
          <div class="col mt-4">
            <h2>Evaluation</h2>
            <PolarChart />
          </div>
        </div> -->
        <div class="row mb-5">
          <div class="col-lg-4 col-10 mb-3 mb-lg-0">
            <div class="card shadow-sm">
              <div class="card-body">
                <h4 class="card-title">Location</h4>
                <p v-if="!data.location" class="m-0 p-0">
                  No location added
                </p>
                <p class="card-text">{{ data.location }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-10">
            <div class="card shadow-sm">
              <div class="card-body">
                <h4 class="card-title">Protocol(s)</h4>
                <p v-if="!data.protocol.length" class="m-0 p-0">
                  No protocol added
                </p>
                <span class="card-text" v-for="protocol in data.protocol">{{ protocol.value }}&nbsp;&nbsp;</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col">
            <h2>Achievements</h2>
            <div v-if="!data.response?.length">
              <p>No achievements completed</p>
            </div>
            <div class="row">
              <div v-for="response in data.response" class="col-lg-3 col-6">
                <NuxtImg :src="'/images/' + response.survey + '.png'" class="img-fluid" width="100%" height="100%" alt="Regenerative Self-Assessment Badge" ></NuxtImg>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h2>Media Coverage</h2>
            <div v-if="!data.coverage.length">
              <p>No coverage added</p>
            </div>
            <div v-for="article in data.coverage">
              <span>{{ article.publication }} | <small class="text-body-secondary">{{ article.date }}</small></span>
              <NuxtLink :to="article.url" target="_blank" class="text-decoration-none text-dark"><p class="fw-bold">{{ article.headline }}&nbsp;&nbsp;<i class="bi bi-box-arrow-up-right"></i></p></NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 offset-lg-1 mt-4 mt-lg-0">
        <div class="mb-5">
          <h2>Contacts</h2>
          <div v-for="link in data.links">
            <NuxtLink :to="link.url" target="_blank" class="text-decoration-none">{{ link.platform }}</NuxtLink>
          </div>
        </div>
        <div class="mb-5">
          <h2>Founders</h2>
          <div v-if="!data.team.length">
            <p>No founders added</p>
          </div>
          <div v-for="person in data.team">
            {{ person.value }}
          </div>
        </div>
        <div class="">
          <h2>Project News</h2>
          <div v-if="!data.news.length">
            <p>No news added</p>
          </div>
          <div v-for="article in data.news.slice(0,5)">
            <small class="text-body-secondary">{{ article.date }}</small>
            <NuxtLink :to="article.url" target="_blank" class="text-decoration-none text-dark"><p class="fw-bold">{{ article.headline }}&nbsp;&nbsp;<i class="bi bi-box-arrow-up-right"></i></p></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
