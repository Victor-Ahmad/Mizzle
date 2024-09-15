<template>
  <section class="pb-0">
    <b-container>
      <b-row class="g-4 g-md-5">
        <b-col md="6" lg="4">
          <h2 class="mb-0">Our Approach to SEO Success</h2>
        </b-col>

        <b-col md="6" lg="4" v-for="(step, idx) in approachSteps" :key="idx">
          <ApproachStepCard :step="step" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { approachSteps } from '@/views/demos/SeoAgency/data'
import ApproachStepCard from '@/views/demos/SeoAgency/components/ApproachStepCard.vue'
</script>
