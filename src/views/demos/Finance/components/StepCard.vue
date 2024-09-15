<template>
  <div class="icon-lg bg-body heading-color border rounded-circle mb-3 flex-centered">
    <component :is="step.icon" class="fa-lg" />
  </div>
  <h6>{{ step.title }}</h6>
  <p class="mb-0">{{ step.description }}</p>
</template>

<script lang="ts" setup>
import type { StepType } from '@/types'
import type { PropType } from 'vue'

defineProps({
  step: {
    type: Object as PropType<StepType>,
    required: true
  }
})
</script>
