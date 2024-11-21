<script setup lang="ts">

const props = defineProps<{
  metric_key: string
  data: Array<any>
  metric_note: string
  bg_color: string
}>()

const items = props.data;

const metricItem = computed(() => {
      // Find the item that matches the passed name prop
      return items.find(item => item.key === props.metric_key);
    }
)

const modal_body = computed (() => {
    return "<p>" + props.metric_note + "</p>" + "<p><strong>Data Sources</strong><br />" + metricItem.value.projects.join('<br>') + "</p>"
    }
)

const metric_background = computed(() => {
    return { 'background-color': props.bg_color }
})

</script>

<template>
    <div v-if="metricItem" class="col-md-6 col-lg-12 col-xl-6 col-12 mb-2">
        <div class="card h-100">
            <div class="card-body">
            <span class="fs-2">{{ metricItem.value }}</span><span>&nbsp;{{ metricItem.unit }}</span>
            </div>
            <div class="card-footer" :style="metric_background">
                {{ metricItem.name }} &nbsp;&nbsp;<Modal :id="metricItem.value" :title="metricItem.name" :body="modal_body"></Modal>
            </div>
        </div>
    </div>
</template>