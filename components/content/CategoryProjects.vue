<script setup lang="ts">

const props = defineProps<{
  category?: string
}>()

const { status, data } = await useFetch(`https://api.carboncopy.news/projects/categories/${props.category}`)

</script>


<template>

    <div v-for="p in data.projects">
        <div class="card mb-3 shadow-sm landscape">
            <div class="row g-0">
                <div class="col-lg-2 col-md-4 p-lg-3 pt-4 pb-3 px-3 d-flex">
                    <NuxtImg :src="p.logo" class="mx-md-auto img-fluid" :alt="p.name" loading="lazy" style="object-fit:contain;" />
                </div>
                <div class="col-lg-10 col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ p.name }}</h5>
                        <p class="card-text fs-6">{{  p.short_description }}</p>
                        <NuxtLink :to="'/project/' + p.slug + '/'" class="btn btn-primary">View Profile</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>