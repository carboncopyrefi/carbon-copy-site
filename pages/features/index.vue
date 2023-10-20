<script setup>

  const { data } = await useAsyncData('features-list', () => queryContent('/features').find())

  useHead({
    title: 'Features',
  })

</script>

<template>

<h1 class="mt-lg-5 mb-3">Features</h1>

<ArticleCard :data=data :col=4 :margin=3></ArticleCard>


</template>
