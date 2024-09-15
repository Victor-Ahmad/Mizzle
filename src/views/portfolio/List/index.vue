<template>
  <TopNavigationBar9 />

  <main>
    <PortfolioList />

    <CTA />
  </main>
  <Footer />
</template>

<script lang="ts" setup>
import TopNavigationBar9 from '@/views/portfolio/List/components/TopNavigationBar9.vue'
import PortfolioList from '@/views/portfolio/List/components/PortfolioList.vue'
import Footer from '@/views/portfolio/List/components/Footer.vue'
import CTA from '@/views/portfolio/List/components/CTA.vue'
</script>
