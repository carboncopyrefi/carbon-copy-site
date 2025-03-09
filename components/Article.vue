<script setup lang="ts">
import { ContentRenderer } from '#components';


const props = defineProps<{
  data?: any
}>()

const dateStr = props.data.date;
const cleanedDateStr = dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1');
const dateObj = new Date(Date.parse(cleanedDateStr));
const formattedDate = dateObj.toISOString().split('T')[0];

useJsonld({
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': props.data.title,
    'author': {
    '@type': 'Person',
    'name': props.data.author
    },
    'datePublished': formattedDate,
    'image': props.data.mainImage[0] === 'h' ? props.data.mainImage : 'https://carboncopy.news' + props.data.mainImage
});

</script>


<template>
  <div v-if="data">
      <p class="text-primary text-uppercase fw-bold fs-5">{{ data.category }}</p>
      <h1 class="article-title">{{ data.title }}</h1>
      <p class="fs-5 text-secondary article-description">{{ data.description }}</p>
      <div class="d-md-flex justify-content-md-between mb-3">
        <div class="align-self-center">
          <span class="fw-bold">By
            <template v-for="(author, index) in data.author.split(',')" :key="index">
              <NuxtLink class="text-decoration-none" :to="'/authors/' + author.trim().replace(/\s+/g, '-').toLowerCase() + '/'">
                {{ author.trim() }}
              </NuxtLink>
              <span v-if="index < data.author.split(',').length - 1">, </span>
            </template>
          </span> | {{ data.date }}
        </div>
        <div class="align-self-center mt-3 mt-md-0">
          <SocialShare :data=data />
        </div>
      </div>
      <NuxtImg :src="data.mainImage" style="width: 100%;" sizes="400px lg:800px" loading="lazy" alt="" />
      <span class="text-center small text-secondary d-block mt-2" v-html="data?.mainImageCaption"></span>

      <div class="article-body mt-4">
        <ContentRenderer :value="data.body" />
      </div>
  </div>
</template>
