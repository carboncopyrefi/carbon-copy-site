<script setup lang="ts">
import { ref, h, watch, computed, resolveComponent } from 'vue'
import type { TableColumn } from '@nuxt/ui'
import { getPaginationRowModel } from '@tanstack/vue-table'

const props = defineProps<{
  data?: Array<any>
}>()

const globalFilter = ref('')
const selectedTopic = ref('')
const selectedMedium = ref('')
const pagination = ref({ pageIndex: 0, pageSize: 20 })
const sorting = ref([])

const table = useTemplateRef('table')

// Reset filters
const resetFilters = () => {
  globalFilter.value = ''
  selectedTopic.value = ''
  selectedMedium.value = ''
}

// Get unique topics and mediums
const topics = computed(() => {
  const unique = new Set(props.data?.flatMap((item) => item.topic || []))
  return [...unique].filter(Boolean).map((topic) => ({
    label: topic,
    value: topic
  }))
})

const mediums = computed(() => {
  const allMediums = props.data?.flatMap((item) =>
    item.medium?.map((m) => m.medium) || []
  )
  return [...new Set(allMediums)].filter(Boolean).map((medium) => ({
    label: medium,
    value: medium
  }))
})

// Filtered + paginated rows
const filteredData = computed(() => {
  const filterText = globalFilter.value.toLowerCase()
  return props.data?.filter((item) => {
    const titleMatches = item.title.toLowerCase().includes(filterText)
    const companyMatches = item.company?.name?.toLowerCase().includes(filterText) || false

    const topicMatches = selectedTopic.value
      ? item.topic.includes(selectedTopic.value)
      : true

    const mediumMatches = selectedMedium.value
      ? item.medium?.some((m) => m.medium.includes(selectedMedium.value))
      : true

    return (titleMatches || companyMatches) && topicMatches && mediumMatches
  }) || []
})

// Reset pagination on filter change
watch([globalFilter, selectedTopic, selectedMedium], () => {
  pagination.value.pageIndex = 0
})

const columns: TableColumn[] = [
  {
    accessorKey: 'medium',
    header: '',
    cell: ({ row }) => {
      return h('div', {}, (row.original.medium || []).map((medium: any, i: number) =>
        h('span', {
          key: `${row.original.title}-${medium.icon}-${i}`,
          class: 'fs-4 me-2'
        }, [
          h('i', { class: `text-primary bi bi-${medium.icon}` })
        ])
      ))
    }
  },
  {
    accessorKey: 'title',
    header: ({ column }) => {
      const isSorted = column.getIsSorted()
      return h(resolveComponent('UButton'), {
        color: 'neutral',
        variant: 'ghost',
        label: 'Title',
        icon: isSorted
          ? isSorted === 'asc'
            ? 'i-lucide-arrow-up-narrow-wide'
            : 'i-lucide-arrow-down-wide-narrow'
          : 'i-lucide-arrow-up-down',
        class: '-mx-2.5',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc')
      })
    },
    enableSorting: true,
    cell: ({ row }) => h('a', {
      href: row.original.link,
      target: '_blank',
      class: 'text-dark fw-bold text-decoration-none'
    }, row.original.title)
  },
  {
    accessorKey: 'topic',
    header: 'Topic',
    cell: ({ row }) =>
      (Array.isArray(row.original.topic) ? row.original.topic : [row.original.topic])
        .filter(Boolean)
        .map((t: string, i: number) =>
        h('span', { key: `${row.original.id || row.original.title}-${i}`, class: 'me-2' }, t)
      )
  },
  {
  accessorKey: 'company',
  header: ({ column }) => {
    const isSorted = column.getIsSorted()
    return h(resolveComponent('UButton'), {
      color: 'neutral',
      variant: 'ghost',
      label: 'Source',
      icon: isSorted
        ? isSorted === 'asc'
          ? 'i-lucide-arrow-up-narrow-wide'
          : 'i-lucide-arrow-down-wide-narrow'
        : 'i-lucide-arrow-up-down',
      class: '-mx-2.5',
      onClick: () => column.toggleSorting(column.getIsSorted() === 'asc')
    })
  },
  enableSorting: true,
  sortingFn: (rowA, rowB) => {
    const nameA = rowA.original.company?.name?.toLowerCase() || ''
    const nameB = rowB.original.company?.name?.toLowerCase() || ''
    return nameA.localeCompare(nameB)
  },
  cell: ({ row }) =>
    h('a', {
      href: `/project/${row.original.company.slug}/`,
    }, [
      h(resolveComponent('UBadge'), {
        size: 'md',
        variant: 'subtle',
        color: 'secondary',
        class: 'text-sm',
        label: row.original.company.name,
      })
    ])
},
  {
    accessorKey: 'date',
    header: 'Date',
    enableSorting: true,
    cell: ({ row }) =>
      h('span', {}, row.original.date || '')
  }
]
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap justify-between gap-4 py-3">
      <UInput
        v-model="globalFilter"
        variant="outline"
        size="xl"
        class="w-full sm:w-1/2"
        trailing-icon="i-heroicons-magnifying-glass-20-solid"
        placeholder="Search title or company"
      />
      <div class="flex flex-wrap gap-3 items-center">
        <USelect
          v-model="selectedTopic"
          :items="topics"
          value-key="value"
          class="w-64"
          placeholder="Topic"
          clearable
        />

        <USelect
          v-model="selectedMedium"
          :items="mediums"
          class="w-48"
          value-key="value"
          placeholder="Medium"
          clearable
        />


        <UButton color="neutral" variant="outline" @click="resetFilters">Reset</UButton>
      </div>
    </div>

    <UTable
      ref="table"
      v-model:sorting="sorting"
      :data="filteredData"
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
