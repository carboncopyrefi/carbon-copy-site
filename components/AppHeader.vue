<template>

<div class="container">
  <header class="py-3 border-bottom border-light-subtle">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1">

      </div>
      <div class="col-lg-2 col-4 text-center">
        <a href="/"><nuxt-img src="/logo.png" style="width:100%" alt="CARBON Copy Logo" /></a>
      </div>
      <div class="col-4 d-flex justify-content-end align-items-center">
        <!--<a class="btn btn-outline-secondary" href="#">Subscribe</a>-->
      </div>
    </div>
  </header>

  <div class="mb-2 py-1">
    <nav class="navbar navbar-expand-lg justify-content-end">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-between d-flex w-100">
          <li class="nav-item py-3 py-lg-0">
            <NuxtLink class="link-secondary text-decoration-none" to="/">Front Page</NuxtLink>
          </li>
          <li class="nav-item py-3 py-lg-0">
            <NuxtLink class="link-secondary text-decoration-none" to="/features">Features</NuxtLink>
          </li>
          <li class="nav-item py-3 py-lg-0">
            <NuxtLink class="link-secondary text-decoration-none" to="/learn">Learn</NuxtLink>
          </li>
          <li class="nav-item py-3 py-lg-0">
            <NuxtLink class="link-secondary text-decoration-none" to="/about">About CARBON Copy</NuxtLink>
          </li>
          <li class="nav-item py-3 py-lg-0">
            <NuxtLink class="link-secondary text-decoration-none" to="https://baserow.io/form/Bvg1VhbZvYjYDyylflMoYvqPA7Gogg1GDeTjzO8ku-o" target="_blank">Submit News</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>

</template>
