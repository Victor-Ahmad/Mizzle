<template>
  <b-card no-body class="p-4 p-sm-5">
    <h5>{{ plan.title }}</h5>
    <p class="small mb-0">{{ plan.description }}</p>
    <hr class="my-4" />
    <p class="heading-color fw-normal mb-2">Quick look at all the features</p>
    <ul class="list-group list-group-borderless mb-2 mb-sm-4">
      <li
        class="list-group-item d-flex small mb-0"
        v-for="(feature, idx) in plan.features"
        :key="idx"
      >
        <component :is="feature.icon" class="text-primary me-1 mt-1" />{{ feature.title }}
      </li>
    </ul>

    <span class="mb-4 heading-color"
      ><span class="h2 plan-price">{{ currency }}{{ plan.price }}</span> /{{ duration }}</span
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
import { BIconArrowRight } from 'bootstrap-icons-vue'
import { currency } from '@/helpers'
import type { PropType } from 'vue'
import type { PricingPlanType } from '@/types'

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
