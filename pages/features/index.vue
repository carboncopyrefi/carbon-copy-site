<script setup>

  const { data } = await useAsyncData('features', () => queryContent('/features').find())

  useHead({
    title: 'Features',
  })

</script>

<template>

<ArticleCard :data=data :col=4 :margin=3></ArticleCard>


</template>
