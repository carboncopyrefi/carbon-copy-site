<script setup>

  const currentYear  = new Date().getFullYear();

</script>

<template>
  <footer class="bg-light border-top border-light-subtle py-5 mt-5">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-xl-3 col-lg-4 col-sm-6 col-10">
          <a href="/"><NuxtImg src="/logo.png" style="width:30%" alt="CARBON Copy Logo" /></a>
          <p class="mt-2"><small>Copyright &copy; {{ currentYear }} CARBON Copy</small></p>
          <p class="mt-2"><small>Token data provided by CoinGecko</small></p>
        </div>
        <div class="col-xl-7 col-lg-8 col-sm-6 align-self-xl-center align-self-lg-top">
          <ul class="nav justify-content-lg-between flex-lg-row flex-column text-sm-end">
            <li class="nav-item py-3 py-lg-0">
              <NuxtLink class="link-secondary text-decoration-none" to="/">Front Page</NuxtLink>
            </li>
            <li class="nav-item py-3 py-lg-0">
              <NuxtLink class="link-secondary text-decoration-none" to="/features/">Features</NuxtLink>
            </li>
            <li class="nav-item py-3 py-lg-0">
              <NuxtLink class="link-secondary text-decoration-none" to="/learn/">Learn</NuxtLink>
            </li>
            <li class="nav-item py-3 py-lg-0">
              <NuxtLink class="link-secondary text-decoration-none" to="/projects/">ReFi Projects</NuxtLink>
            </li>
            <!-- <li class="nav-item py-3 py-lg-0">
              <NuxtLink class="link-secondary text-decoration-none" to="/events/">Events</NuxtLink>
            </li> -->
            <li class="nav-item py-3 py-lg-0">
              <NuxtLink class="link-secondary text-decoration-none" to="/about/">About</NuxtLink>
            </li>
            <li class="nav-item py-3 py-lg-0">
              <NuxtLink external class="link-secondary text-decoration-none" to="https://baserow.io/form/Bvg1VhbZvYjYDyylflMoYvqPA7Gogg1GDeTjzO8ku-o" target="_blank">Submit News</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-xl-2 col-12 text-xl-end text-sm-end mt-3 mt-lg-0 align-self-center">
              <NuxtLink external class="link-secondary text-decoration-none" to="https://warpcast.com/carboncopy-refi" target="_blank"><Icon name="simple-icons:farcaster" class="fs-5" /></NuxtLink>&nbsp;&nbsp;&nbsp;
              <NuxtLink external class="link-secondary text-decoration-none" to="https://discord.gg/53TpqNgPC5" target="_blank"><i class="bi bi-discord fs-5"></i></NuxtLink>&nbsp;&nbsp;&nbsp;
              <NuxtLink class="link-secondary text-decoration-none" to="/feed.xml" target="_blank"><i class="bi bi-rss-fill fs-5"></i></NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
