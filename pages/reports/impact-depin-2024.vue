<script setup lang="ts">

useHead({
        title: 'The Impact DePIN Report 2024',
        meta: [
      { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news/images/impact-depin-report-cover.jpg' },
      { hid: 'twitter:image', property:'twitter:image', content: 'https://carboncopy.news/images/impact-depin-report-cover.jpg' },
      { hid: 'description', name: 'description', content: 'Examining the Intersection Between Decentralised Physical Infrastructure Networks (DePINs) and Web3 Regenerative Finance (ReFi)' },
      { hid: 'og:description', property: 'og:description', content: 'Examining the Intersection Between Decentralised Physical Infrastructure Networks (DePINs) and Web3 Regenerative Finance (ReFi)' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Examining the Intersection Between Decentralised Physical Infrastructure Networks (DePINs) and Web3 Regenerative Finance (ReFi)' }
    ]
    })

</script>

<template>
  
  <div class="row">
      <div class="col-lg-7 mb-4 mb-lg-0">
        <h1 class="mt-lg-5 mb-1">The Impact DePIN Report 2024</h1>
        <h4 class="text-body-secondary mb-4">Examining the Intersection Between Decentralised Physical Infrastructure Networks (DePINs) and Web3 Regenerative Finance (ReFi)</h4>
        <p>Introducing our inaugural report on the world of Impact DePIN, a sub-sector of the wider DePIN sector that focuses on ecological and/or social impact.</p>
        <p>Inside, you'll find:</p>
        <ul class="list">
            <li>The Impact DePIN Economic Model</li>
            <li>The Landscape</li>
            <li>Current State of the Sector</li>
            <li>Market Potential</li>
            <li>Case Studies</li>
            <li>Future Outlook</li>
        </ul>
        <p>And plenty more!</p>
        <p class="mt-4 mt-lg-5 small">Produced in coordination with:</p>
        <div class="row">
          <div class="col-2">
            <NuxtImg src="https://pbs.twimg.com/profile_images/1574248519157678081/GUXP2Zv-_400x400.jpg" format="webp"></NuxtImg>
          </div>
          <div class="col-2 offset-lg-1">
            <NuxtImg src="https://pbs.twimg.com/profile_images/1546497208576610304/vfP2pW18_400x400.jpg" format="webp"></NuxtImg>
          </div>
          <div class="col-2 offset-lg-1">
            <NuxtImg src="https://pbs.twimg.com/profile_images/1690689777279074304/FKNvjAM5_400x400.jpg" format="webp"></NuxtImg>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-10 mt-lg-5 mt-3 offset-lg-1">
          <NuxtImg src="/images/impact-depin-report-cover.jpg" style="width:100%" alt="The Impact DePIN Report Cover" quality="75"  />
          <NuxtLink to="/reports/The Impact DePIN Report 2024.pdf" target="_blank" class="btn btn-primary btn-lg mt-4 w-100">Download Report</NuxtLink>
      </div>
  </div>

</template>
