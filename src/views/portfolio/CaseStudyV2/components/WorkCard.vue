<template>
  <b-card no-body class="card-img-scale bg-transparent overflow-hidden">
    <div class="position-absolute top-0 start-0 z-index-1">
      <img :src="work.company?.image" class="h-40px m-4" alt="Client-img" />
    </div>

    <div class="card-img-scale-wrapper rounded-3">
      <img :src="work.image" class="img-scale" alt="portfolio-img" />
    </div>
    <b-card-body class="px-0 pb-0">
      <h5 class="mb-0">
        <router-link v-if="work.route" :to="work.route" class="heading-color stretched-link">{{
          work.title
        }}</router-link>
      </h5>
      <small>{{ work.category }}</small>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import type { PortfolioType } from '@/types'
import type { PropType } from 'vue'

defineProps({
  work: {
    type: Object as PropType<PortfolioType>,
    required: true
  }
})
</script>
