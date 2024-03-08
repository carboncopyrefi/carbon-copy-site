<script setup lang="ts">

const props = defineProps<{
  data?: array
}>()

const row_items = props.data;

const columns = [{
    key: 'name',
    label: 'Name',
    sortable: true,
}, {
    key: 'description',
    label: 'Description',
}, {
    key: 'sectors',
    label: 'Sector(s)'
}, {
    key: 'protocol',
    label: 'Protocol(s)'
}]

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
        <UInput color="gray" variant="outline" size="xl" v-model="q" icon="i-heroicons-magnifying-glass-20-solid" placeholder="Search name, sector, protocol" name="input" />
    </div>

    <UTable :rows="filteredRows" :columns="columns">

        <template #sectors-data="{ row }">
            <UBadge size="md" class="me-2" v-for="sector in row.sectors" :color="'blue'" :label="sector" />
        </template>

        <template #protocol-data="{ row }">
            <span v-if="row.protocol.length > 0">
                <UBadge size="md" class="me-2" v-for="p in row.protocol" :color="'purple'">{{ p }}</UBadge>
            </span>
            <span v-else>
                &nbsp;
            </span>
        </template>

        <template #name-data="{ row }">
            <NuxtLink class="text-decoration-none text-dark fw-bold" :to="'/project/' + row.slug + '/'">{{ row.name }}</NuxtLink>
        </template>

        <template #description-data="{ row }">
            {{ row.description.slice(0,65) + '...' }}
        </template>

    </UTable>

    <div id="pagination" class="mt-4 justify-content-end text-dark">
        <UPagination v-model="page" :page-count="pageCount" size="md" :active-button="{ color: 'blue' }" :total="row_items?.length" />
    </div>

</template>