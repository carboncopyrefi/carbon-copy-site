<script setup lang="ts">

defineProps<{
  data?: array
}>()

</script>


<template>
  <div v-if="data">
      <p class="text-primary text-uppercase fw-bold fs-5">{{ data.category }}</p>
      <h1 class="article-title">{{ data.title }}</h1>
      <p class="fs-5 text-secondary article-description">{{ data.description }}</p>
      <div class="d-md-flex justify-content-md-between mb-3">
        <div class="align-self-center">
          <span class="fw-bold">By {{ data.author }}</span> | {{ data.date }}
        </div>
        <div class="align-self-center mt-3 mt-md-0">
          <SocialShare :data=data />
        </div>
      </div>
      <nuxt-img v-bind:src="data.image" style="width: 100%;" />

      <div class="article-body mt-4">
        <ContentDoc />
      </div>
  </div>
</template>
