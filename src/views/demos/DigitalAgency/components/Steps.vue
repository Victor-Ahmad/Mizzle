<template>
  <section>
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-md-6">
        <h2>How it works in <span class="text-primary">4</span> easy steps</h2>
      </div>

      <b-row class="step-process">
        <b-col sm="6" lg="3" v-for="(step, idx) in steps" :key="idx">
          <StepCard :step="step" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { steps } from '@/views/demos/DigitalAgency/data'
import StepCard from '@/views/demos/DigitalAgency/components/StepCard.vue'
</script>
