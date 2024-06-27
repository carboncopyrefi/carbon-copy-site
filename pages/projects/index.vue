<script setup lang="ts">

    const { pending, data } = await useFetch('https://api.carboncopy.news/projects')
    //const {pending, data } = await useFetch('http://127.0.0.1:5000/projects')

    useHead({
        title: 'ReFi Projects',
        meta: [
            { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
            { hid: 'twitter:image', property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
            { hid: 'description', name: 'description', content: 'A curated database of projects operating in and adjacent to the Web3 regenerative finance (ReFi) space.' },
            { hid: 'og:description', property: 'og:description', content: 'A curated database of projects operating in and adjacent to the Web3 regenerative finance (ReFi) space.' },
            { hid: 'twitter:description', name: 'twitter:description', content: 'A curated database of projects operating in and adjacent to the Web3 regenerative finance (ReFi) space.' }
        ]
    })

</script>

<template>

    <h1 class="mt-lg-5 mb-3">ReFi Projects</h1>
    <p class="lead">Our curated list of active Web3 regenerative finance (ReFi) projects. The basic criteria are: 1) Making ecological and/or social impact and 2) Using Web3 as part of the solution (not just using it for fundraising) and/or providing tools and services to ReFi projects and/or working in Web3 education.</p>
    <div v-if="pending" class="d-flex justify-content-center my-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading project list...</span>
        </div>
    </div>
    <div v-if="data">
        <ProjectsTable :data=data></ProjectsTable>
    </div>
    

</template> 
