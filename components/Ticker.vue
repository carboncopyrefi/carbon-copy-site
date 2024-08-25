<template>
    <div class="row">
        <div class="col-12">
            <div class="row g-0">
                <div class="col-lg-3 col-xl-2">
                    <div class="px-3 pt-3 p-lg-4 bg-light border-end">
                        <strong>Latest ReFi News</strong>
                    </div>
                </div>
                <div class="col-lg-9 col-xl-10">
                    <div class="bg-light px-3 pb-3 p-lg-4">
                        <span id="headline-container"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue';

interface NewsItem {
  title: string;
  date: string;
  link: string;
}

const newsItems = ref<NewsItem[]>([]);
let currentIndex = 0;
const displayDuration = 5000; // 5 seconds
let tickerInterval: number | undefined;
const headlineContainer = ref<HTMLElement | null>(null);

function displayNewsItem(index: number) {
  const newsItem = newsItems.value[index];
  if (headlineContainer.value) {
    headlineContainer.value.innerHTML = `<a href="${newsItem.link}" target="_blank" class="text-decoration-none text-success"><strong>${newsItem.title}</strong></a>`;
  }
}

function rotateNewsItems() {
  if (newsItems.value.length > 0) {
    displayNewsItem(currentIndex);
    currentIndex = (currentIndex + 1) % newsItems.value.length;
  }
}

function startTicker() {
  rotateNewsItems();
  tickerInterval = setInterval(rotateNewsItems, displayDuration);
}

function pauseTicker() {
  if (tickerInterval) {
    clearInterval(tickerInterval);
    tickerInterval = undefined; // Ensure the interval is cleared
  }
}

function resumeTicker() {
  if (!tickerInterval) {  // Only resume if it's not already running
    tickerInterval = setInterval(rotateNewsItems, displayDuration);
  }
}

onMounted(async () => {
  headlineContainer.value = document.getElementById('headline-container');

  // Fetching the news items using $fetch
  try {
    const data = await $fetch<NewsItem[]>('https://api.carboncopy.news/news');
    newsItems.value = data;
    
    if (newsItems.value.length > 0) {
      startTicker(); // Start the ticker only after the newsItems array is populated
    }
  } catch (error) {
    console.error('Error fetching news items:', error);
  }

  // Pause the ticker on hover
  if (headlineContainer.value) {
    headlineContainer.value.addEventListener('mouseover', pauseTicker);
    headlineContainer.value.addEventListener('mouseout', resumeTicker);
  }
});

</script>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}


</style>