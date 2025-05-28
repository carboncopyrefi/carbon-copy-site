<template>

<div class="container">
  <header class="py-3 border-bottom border-light-subtle">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1">

      </div>
      <div class="col-lg-2 col-4 text-center">
        <NuxtLink to="/"><NuxtImg src="/logo.png" style="width:100%" alt="CARBON Copy Logo" format="webp"/></NuxtLink>
      </div>
      <div class="col-4 d-flex justify-content-end align-items-center">
        <!--<a class="btn btn-outline-secondary" href="#">Subscribe</a>-->
      </div>
    </div>
  </header>

  <div class="mb-2 py-1">
    <nav class="navbar navbar-expand-lg justify-content-end">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-between d-flex w-100">
          <li class="nav-item py-3 py-lg-0">
            <NuxtLink class="link-secondary text-decoration-none" to="/">Front Page</NuxtLink>
          </li>
          <li class="nav-item py-3 py-lg-0">
            <NuxtLink class="link-secondary text-decoration-none" to="/features/">Features</NuxtLink>
          </li>
          <li class="nav-item dropdown py-3 py-lg-0 m-0">
            <a class="nav-item text-decoration-none dropdown-toggle link-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              ReFi Data
            </a>
            <ul class="dropdown-menu">
              <li><NuxtLink class="link-secondary text-decoration-none dropdown-item py-3 py-lg-2" to="/projects/">Projects</NuxtLink></li>
              <li><NuxtLink class="link-secondary text-decoration-none dropdown-item py-3 py-lg-2" to="/projects/people/">Builders</NuxtLink></li>
              <li><NuxtLink class="link-secondary text-decoration-none dropdown-item py-3 py-lg-2" to="/projects/tokens/">Tokens</NuxtLink></li>
              <li><NuxtLink class="link-secondary text-decoration-none dropdown-item py-3 py-lg-2" to="/landscape/">Landscape</NuxtLink></li>
              <li><NuxtLink class="link-secondary text-decoration-none dropdown-item py-3 py-lg-2" to="/dashboard/">Impact Dashboard</NuxtLink></li>
              <li><NuxtLink class="link-secondary text-decoration-none dropdown-item py-3 py-lg-2" to="/projects/opportunities/">Opportunities</NuxtLink></li>
              <li><NuxtLink class="link-secondary text-decoration-none dropdown-item py-3 py-lg-2" to="/projects/knowledge/">Knowledge</NuxtLink></li>
              <!-- <li><NuxtLink class="link-secondary text-decoration-none dropdown-item py-3 py-lg-2" to="/events/">ReFi Events</NuxtLink></li> -->
            </ul>
          </li>
          <li class="nav-item dropdown py-3 py-lg-0 m-0">
            <a class="nav-item text-decoration-none dropdown-toggle link-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Content
            </a>
            <ul class="dropdown-menu">
              <li><NuxtLink class="link-secondary text-decoration-none dropdown-item py-3 py-lg-2" to="/this-week-in-refi/">Newsletters</NuxtLink></li>
              <li><NuxtLink class="link-secondary text-decoration-none dropdown-item py-3 py-lg-2" to="/refi-weekly/">The ReFi Weekly</NuxtLink></li>
              <li><NuxtLink class="link-secondary text-decoration-none dropdown-item py-3 py-lg-2" to="/learn/">Learn</NuxtLink></li>
              <li><NuxtLink class="link-secondary text-decoration-none dropdown-item py-3 py-lg-2" to="/guides/web3-grant-fundraising-guide-ngo/">Web3 Fundraising Guide for Nigerian NGOs</NuxtLink></li>
            </ul>
          </li>
          <li class="nav-item dropdown py-3 py-lg-0 m-0">
            <a class="nav-item text-decoration-none dropdown-toggle link-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Resources
            </a>
            <ul class="dropdown-menu">
              <li><NuxtLink external class="link-secondary text-decoration-none dropdown-item py-3 py-lg-2" to="https://gap.karmahq.xyz/funding-map" target="_blank">On-Chain Grant Directory</NuxtLink></li>
              <li><NuxtLink external class="link-secondary text-decoration-none dropdown-item py-3 py-lg-2" to="https://grantscanvas.gitcoin.co" target="_blank">Gitcoin Grants Canvas</NuxtLink></li>
              <li><NuxtLink external class="link-secondary text-decoration-none dropdown-item py-3 py-lg-2" to="https://www.regenatlas.xyz/" target="_blank">The Regen Atlas</NuxtLink></li>
              <li><NuxtLink external class="link-secondary text-decoration-none dropdown-item py-3 py-lg-2" to="https://platform.sightlineclimate.com/public/capital-stack" target="_blank">The Climate Capital Stack</NuxtLink></li>
              <li><NuxtLink external class="link-secondary text-decoration-none dropdown-item py-3 py-lg-2" to="https://climatecoordination.org/climate-solutions-metrics-garden-1" target="_blank">CCN Metrics Garden</NuxtLink></li>
              <li><NuxtLink external class="link-secondary text-decoration-none dropdown-item py-3 py-lg-2" to="https://x.com/i/lists/1818142121741766830" target="_blank">X List of ReFi Projects</NuxtLink></li>
              <li><NuxtLink external class="link-secondary text-decoration-none dropdown-item py-3 py-lg-2" to="https://ief.wiki/index.php/The_Regenerative_Dictionary" target="_blank">The Regenerative Dictionary</NuxtLink></li>
            </ul>
          </li>
          <li class="nav-item py-3 py-lg-0">
            <NuxtLink class="link-secondary text-decoration-none" to="/about/">About</NuxtLink>
          </li>
          <li class="nav-item py-3 py-lg-0">
            <NuxtLink external class="link-secondary text-decoration-none" to="https://baserow.io/form/Bvg1VhbZvYjYDyylflMoYvqPA7Gogg1GDeTjzO8ku-o" target="_blank">Submit News</NuxtLink>
          </li>
          <li class="nav-item py-3 py-lg-0">
            <NuxtLink external class="link-secondary text-decoration-none" to="https://warpcast.com/carboncopy-refi" target="_blank"><Icon name="simple-icons:farcaster" class="fs-5" /></NuxtLink>&nbsp;&nbsp;&nbsp;
            <NuxtLink external class="link-secondary text-decoration-none" to="https://x.com/cc_refi_news" target="_blank"><Icon name="bi bi-twitter-x fs-5" class="fs-5" /></NuxtLink>&nbsp;&nbsp;&nbsp;
            <NuxtLink external class="link-secondary text-decoration-none" to="https://discord.gg/53TpqNgPC5" target="_blank"><i class="bi bi-discord fs-5"></i></NuxtLink>&nbsp;&nbsp;&nbsp;
            <NuxtLink external class="link-secondary text-decoration-none" to="https://www.linkedin.com/company/carbon-copy-news/" target="_blank"><i class="bi bi-linkedin fs-5"></i></NuxtLink>&nbsp;&nbsp;&nbsp;
            <NuxtLink external class="link-secondary text-decoration-none" to="https://t.me/carboncopyrefi" target="_blank"><i class="bi bi-telegram fs-5"></i></NuxtLink>&nbsp;&nbsp;&nbsp;
            <NuxtLink class="link-secondary text-decoration-none" to="/feed.xml" target="_blank"><i class="bi bi-rss-fill fs-5"></i></NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>

</template>
