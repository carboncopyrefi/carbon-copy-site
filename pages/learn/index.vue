<script setup lang="ts">

  const { data } = await useAsyncData('learn', () => queryContent('/learn').find())

  useHead({
    title: 'Learn',
  })

</script>

<template>

<ArticleCard :data=data :col=4 :margin=3></ArticleCard>


</template>
