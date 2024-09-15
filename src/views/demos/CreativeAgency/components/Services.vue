<template>
  <section class="pb-0">
    <b-container>
      <div class="inner-container text-center mb-4 mb-sm-6">
        <h2 class="mb-0">Our Comprehensive Services</h2>
      </div>

      <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        <b-col v-for="(service, idx) in services" :key="idx">
          <ServiceCard :service="service" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { services } from '@/views/demos/CreativeAgency/data'
import ServiceCard from '@/views/demos/CreativeAgency/components/ServiceCard.vue'
</script>
