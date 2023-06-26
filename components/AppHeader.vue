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
  <div class="nav-scroller py-1 mb-2">
    <nav class="nav d-flex justify-content-between">
      <NuxtLink class="p-2 link-secondary text-decoration-none" to="/">Front Page</NuxtLink>
      <NuxtLink class="p-2 link-secondary text-decoration-none" to="/features">Features</NuxtLink>
      <NuxtLink class="p-2 link-secondary text-decoration-none" to="/learn">Learn</NuxtLink>
      <NuxtLink class="p-2 link-secondary text-decoration-none" to="/about">About CARBON Copy</NuxtLink>
      <NuxtLink class="p-2 link-secondary text-decoration-none" to="https://baserow.io/form/Bvg1VhbZvYjYDyylflMoYvqPA7Gogg1GDeTjzO8ku-o" target="_blank">Submit News</NuxtLink>
    </nav>
  </div>
</div>

</template>
