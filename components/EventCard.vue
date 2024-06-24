<script setup lang="ts">

defineProps<{
  data?: array
}>()

</script>

<template>

<div class="row">
  <div v-for="item in data" class="col-lg-3 col-12 mb-3 mb-lg-4">
    <div class="card shadow-sm h-100">
      <div class="ratio ratio-4x3">
      <NuxtImg :src="item.image" sizes="sm:500px lg:300px" class="card-img-top img-fluid" loading="lazy" quality="75" alt="" />
      </div>
      <div class="card-body h-100">
        <h5 class="card-title article-title">{{ item.title }}</h5>
        <p>{{ item.description }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ item.start_date == item.end_date ? item.start_date : item.start_date + ' to ' + item.end_date }}</li>
        <li class="list-group-item">{{ item.location }}</li>
      </ul>
      <div class="card-body">
        <NuxtLink :to="item.link" target="_blank" class="card-link text-decoration-none">Website&nbsp;&nbsp;<i class="bi bi-box-arrow-up-right"></i></NuxtLink>
      </div>
    </div>
  </div>
</div>


</template>
