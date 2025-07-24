<script setup lang="ts">
import { ref, h, watch } from 'vue'
import type { TableColumn } from '@nuxt/ui'
import { getPaginationRowModel } from '@tanstack/vue-table'

const props = defineProps<{
  data?: Array<any>
}>()

const table = useTemplateRef('table')
const globalFilter = ref('')
const pagination = ref({
  pageIndex: 0,
  pageSize: 20
})

// Optional: Reset to first page on filter change
watch(globalFilter, () => {
  pagination.value.pageIndex = 0
})

const columns: TableColumn[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    enableSorting: true,
    cell: ({ row }) =>
      h('span', { class: 'text-dark fw-bold fs-6' }, row.original.name)
  },
  {
    accessorKey: 'projects',
    header: 'Project(s)',
    cell: ({ row }) => {
      const projects = row.original.projects || []
      if (!projects.length) return ''
      return h('div', {}, projects.map((project: any) =>
        h('a', {
          href: `/project/${project.slug}/`,
          class: 'me-2 mb-2 text-decoration-none inline-block',
        }, [
          h(resolveComponent('UBadge'), {
            size: 'md',
            color: 'secondary',
            variant: 'subtle',
            class: 'fs-6',
            label: project.company,
          })
        ])
      ))
    }
  },
  {
    accessorKey: 'contacts',
    header: 'Contacts',
    cell: ({ row }) => {
      const contacts = row.original.contacts || []
      if (!contacts.length) return ''
      return h('div', {}, contacts.map((contact: any) =>
        h('a', {
          href: contact.link,
          target: '_blank',
          class: 'fs-4 me-3',
        }, [
          h('i', { class: `bi bi-${contact.icon}` })
        ])
      ))
    }
  }
]
</script>

<template>
  <div class="space-y-4 pb-4">
    <div class="flex flex-col gap-2">
    <UInput
      v-model="globalFilter"
      variant="outline"
      size="xl"
      trailing-icon="i-heroicons-magnifying-glass-20-solid"
      placeholder="Search name or project"
    />
    </div>

    <UTable
      ref="table"
      :data="props.data"
      :columns="columns"
      v-model:global-filter="globalFilter"
      v-model:pagination="pagination"
      :pagination-options="{ getPaginationRowModel: getPaginationRowModel() }"
    />

    <div class="flex justify-center border-t border-default pt-4">
      <UPagination
        :default-page="(table?.tableApi?.getState().pagination.pageIndex || 0) + 1"
        :items-per-page="table?.tableApi?.getState().pagination.pageSize"
        :total="table?.tableApi?.getFilteredRowModel().rows.length"
        @update:page="(p) => table?.tableApi?.setPageIndex(p - 1)"
        size="lg"
        :active-button="{ color: 'blue' }"
      />
    </div>
  </div>
</template>
