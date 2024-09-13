<script setup lang="ts">

defineProps<{
  data?: any
}>()

</script>


<template>
  <div v-if="data">
      <p class="text-primary text-uppercase fw-bold fs-5">{{ data.category }}</p>
      <h1 class="article-title">{{ data.title }}</h1>
      <p class="fs-5 text-secondary article-description">{{ data.description }}</p>
      <div class="d-md-flex justify-content-md-between mb-3">
        <div class="align-self-center">
          <span class="fw-bold">By <NuxtLink class="text-decoration-none" :to="'/authors/' + data.authorSlug + '/'">{{ data.author }}</NuxtLink></span> | {{ data.date }}
        </div>
        <div class="align-self-center mt-3 mt-md-0">
          <SocialShare :data=data />
        </div>
      </div>
      <NuxtImg :src="data.mainImage" style="width: 100%;" sizes="800px" loading="lazy" quality="80" alt="" format="webp" />
      <span class="text-center small text-secondary d-block mt-2" v-html="data?.mainImageCaption"></span>

      <div class="article-body mt-4">
        <ContentDoc />
      </div>
  </div>
</template>
