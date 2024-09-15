<template>
  <b-card class="bg-transparent text-center">
    <div class="icon-lg bg-dark text-white rounded-circle mb-3 mx-auto flex-centered">
      <component :is="step.icon" class="fa-lg" style="height: 24px; width: 24px" />
    </div>
    <h5>{{ step.title }}</h5>
    <p>{{ step.description }}</p>
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
