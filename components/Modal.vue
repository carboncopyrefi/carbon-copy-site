<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{
  id?: string
  title?: string
  body?: string
  status?: string
  completed?: string
  details?: Array<string>
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

<a href="" data-bs-toggle="modal" :data-bs-target="'#' + id" class="fs-5"><i class="bi bi-info-circle-fill"></i></a>

<div class="modal fade" :id="id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">{{ title }}</h1>
        </div>
        <div class="modal-body milestone fs-6" ref="linksContainer">
          <p v-if="body" v-html=body></p>
          <div v-if="details">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Year</th>
                  <th scope="col">Round</th>
                  <th scope="col">Amount</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in details">
                  <td>{{ item.year }}</td>
                  <td>{{ item.round }}</td>
                  <td>{{ item.amount === "0.00" ? "Undisclosed" : "$" + item.amount }}</td>
                  <td><NuxtLink external v-if="item.url" :to="item?.url" target="_blank" class="text-decoration-none">Details</NuxtLink></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p><span v-if="status === 'Overdue'" class="badge text-bg-danger">{{ status }}</span><span v-if="status === 'In Progress'" class="badge text-bg-secondary">{{ status }}</span><span v-if="status === 'Completed'" class="badge text-bg-success">{{ status }}</span></p>
          <div class="mt-4" v-if="status === 'Completed'">
            <p class="lead fw-bold">Completion update</p>
            <span v-html=completed class="text-break"></span>
          </div>
          <div class="mt-4" v-if="status === 'Delivered'">
            <p class="lead fw-bold">Deliverables</p>
            <span v-html=completed class="text-break"></span>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

</template>