<script setup lang="ts">

defineProps<{
  data?: array
  col?: number
  margin?: number
  target?: string
  external?: boolean
}>()

</script>

<template>

<div class="row">
  <div v-for="article in data" v-bind:class="'col-lg-' + col + ' col-12 mb-3 mb-lg-' + margin">
    <div class="card shadow-sm h-100">
      <div class="ratio ratio-4x3">
      <NuxtImg :src="article.mainImage" sizes="sm:500px lg:300px" class="card-img-top img-fluid" style="object-fit: cover" loading="lazy" quality="75" alt="" />
      </div>
      <div class="card-body">
        <span v-if="external">
          <NuxtLink external :to="article._path" :target="target" class="text-decoration-none text-dark"><h5 class="card-title article-title">{{ article.title }}</h5></NuxtLink>
        </span>
        <span v-else>
          <NuxtLink :to="article._path + '/'" :target="target" class="text-decoration-none text-dark"><h5 class="card-title article-title">{{ article.title }}</h5></NuxtLink>
        </span>
      </div>
      <div v-if="article.publication" class="card-footer">
        <span class="text-muted text-small">{{ article.publication }}</span>
      </div>
    </div>
  </div>
</div>


</template>
