<template>
  <Navbar />

  <main>
    <slot />
  </main>

  <Footer9 />
</template>

<script lang="ts" setup>
import Navbar from '@/components/navbar/BlogNavbar.vue'
import Footer9 from '@/layouts/components/Footer9.vue'
</script>
