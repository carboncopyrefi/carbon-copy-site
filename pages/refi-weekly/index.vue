<script setup lang="ts">

    const { status, data } = await useFetch(`https://api.carboncopy.news/refi-weekly`)
    // const {status, data } = await useFetch(`http://127.0.0.1:5000/refi-weekly`)

    useHead({
        title: 'The ReFi Weekly with Trinity Morphy',
        meta: [
            { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news/images/refi-weekly-cover.webp' },
            { hid: 'twitter:image', property:'twitter:image', content: 'https://carboncopy.news/images/refi-weekly-cover.webp' },
            { hid: 'description', name: 'description', content: "Every Friday on X, Trinity talks ReFi with some of the space's most influential names." },
            { hid: 'og:description', property: 'og:description', content: "Every Friday on X, Trinity talks ReFi with some of the space's most influential names." },
            { hid: 'twitter:description', name: 'twitter:description', content: "Every Friday on X, Trinity talks ReFi with some of the space's most influential names." }
        ]
    })

</script>

<template>
    <div class="row mt-lg-5">       
        <div class="col-xxl-4 col-lg-5">
            <NuxtImg src="/images/refi-weekly-cover.webp" alt="" loading="lazy" class="img-fluid"></NuxtImg>
        </div>
        <div class="col-xxl-7 col-lg-7">
            <h1 class="mt-4 mt-lg-0">The ReFi Weekly with Trinity Morphy</h1>
            <p class="lead">Every Friday on X, Trinity talks ReFi with some of the space's most influential names.</p>
            <h2 class="mt-5 mt-lg-3 mt-xxl-5">Latest Episode</h2>
            <ClientOnly>
                <div v-if="status === 'pending'" class="d-flex justify-content-center my-5">
                    <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading ReFi Weekly episodes...</span>
                    </div>
                </div>
                <div class="card shadow-sm" v-if="data">
                    <div class="card-header">
                        {{ data[0].date }}
                    </div>
                    <div class="card-body">
                        <h4>{{ data[0].title }}</h4>
                        <p v-html=data[0].subtitle></p>
                        <NuxtLink external :href="data[0].link" class="btn btn-primary me-3" target="_blank">Listen on X</NuxtLink>
                        <NuxtLink :to="'/refi-weekly/' + data[0].slug + '/'" class="btn btn-success">Read Summary</NuxtLink>
                    </div>
                </div>
            </ClientOnly>
        </div>
        <div class="col-xxl-1"></div>
    </div>
    <div class="row mt-5">
        <h2>All Episodes</h2>
        <div class="col-12">
            <ClientOnly>
                <div v-if="status === 'pending'" class="d-flex justify-content-center my-5">
                    <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading ReFi Weekly episodes...</span>
                    </div>
                </div>
                <div v-if="data" class="row">
                    <div v-for="episode in data.slice(1)" :key="episode.id" class="col-lg-6 mb-3">
                        <div class="card shadow-sm h-100">
                            <div class="card-header">
                                {{ episode.date }}
                            </div>
                            <div class="card-body">
                                <h4>{{ episode.title }}</h4>
                                <p v-html=episode.subtitle></p>
                            </div>
                            <div class="card-footer border-0 bg-white pb-3">
                                <NuxtLink external :href="episode.link" class="btn btn-primary me-3" target="_blank">Listen on X</NuxtLink>
                                <NuxtLink :to="'/refi-weekly/' + episode.slug + '/'" class="btn btn-success">Read Summary</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </ClientOnly>
        </div>
    </div>  

</template> 
