<script setup lang="ts">

const route = useRoute()

const props = defineProps<{
  authorSlug?: string
  title?: string
  author?: string
}>()

const { data: articles } = await useAsyncData('articles', () => queryCollection('feature').where('authorSlug', '=', props.authorSlug).all())

</script>

<template>
    <!-- <h2 class="mt-5 mb-3">More by {{ author }}</h2>
    <ArticleCard :data="articles" :margin=3 :col=6></ArticleCard> -->
</template>