<script setup lang="ts">
const props = defineProps<{
  data?: Array<any>
}>()

const row_items = props.data;

const columns = [
  { key: 'medium', label: '' },
  { key: 'title', label: 'Title', sortable: true },
  { key: 'topic', label: 'Topic' },
  { key: 'company', label: 'Project', sortable: true },
  { key: 'date', label: 'Date', sortable: true }
]

const q = ref('');
const selectedTopic = ref('');
const selectedMedium = ref('');

const resetFilters = () => {
  q.value = '';
  selectedTopic.value = '';
  selectedMedium.value = '';
};

const page = ref(1);
const pageCount = 20;

// Get unique topics and mediums for filter dropdowns
const topics = computed(() => [...new Set(row_items?.flatMap(item => item.topic || []))]);
const mediums = computed(() => {
  const allMediums = row_items?.flatMap(item => item.medium?.map(m => m.medium) || []);
  return [...new Set(allMediums)]; // Deduplicate
});

const filteredRows = computed(() => {
  return row_items.filter((item) => {
    const titleMatches = item.title.toLowerCase().includes(q.value.toLowerCase());
    const projectMatches = item.company.name.toLowerCase().includes(q.value.toLowerCase());

    const topicMatches = selectedTopic.value ? item.topic.includes(selectedTopic.value) : true;
    const mediumMatches = selectedMedium.value
      ? item.medium.some((m) => m.medium.includes(selectedMedium.value))
      : true;

    return (titleMatches || projectMatches) && topicMatches && mediumMatches;
  }).slice((page.value - 1) * pageCount, page.value * pageCount);
});
</script>


<template>
    <div class="flex items-center justify-between gap-3 px-4 py-3">
      <!-- Search Input -->
      <UInput color="gray" variant="outline" size="xl" v-model="q" class="w-100" icon="i-heroicons-magnifying-glass-20-solid" placeholder="Search title or company" />

    </div>
    <div class="flex justify-end gap-4 px-4 py-3">
      <!-- Topic Filter -->
      <USelect color="gray" v-model="selectedTopic" :options="topics" placeholder="Topic" clearable />
  
      <!-- Medium Filter -->
      <USelect color="gray" class="w-40" v-model="selectedMedium" :options="mediums" placeholder="Medium" clearable />

      <!-- Reset Filters Button -->
      <UButton color="gray" variant="outline" @click="resetFilters">Reset</UButton>
    </div>
  
    <UTable :rows="filteredRows" :columns="columns">
      <template #company-data="{ row }">
        <NuxtLink :to="'/project/' + row.company.slug + '/'">
          <UBadge size="md" class="me-2 mb-2" color="blue" :label="row.company.name" />
        </NuxtLink>
      </template>
  
      <template #topic-data="{ row }">
        <span v-if="!row.topic.length"></span>
        <span v-for="topic in row.topic" :key="topic">{{ topic }} </span>
      </template>
  
      <template #date-data="{ row }">
        <span v-if="!row.date.length"></span>
        <span>{{ row.date }}</span>
      </template>
  
      <template #medium-data="{ row }">
        <span v-if="!row.medium.length"></span>
        <span class="fs-4" v-for="medium in row.medium" :key="medium"><i :class="'text-primary bi bi-' + medium.icon"></i></span>
      </template>
  
      <template #title-data="{ row }">
        <NuxtLink external :to="row.link" target="_blank" class="text-dark fw-bold text-decoration-none">{{ row.title }}</NuxtLink>
      </template>
    </UTable>
  
    <div id="pagination" class="mt-4 justify-content-end text-dark">
      <UPagination v-model="page" :page-count="pageCount" size="lg" :active-button="{ color: 'blue' }" :total="row_items?.length" />
    </div>
  </template>