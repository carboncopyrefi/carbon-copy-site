
<script setup lang="ts">
import type { RefSymbol } from "@vue/reactivity";
import { ref } from "vue";

const meta = ref(null);
const description = ref(null);
const title = ref(null);

const props = defineProps<{
  url?: string
}>()

const { data } = await useFetch("/api/preview", {
  query: {
    url: props.url,
  },
});

meta.value = data.value?.preview;
description.value = data.value.preview?.description
title.value = data.value.preview?.title

</script>

<template>

<div v-if="data" class="row">
  <div class="col">
    <div class="card shadow-sm mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <NuxtImg v-if="meta['image']" v-bind:src="meta['image']" class="card-img-top img-fluid" style="object-fit: cover;height:100%; width:100%;" alt="" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <NuxtLink :to="meta['url']" class="text-decoration-none text-dark" target="_blank"><h5 class="card-title fw-bold article-title" v-html=title></h5></NuxtLink>
            <p class="article-description card-text">{{ (description?.length > 200) ? description?.slice(0,200) + "..." : description }}</p>
            <p class="card-text"><small class="text-body-secondary preview-link">{{ meta['url'] }}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</template>
