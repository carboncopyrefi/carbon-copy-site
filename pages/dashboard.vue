<script setup lang="ts">

const { status, data } = await useFetch(`https://api.carboncopy.news/dashboard`, {
  lazy: true,
  server: false,
})

const { data: feed } = await useFetch(`http://api.carboncopy.news/impact/feed`, {
  lazy: true,
  server: false
})

// const { status, data } = await useFetch(`http://127.0.0.1:5000/dashboard`, {
//   lazy: true,
//   server: false,
// })

// const { data: feed } = await useFetch(`http://127.0.0.1:5000/impact/feed`, {
//   lazy: true,
//   server: false
// })

useHead({
    title: 'ReFi Impact Dashboard',
    meta: [
    { name: 'description', content: 'A tool to understand the ecological and social impact being made by Web3 regenerative finance (ReFi) projects.' },
    { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
    { hid: 'twitter:image', property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
    { hid: 'og:description', property:'og:description', content: 'A tool to understand the ecological and social impact being made by Web3 regenerative finance (ReFi) projects..' }
]
})

  </script>

<template>
    <h1 class="mt-5">ReFi Impact Dashboard <span class="badge text-bg-primary fs-6 ms-2 align-top mt-1 mt-lg-2">Early Beta</span></h1>
    <p class="lead">This dashboard aims to quantify the impact being made by projects across ReFi.</p>
    <p class="lead">Note that it is a <em>very early</em> beta version with only a relatively small number of projects connected. The goal with this version is to get feedback and invite interest from projects to make their data available.</p>
    <p class="lead">If you are a project and what to get your data linked up, reach out at hello@carboncopy.news!</p>
    <div class="row mt-5">
      <div class="col-lg-6 mb-lg-0 mb-4">
        <span v-if="status === 'pending'" class="d-flex justify-content-center my-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading data...</span>
          </div>
        </span>
        <div v-else class="row">
          <h3>Impact Grant Funding</h3>
          <ClientOnly>
            <DashboardFigure metric_key="impact-grant-amount" :data="data.aggregate" bg_color="#F5F3D5" metric_note="The amount of money granted to impact projects through Web3 grant programs." />
            <DashboardFigure metric_key="impact-grant-number" :data="data.aggregate" bg_color="#F5F3D5" metric_note="The number of grants granted to impact projects through Web3 grant programs." />
          </ClientOnly>
        </div>
        <div class="row">
          <div class="col-12" v-if="data">
            <div class="card h-100">
              <div class="card-body">
                <ClientOnly>
                  <ChartLine :data="data.list" y_symbol="$" metric_key="impact-grant-amount"></ChartLine>
                </ClientOnly>
              </div>
              <div class="card-footer" style="background-color: #F5F3D5;">
                Amount Granted to Impact Projects (Cumulative)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <span v-if="status === 'pending'" class="d-flex justify-content-center my-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading data...</span>
          </div>
        </span>
        <div v-else class="row">
          <h3>Ecological Credits</h3>
          <ClientOnly>
            <DashboardFigure metric_key='onchain-credits-issued' :data="data.aggregate" bg_color="#C9DBF5" metric_note="Any form of ecological credit (carbon, cookstove, biodiversity, et al) verified and issued natively on-chain." />
            <DashboardFigure metric_key='bridged-credits' :data="data.aggregate" bg_color="#C9DBF5" metric_note="Ecological credits that were verified and issued off-chain and then bridged on-chain." />
          </ClientOnly>

          <h3 class="mt-5">Universal Basic Income</h3>
          <ClientOnly>
            <DashboardFigure metric_key="ubi-distributed" :data="data.aggregate" bg_color="#F5DAEF" metric_note="Universal basic income distributed on-chain." />
            <DashboardFigure metric_key="ubi-beneficiaries" :data="data.aggregate" bg_color="#F5DAEF" metric_note="The number of wallets that have received universal basic income distributions." />
          </ClientOnly>

          <h3 class="mt-5">Lending</h3>
          <ClientOnly>
            <DashboardFigure metric_key="refi-project-lending" :data="data.aggregate" bg_color="#F5DEA8" metric_note="The amount lent by ReFi projects to regenerative projects." />
            <DashboardFigure metric_key="refi-project-lending-projects" :data="data.aggregate" bg_color="#F5DEA8" metric_note="The number of regenerative projects that have borrowed from ReFi projects." />
          </ClientOnly>

        </div>
        <!-- <div class="row mt-3">
          <div class="col-12">
            <div class="card h-100">
              <div class="card-body">
                <ChartLine :series="series2"></ChartLine>
              </div>
              <div class="card-footer bg-white">
                Ecological Credits Issued and Retired
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>      

    <div class="row mt-4">
      <div class="col-lg-6 mb-lg-0 mb-4">
        <span v-if="status === 'pending'" class="d-flex justify-content-center my-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading data...</span>
          </div>
        </span>
        <div v-else class="row">
          <h3 class="mt-4">Venture Funding</h3>
          <ClientOnly>
            <DashboardFigure metric_key="venture-capital-amount" :data="data.aggregate" bg_color="#ffc7c7" metric_note="The amount invested by venture capital firms in ReFi projects." />
            <DashboardFigure metric_key="venture-capital-deals" :data="data.aggregate" bg_color="#ffc7c7" metric_note="The number of venture funding deals closed by ReFi projects." />
          </ClientOnly>
        </div>
        <div class="row">
          <div class="col-12" v-if="data">
            <div class="card h-100">
              <div class="card-body">
                <ClientOnly>
                  <ChartBar :data="data.list" y_symbol="$" metric_key="venture-capital-amount"></ChartBar>
                </ClientOnly>
              </div>
              <div class="card-footer" style="background-color: #ffc7c7;">
                Venture Funding Received by Year
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="row mt-lg-3">
          <div class="col-12" v-if="data">
            <div class="card h-100">
              <div class="card-body">
                <ClientOnly>
                  <ChartLine :data="data.list" y_symbol="$" metric_key="ubi-distributed"></ChartLine>
                </ClientOnly>
              </div>
              <div class="card-footer bg-white">
                UBI Distributed (Cumulative)
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <div class="col-lg-6">
        <span v-if="status === 'pending'" class="d-flex justify-content-center my-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading data...</span>
          </div>
        </span>
        <div v-else class="row">
          <h3 class="mt-4">Investment</h3>
          <ClientOnly>
            <DashboardFigure metric_key="refi-project-investment-climate" :data="data.aggregate" bg_color="#BEBAF5" metric_note="The amount invested by ReFi projects in climate initiatives." />
            <DashboardFigure metric_key="refi-project-investment-climate-yield" :data="data.aggregate" bg_color="#BEBAF5" metric_note="The amount earned from ReFi investments in climate initiatives." />
          </ClientOnly>

          <h3 class="mt-4">Recycling</h3>
          <ClientOnly>
            <!-- <DashboardFigure metric_key="reforested-land" :data="data.aggregate" bg_color="#E1F5D5" metric_note="The amount of land reforested as a result of ReFi activities." /> -->
            <DashboardFigure metric_key="waste-collected" :data="data.aggregate" bg_color="#E6F596" metric_note="The amount of waste collected through ReFi incentive programs." />
          </ClientOnly>

          <h3 class="mt-4">Solar Energy</h3>
          <ClientOnly>
            <DashboardFigure metric_key="solar-energy-generated" :data="data.aggregate" bg_color="#E1F5D5" metric_note="The amount of solar energy generated by Impact DePIN projects." />
          </ClientOnly>
        </div>

        <!-- <div class="row mt-3">
          <div class="col-12" v-if="data">
            <div class="card h-100">
              <div class="card-body">
                <ClientOnly>
                  <ChartLine :data="data.list" y_symbol="MWh" metric_key="solar-energy-generated"></ChartLine>
                </ClientOnly>
              </div>
              <div class="card-footer bg-white">
                Solar Energy Generated
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
      
    <div class="row mt-5">
      <span v-if="status === 'pending'" class="d-flex justify-content-center my-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading data...</span>
        </div>
      </span>
      <div class="table-responsive" v-else>
        <h3>Impact Feed</h3>
        <table class="table table-striped align-middle">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Project</th>
                <th scope="col">Completion Date</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              <ClientOnly>
                <tr v-for="impact in feed">
                  <td>{{ (impact.name.length > 80) ? impact.name.slice(0,80) + "..." : impact.name }}&nbsp;&nbsp;<span v-if="impact.status === 'Verified'" class="badge text-bg-success">{{ impact.status }}</span></td>
                  <td>{{ impact.metric }}</td>
                  <td>{{ impact.date }}</td>
                  <td><Modal :id="impact.id" :title="(impact.name.length > 100) ? impact.name.slice(0,100) + '...' : impact.name" :body="impact.details" :status="impact.status"></Modal></td>
                </tr>
              </ClientOnly>
            </tbody>
        </table>
      </div>
    </div>
    

    <div class="row mt-5">
      <ClientOnly>
        <p class="small">** Data current as of December 13th, 2024. **</p>
      </ClientOnly>
    </div>
</template>