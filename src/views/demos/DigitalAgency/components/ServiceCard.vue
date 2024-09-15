<template>
  <b-card no-body class="card-img-scale bg-body overflow-hidden">
    <div class="card-img-scale-wrapper">
      <img :src="service.image" class="card-img-top img-scale" alt="service img" />
    </div>
    <b-card-body class="p-4">
      <h6>
        <router-link v-if="service.route" :to="service.route">{{ service.title }}</router-link>
      </h6>
      <p class="mb-0">{{ service.description }}</p>
    </b-card-body>
    <div class="card-footer border-top bg-body p-4">
      <router-link
        v-if="service.route"
        class="icon-link icon-link-hover stretched-link p-0 m-0"
        :to="service.route"
        >Explore this service
        <BIconArrowRight class="bi" />
      </router-link>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
import type { ServiceType } from '@/types'
import type { PropType } from 'vue'
import { BIconArrowRight } from 'bootstrap-icons-vue'

defineProps({
  service: {
    type: Object as PropType<ServiceType>,
    required: true
  }
})
</script>
