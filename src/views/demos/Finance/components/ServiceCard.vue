<template>
  <b-card no-body class="border p-4">
    <b-card-header class="bg-transparent p-0 pb-4">
      <figure class="text-primary">
        <span v-html="service.icon" />
      </figure>
    </b-card-header>

    <b-card-body class="p-0">
      <h5>{{ service.title }}</h5>

      <ul class="list-group list-group-borderless mb-5">
        <li
          class="list-group-item pb-0 d-flex mb-0 d-flex align-items-center"
          v-for="(feature, idx) in service.features"
          :key="idx"
        >
          <BIconPatchCheck class="me-2" />
          {{ feature }}
        </li>
      </ul>
    </b-card-body>

    <b-card-footer class="bg-transparent p-0">
      <router-link
        class="icon-link icon-link-hover stretched-link"
        v-if="service.route"
        :to="service.route"
        >Know more
        <BIconArrowRight class="bi" />
      </router-link>
    </b-card-footer>
  </b-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { type FinanceServiceType } from '@/views/demos/Finance/data'
import { BIconArrowRight, BIconPatchCheck } from 'bootstrap-icons-vue'

defineProps({
  service: {
    type: Object as PropType<FinanceServiceType>,
    required: true
  }
})
</script>
