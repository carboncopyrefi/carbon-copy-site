<script setup lang="ts">
import { h, resolveComponent } from 'vue'
import { getPaginationRowModel } from '@tanstack/vue-table'
import type { TableColumn } from '@nuxt/ui'

const table = useTemplateRef('table')
const UBadge = resolveComponent('UBadge')

type Project = {
  logo: string
  name: string
  slug: string
  description: string
  categories: string[]
  location: string
}

const props = defineProps<{
  data?: Project[]
}>()

const projects = computed(() => props.data || [])

const globalFilter = ref('')
const pagination = ref({
  pageIndex: 0,
  pageSize: 10
})

const columns: TableColumn<Project>[] = [
  {
    accessorKey: 'logo',
    header: 'Logo',
    cell: ({ row }) =>
      h('img', {
        src: row.original.logo,
        width: 50,
        alt: row.original.name,
        class: 'img-fluid mx-auto'
      })
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) =>
      h(
        'a',
        {
          href: `/project/${row.original.slug}/`,
          class: 'text-decoration-none text-dark fw-bold fs-6'
        },
        row.original.name
      )
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) =>
      h('span', { class: 'text-balance lg:text-wrap fs-6 text-dark' }, row.original.description)
  },
  {
    accessorKey: 'categories',
    header: 'Category',
    cell: ({ row }) =>
      h(
        'div',
        {},
        row.original.categories.map(category =>
          h(
            'a',
            {
              href: `/projects/categories/${category.replace(/ /g, '-').toLowerCase()}/`,
              class: 'me-2 mb-2 inline-block'
            },
            h(
              UBadge,
              { variant: 'subtle', color: 'secondary', size: 'lg', class: 'text-sm text-dark' },
              () => category
            )
          )
        )
      )
  },
  {
    accessorKey: 'location',
    header: 'Location'
  }
]

watch(globalFilter, () => {
  pagination.value.pageIndex = 0
})

</script>

<template>
  <div class="space-y-4 pb-4">
    <div class="flex flex-col gap-2">
    <UInput
      v-model="globalFilter"
      variant="outline"
      size="xl"
      trailing-icon="i-lucide-search"
      placeholder="Search name, description, category, or location"
    />
    </div>
    <UTable
      ref="table"
      v-model:pagination="pagination"
      v-model:global-filter="globalFilter"
      :data="projects"
      :columns="columns"
      :pagination-options="{ getPaginationRowModel: getPaginationRowModel() }"
      class="flex-1"
    />

    <div class="flex justify-center border-t border-default pt-4">
      <UPagination
        :default-page="(table?.tableApi?.getState().pagination.pageIndex || 0) + 1"
        :items-per-page="table?.tableApi?.getState().pagination.pageSize"
        :total="table?.tableApi?.getFilteredRowModel().rows.length"
        @update:page="(p) => table?.tableApi?.setPageIndex(p - 1)"
      />
    </div>
  </div>
</template>
