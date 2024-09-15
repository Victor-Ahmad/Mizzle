<template>
  <section class="pt-0">
    <b-container>
      <b-row class="g-4 g-lg-5">
        <b-col md="6" v-for="(item, idx) in cards" :key="idx">
          <FeatureCard :feature="item" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { cards } from '@/views/pages/about/ServiceV2/data'
import FeatureCard from '@/views/pages/about/ServiceV2/components/FeatureCard.vue'
</script>
