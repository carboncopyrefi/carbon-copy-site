<script setup lang="ts">

useHead({
        title: 'The State of ReFi Report',
        meta: [
      { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news/images/state-of-refi-report-cover.jpg' },
      { hid: 'twitter:image', property:'twitter:image', content: 'https://carboncopy.news/images/state-of-refi-report-cover.jpg' },
    ]
    })

</script>

<template>
  
  <div class="row">
        <div class="col-lg-7 mb-4 mb-lg-0">
          <h1 class="mt-lg-5 mb-1">The State of ReFi Report</h1>
          <h4 class="text-body-secondary mb-4">An Overview of Web3 Regenerative Finance</h4>
            <p>Our inaugural report on the state of Web3 regenerative finance (ReFi) is the first known industry report on the topic. In it, we aim to give readers both inside and outside the space a better sense of the ReFi space, its ambitions, and the progress it has made to date.</p>
            <p>More specifically, we look at:</p>
            <ul class="list">
                <li>What ReFi Is and How It Works</li>
                <li>The ReFi Landscape</li>
                <li>Trends & Market Potential</li>
                <li>Opportunities & Challenges</li>
                <li>Case Studies</li>
                <li>Future Outlook</li>
            </ul>
            <p>We conclude by posing four big questions for the ReFi space to answer in 2024, along with a few suggestions of our own.</p>
            <p>A big thank you to everyone who made this report possible!</p>
            <p class="mt-4 mt-lg-5 small">Produced in coordination with:</p>
            <NuxtImg src="https://images.crunchbase.com/image/upload/c_pad,w_400,f_auto,b_white,q_auto:eco,dpr_1/lkpus3lsvqmnzbxsfvdl" format="webp"></NuxtImg>
        </div>
        <div class="col-lg-4 col-10 mt-lg-5 mt-3 offset-lg-1">
            <NuxtImg src="/images/state-of-refi-report-cover.jpg" style="width:100%" alt="The State of ReFi Report Cover" quality="75" />
            <NuxtLink to="/reports/The State of ReFi Report 2024.pdf" target="_blank" class="btn btn-primary btn-lg mt-4 w-100">Download Report</NuxtLink>
        </div>
    </div>

</template>
