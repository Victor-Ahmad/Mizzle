<template>
  <section class="pb-0 price-wrap">
    <b-container>
      <b-row class="g-4 g-lg-5">
        <b-col lg="4" class="text-center text-lg-start">
          <h2 class="mb-4">Pick the best plan that suits you</h2>
          <p class="mb-4">
            Two before narrow not relied how except moment myself Dejection assurance mrs led
            certainly.
          </p>

          <form
            class="d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-xl-0"
          >
            <span class="fw-semibold heading-color">Monthly</span>
            <div class="form-check form-switch form-check-md mx-2 mb-0" @click="togglePlan">
              <input
                class="form-check-input mt-0 price-toggle"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
            </div>
            <span class="fw-semibold heading-color">Yearly</span>
          </form>

          <img :src="pricingImage" class="h-200px d-flex mx-auto ms-lg-auto" alt="pricing-vector" />
        </b-col>
        <template v-for="(item, idx) in pricingData" :key="idx">
          <template v-for="(plan, idx) in item.plans" :key="idx">
            <b-col sm="6" lg="4" v-if="item.duration == selectedPlan">
              <PricingCard :duration="item.duration" :plan="plan" :idx="idx" />
            </b-col>
          </template>
        </template>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { pricingData } from '@/views/demos/MobileShowcase/data'
import PricingCard from '@/views/demos/MobileShowcase/components/PricingCard.vue'

import pricingImage from '@/assets/images/elements/pricing.svg'

let selectedPlan = ref<'month' | 'year'>('month')

const togglePlan = () => {
  if (selectedPlan.value === 'month') {
    selectedPlan.value = 'year'
  } else {
    selectedPlan.value = 'month'
  }
}
</script>
