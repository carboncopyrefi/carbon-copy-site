<script setup lang="ts">

const route = useRoute()
const img = useImage()

const { data } = await useAsyncData(route.path, () => { return queryCollection('author').path(route.path).first()});
const { data: articles } = await useAsyncData('articles', () => { return queryCollection('feature').where('authorSlug', 'LIKE', '%' + route.params.slug + '%').all()})


useHead({
  title: () => data.value?.title,
  meta: [
    { name: 'description', content: () => data.value?.description },
    { name: 'twitter:description', content: () => data.value?.description },
    { property: 'og:description', content: () => data.value?.description },
    { property: 'og:title', content: () => data.value?.title },
    { property:'og:image', content: data.value?.meta.mainImage },
  ]
})

</script>

<template>

    <div class="row mt-lg-5 mt-4">
        <div class="col-lg-3">
            <NuxtImg :src="data.meta.mainImage" style="width: 100%;" sizes="800px" loading="lazy" alt="" />
        </div>
        <div class="col-lg-7">
            <h1 class="mt-lg-0 mt-3">{{ data.title }}</h1>
            <p class="lead">{{ data.description }}</p>
            <span v-if="data.meta.twitter"><NuxtLink :to=data.meta.twitter target="_blank"><i class="bi bi-twitter-x fs-4 me-3"></i></NuxtLink></span>
            <span v-if="data.meta.discord"><NuxtLink :to=data?.meta.discord target="_blank"><i class="bi bi-discord fs-4 me-3"></i></NuxtLink></span>
            <span v-if="data.meta.linkedin"><NuxtLink :to=data?.meta.linkedin target="_blank"><i class="bi bi-linkedin fs-4 me-3"></i></NuxtLink></span>
            <span v-if="data?.meta.email"><NuxtLink :to="'mailto:'+ data.meta.email" target="_blank"><i class="bi bi-envelope fs-4 me-3"></i></NuxtLink></span>
            <p class="pt-4"><ContentRenderer :value="data.body" /></p>
        </div>
    </div>
    <div class="row mt-lg-5 mt-4">
        <div class="col-lg-12">
            <h2>Feature Articles</h2>
            <ArticleCard :data=articles :col=4 :margin=3></ArticleCard>
        </div>
    </div>




</template>