<script setup lang="ts">

defineProps<{
  data?: array
}>()

</script>


<template v-if="data">
      <p class="text-primary text-uppercase fw-bold fs-5">{{ data.category }}</p>
      <h1 class="article-title">{{ data.title }}</h1>
      <p class="fs-5 text-secondary article-description">{{ data.description }}</p>
      <p><span class="fw-bold">By {{ data.author }}</span> | {{ data.date }}</p>
      <nuxt-img v-bind:src="data.image" style="width: 100%;" />
      <br /><br />

      <div class="article-body">
        <ContentDoc />
      </div>

</template>
