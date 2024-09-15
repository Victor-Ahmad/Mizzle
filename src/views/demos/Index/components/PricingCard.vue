<template>
  <b-card no-body class="bg-primary rounded h-100 overflow-hidden p-4">
    <div class="position-absolute top-0 end-0 mt-n3 me-n4">
      <img :src="pattern2" class="opacity-2 h-200px" alt="" />
    </div>

    <b-card-body class="bg-transparent position-relative p-0">
      <div class="badge bg-dark text-white">Enterprise</div>
      <h4 class="text-white mb-0 mt-3">Custom pricing plan</h4>
    </b-card-body>

    <div class="card-footer bg-transparent d-grid text-center p-0 mt-8">
      <router-link :to="{ name: 'contact.v1' }" class="btn btn-white">Contact Sales</router-link>
      <p class="mb-0 text-white">Get personalized demo and custom plan</p>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
import pattern2 from '@/assets/images/elements/decoration-pattern-2.svg'
</script>
