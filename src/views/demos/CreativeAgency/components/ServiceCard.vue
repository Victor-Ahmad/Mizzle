<template>
  <b-card no-body class="card-hover-shadow border h-100 p-4">
    <b-card-body class="p-0">
      <figure class="text-primary mb-4">
        <span v-html="service.icon" />
      </figure>

      <h5 class="mb-3">
        <router-link :to="{ name: service.route?.name, params: service.route?.params }">{{
          service.title
        }}</router-link>
      </h5>
      <p>{{ service.description }}</p>
    </b-card-body>

    <b-card-footer class="mt-auto p-0 pt-2">
      <router-link
        class="icon-link icon-link-hover stretched-link z-index-2"
        :to="{ name: service.route?.name, params: service.route?.params }"
        >View detail
        <BIconArrowRight class="bi" />
      </router-link>
    </b-card-footer>
  </b-card>
</template>

<script lang="ts" setup>
import { BIconArrowRight } from 'bootstrap-icons-vue'
import type { ServiceType } from '@/types'
import type { PropType } from 'vue'

defineProps({
  service: {
    type: Object as PropType<ServiceType>,
    required: true
  }
})
</script>
