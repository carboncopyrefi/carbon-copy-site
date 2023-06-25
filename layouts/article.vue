<script setup>

const { path } = useRoute()

const { data } = await useAsyncData(`content-${path}`, () => queryContent().where({_path:path}).findOne())

</script>

<template>

  <AppHeader />
    <main class="container">
      <div class="row mt-5 mb-3">
        <div class="col-12 col-lg-8 offset-lg-1">
          <p class="text-primary text-uppercase fw-bold fs-5">{{ data.category }}</p>
          <h1>{{ data.title }}</h1>
          <p class="fs-5 text-secondary">{{ data.description }}</p>
          <p><span class="fw-bold">By {{ data.author }}</span> | {{ data.date }}</p>
          <nuxt-img v-bind:src="data.image" style="width: 100%;" />
          <br /><br />
          <slot />
        </div>
      </div>
    </main>
  <AppFooter />

</template>
