<template>
  <main>
    <b-row class="g-0">
      <AuthSwiper />

      <slot />
    </b-row>
  </main>
</template>

<script lang="ts" setup>
import AuthSwiper from '@/components/AuthSwiper/AuthSwiper.vue'
</script>
