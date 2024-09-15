<template>
  <section class="pt-0">
    <b-container>
      <div class="d-lg-flex justify-content-between align-items-center mb-4 mb-lg-5">
        <h4 class="mb-3 mb-lg-0">Explore integration</h4>
        <b-nav pills class="gap-1 nav-pills-light">
          <b-nav-item active>All </b-nav-item>
          <b-nav-item>Assets </b-nav-item>
          <b-nav-item>Domain </b-nav-item>
          <b-nav-item>Ecommerce </b-nav-item>
          <b-nav-item>Social </b-nav-item>
        </b-nav>
      </div>

      <b-row class="g-4 g-lg-5">
        <b-col sm="6" lg="4" xl="3" v-for="(item, idx) in gridData" :key="idx">
          <IntegrationCard :grid="item" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { gridData } from '@/views/pages/saas/Integrations/data'
import IntegrationCard from '@/views/pages/saas/Integrations/components/IntegrationCard.vue'
</script>
