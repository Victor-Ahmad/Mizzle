<template>
  <b-card no-body class="border overflow-hidden p-0 h-100">
    <b-card-body class="p-sm-5 text-center">
      <h5 class="mb-3">{{ feature.title }}</h5>
      <p class="mb-0">{{ feature.description }}</p>
    </b-card-body>
    <b-card-footer class="p-0">
      <img :src="feature.image" alt="" />
    </b-card-footer>
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
