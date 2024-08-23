<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{
  id?: string
  title?: string
  body?: string
}>()

const linksContainer = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (linksContainer.value) {
    const links = linksContainer.value.querySelectorAll('a')
    links.forEach(link => {
      link.setAttribute('target', '_blank')
    })
  }
})

</script>

<template>

<a data-bs-toggle="modal" :data-bs-target="'#' + id" class="fs-4 ms-2" role="button"><i class="bi bi-info-circle-fill"></i></a>

<div class="modal fade" :id="id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">{{ title }}</h1>
        </div>
        <div class="modal-body milestone fs-5" ref="linksContainer">
          <p v-if="body" v-html=body></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

</template>