<script setup lang="ts">

    const { pending, data } = await useFetch('https://api.carboncopy.news/projects', {
        lazy: true,
        server: false
    })
    // const { pending, data } = await useFetch('http://127.0.0.1:5000/projects', {
    //     lazy: true
    // })

    useHead({
        title: 'ReFi Projects',
        meta: [
      { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
      { hid: 'twitter:image', property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
    ]
    })

</script>

<template>

    <h1 class="mt-lg-5 mb-3">ReFi Projects</h1>
    <div v-if="pending" class="d-flex justify-content-center my-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading project list...</span>
        </div>
    </div>
    <div v-if="data">
        <ProjectsTable :data=data></ProjectsTable>
    </div>
    

</template> 
