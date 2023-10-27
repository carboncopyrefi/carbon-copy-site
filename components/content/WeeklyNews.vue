<script setup lang="ts">

const props = defineProps<{
  startDate?: string
  endDate?: string
}>()

const { data } = await useFetch('https://api.carboncopy.news/news?', {
    query: { startDate: props.startDate, endDate: props.endDate }
})

// const { data } = await useFetch('http://127.0.0.1:5000/news?', {
//     query: { startDate: props.startDate, endDate: props.endDate }
// })

</script>

<template>

    <div v-if="data">
        <div class="card shadow-sm p-3">
            <div v-for="item in data" class="p-3">
                <i class="bi bi-newspaper me-2"></i><NuxtLink :to="item.link" target="_blank" class="text-decoration-none text-dark"><span class="article-title mb-1">{{ item.title }}&nbsp;&nbsp;<i class="bi bi-box-arrow-up-right"></i></span></NuxtLink>
            </div>
        </div>
    </div>
    
</template>


    
