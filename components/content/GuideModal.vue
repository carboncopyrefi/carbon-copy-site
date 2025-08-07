<script setup lang="ts">
import { ref, onMounted } from 'vue'

const open = ref(false)

defineProps<{
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

  <UModal :title="title" v-model:open="open">

    <a role="button" class="text-primary text-xl ms-2">
      <i class="bi bi-info-circle-fill"></i>
    </a>

      <template #body>
        <div ref="linksContainer" class="prose">
          <p v-if="body" v-html="body"></p>
        </div>
      </template>
      <template #footer="{ close }">
        <UButton color="primary" @click="close">Close</UButton>
      </template>
  </UModal>
</template>
