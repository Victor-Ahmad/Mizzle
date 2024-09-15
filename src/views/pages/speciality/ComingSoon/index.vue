<template>
  <Navbar />

  <main class="d-flex flex-column justify-content-center" style="min-height: calc(100vh - 160px)">
    <Content />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import Navbar from '@/views/pages/speciality/ComingSoon/components/Navbar.vue'
import Content from '@/views/pages/speciality/ComingSoon/components/Content.vue'
import Footer from '@/views/pages/speciality/ComingSoon/components/Footer.vue'
</script>
