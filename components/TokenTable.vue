<script setup lang="ts">
import { h, ref } from 'vue'
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

const columns: TableColumn[] = [
  {
    accessorKey: 'logo',
    header: 'Logo',
    cell: ({ row }) =>
      h('img', {
        src: row.original.logo,
        width: 50,
        class: 'img-fluid',
        alt: row.original.project
      })
  },
  {
    accessorKey: 'project',
    header: 'Project',
    enableSorting: true,
    cell: ({ row }) =>
      h(
        'a',
        {
          href: `/project/${row.original.slug}/`,
          class: 'text-decoration-none text-black fs-6'
        },
        row.original.project
      )
  },
  {
    accessorKey: 'symbol',
    header: 'Symbol',
    cell: ({ row }) =>
      h(
        'a',
        {
          href: row.original.url,
          target: '_blank',
          class: 'me-2 mb-2 text-dark fw-bold fs-5'
        },
        [
          h('span', {}, [
            h(
              resolveComponent('UBadge'),
              { size: 'md', color: 'blue', class: 'fs-6' },
              () => row.original.symbol
            )
          ])
        ]
      )
  },
  {
    accessorKey: 'price_usd',
    header: 'Price',
    enableSorting: true,
    cell: ({ row }) =>
      h('span', { class: 'text-dark fw-bold fs-6' }, `$${row.original.price_usd}`)
  },
  {
    accessorKey: 'percent_change',
    header: 'Percent Change',
    enableSorting: true,
    cell: ({ row }) => {
      const change = row.original.percent_change
      if (change < 0) {
        return h(
          'span',
          { class: 'text-danger fs-6' },
          [h('i', { class: 'bi bi-arrow-down-square-fill' }), ` ${change}%`]
        )
      } else if (change > 0) {
        return h(
          'span',
          { class: 'text-success fs-6' },
          [h('i', { class: 'bi bi-arrow-up-square-fill' }), ` ${change}%`]
        )
      } else {
        return h('span', { class: 'fs-6 text-dark' }, 'N/A')
      }
    }
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
      trailing-icon="i-heroicons-magnifying-glass-20-solid"
      placeholder="Search project or token symbol"
    />
    </div>

    <UTable
      ref="table"
      v-model:pagination="pagination"
      v-model:global-filter="globalFilter"
      :data="props.data"
      :columns="columns"
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
