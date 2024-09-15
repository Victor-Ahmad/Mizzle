<template>
  <b-card no-body class="card-body bg-transparent p-0">
    <div class="icon-md bg-primary bg-opacity-10 text-primary rounded mb-3 flex-centered">
      <Component :is="feature.icon" class="fa-xl" />
    </div>
    <h6 class="mb-2">{{ feature.title }}</h6>
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
