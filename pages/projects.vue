<script setup lang="ts">

    useHead({
        title: 'ReFi Projects',
    })

    const { data } = await useFetch('https://api.carboncopy.news/projects', {
        lazy: true
    })
    // const { pending, data } = await useFetch('http://127.0.0.1:5000/projects', {
    //     lazy: true
    // })
 
    const row_items = data.value;

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
        key: 'location',
        label: 'Location'
    }]

    const q = ref('');
    const page = ref(1)
    const pageCount = 10
    
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

    <h1 class="mt-5 mb-3">ReFi Projects</h1>

    <div class="py-3">
        <UInput color="gray" variant="outline" size="xl" v-model="q" icon="i-heroicons-magnifying-glass-20-solid" placeholder="Search name, sector, location" name="input" />
    </div>

    <UTable :rows="filteredRows" :columns="columns" :loading="pending">

        <template #sectors-data="{ row }">
            <UBadge size="md" class="me-2" v-for="sector in row.sectors" :color="'blue'" :label="sector" />
        </template>

        <template #name-data="{ row }">
            <NuxtLink class="text-decoration-none text-dark fw-bold" :to="'/project/' + row.slug + '/'">{{ row.name }}</NuxtLink>
        </template>

        <template #description-data="{ row }">
            {{ row.description.slice(0,65) + '...' }}
        </template>

    </UTable>

    <div id="pagination" class="mt-4 justify-content-end">
        <UPagination v-model="page" :page-count="pageCount" size="md" :active-button="{ color: 'blue' }" :total="row_items.length" />
    </div>

</template> 
