<template>
  <b-card no-body class="bg-light p-4 p-sm-5">
    <figure class="position-absolute top-0 start-0 translate-middle mt-n4 ms-n5 d-none d-md-block">
      <svg
        class="fill-mode"
        width="86"
        height="105"
        viewBox="0 0 86 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50.9805 4.63769C51.6165 4.24345 56.4262 10.3524 61.7246 18.1163C67.0564 25.8003 72.7966 35.1061 75.9634 40.6314C82.2158 51.6489 85.8889 61.2748 84.5362 62.0301C83.1029 62.7522 77.2708 54.3462 71.0415 43.3853C67.8986 37.9165 62.7042 28.3199 58.293 20.1246C53.8819 11.9293 50.2874 5.05535 50.9805 4.63769Z"
        ></path>
        <path
          d="M64.0889 66.7297C63.5001 67.2372 60.6142 65.1098 57.1179 62.637C53.6451 60.2207 49.5285 57.539 47.2336 56.0303C42.5967 52.8997 39.0022 49.8707 39.6599 48.4069C40.2841 47.0231 45.3294 47.9307 50.3923 51.2838C52.9286 52.892 56.9393 56.2802 59.8742 59.6469C62.809 63.0137 64.6779 66.2223 64.0889 66.7297Z"
        ></path>
        <path
          d="M55.1316 86.0595C55.1297 86.856 48.7063 87.4433 40.9853 87.6368C33.2643 87.8295 24.2555 87.492 19.0669 87.0413C8.68981 86.139 0.434871 83.7683 0.656712 82.218C0.878555 80.6685 9.34356 80.5005 19.5833 81.393C24.7149 81.867 33.5706 82.7978 41.1895 83.6415C48.832 84.5408 55.1571 85.32 55.1316 86.0595Z"
        ></path>
      </svg>
    </figure>

    <h5>{{ plan.title }}</h5>
    <p class="small mb-6">{{ plan.description }}</p>

    <p class="heading-color fw-normal mb-1">How many customers do you have?</p>
    <b-form class="mb-4">
      <b-form-input
        size="lg"
        class="focus-shadow-none bg-transparent border-0 border-bottom rounded-0 ps-0"
        type="email"
        placeholder="000"
      />
    </b-form>

    <span class="mb-4 heading-color">
      <span class="h2 plan-price">{{ currency }}{{ plan.price }}</span> /{{ duration }}</span
    >
    <router-link
      class="btn btn-primary icon-link icon-link-hover justify-content-center"
      :to="{ name: plan.route?.name, params: plan.route?.params }"
      >Get started
      <BIconArrowRight />
    </router-link>
  </b-card>
</template>

<script lang="ts" setup>
import type { PricingPlanType } from '@/types'
import type { PropType } from 'vue'
import { BIconArrowRight } from 'bootstrap-icons-vue'

import { currency } from '@/helpers'

defineProps({
  plan: {
    type: Object as PropType<PricingPlanType>,
    required: true
  },
  duration: {
    type: String as PropType<'week' | 'month' | 'year'>,
    required: true
  }
})
</script>
