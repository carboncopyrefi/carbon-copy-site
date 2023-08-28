<script setup>

  const currentYear  = new Date().getFullYear();

</script>

<template>
  <footer class="bg-light border-top border-light-subtle py-5 mt-5">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-4 col-10">
          <a href="/"><nuxt-img src="/logo.png" style="width:30%" alt="CARBON Copy Logo" /></a>
          <p class="mt-2  "><small>Copyright &copy; {{ currentYear }} CARBON Copy</small></p>
        </div>
        <div class="col-lg-8 align-self-center">
          <ul class="nav justify-content-lg-between flex-lg-row flex-column">
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
            <li class="nav-item py-3 py-lg-0">
              <NuxtLink class="link-secondary text-decoration-none" to="https://twitter.com/carboncopy_refi" target="_blank"><i class="bi bi-twitter fs-5"></i></NuxtLink>&nbsp;&nbsp;&nbsp;<NuxtLink class="link-secondary text-decoration-none" to="https://discord.carboncopy.news" target="_blank"><i class="bi bi-discord fs-5"></i></NuxtLink>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </footer>
</template>
