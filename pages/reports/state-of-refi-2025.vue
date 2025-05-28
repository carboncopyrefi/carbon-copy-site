<script setup lang="ts">

useHead({
        title: 'The State of ReFi Report 2025',
        meta: [
      { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news/images/state-of-refi-report-cover-2025.jpg' },
      { hid: 'twitter:image', property:'twitter:image', content: 'https://carboncopy.news/images/state-of-refi-report-cover-2025.jpg' },
      { hid: 'description', name: 'description', content: 'The 2025 edition of our flagship industry report for Web3 Regenerative Finance (ReFi).' },
      { hid: 'og:description', property: 'og:description', content: 'The 2025 edition of our flagship industry report for Web3 Regenerative Finance (ReFi).' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'The 2025 edition of our flagship industry report for Web3 Regenerative Finance (ReFi).' }
    ]
    })

</script>

<template>
  
  <div class="row">
        <div class="col-lg-7 mb-4 mb-lg-0">
          <h1 class="mt-lg-5 mb-1">The State of ReFi 2025</h1>
          <h4 class="text-body-secondary mb-4">The Latest from Web3 Regenerative Finance</h4>
            <p>In this edition of our flagship ReFi report, we break down the year that was and provide an update on the current state of the industry.</p>
            <p>More specifically, we look at:</p>
            <ul class="list">
                <li>The ReFi Landscape</li>
                <li>2024 in Review</li>
                <li>ReFi Health Check</li>
                <li>Industry Updates and Trends</li>
                <li>The Challenges of Funding Regeneration</li>
                <li>Future Outlook</li>
            </ul>
            <p>We conclude by posing four big questions for the ReFi space to answer in 2025, along with a few suggestions of our own.</p>
            <p>A big thank you to everyone who made this report possible!</p>
            <p class="mt-4 mt-lg-5 small">Produced in coordination with:</p>
            <div class="row">
              <div class="col-2"><NuxtImg src="https://pbs.twimg.com/profile_images/1495113844108234757/KIz-ugMM_400x400.jpg"></NuxtImg></div>
              <div class="col-2"><NuxtImg src="https://pbs.twimg.com/profile_images/1663247214041534464/BwVP8PqZ_400x400.jpg"></NuxtImg></div>
              <div class="col-2"><NuxtImg src="https://pbs.twimg.com/profile_images/1902400167774416896/nPtjiPB8_400x400.jpg"></NuxtImg></div>
            </div>
        </div>
        <div class="col-lg-4 mt-lg-5 mt-3 offset-lg-1">
            <NuxtImg src="/images/state-of-refi-report-cover-2025.jpg" style="width:100%" alt="The State of ReFi Report 2025 Cover" quality="75" />
            <NuxtLink to="/reports/The State of ReFi Report 2025.pdf" target="_blank" class="btn btn-primary btn-lg mt-4 w-100">Download Report</NuxtLink>
        </div>
    </div>

</template>
