<script setup>

  const { data } = await useFetch('https://api.carboncopy.news/projects/top')
  // const { data } = await useFetch('http://127.0.0.1:5000/projects/top')

</script>

<template>

  <div class="row bg-light rounded m-auto">
    <div class="col-lg-4 p-lg-5 p-4 mb-3 mb-lg-0">
      <h3 class="pb-4 mb-1 article-title">ReFi Project Spotlight</h3>
      <p class="article-description">A selection of 10 of the most impactful ReFi projects according to the analysis of our climate, economic, finance, and tech experts.</p>
      <p class="article-description">We update this list once per quarter.</p>
    </div>
    <div class="col-lg-8 py-lg-5 px-4 ps-lg-0 pe-lg-3">
      <div class="row">
        <div v-for="project in data" class="col-lg-6 pb-2 mb-3">
          <div class="mb-3 m-lg-0">
            <p class="p-0 m-0"><NuxtLink :to="/project/ + project.slug" class="fw-bold article-title text-decoration-none text-dark">{{ project.name }}</NuxtLink> <span class="badge text-bg-secondary rounded-pill me-2" v-for="sector in project.sectors">{{ sector.value }}</span></p>
            <small class="mt-3 article-description">{{ project.description }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
