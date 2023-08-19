<script setup lang="ts">

defineProps<{
  data?: array
  col?: number
  margin?: number
  target?: string
}>()

</script>

<template>

<div class="row">
  <div v-for="article in data" v-bind:class="'col-lg-' + col + ' col-12 mb-3 mb-lg-' + margin">
    <div class="card shadow-sm h-100">
      <div class="ratio ratio-4x3">
      <nuxt-img v-bind:src="article.image" class="card-img-top img-fluid" alt="" />
      </div>
      <div class="card-body">
        <NuxtLink :to="article._path" :target="target" class="text-decoration-none text-dark"><h5 class="card-title article-title">{{ article.title }}</h5></NuxtLink>
      </div>
      <div v-if="article.publication" class="card-footer">
        <span class="text-muted text-small">{{ article.publication }}</span>
      </div>
    </div>
  </div>
</div>


</template>
