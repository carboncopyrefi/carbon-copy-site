<script setup lang="ts">

const { status, data } = await useFetch(`https://api.carboncopy.news/landscape`, {
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
    { property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
    { property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
    { property:'og:description', content: 'Understand how regenerative your impact and organisation are with our educational tool based on a regenerative assessment framework by Kate Bennett.' },
    { property: 'og:title', content: 'ReFi Landscape' },
]
})


</script>

<template>

    <h1 class="mt-lg-5 mb-3">ReFi Landscape</h1>

    <p class="lead">Our taxonomy of the Web3 regenerative finance space. Note that some projects may appear in two or more categories.</p>

    <div class="row mt-5">
        <div v-if="status === 'pending'" class="d-flex justify-content-center my-5">
            <div class="spinner-border text-primary" role="status1">
            <span class="visually-hidden">Loading landscape...</span>
            </div>
        </div>
        <div v-for="category in data" class="col-md-4 col-6 text-center mb-5">
            <NuxtLink class="text-black text-decoration-none" :to="'/projects/categories/' + category.category.toLowerCase().replace(/\s+/g, '-') + '/'"><h3 class="mb-5">{{ category.category }}</h3></NuxtLink>
            <div class="row justify-content-center">
                <div v-for="project in category.projects" class="col-lg-2 col-4 mb-4 me-2 align-self-center">
                    <NuxtLink :to="'/project/' + project.slug + '/'"><NuxtImg :src="project.logo" :alt="project.name" loading="lazy"  width="100%" height="100%" format="webp" /></NuxtLink>
                </div>
            </div>
        </div>
    </div>

</template>