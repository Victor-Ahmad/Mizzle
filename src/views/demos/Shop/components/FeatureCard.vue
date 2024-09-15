<template>
  <b-card no-body class="bg-transparent p-0">
    <div
      :class="`bg-${feature.variant} text-${feature.variant} icon-lg rounded-circle bg-opacity-10 mb-4 flex-centered`"
    >
      <component :is="feature.icon" class="fa-lg" />
    </div>
    <h6 class="mb-3">{{ feature.title }}</h6>
    <p class="mb-0">{{ feature.description }}</p>
  </b-card>
</template>

<script lang="ts" setup>
import type { ProductFeatureType } from '@/views/demos/Shop/data'
import type { PropType } from 'vue'

defineProps({
  feature: {
    type: Object as PropType<ProductFeatureType>,
    required: true
  }
})
</script>
