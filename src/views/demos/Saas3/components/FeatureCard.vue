<template>
  <b-card no-body class="text-center bg-transparent p-0">
    <figure class="text-primary mb-4">
      <span v-html="feature.icon" />
    </figure>
    <h5 class="mb-3">{{ feature.title }}</h5>
    <p class="mb-0">{{ feature.description }}</p>
  </b-card>
</template>

<script lang="ts" setup>
import type { FeatureType } from '@/types'
import type { PropType } from 'vue'

defineProps({
  feature: {
    type: Object as PropType<FeatureType>,
    required: true
  }
})
</script>
