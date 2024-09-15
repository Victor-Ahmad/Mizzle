<template>
  <b-card no-body class="card-hover-shadow border-primary-hover border h-100 p-4">
    <b-card-body class="p-0">
      <div class="d-flex gap-3 align-items-center mb-3">
        <img :src="integration.image" class="h-40px" alt="Integrations-icon" />
        <h6 class="mb-0">{{ integration.name }}</h6>
      </div>
      <p>{{ integration.description }}</p>
    </b-card-body>

    <b-card-footer class="bg-transparent p-0 mt-6">
      <router-link
        v-if="integration.route"
        :to="integration.route"
        class="icon-link icon-link-hover heading-color text-primary-hover stretched-link mb-0"
        >View integration
        <BIconArrowRight class="bi" />
      </router-link>
    </b-card-footer>
  </b-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { ToolType } from '@/types'
import { BIconArrowRight } from 'bootstrap-icons-vue'

defineProps({
  integration: {
    type: Object as PropType<ToolType>,
    required: true
  }
})
</script>
