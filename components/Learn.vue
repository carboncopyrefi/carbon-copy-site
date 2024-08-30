<script setup lang="ts">

defineProps<{
  data?: Array<any>
}>()

</script>

<template>

<h2 class="pb-4 mb-1">
  Learn
</h2>

<ArticleCard :data=data :col=4 :margin=3 target="_self"></ArticleCard>

</template>
