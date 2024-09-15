<template>
  <div
    :class="
      !idx
        ? 'd-md-flex justify-content-between mb-4 mb-sm-0 ms-xl-5'
        : 'text-center text-lg-start ms-md-5 ms-lg-0 ms-xl-5'
    "
  >
    <div class="text-center text-lg-start">
      <div class="badge bg-primary mb-3">{{ plan.badge }}</div>
      <h6 class="mb-4">
        <span class="h1 mb-0 plan-price">{{ currency }}{{ plan.price }}</span> /{{ duration }}
      </h6>
      <h6>Quick look at all the features</h6>

      <ul class="list-group list-group-borderless mb-2 mb-sm-4">
        <li
          class="list-group-item heading-color mb-0"
          v-for="(feature, idx) in plan.features"
          :key="idx"
        >
          <component :is="feature.icon" class="text-primary me-1" />{{ feature.title }}
        </li>
      </ul>
      <a href="#" class="btn btn-dark">Start a free 7-days trial</a>
    </div>
    <div class="vr opacity-1 ms-md-5 d-none d-md-block" v-if="!idx"></div>
  </div>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue'
import { currency } from '@/helpers'
import type { PricingPlanType } from '@/types'

defineProps({
  plan: {
    type: Object as PropType<PricingPlanType>,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  idx: {
    type: Number,
    required: true
  }
})
</script>
