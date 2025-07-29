<script setup lang="ts">

    const { status, data } = await useFetch(`https://api.carboncopy.news/knowledge`, {
        lazy: true,
        server: false,
    })
    // const {status, data } = await useFetch(`http://127.0.0.1:5000/knowledge`, {
    //     lazy: true,
    //     server: false,
    // })

    useHead({
        title: 'ReFi Knowledge',
        meta: [
            { property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
            { property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
            { name: 'description', content: 'A curated library of knowledge in the Web3 regenerative finance (ReFi) space.' },
            { property: 'og:description', content: 'A curated library of knowledge in the Web3 regenerative finance (ReFi) space.' },
            { property: 'og:title', content: 'ReFi Knowledge | CARBON Copy' },
            { name: 'twitter:description', content: 'A curated library of knowledge in the Web3 regenerative finance (ReFi) space.' }
        ]
    })

</script>

<template>

    <h1 class="mt-lg-5 mb-3">ReFi Knowledge</h1>
    <p class="lead">A list of knowledge in the ReFi space.</p>
    <ClientOnly>
        <div v-if="status === 'pending'" class="d-flex justify-content-center my-5">
            <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading knowledge list...</span>
            </div>
        </div>
        <div v-if="data">
            <KnowledgeTable :data=data></KnowledgeTable>
        </div>
    </ClientOnly>

</template> 
