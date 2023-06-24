<script setup>
const { data } = await useAsyncData('learn', () => queryContent('/learn').limit(2).find())

</script>

<template>

<h3 class="pb-4 mb-1">
  Learn
</h3>

<ArticleCard :data=data :col=6 :margin=0></ArticleCard>

</template>
