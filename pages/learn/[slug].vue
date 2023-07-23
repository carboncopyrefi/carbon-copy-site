<script setup>
  definePageMeta({
    layout: "article",
  });

  const { path } = useRoute()

  const { data } = await useAsyncData(`content-${path}`, () => queryContent().where({_path:path}).findOne())

</script>

<template>

  <Article :data=data></Article>

</template>
