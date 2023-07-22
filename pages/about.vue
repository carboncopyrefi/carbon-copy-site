<script setup>
  definePageMeta({
    layout: "article",
  });

  const { data } = await useAsyncData('about', () => queryContent().findOne())

</script>

<template>

  <div class="about-body">
    <ContentDoc />
  </div>

</template>
