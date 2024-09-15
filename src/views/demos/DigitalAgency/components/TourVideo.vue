<template>
  <Jarallax
    id="jarallax1"
    :options="{ videoLoop: true, videoSrc: 'https://www.youtube.com/watch?v=O41Nm6l0sbY' }"
    customClass="bg-parallax position-relative h-400px h-xl-750px"
  >
    <div class="bg-overlay bg-dark opacity-3"></div>
  </Jarallax>
</template>

<script lang="ts" setup>
import Jarallax from '@/components/Jarallax.vue'
</script>
