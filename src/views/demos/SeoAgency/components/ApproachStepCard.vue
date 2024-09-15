<template>
  <b-card no-body class="border p-4 h-100">
    <h6 class="text-primary mb-4">0{{ step.stepNumber }}.</h6>
    <h5>{{ step.title }}</h5>
    <p class="mb-0">{{ step.description }}</p>
  </b-card>
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
