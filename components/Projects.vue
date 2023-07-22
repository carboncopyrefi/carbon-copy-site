<script setup>

  const { data } = await useFetch('https://carboncopy.pythonanywhere.com/projects')
  // const { data } = await useFetch('http://127.0.0.1:5000/projects')

</script>

<template>

  <div class="row bg-light rounded m-auto">
    <div class="col-lg-4 p-lg-5 p-4 mb-3 mb-lg-0">
      <h3 class="pb-4 mb-1 article-title">CARBON Copy 16</h3>
      <p class="article-description">Some text here that describes the CARBON Copy 16 and what it means and all that nonsense.</p>
      <a href="#" target="_blank">More</a>
    </div>
    <div class="col-lg-8 py-lg-5 px-4 ps-lg-0 pe-lg-3">
      <div class="row">
        <div v-for="project in data" class="col-lg-6 pb-2 mb-2">
          <div class="mb-3 m-lg-0">
            <p class="p-0 m-0"><span class="fw-bold">{{ project.name }}</span> <span class="badge text-bg-secondary rounded-pill me-2" v-for="category in project.categories">{{ category.value }}</span></p>
            <small class="mt-3">{{ project.description }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
