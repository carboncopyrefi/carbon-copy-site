<script setup lang="ts">

const { status, data: content } = await useFetch(`https://api.carboncopy.news/landscape`, {
  lazy: true,
  server: false
})

// const { status, data } = await useFetch(`http://127.0.0.1:5000/landscape`, {
//   lazy: true,
//   server: false,
// })

useHead({
    title: 'ReFi Landscape',
    meta: [
    { name: 'description', content: 'Understand how regenerative your impact and organisation are with our educational tool based on a regenerative assessment framework by Kate Bennett.' },
    { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
    { hid: 'twitter:image', property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
    { hid: 'og:description', property:'og:description', content: 'Understand how regenerative your impact and organisation are with our educational tool based on a regenerative assessment framework by Kate Bennett.' }
]
})


</script>

<template>

    <h1 class="mt-lg-5 mb-5">ReFi Landscape</h1>

    <div class="row">
        <div v-if="status === 'pending'" class="d-flex justify-content-center my-5">
            <div class="spinner-border text-primary" role="status1">
            <span class="visually-hidden">Loading landscape...</span>
            </div>
        </div>
        <div v-for="category in data" class="col-4 text-center mb-5">
            <h3 class="mb-5">{{ category.category }}</h3>
            <div class="row justify-content-center">
                <div v-for="project in category.projects" class="col-lg-2 col-4 mb-4 me-2 align-self-center">
                    <NuxtLink :to="'/project/' + project.slug + '/'"><NuxtImg :src="project.logo" :alt="project.name"  width="100%" height="100%" /></NuxtLink>
                </div>
            </div>
        </div>
    </div>

</template>