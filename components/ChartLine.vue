<template>
    
        <apexchart
            :key="series"
            width="100%"
            :options="options"
            :series="series"
        ></apexchart>
    
</template>
  
<script setup lang="ts">
  
    const props = defineProps<{
        data: Array<any>
        y_symbol?: string
        metric_key: string
    }>()

    const items = props.data;

    const chartName = computed(() => {
        // Find the item that matches the passed name prop
        return items.find(item => item.key === props.metric_key);
    })

    const options = ref({
        chart: {
            type: "line",
            toolbar: {
                show: false
            }
        },
        xaxis:{
            type: 'datetime'
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return props.y_symbol === "$" ? props.y_symbol + value.toLocaleString('en-US') : value.toLocaleString('en-US') + ' ' + props.y_symbol;
                }
            },
        },
        markers: {
            size: 0
        }
    });

    const series = ref([
        {
            name: chartName.value.series,
            data: chartName.value.data
        }
    ]
        
    );
</script>