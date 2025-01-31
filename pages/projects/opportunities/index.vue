<script setup lang="ts">

    const { status, data } = await useFetch(`https://api.carboncopy.news/opportunities`, {
        lazy: true,
        server: false,
    })
    // const { status, data } = await useFetch(`http://127.0.0.1:5000/opportunities`, {
    //     lazy: true,
    //     server: false,
    // })

    useHead({
        title: 'ReFi Opportunities',
        meta: [
            { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
            { hid: 'twitter:image', property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
            { hid: 'description', name: 'description', content: 'A curated list of opportunities in the Web3 regenerative finance (ReFi) space.' },
            { hid: 'og:description', property: 'og:description', content: 'A curated list of opportunities in the Web3 regenerative finance (ReFi) space.' },
            { hid: 'twitter:description', name: 'twitter:description', content: 'A curated list of opportunities in the Web3 regenerative finance (ReFi) space.' }
        ]
    })

</script>

<template>

    <h1 class="mt-lg-5 mb-3">ReFi Opportunities</h1>
    <p class="lead">A list of opportunities in the ReFi space.</p>
    <ClientOnly>
        <div v-if="status === 'pending'" class="d-flex justify-content-center my-5">
            <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading opportunity list...</span>
            </div>
        </div>
        <div v-if="data" class="col-xl-8">
            <div v-for="item in data">
                <div class="card mb-3 shadow-sm">
                    <div class="card-header">
                        <p class="card-text"><strong>Deadline</strong> {{ item.expiry_date }}</p>
                    </div>
                    <div class="row g-0">
                        <div class="col-lg-2 col-md-2 col-3 p-lg-3 pt-4 pb-3 px-3 d-md-flex">
                            <NuxtImg :src="item.company_logo" class="mx-md-auto img-fluid" :alt="item.company" loading="lazy" style="object-fit:contain;" />
                        </div>
                        <div class="col-lg-7 col-md-7 col-9">
                            <div class="card-body">
                                <p class="card-text">{{ item.name }}</p>
                                <NuxtLink external :to="item.link" class="btn btn-primary" target="_blank">Learn more</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ClientOnly>
    

</template> 
