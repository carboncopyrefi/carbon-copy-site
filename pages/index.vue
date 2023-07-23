<script setup lang="ts">
  useHead({
    title: 'Leading ReFi Information Source',
  })

  const { data: learn } = await useAsyncData('learn', () => queryContent('/learn').limit(2).find())
  const { data: features } = await useAsyncData('features', () => queryContent('/features').limit(3).find())

</script>

<template>

  <Features :data=features />
  <div class="row mb-5">
    <div class="col-md-8">
      <Learn :data=learn />
      <Feed />
    </div>
    <div class="col-md-4">
      <ProjectNews />
    </div>
  </div>
  <Projects />
</template>
