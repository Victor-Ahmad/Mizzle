<template>
  <b-card no-body class="card-element-hover card-metro-hover">
    <img :src="portfolio.image" alt="portfolio-img" />

    <div class="card-img-overlay hover-element d-flex">
      <div class="card-text mt-auto">
        <h6 class="mb-0">
          <router-link
            v-if="portfolio.route"
            :to="portfolio.route"
            class="text-white stretched-link"
            >{{ portfolio.title }}</router-link
          >
        </h6>
        <small class="text-white">{{ portfolio.category }}</small>
      </div>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { type PortfolioType } from '@/views/portfolio/Masonry/data'

defineProps({
  portfolio: {
    type: Object as PropType<PortfolioType>,
    required: true
  }
})
</script>
