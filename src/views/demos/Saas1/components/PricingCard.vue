<template>
  <b-card no-body class="card-body border rounded p-md-4" v-if="!plan.isPopular">
    <h6 class="mb-2">{{ plan.title }}</h6>
    <div class="d-flex align-items-center">
      <span class="h1 mb-0">{{ currency }}{{ plan.price }}</span>
      <div class="ms-3">
        <p class="heading-color mb-0">Per user</p>
        <p class="heading-color mb-0">Per month</p>
      </div>
    </div>
    <span>Basic feature for up to 10 users</span>

    <router-link
      :to="{ name: plan.route?.name, params: plan.route?.params }"
      class="btn btn-dark mt-4"
      >Get started</router-link
    >
    <a href="#" class="btn btn-outline-light">Chat to sales</a>

    <hr class="my-4" />

    <h6 class="mb-0">Features</h6>
    <span>Everything in basic plan</span>

    <ul class="list-group list-group-borderless border-0 mb-0 mt-2">
      <li
        class="list-group-item d-flex mb-0 icons-center"
        v-for="(feature, idx) in plan.features"
        :key="idx"
      >
        <component :is="feature.icon" class="text-primary me-2" />{{ feature.title }}
      </li>
    </ul>
  </b-card>

  <b-card no-body v-else class="card-body bg-dark border rounded p-md-4" data-bs-theme="dark">
    <h6 class="mb-2 text-primary">{{ plan.title }}</h6>
    <div class="d-flex align-items-center">
      <span class="h1 mb-0">{{ currency }}{{ plan.price }}</span>
      <div class="ms-3">
        <p class="heading-color mb-0">Per user</p>
        <p class="heading-color mb-0">Per month</p>
      </div>
    </div>
    <span>Basic feature for up to 10 users</span>

    <router-link
      :to="{ name: plan.route?.name, params: plan.route?.params }"
      class="btn btn-primary mt-4"
      >Get started</router-link
    >
    <a href="#" class="btn btn-outline-white">Chat to sales</a>

    <hr class="my-4" />

    <h6 class="mb-0">Features</h6>
    <span>Everything in basic plan and</span>

    <ul class="list-group list-group-borderless border-0 mb-0 mt-2">
      <li
        class="list-group-item d-flex mb-0 icons-center"
        v-for="(feature, idx) in plan.features"
        :key="idx"
      >
        <component :is="feature.icon" class="text-primary me-2" />{{ feature.title }}
      </li>
    </ul>
  </b-card>
</template>

<script lang="ts" setup>
import { currency } from '@/helpers'
import type { PropType } from 'vue'
import type { PricingPlanType } from '@/types'

defineProps({
  plan: {
    type: Object as PropType<PricingPlanType>,
    required: true
  }
})
</script>
