<template>
  <div>
  <ClientOnly>
    <apexchart
      :key="series  "
      width="100%"
      :options="options"
      :series="series"
    ></apexchart>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">

const options = ref({
  chart: {
    type: "radar",
    toolbar: {
      show: false
    }
  },
  labels: ['Technology', 'Impact', 'Liquidity', 'Volume', 'Revenue potential'],
  yaxis: {
    min: 0,
    max: 100,
    tickAmount: 5
  },
  markers: {
    size: 0
  }
});
const series = ref([
  {
    name: "Radar Series 1",
    data: [45, 52, 38, 24, 33]
  },
]);
</script>
