<script setup lang="ts">

const props = defineProps<{
  data?: Array<any>
}>()

const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img(props.data[0].mainImage, {
    quality: 75,
    fit: 'cover',
    format: 'webp',
    sizes: '100vw'
  })
  return { 'background-image': `url('${imgUrl}')` }
})

</script>

<template>

<div id="feature-background" class="mb-4 text-white rounded-bottom d-none d-md-block" v-bind:style="backgroundStyles" >
  <div class="p-4 p-md-5" style="background-color: rgba(0, 0, 0, 0.6);">
    <div class="col-xl-6 col-lg-8 px-0">
      <p class="d-inline-block mb-2 text-uppercase fw-bold">{{ data[0].category }}</p>
      <h1 class="article-title">{{ data[0].title }}</h1>
      <p class="lead my-3 article-description">{{ data[0].description }}</p>
      <p class="lead mb-0"><NuxtLink :to="data[0]._path + '/'" class="btn btn-outline-light">Read</NuxtLink></p>
    </div>
  </div>
</div>

<div class="card mb-3 d-xs-block d-md-none">
  <NuxtImg :src="data[0].mainImage" format="webp" class="img-fluid" sizes="xs:300px lg:600px" style="object-fit: cover;height:100%; width:100%;" quality="75" alt=""></NuxtImg>
  <div class="card-body">
    <p class="d-inline-block mb-2 text-primary text-uppercase fw-bold">{{ data[0].category }}</p>
    <NuxtLink :to="data[0]._path + '/'" class="text-decoration-none text-dark stretched-link"><h4 class="card-title article-title">{{ data[0].title }}</h4></NuxtLink>
    <p class="card-text text-secondary article-description">{{ data[0].description }}</p>
  </div>
  <div class="card-footer">
    <span class="text-muted text-small">{{ data[0].date }}</span>
  </div>
</div>

<div class="row mb-5">
  <div v-for="article in data.slice(1,3)" class="col-lg-6 mb-3 mb-lg-0">
    <div class="card shadow-sm h-100">
      <div class="row g-0 h-100">
        <div class="col-md-4">
          <NuxtImg :src="article.mainImage" class="rounded-start d-none d-md-block" sizes="xs:200px lg:600px" style="object-fit: cover;height:100%; width:100%;" quality="75" alt="" format="webp" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p class="d-inline-block mb-2 text-primary text-uppercase fw-bold">{{ article.category }}</p>
            <NuxtLink :to="article._path + '/'" class="text-decoration-none text-dark stretched-link"><h4 class="card-title article-title">{{ article.title }}</h4></NuxtLink>
            <p class="card-text text-secondary article-description">{{ article.description }}</p>
            <p class="card-text d-none d-md-block"><span class="text-body-secondary">{{ article.date }}</span></p>
          </div>
          <div class="card-footer d-xs-block d-md-none">
            <span class="text-muted text-small">{{ article.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</template>
