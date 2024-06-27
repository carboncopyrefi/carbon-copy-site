<script setup lang="ts">

const route = useRoute()
const img = useImage()

const { data } = await useFetch(`https://api.carboncopy.news/projects/categories/${route.params.slug}`)
//const { data } = await useFetch(`http://127.0.0.1:5000/projects/categories/${route.params.slug}`)

const { pending, data: tokens } = await useFetch(`https://api.carboncopy.news/projects/categories/tokens?ids=${data.value.tokens}`, {
  lazy: true,
  server: false
})
// const { pending, data: tokens } = await useFetch(`http://127.0.0.1:5000/projects/categories/tokens?ids=${data.value.tokens}`, {
//   lazy: true,
//   server: false
// })

useHead({
  title: () => data.value?.metadata.name,
  meta: [
            { hid: 'description', name: 'description', content: () => data.value?.metadata.description },
            { hid: 'og:description', property: 'og:description', content: () => data.value?.metadata.description },
            { hid: 'twitter:description', name: 'twitter:description', content: () => data.value?.metadata.description }
        ]
})

</script>

<template>
    <div class="row mt-lg-5 mb-3">
        <div class="col lead text-secondary">
            <button @click="$router.back()"><i class="bi bi-arrow-left"></i> Back</button>
        </div>
    </div>
    
    <div class="row mb-3">
        <div class="col-xl-8">
            <h1 class="fw-bold">{{ data.metadata.name }}</h1>
            <p class="lead">{{ data?.metadata.description }}</p>
        </div>
    </div>
    <div class="row mt-lg-5 mt-3">
        <div class="col-xl-8 mb-lg-5">
            <h2>Projects ({{ data.metadata.count }})</h2>
            <div v-for="p in data.projects">
                <div class="card mb-3 shadow-sm">
                    <div class="row g-0">
                        <div class="col-lg-2 col-md-4 p-lg-3 pt-4 pb-3 px-3 d-flex">
                            <NuxtImg :src="p.logo" class="mx-md-auto img-fluid" :alt="p.name" loading="lazy" style="object-fit:contain;" />
                        </div>
                        <div class="col-lg-10 col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{{ p.name }}</h5>
                                <p class="card-text">{{  p.short_description }}</p>
                                <NuxtLink :to="'/project/' + p.slug + '/'" class="btn btn-primary">View Profile</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-4 mt-5 mt-xl-0">
            <h2>Fundraising</h2>
            <div class="card mb-3 shadow-sm">
                <div class="card-body" v-if="data.fundraising?.length">
                    <div class="row card-text py-2" v-for="item in data.fundraising">
                        <div class="col-6">
                            {{ item.round }}
                        </div>
                        <div class="col-6 text-end">
                            ${{ item.amount }}
                        </div>
                        
                    </div>
                </div>
                <div class="card-body" v-else>
                    <p class="card-text">No fundraising data available</p>
                </div>
            </div>
            <h2 class="mt-5">Tokens</h2>
            <div class="card mb-3 shadow-sm">
                <div class="card-body" v-if="tokens?.length">
                    <div class="row card-text py-2 g-0" v-for="token in tokens">
                        <div class="col-1">
                            <NuxtImg :src="token.image" class="img-fluid mx-auto" :alt="token.symbol" />
                        </div>
                        <div class="col-3 offset-1">
                            {{ token.symbol }}
                        </div>
                        <div class="col-3">
                            ${{ token.price_usd }}
                        </div>
                        <div class="col-3">
                            <span v-if="token.percent_change < 0" class="text-danger"><i class="bi bi-arrow-down-square-fill"></i> {{ token.percent_change }}%</span>
                            <span v-else-if="token.percent_change > 0" class="text-success"><i class="bi bi-arrow-up-square-fill"></i> {{ token.percent_change }}%</span>
                            <span v-else>{{ token.percent_change }}%</span>
                        </div>
                        <div class="col-1">
                            <NuxtLink :to="token.url" target="_blank"><i class="bi bi-box-arrow-up-right"></i></NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="card-body" v-else-if="pending">
                    <div class="d-flex justify-content-center my-3">
                        <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading token data...</span>
                        </div>
                    </div>
                </div>
                <div class="card-body" v-else="pending">
                    <p class="card-text">No token data available</p>
                </div>
            </div>
            <h2 class="mt-5">News</h2>
            <div class="card mb-3 shadow-sm">
                <div class="card-body" v-if="data.news?.length">
                    <div class="row card-text py-2" v-for="item in data.news">
                        <div class="col">
                            <small class="text-body-secondary">{{ item.date }}</small>
                            <NuxtLink :to="item.link" target="_blank" class="text-decoration-none text-dark"><p class="fw-bold article-title mb-1">{{ item.title }}&nbsp;&nbsp;<i class="bi bi-box-arrow-up-right"></i></p></NuxtLink>
                        </div>
                        
                    </div>
                </div>
                <div class="card-body" v-else>
                    <p class="card-text">No news available</p>
                </div>
            </div>
        </div>
    </div>

</template>