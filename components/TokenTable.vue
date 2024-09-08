<script setup lang="ts">

const props = defineProps<{
  data?: Array<any>
}>()

const row_items = props.data;

const columns = [{
    key: 'logo',
    label: 'Logo'
}, {
    key: 'project',
    label: 'Project',
    sortable: true,
}, {
    key: 'symbol',
    label: 'Symbol'
}, {
    key: 'price_usd',
    label: 'Price',
    sortable: true
}, {
    key: 'percent_change',
    label: 'Percent Change',
    sortable: true
}]

const q = ref('');
const page = ref(1)
const pageCount = 20

const filteredRows = computed(() => {  
    if (!q.value) {    
        return row_items.slice((page.value - 1) * pageCount, (page.value) * pageCount)
    }  
    if (q.value) {
        return row_items.filter((token) => {    
            const projectMatches = token.project.toLowerCase().includes(q.value.toLowerCase());
            const symbolMatches = token.symbol.toLowerCase().includes(q.value.toLowerCase());
            return projectMatches || symbolMatches;
        }).slice((page.value - 1) * pageCount, (page.value) * pageCount);
    }
    
})

</script>

<template>
    <div class="py-3">
        <UInput color="gray" variant="outline" size="xl" v-model="q" icon="i-heroicons-magnifying-glass-20-solid" placeholder="Search project or token symbol" name="input" />
    </div>

    <UTable :rows="filteredRows" :columns="columns">

        <template #logo-data="{ row }">
            <NuxtImg width="50" :src="row.logo" class="img-fluid mx-auto" :alt="row.project" loading="lazy" />
        </template>
        
        <template #project-data="{ row }">
            <NuxtLink :to="'/project/' + row.slug + '/'" class="text-decoration-none text-black fs-6">{{ row.project }}</NuxtLink>
        </template>

        <template #symbol-data="{ row }">
            <span class="text-dark fw-bold fs-5"><NuxtLink external :to="row.url" target="_blank"><UBadge size="md" class="me-2 mb-2 fs-6" :color="'blue'" :label="row.symbol" /></NuxtLink></span>
        </template>

        <template #price_usd-data="{ row }">
            <span class="text-dark fw-bold fs-6">${{ row.price_usd }}</span>
        </template>

        <template #percent_change-data="{ row }">
            <span v-if="row.percent_change < 0" class="text-danger fs-6"><i class="bi bi-arrow-down-square-fill"></i> {{ row.percent_change }}%</span>
            <span v-else-if="row.percent_change > 0" class="text-success fs-6"><i class="bi bi-arrow-up-square-fill"></i> {{ row.percent_change }}%</span>
            <span v-else class="fs-6 text-dark">N/A</span>
        </template>

    </UTable>

    <div id="pagination" class="mt-4 justify-content-end text-dark">
        <UPagination v-model="page" :page-count="pageCount" size="lg" :active-button="{ color: 'blue' }" :total="row_items?.length" />
    </div>

</template>