<script setup lang="ts">

defineProps<{
  data?: array
}>()

</script>

<template>

<div class="mb-5">
    <h2 class="pb-4 mb-1">
    This Week In ReFi
    </h2>

    <ArticleCard :data=data :col=4 :margin=3 target="_self"></ArticleCard>

</div>

</template>
