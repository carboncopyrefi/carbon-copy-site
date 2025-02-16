<script setup lang="ts">

  definePageMeta({
    layout: "article",
  });

  // Get the slug from the URL
  const route = useRoute()
  const episodeSlug = route.params.slug;

  const { data: episode, status } = await useFetch(`https://api.carboncopy.news/refi-weekly/${episodeSlug}`, {
        server: false,
        lazy: true,
  });

  // const { data: episode, status } = await useFetch(`http://127.0.0.1:5000/refi-weekly/${episodeSlug}`, {
  //       server: false,
  //       lazy: true,
  // });
  
  useHead({
    title: () => episode.value?.title,
    meta: [
      { hid: 'description', name: 'description', content: () => episode.value?.subtitle },
      { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news/images/refi-weekly-cover.webp' },
      { hid: 'og:description', property: 'og:description', content: () => episode.value?.subtitle },
      { hid: 'twitter:description', name: 'twitter:description', content: episode.value?.subtitle },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://carboncopy.news/images/refi-weekly-cover.webp' },
    ],
    script: [
        {
            src: "https://platform.twitter.com/widgets.js",
            async: "true"
        }
    ]
  })


</script>

<template>

    <div v-if="episode">
      <div class="row mb-3">
        <div class="col lead text-secondary">
            <button @click="$router.back()"><i class="bi bi-arrow-left"></i> Back</button>
        </div>
      </div>
      <h1 class="">{{ episode.title }}</h1>
      <p class="fs-5 text-secondary" v-html=episode.subtitle></p>
      <div class="d-md-flex justify-content-md-between mb-3">
          <div class="align-self-center">
              {{ episode.date }}
          </div>
          <div class="align-self-center mt-3 mt-md-0">
              <SocialShare :data=episode />
          </div>
      </div>

      <div class="mt-5">
          <!-- <h2 class="mb-4">Listen</h2>

          <div class="">
              <iframe></iframe>
          </div>

          <h2 class="mb-4">Summary</h2> -->

          <div class="refi-weekly-summary" v-html=episode.summary></div>
      </div>
    </div>
    <div v-else class="d-flex justify-content-center my-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading ReFi Weekly episode...</span>
        </div>
    </div>

</template>
