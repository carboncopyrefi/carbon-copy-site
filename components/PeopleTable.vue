<script setup lang="ts">

const props = defineProps<{
  data?: Array<any>
}>()

const row_items = props.data;

const columns = [{
    key: 'name',
    label: 'Name',
    sortable: true,
}, {
    key: 'projects',
    label: 'Project(s)'
}, {
    key: 'contacts',
    label: 'Contacts'
}]

const q = ref('');
const page = ref(1)
const pageCount = 20

const filteredRows = computed(() => {  
    if (!q.value) {    
        return row_items.slice((page.value - 1) * pageCount, (page.value) * pageCount)
    }  
    if (q.value) {
        return row_items.filter((person) => {    
            const nameMatches = person.name.toLowerCase().includes(q.value.toLowerCase());
            const projectMatches = person.projects.some((project: { company: string }) => 
                project.company.toLowerCase().includes(q.value.toLowerCase())
            );
            return nameMatches || projectMatches;
        }).slice((page.value - 1) * pageCount, (page.value) * pageCount);
    }
    
})

</script>

<template>
    <div class="py-3">
        <UInput color="gray" variant="outline" size="xl" v-model="q" icon="i-heroicons-magnifying-glass-20-solid" placeholder="Search name or company" name="input" />
    </div>

    <UTable :rows="filteredRows" :columns="columns">

        <template #projects-data="{ row }">
            <span v-if="!row.projects.length"></span>
            <NuxtLink v-for="project in row.projects" :to="'/project/' + project.slug + '/'"><UBadge size="md" class="me-2 mb-2 fs-6" :color="'blue'" :label="project.company" /><br/></NuxtLink>
        </template>

        <template #contacts-data="{ row }">
            <span v-if="!row.contacts.length"></span>
            <NuxtLink class="fs-4 me-3" v-for="contact in row.contacts" external target="_blank" :to="contact.link"><i :class="'bi bi-' + contact.icon"></i></NuxtLink>
        </template>

        <template #name-data="{ row }">
            <span class="text-dark fw-bold fs-6">{{ row.name }}</span>
        </template>

    </UTable>

    <div id="pagination" class="mt-4 justify-content-end text-dark">
        <UPagination v-model="page" :page-count="pageCount" size="lg" :active-button="{ color: 'blue' }" :total="row_items?.length" />
    </div>

</template>