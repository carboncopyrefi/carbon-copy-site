<script setup lang="ts">

const route = useRoute()
const img = useImage()

const { data } = await useFetch(`https://api.carboncopy.news/projects/${route.params.slug}`)
const { status, data: content } = await useFetch(`https://api.carboncopy.news/projects/${route.params.slug}/content`, {
  lazy: true,
  server: false
})

// const { data } = await useFetch(`http://127.0.0.1:5000/projects/${route.params.slug}`)
// const { status, data: content } = await useFetch(`http://127.0.0.1:5000/projects/${route.params.slug}/content`, {
//   lazy: true,
//   server: false,
// })

useHead({
  title: () => data.value?.name,
  meta: [
    { hid: 'description', name: 'description', content: () => data.value?.description_short },
    { hid: 'twitter:description', name: 'twitter:description', content: () => data.value?.description_short },
    { hid: 'og:description', property: 'og:description', content: () => data.value?.description_short },
    { hid: 'og:image', property:'og:image', content: data.value?.logo },
  ]
})

</script>


<template>
  <div class="mt-5">
    <div class="row mb-3">
        <div class="col lead text-secondary">
            <button @click="$router.back()"><i class="bi bi-arrow-left"></i> Back</button>
        </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        <div class="row">
          <div class="col-lg-3 col-6 align-self-center text-center p-lg-3 mb-5 mb-lg-0 d-flex">
            <NuxtImg :src="data.logo" :alt="data.name" sizes="400px" class="img-fluid mx-auto" width="100%" height="100%" />
          </div>
          <div class="col-lg-9">
            <div class="row">
              <div class="col-12">
                <h1 class="fw-bold">{{ data.name }}</h1>
              </div>
              <div class="col-12">
                <p class="lead">{{ data.description_short }}</p>
              </div>
              <div class="col-12">
              <!--<span class="badge text-bg-secondary rounded-pill me-2" v-for="sector in data.sectors">{{ sector.value }}</span>-->
              <span v-for="category in data.categories">
                <NuxtLink :to="'/projects/categories/' + category.slug + '/'" class="badge text-bg-primary py-2 px-3 rounded-pill me-2 text-decoration-none">{{ category.name }}</NuxtLink>
              </span>
            </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col my-4">
            <p style="white-space: pre-line" v-html=data.description_long></p>
          </div>
        </div>
        <!-- <div class="row">
          <div class="col mt-4">
            <h2>Evaluation</h2>
            <PolarChart />
          </div>
        </div> -->
        <div class="row mb-5">
          <div class="col-lg-4 col-10 mb-3 mb-lg-0">
            <div class="card shadow-sm">
              <div class="card-body">
                <h4 class="card-title">Location</h4>
                <p v-if="!data.location" class="m-0 p-0">
                  No location added
                </p>
                <p class="card-text">{{ data.location }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-10 mb-3 mb-lg-0">
            <div class="card shadow-sm">
              <div class="card-body">
                <h4 class="card-title">Protocol(s)</h4>
                <p v-if="!data.protocol.length" class="m-0 p-0">
                  No protocol added
                </p>
                <span class="card-text" v-for="protocol in data.protocol">{{ protocol.value }}&nbsp;&nbsp;</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-10">
            <div class="card shadow-sm h-100">
              <div class="card-body">
                <h4 class="card-title">Token</h4>
                <span v-if="status === 'pending'" class="d-flex justify-content-center">
                  <div class="spinner-border spinner-border-sm text-primary" role="status">
                    <span class="visually-hidden">Loading content feed...</span>
                  </div>
                </span>
                <div v-else>
                  <div v-if="content && content.token">
                    <span class="card-text">{{ content.token?.symbol }}&nbsp;&nbsp;${{ content.token?.price_usd }}&nbsp;&nbsp;<span v-if="content.token?.percent_change < 0" class="text-danger"><i class="bi bi-arrow-down-square-fill"></i> {{ content.token?.percent_change }}%</span><span v-else-if="content.token?.percent_change > 0" class="text-success"><i class="bi bi-arrow-up-square-fill"></i> {{ content.token?.percent_change }}%</span><span v-else>&nbsp;</span></span>
                  </div>
                  <span v-else class="card-text">No token data available</span>
                </div>  
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col">
            <h2>Fundraising</h2>
            <div v-if="!data.fundraising?.length">
              <p>No fundraising data available</p>
            </div>
            <div v-if="data.fundraising?.length" class="row">
              <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Year</th>
                  <th scope="col">Type</th>
                  <th scope="col">Round</th>
                  <!-- <th scope="col">Donors</th> -->
                  <th scope="col">Amount</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="f in data.fundraising">
                  <td>{{ f.year }}</td>
                  <td>{{ f?.type }}</td>
                  <td>{{ f?.round }}</td>
                  <!-- <td>124</td> -->
                  <td>${{ f.amount }}</td>
                  <td><NuxtLink v-if="f.url" :to="f?.url" target="_blank" class="text-decoration-none">Details</NuxtLink></td>
                </tr>
              </tbody>
            </table>

            </div>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col">
            <h2>Achievements</h2>
            <div v-if="!data.response?.length">
              <p>Represent this company? Complete our <a href="/regenerative-assessment/" target="_blank" class="text-decoration-none">regenerative self-assessment</a> to unlock your first achievement!</p>
            </div>
            <div class="row">
              <div v-for="response in data.response" class="col-lg-3 col-6">
                <NuxtImg :src="'/images/' + response.survey + '.jpg'" class="img-fluid shadow-sm rounded" width="100%" height="100%" alt="Regenerative Self-Assessment Badge" ></NuxtImg>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h2>Content</h2>
            <div v-if="status === 'pending'" class="d-flex justify-content-center my-5">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading content feed...</span>
              </div>
            </div>
            <div v-else>
              <div v-if="content && content.feed" class="row">
                <div class="col">
                  <ArticleCard :data=content.feed :col=4 :margin=3></ArticleCard>
                </div>
              </div>
              <div v-else>
                <p>No content feed added</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 offset-lg-1 mt-5 mt-lg-0">
        <div class="mb-5">
          <h2>Contacts</h2>
          <div v-for="link in data.links">
            <NuxtLink :to="link.url" target="_blank" class="text-decoration-none">{{ link.platform }}</NuxtLink>
          </div>
        </div>
        <div class="mb-5">
          <h2>Founders</h2>
          <div v-if="!data.team.length">
            <p>No founders added</p>
          </div>
          <div v-for="person in data.team">
            {{ person.value }}
          </div>
        </div>
        <div class="mb-5">
          <h2>Project News</h2>
          <div v-if="!data.news.length">
            <p>No news added</p>
          </div>
          <div v-for="article in data.news.slice(0,5)">
            <small class="text-body-secondary">{{ article.date }}</small>
            <NuxtLink :to="article.url" target="_blank" class="text-decoration-none text-dark"><p class="fw-bold">{{ article.headline }}&nbsp;&nbsp;<i class="bi bi-box-arrow-up-right"></i></p></NuxtLink>
          </div>
        </div>
        <div class="">
          <h2>Media Coverage</h2>
          <div v-if="!data.coverage.length">
            <p>No coverage added</p>
          </div>
          <div v-for="article in data.coverage">
            <span>{{ article.publication }} | <small class="text-body-secondary">{{ article.date }}</small></span>
            <NuxtLink :to="article.url" target="_blank" class="text-decoration-none text-dark"><p class="fw-bold">{{ article.headline }}&nbsp;&nbsp;<i class="bi bi-box-arrow-up-right"></i></p></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
