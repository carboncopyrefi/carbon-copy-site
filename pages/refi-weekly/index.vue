<script setup lang="ts">

    const { status, data } = await useFetch(`https://api.carboncopy.news/refi-weekly`, {
        lazy: true,
        server: false,
    })
    // const {status, data } = await useFetch(`http://127.0.0.1:5000/refi-weekly`, {
    //     lazy: true,
    //     server: false,
    // })

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
                    <div class="card-body">
                        <h4>{{ data[0].title }}</h4>
                        <p v-html=data[0].subtitle></p>
                        <p>{{ data[0].date }}</p>
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
    
        <ClientOnly>
            <div v-if="status === 'pending'" class="d-flex justify-content-center my-5">
                <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading ReFi Weekly episodes...</span>
                </div>
            </div>
            <div v-if="data" >
                <div v-for="episode in data" :key="episode.id">
                    <div class="col-lg-6">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <h4>{{ episode.title }}</h4>
                                <p v-html=episode.subtitle></p>
                                <p>{{ episode.date }}</p>
                                <NuxtLink external :href="episode.link" class="btn btn-primary me-3" target="_blank">Listen on X</NuxtLink>
                                <NuxtLink :to="'/refi-weekly/' + episode.slug + '/'" class="btn btn-success">Read Summary</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ClientOnly>
    </div>

</template> 
