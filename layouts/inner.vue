<script setup>

const { path } = useRoute()

const { data } = await useAsyncData('article', () => queryContent().where({_path:path}).findOne())


</script>

<template>

  <AppHeader />
    <main class="container">
      <div class="row mt-5 mb-3">
        <div class="col-12 col-lg-8 offset-lg-1">
          <h1 class="mb-3">{{ data.title }}</h1>
          <slot />
        </div>
      </div>
    </main>
  <AppFooter />

</template>
