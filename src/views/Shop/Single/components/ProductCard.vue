<template>
  <b-card no-body class="border bg-transparent overflow-hidden p-0 h-100">
    <div v-if="product.tag" class="position-absolute top-0 start-0 p-3">
      <span class="badge text-bg-dark">{{ toSentenceCase(product.tag) }}</span>
    </div>

    <div v-if="product.sale" class="position-absolute top-0 start-0 p-3">
      <span class="badge text-bg-danger"
        >{{ product.sale.discount }}<span v-if="product.sale.type == 'percent'">%</span> off</span
      >
    </div>

    <b-card-header class="bg-light rounded m-2">
      <img v-for="(image, idx) in product.images" :src="image" alt="" :key="idx" />
    </b-card-header>

    <b-card-body class="pb-0">
      <b-card-title tag="h6">
        <router-link
          :to="{ name: product.route?.name, params: product.route?.params }"
          class="stretched-link"
          >{{ product.name }}
        </router-link>
      </b-card-title>
      <ul class="list-inline">
        <template v-if="product.review">
          <li
            v-for="(_star, idx) in new Array(Math.floor(product.review?.stars))"
            :key="idx"
            class="list-inline-item me-1 small"
          >
            <font-awesome-icon :icon="faStar" class="text-warning" />
          </li>
        </template>
        <li v-if="!Number.isInteger(product.review?.stars)" class="list-inline-item me-1 small">
          <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
        </li>
        <template v-if="product.review && product.review?.stars < 5">
          <li
            v-for="(_val, idx) in new Array(5 - Math.ceil(product.review?.stars))"
            :key="idx"
            class="list-inline-item me-0 small"
          >
            <font-awesome-icon :icon="FAStar" />
          </li>
        </template>
      </ul>
    </b-card-body>

    <b-card-footer class="bg-transparent d-flex justify-content-between align-items-center pt-0">
      <div class="d-flex align-items-center gap-2 justify-content-center">
        <template v-if="product.sale">
          <p class="fw-bold text-success mb-0">
            {{ currency
            }}{{ discountedPrice(product.price, product.sale.discount, product.sale.type) }}
          </p>
          <small class="text-decoration-line-through">{{ currency }}{{ product.price }}</small>
        </template>
        <p v-else class="fw-bold text-success mb-0">{{ currency }}{{ product.price }}</p>
      </div>
      <button class="btn btn-dark mb-0 z-index-2" @click="useShopping.updateQuantity(product, 1)">
        <BIconCart />
      </button>
    </b-card-footer>
  </b-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { currency } from '@/helpers'
import { BIconCart } from 'bootstrap-icons-vue'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as FAStar } from '@fortawesome/free-regular-svg-icons'
import type { ProductType } from '@/types'

import { toSentenceCase } from '@/helpers/change-casing'
import { discountedPrice } from '@/helpers/product'
import { useShoppingStore } from '@/stores/shopping-context'

defineProps({
  product: {
    type: Object as PropType<ProductType>,
    required: true
  }
})

const useShopping = useShoppingStore()
</script>
