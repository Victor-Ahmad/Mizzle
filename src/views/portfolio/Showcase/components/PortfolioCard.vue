<template>
  <b-card no-body class="card-img-scale bg-transparent overflow-hidden">
    <div class="position-absolute top-0 start-0 z-index-1">
      <img :src="portfolio.company?.image" class="h-40px m-4" alt="" />
    </div>

    <div class="card-img-scale-wrapper rounded-3">
      <img :src="portfolio.image" class="img-scale" alt="portfolio-img" />
    </div>
    <b-card-body class="px-0 pb-0">
      <h5 class="mb-0">
        <router-link
          v-if="portfolio.route"
          :to="portfolio.route"
          class="heading-color stretched-link"
          >{{ portfolio.title }}</router-link
        >
      </h5>
      <small>{{ portfolio.category }}</small>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import type { PortfolioType } from '@/types'
import type { PropType } from 'vue'

defineProps({
  portfolio: {
    type: Object as PropType<PortfolioType>,
    required: true
  }
})
</script>
