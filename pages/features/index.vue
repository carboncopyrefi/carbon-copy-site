<script setup>

  const { data } = await useAsyncData('features', () => queryContent('/features').find())

  useHead({
    title: 'Features',
  })

</script>

<template>

<h1 class="mt-5 mb-3">Features</h1>

<ArticleCard :data=data :col=4 :margin=3></ArticleCard>


</template>
