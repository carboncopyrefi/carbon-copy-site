<script setup lang="ts">

    const { status, data } = await useFetch('https://api.carboncopy.news/tokens', {
        lazy: true,
        server: false
    })
    // const { status, data } = await useFetch('http://127.0.0.1:5000/tokens', {
    //     lazy: true,
    //     server: false
    // })

    useHead({
        title: 'ReFi Tokens',
        meta: [
            { property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
            { property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
            { name: 'description', content: 'A curated list of tokens in and adjacent to the Web3 regenerative finance (ReFi) space.' },
            { property: 'og:description', content: 'A curated list of tokens in and adjacent to the Web3 regenerative finance (ReFi) space.' },
            { property: 'og:title', content: 'ReFi Tokens | CARBON Copy'},
            { name: 'twitter:description', content: 'A curated list of tokens in and adjacent to the Web3 regenerative finance (ReFi) space.' }
        ]
    })

</script>

<template>

    <h1 class="mt-lg-5 mb-3">ReFi Tokens <span v-if="data">({{ data.count }})</span></h1>
    <p class="lead">A list of tokens in or adjacent to the ReFi space. Does not currently include NFT collections.</p>
    <div v-if="status === 'pending'" class="d-flex justify-content-center my-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading token list...</span>
        </div>
    </div>
    <div v-if="data">
        <TokenTable :data=data.tokens></TokenTable>
    </div>
    

</template> 
