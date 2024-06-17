<template>

<div class="container">
  <header class="py-3 border-bottom border-light-subtle">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1">

      </div>
      <div class="col-lg-2 col-4 text-center">
        <NuxtLink to="/"><NuxtImg src="/logo.png" style="width:100%" alt="CARBON Copy Logo" /></NuxtLink>
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
          <li class="nav-item dropdown py-3 py-lg-0 m-0">
            <a class="nav-item text-decoration-none dropdown-toggle link-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Articles
            </a>
            <ul class="dropdown-menu">
              <li><NuxtLink class="link-secondary text-decoration-none dropdown-item py-3 py-lg-0" to="/features/">Features</NuxtLink></li>
              <li><NuxtLink class="link-secondary text-decoration-none dropdown-item py-3 py-lg-0" to="/learn/">Learn</NuxtLink></li>
            </ul>
          </li>
          <li class="nav-item dropdown py-3 py-lg-0 m-0">
            <a class="nav-item text-decoration-none dropdown-toggle link-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Data
            </a>
            <ul class="dropdown-menu">
              <li><NuxtLink class="link-secondary text-decoration-none dropdown-item py-3 py-lg-0" to="/projects/">Company Database</NuxtLink></li>
              <li><NuxtLink class="link-secondary text-decoration-none dropdown-item py-3 py-lg-0" to="/events/">ReFi Events</NuxtLink></li>
            </ul>
          </li>
          <li class="nav-item py-3 py-lg-0">
            <NuxtLink class="link-secondary text-decoration-none" to="/this-week-in-refi/">This Week in ReFi</NuxtLink>
          </li>
          <li class="nav-item py-3 py-lg-0">
            <NuxtLink class="link-secondary text-decoration-none" to="/about/">About</NuxtLink>
          </li>
          <li class="nav-item py-3 py-lg-0">
            <NuxtLink class="link-secondary text-decoration-none" to="https://baserow.io/form/Bvg1VhbZvYjYDyylflMoYvqPA7Gogg1GDeTjzO8ku-o" target="_blank">Submit News</NuxtLink>
          </li>
          <li class="nav-item py-3 py-lg-0">
            <NuxtLink class="link-secondary text-decoration-none" to="https://twitter.com/carboncopy_refi" target="_blank"><i class="bi bi-twitter-x fs-5"></i></NuxtLink>&nbsp;&nbsp;&nbsp;
            <NuxtLink class="link-secondary text-decoration-none" to="https://discord.gg/53TpqNgPC5" target="_blank"><i class="bi bi-discord fs-5"></i></NuxtLink>&nbsp;&nbsp;&nbsp;
            <NuxtLink class="link-secondary text-decoration-none" to="/feed.xml" target="_blank"><i class="bi bi-rss-fill fs-5"></i></NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>

</template>
