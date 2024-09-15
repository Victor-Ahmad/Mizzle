<template>
  <section class="pt-0">
    <b-container>
      <b-row class="g-4 g-sm-6">
        <b-col sm="6" lg="3" v-for="(feature, idx) in features" :key="idx">
          <FeatureCard :feature="feature" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { features } from '@/views/demos/Shop/data'
import FeatureCard from '@/views/demos/Shop/components/FeatureCard.vue'
</script>
