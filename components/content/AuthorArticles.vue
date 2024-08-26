<script setup lang="ts">

const props = defineProps<{
  authorSlug?: string
  title?: string
  author?: string
}>()

const { data: articles } = await useAsyncData('articles', () => queryContent('/features').where({authorSlug: props.authorSlug, title: {$ne: props.title}}).limit(2).find())

</script>

<template>
    <h2 class="mt-5 mb-3">More by {{ author }}</h2>
    
    <ArticleCard :data="articles" col=6></ArticleCard>
</template>