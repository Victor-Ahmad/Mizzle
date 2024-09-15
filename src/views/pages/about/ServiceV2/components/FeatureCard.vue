<template>
  <b-card no-body class="card-body card-hover-shadow border d-flex flex-row p-4 h-100">
    <figure class="text-primary mb-0">
      <span v-html="feature.icon" />
    </figure>

    <div class="d-flex flex-column ms-4">
      <h5 class="mb-3">{{ feature.title }}</h5>
      <p class="mb-3">{{ feature.description }}</p>
      <router-link
        :to="{ name: 'services.single' }"
        class="icon-link icon-link-hover stretched-link mt-auto"
        >Know more
        <BIconArrowRight class="bi" />
      </router-link>
    </div>
  </b-card>
</template>

<script setup lang="ts">
import type { StepType } from '@/types'
import { type PropType } from 'vue'
import { BIconArrowRight } from 'bootstrap-icons-vue'

defineProps({
  feature: {
    type: Object as PropType<StepType>,
    required: true
  }
})
</script>
