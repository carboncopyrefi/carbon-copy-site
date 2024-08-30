<script setup lang="ts">

    const { status, data } = await useFetch('https://api.carboncopy.news/people')
    // const {status, data } = await useFetch('http://127.0.0.1:5000/people')

    useHead({
        title: 'ReFi People',
        meta: [
            { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
            { hid: 'twitter:image', property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
            { hid: 'description', name: 'description', content: 'A curated list of people building in the Web3 regenerative finance (ReFi) space.' },
            { hid: 'og:description', property: 'og:description', content: 'A curated list of people building in the Web3 regenerative finance (ReFi) space.' },
            { hid: 'twitter:description', name: 'twitter:description', content: 'A curated list of people building in the Web3 regenerative finance (ReFi) space.' }
        ]
    })

</script>

<template>

    <h1 class="mt-lg-5 mb-3">ReFi Builders</h1>
    <p class="lead">A list of people building in the ReFi space.</p>
    <div v-if="status === 'pending'" class="d-flex justify-content-center my-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading people list...</span>
        </div>
    </div>
    <div v-if="data">
        <PeopleTable :data=data></PeopleTable>
    </div>
    

</template> 
