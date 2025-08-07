<script setup lang="ts">
const isOpen = ref(false)

const props = defineProps<{
  buttonText?: string
  header?: string
  imgUrl?: string
}>()
</script>

<template>


  <USlideover v-model:model-value="isOpen">
    <i class="bi bi-image-fill fs-4 text-primary ms-2" role="button" @click="isOpen = true"></i>
    <template #content>
      <UCard class="flex flex-col flex-1" :ui="{ body: { base: 'flex-1' } }">
        <UButton
          color="neutral"
          variant="subtle"
          size="sm"
          icon="i-heroicons-x-mark-20-solid"
          class="flex sm:hidden absolute end-5 top-5 z-10"
          square
          padded
          @click="isOpen = false"
        />
        <img :src="imgUrl" class="w-100 mt-4 mt-lg-0" loading="lazy" alt="" />
      </UCard>
    </template>
  </USlideover>
</template>