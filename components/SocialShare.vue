
<script setup lang="ts">

defineProps<{
  data?: any
}>()

const { path } = useRoute()
const base = "https://carboncopy.news"

const linkedIn = "https://www.linkedin.com/shareArticle?mini=true&url=" + base + path
const twitter = "https://twitter.com/intent/tweet?url=" + base + path
const facebook = "https://www.facebook.com/sharer/sharer.php?u=" + base + path
const telegram = "https://t.me/share/url?url=" + base + path

function copyLink() {
  navigator.clipboard.writeText(window.location.href);
  document.getElementById("copyIcon").className = "bi bi-check-circle fs-4 text-primary";
  setTimeout(function(){
    document.getElementById("copyIcon").className = "bi bi-link-45deg fs-4 text-primary";
}, 600);
}

</script>

<template>

  <NuxtLink :to=linkedIn target="_blank"><i class="bi bi-linkedin fs-4 me-3"></i></NuxtLink>
  <NuxtLink :to=twitter target="_blank"><i class="bi bi-twitter-x fs-4 me-3"></i></NuxtLink>
  <NuxtLink :to=facebook target="_blank"><i class="bi bi-facebook fs-4 me-3"></i></NuxtLink>
  <NuxtLink :to=telegram target="_blank"><i class="bi bi-telegram fs-4 me-3"></i></NuxtLink>
  <NuxtLink @click.native="copyLink"><i id="copyIcon" class="bi bi-link-45deg fs-4 text-primary" role="button"></i></NuxtLink>

</template>
