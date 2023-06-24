<script setup>

  const { data } = await useFetch('http://127.0.0.1:5000/articles')

</script>

<template v-if="data">

    <h3 class="pb-4 mb-1 mt-5">
    ReFi News
    </h3>

    <ArticleCard :data=data :col=4 :margin=3></ArticleCard>

</template>
