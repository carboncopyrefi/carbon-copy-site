<script setup>
const { data } = await useAsyncData('features', () => queryContent('/features').limit(3).find())

</script>

<template>

<div id="feature-background" class="mb-4 text-white rounded" v-bind:style="{ 'background-image': 'url(' + data[0].image + ')', 'background-size': 'cover' }" >
  <div class="p-4 p-md-5" style="background-color: rgba(0, 0, 0, 0.6);">
  <div class="col-md-6 px-0">
    <h1 class="article-title">{{ data[0].title }}</h1>
    <p class="lead my-3 article-description">{{ data[0].description }}</p>
    <p class="lead mb-0"><NuxtLink :to="data[0]._path" class="btn btn-outline-light">Read</NuxtLink></p>
  </div>
  </div>
</div>

<div class="row mb-5">
  <div v-for="article in data.slice(1,3)" class="col-md-6 mb-3 mb-lg-0">
    <div class="card shadow-sm h-100">
      <div class="row g-0 h-100">
        <div class="col-md-4">
          <nuxt-img v-bind:src="article.image" class="rounded-start" style="object-fit: cover;height:100%; width:100%;"  alt="" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p class="d-inline-block mb-2 text-primary text-uppercase fw-bold">{{ article.category }}</p>
            <NuxtLink :to="article._path" class="text-decoration-none text-dark"><h4 class="card-title article-title">{{ article.title }}</h4></NuxtLink>
            <p class="card-text article-description">{{ article.description }}</p>
            <p class="card-text"><small class="text-body-secondary">{{ article.date }}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</template>
