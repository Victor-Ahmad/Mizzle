<template>
  <b-card no-body class="card-img-scale bg-transparent overflow-hidden mb-6 mb-xl-8">
    <b-row class="g-xl-6 align-items-center">
      <b-col lg="6" class="order-2">
        <b-card-body class="text-lg-end h-100 px-0 p-xl-5">
          <img :src="item.company.image" class="h-30px mb-3 mb-lg-4" alt="Client-img" />
          <b-card-title>{{ item.title }}</b-card-title>
          <p class="card-text mb-3 mb-lg-4">{{ item.description }}</p>
          <div
            class="d-flex justify-content-lg-end gap-2 gap-sm-3 gap-lg-1 flex-lg-column flex-wrap mb-3 mb-lg-4"
          >
            <div>
              <font-awesome-icon :icon="faCircle" class="fa-2xs text-primary me-2" />{{ item.year }}
            </div>
            <span v-for="(tag, idx) in item.tags" :key="idx">{{ tag }}</span>
          </div>
          <router-link :to="item.route" class="text-primary-hover stretched-link heading-color mb-0"
            >View case study <font-awesome-icon :icon="faArrowRightLong" class="fa-fw ms-1"
          /></router-link>
        </b-card-body>
      </b-col>

      <b-col lg="6" class="order-1 order-lg-2">
        <div class="card-img-scale-wrapper rounded-2 overflow-hidden h-100">
          <img :src="item.image" class="img-scale" alt="portfolio-img" />
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { type PortfolioCaseType } from '@/views/portfolio/List/data'

defineProps({
  item: {
    type: Object as PropType<PortfolioCaseType>,
    required: true
  }
})

import { faCircle, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
</script>
