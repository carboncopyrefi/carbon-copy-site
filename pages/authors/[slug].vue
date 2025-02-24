<script setup lang="ts">

const route = useRoute()
const { path } = route
const img = useImage()

const { data } = await useAsyncData(`content-${path}`, () => queryContent().where({_path:path.slice(-1) == '/' ? path.slice(0,-1) : path}).findOne())
const { data: articles } = await useAsyncData('articles', () => queryContent('/features').where({authorSlug: route.params.slug}).find())

useHead({
  title: () => data.value?.title,
  meta: [
    { hid: 'description', name: 'description', content: () => data.value?.description },
    { hid: 'twitter:description', name: 'twitter:description', content: () => data.value?.description },
    { hid: 'og:description', property: 'og:description', content: () => data.value?.description },
    { hid: 'og:image', property:'og:image', content: data.value?.mainImage },
  ]
})

</script>

<template>

    <div class="row mt-lg-5 mt-4">
        <div class="col-lg-3">
            <NuxtImg :src="data.mainImage" style="width: 100%;" sizes="800px" loading="lazy" alt="" />
        </div>
        <div class="col-lg-7">
            <h1 class="mt-lg-0 mt-3">{{ data.title }}</h1>
            <p class="lead">{{ data.description }}</p>
            <span v-if="data.twitter"><NuxtLink :to=data.twitter target="_blank"><i class="bi bi-twitter-x fs-4 me-3"></i></NuxtLink></span>
            <span v-if="data.discord"><NuxtLink :to=data.discord target="_blank"><i class="bi bi-discord fs-4 me-3"></i></NuxtLink></span>
            <span v-if="data.linkedin"><NuxtLink :to=data.linkedin target="_blank"><i class="bi bi-linkedin fs-4 me-3"></i></NuxtLink></span>
            <span v-if="data.email"><NuxtLink :to="'mailto:'+ data.email" target="_blank"><i class="bi bi-envelope fs-4 me-3"></i></NuxtLink></span>
            <p class="pt-4"><ContentDoc /></p>
        </div>
    </div>
    <div class="row mt-lg-5 mt-4">
        <div class="col-lg-12">
            <h2>Feature Articles</h2>
            <ArticleCard :data=articles :col=4 :margin=3></ArticleCard>
        </div>
    </div>




</template>