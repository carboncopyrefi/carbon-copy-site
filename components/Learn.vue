<script setup>
const { data } = await useAsyncData('learn', () => queryContent('/learn').limit(2).find())

</script>

<template>

<h2 class="pb-4 mb-1">
  Learn
</h2>

<ArticleCard :data=data :col=6 :margin=0></ArticleCard>

</template>
