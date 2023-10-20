<script setup lang="ts">

  const { data } = await useAsyncData('learn-list', () => queryContent('/learn').find())

  useHead({
    title: 'Learn',
  })

</script>

<template>

<h1 class="mt-lg-5 mb-3">Learn</h1>

<ArticleCard :data=data :col=4 :margin=3></ArticleCard>


</template>
