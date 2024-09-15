<template>
  <b-card no-body class="border p-4 p-sm-5 mb-5">
    <b-card-body class="p-0 pb-5">
      <div class="icon-lg bg-primary rounded-circle fw-bold text-white mb-3">
        0{{ step.stepNumber }}
      </div>
      <h4 class="mb-3">{{ step.title }}</h4>
      <p class="heading-color">{{ step.description }}</p>
    </b-card-body>

    <b-card-footer class="bg-transparent text-center p-0">
      <img :src="step.image" alt="" />
    </b-card-footer>
  </b-card>
</template>

<script lang="ts" setup>
import type { WorkFlowStepType } from '@/views/demos/Saas4/data'
import type { PropType } from 'vue'

defineProps({
  step: {
    type: Object as PropType<WorkFlowStepType>,
    required: true
  }
})
</script>
