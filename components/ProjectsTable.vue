<script setup lang="ts">

const props = defineProps<{
  data?: Array<any>
}>()

const row_items = props.data;

const columns = [{
    key: 'logo',
    label: 'Logo'
}, {
    key: 'name',
    label: 'Name',
    sortable: true,
}, {
    key: 'description',
    label: 'Description',
}, {
    key: 'categories',
    label: 'Category'
}, {
    key: 'location',
    label: 'Location'
}]// {
//     key: 'protocol',
//     label: 'Protocol(s)'
// }]

const q = ref('');
const page = ref(1)
const pageCount = 20

const filteredRows = computed(() => {  
    if (!q.value) {    
        return row_items.slice((page.value - 1) * pageCount, (page.value) * pageCount)
    }  
    if (q.value) {
        return row_items.filter((project) => {    
            return Object.values(project).some((value) => {      
                return String(value).toLowerCase().includes(q.value.toLowerCase())    
            }) 
        })
    }
    
})

</script>

<template>
    <div class="py-3">
        <UInput color="gray" variant="outline" size="xl" v-model="q" icon="i-heroicons-magnifying-glass-20-solid" placeholder="Search name, description, category, or location" name="input" />
    </div>

    <UTable :rows="filteredRows" :columns="columns">

        <template #categories-data="{ row }">
            <NuxtLink v-for="category in row.categories" :to="'/projects/categories/' + category.replace(/ /g,'-').toLowerCase() + '/'"><UBadge size="md" class="me-2 mb-2 fs-6" :color="'blue'" :label="category" /><br/></NuxtLink>
        </template>

        <!-- <template #protocol-data="{ row }">
            <span v-if="row.protocol.length > 0">
                <UBadge size="md" class="me-2" v-for="p in row.protocol" :color="'purple'">{{ p }}</UBadge>
            </span>
            <span v-else>
                &nbsp;
            </span>
        </template> -->

        <template #name-data="{ row }">
            <NuxtLink class="text-decoration-none text-dark fw-bold fs-6" :to="'/project/' + row.slug + '/'">{{ row.name }}</NuxtLink>
        </template>

        <template #description-data="{ row }">
            <span class="text-balance lg:text-wrap fs-6 text-dark">{{ row.description}}</span>
        </template>

        <template #location-data="{ row }">
            <span class="text-balance lg:text-wrap fs-6 text-dark">{{ row.location}}</span>
        </template>

        <template #logo-data="{ row }">
            <NuxtImg width="50" :src="row.logo" class="img-fluid mx-auto" loading="lazy" :alt="row.project" />
        </template>
    </UTable>

    <div id="pagination" class="mt-4 justify-content-end text-dark">
        <UPagination v-model="page" :page-count="pageCount" size="lg" :active-button="{ color: 'blue' }" :total="row_items?.length" />
    </div>

</template>