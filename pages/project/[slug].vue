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
              <div class="row mt-4 mt-lg-3 d-inline">           
                <NuxtLink external v-for="link in data.links" :to="link.url" target="_blank" class="text-decoration-none fs-5 fs-sm-3"><i :class="'bi bi-' + link.icon"></i></NuxtLink>
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
          <div class="col-lg-8">
            <h2>Fundraising <Modal class="fs-5" id="fundraising_list" title="Grant Data" body="Our dataset includes the following grant rounds:<br><br>Climate Round (Gitcoin Grants Beta, 18, 19, 20)<br>Shell Round (Gitcoin Grants 19, 20)<br>Celo QF Round (Gitcoin Grants 20)<br>CeloRPGF0<br>RetroPGF (Round 4)<br>Octant Community Fund<br>Giveth Cumulative (QF matching + donations)"></Modal></h2>
            <div v-if="!data.fundraising?.length">
              <span>No fundraising data available</span>
            </div>
            <div v-if="data.fundraising?.length">
              <table class="table table-striped mb-0">
                <thead>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Amount</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="f in data.fundraising" class="align-middle">
                    <td>{{ f.funding_type }}</td>
                    <td>${{ f.amount }}</td>
                    <td><Modal :id="f.amount" :title="f.funding_type" :details="f.details"></Modal></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col">
            <h2>Activity</h2>
            <span v-if="status === 'pending'" class="d-flex justify-content-center my-5">
              <div class="spinner-border text-primary" role="status1">
                <span class="visually-hidden">Loading milestones...</span>
              </div>
            </span>
            <div v-else>
              <div v-if="content && content.activity" class="row table-responsive">
                <table class="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col">Type</th>
                      <th scope="col">Name</th>
                      <th scope="col">Due Date</th>
                      <th scope="col">Status</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="m in content.activity" class="align-middle">
                      <td>{{ m.type }}</td>
                      <td class="w-50">{{ m.name }}</td>
                      <td>{{ m.due_date }}</td>
                      <td><span v-if="m.status === 'Overdue'" class="badge text-bg-danger">{{ m.status }}</span><span v-if="m.status === 'In Progress'" class="badge text-bg-secondary">{{ m.status }}</span><span v-if="m.status === 'Completed'" class="badge text-bg-success">{{ m.status }}</span></td>
                      <td><Modal :id="m.due_date_unix" :title="m.name" :body="m.description" :status="m.status" :completed="m.completed_msg"></Modal></td>
                    </tr>
                  </tbody>
                </table>
                <span class="small">Activity data from <NuxtLink external to="https://gap.karmahq.xyz" target="_blank" class="text-decoration-none">Karma GAP</NuxtLink></span>
              </div>
              <span v-else>
                No Karma GAP milestones added
              </span>
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col">
            <h2>Impact</h2>
            <span v-if="status === 'pending'" class="d-flex justify-content-center my-5">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading impact data...</span>
              </div>
            </span>
            <div v-else>
              <div v-if="content && content.impact.length" class="row">
                <div v-for="impact in content.impact" class="col-xl-4 col-md-6 mb-3">
                  <div v-if="impact.type === 'numeric'" class="card shadow-sm h-100">
                    <div class="card-header">
                      {{ impact.name }}
                    </div>
                    <div class="card-body">
                      <span class="fs-2">{{ impact.metric }}</span><span>&nbsp;{{ impact.unit }}</span>
                    </div>
                    <div class="card-footer text-body-secondary">
                      as of {{ impact.date }}
                    </div>
                  </div>
                  <div v-else-if="impact.type === 'text'" class="card shadow-sm h-100 mb-3">
                    <div class="card-body">
                      <span>{{ (impact.name.length > 200) ? impact.name.slice(0,200) + "..." : impact.name }}&nbsp;</span>
                      <Modal :id="impact.id" :title="(impact.name.length > 100) ? impact.name.slice(0,100) + '...' : impact.name" :body="impact.details" :status="impact.status"></Modal>
                      <div class="mt-3">
                        <span v-if="impact.status === 'Unverified'" class="badge text-bg-secondary">{{ impact.status }}</span>
                        <span v-if="impact.status === 'Verified'" class="badge text-bg-success">{{ impact.status }}</span>
                      </div>
                    </div>
                    <div class="card-footer text-body-secondary">
                      Completed {{ impact.date }}
                    </div>
                  </div>
                </div>
              </div>
              <span v-else>No impact data available</span>
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col">
            <h2>Achievements</h2>
            <div v-if="!data.response?.length">
              <span>Represent this company? Complete our <a href="/regenerative-assessment/" target="_blank" class="text-decoration-none">regenerative self-assessment</a> to unlock your first achievement!</span>
            </div>
            <div class="row">
              <div v-for="response in data.response" class="col-lg-3 col-6">
                <NuxtLink to="/regenerative-assessment/" target="_blank"><NuxtImg :src="'/images/' + response.survey + '.jpg'" class="img-fluid shadow-sm rounded" width="100%" height="100%" alt="Regenerative Self-Assessment Badge" ></NuxtImg></NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h2>Content</h2>
            <span v-if="status === 'pending'" class="d-flex justify-content-center my-5">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading content feed...</span>
              </div>
            </span>
            <div v-else>
              <div v-if="content && content.feed">
                  <ArticleCard :data=content.feed :col=4 :margin=3 target="_blank" :external="true"></ArticleCard>
              </div>
              <div v-else>
                <span>No content feed added</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 offset-lg-1 mt-5 mt-lg-0">
        <div class="mb-5">
          <h2>Token</h2>
          <div class="card shadow-sm">
            <div class="card-body">
          <span v-if="status === 'pending'" class="d-flex justify-content-center">
            <div class="spinner-border spinner-border-sm text-primary" role="status">
              <span class="visually-hidden">Loading content feed...</span>
            </div>
          </span>
          <div v-else>
            <div v-if="content && content.token">
              <table class="table table-borderless mb-0">
                <tbody>
                  <tr>
                    <td>{{ content.token?.symbol }}</td>
                    <td>${{ content.token?.price_usd }}</td>
                    <td><span v-if="content.token?.percent_change < 0" class="text-danger"><i class="bi bi-arrow-down-square-fill"></i> {{ content.token?.percent_change }}%</span><span v-else-if="content.token?.percent_change > 0" class="text-success"><i class="bi bi-arrow-up-square-fill"></i> {{ content.token?.percent_change }}%</span><span v-else>&nbsp;</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <span v-else>No token data available</span>
          </div>
            </div>
          </div>
        </div>
        <div class="mb-5">
          <h2>Location</h2>
          <span v-if="!data.location" class="m-0 p-0">
            No location added
          </span>
          <p class="card-text">{{ data.location }}</p>
        </div>
        <div class="mb-5">
          <h2>Protocols</h2>
          <span v-if="!data.protocol.length" class="m-0 p-0">
            No protocol added
          </span>
          <p class="mb-0" v-for="protocol in data.protocol">{{ protocol.value }}&nbsp;&nbsp;</p>
        </div>
        <div class="mb-5">
          <h2>Founders</h2>
          <div v-if="!data.founder.length">
            <span>No founders added</span>
          </div>
          <div v-for="person in data.founder">
            <span>{{ person.name }}</span>
            <div class="mt-1 mb-3 fs-5" v-if="person.platforms.length">
              <span class="me-4" v-for="platform in person.platforms">
                <NuxtLink external :to="platform?.url" target="_blank"><i :class="'bi bi-' + platform.platform"></i></NuxtLink>
              </span>
            </div>
            <div v-else>&nbsp;</div>
            <span v-else></span>
          </div>
        </div>
        <div class="mb-5">
          <h2>Project News</h2>
          <div v-if="!data.news.length">
            <span>No news added</span>
          </div>
          <div v-for="article in data.news.slice(0,5)">
            <small class="text-body-secondary">{{ article.date }}</small>
            <NuxtLink :to="article.url" target="_blank" class="text-decoration-none text-dark"><p class="fw-bold">{{ article.headline }}&nbsp;&nbsp;<i class="bi bi-box-arrow-up-right"></i></p></NuxtLink>
          </div>
        </div>
        <div class="">
          <h2>Media Coverage</h2>
          <div v-if="!data.coverage.length">
            <span>No coverage added</span>
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
