<template>
  <b-card no-body class="border overflow-hidden p-0 h-100">
    <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
      <div class="badge text-bg-dark">
        <font-awesome-icon :icon="faStar" class="text-warning me-1"></font-awesome-icon
        >{{ product.review?.stars }}
      </div>
      <button
        @click="useShopping.toggleToWishlist(product)"
        class="btn btn-light btn-round border mb-0 ms-auto d-flex align-items-center justify-content-center"
      >
        <BIconHeartFill v-if="useShopping.isInWishlist(product)" class="text-danger" />
        <BIconHeart v-else />
      </button>
    </div>

    <b-card-header class="bg-transparent pb-0">
      <img v-for="(image, idx) in product.images" :src="image" alt="" :key="idx" />
    </b-card-header>

    <b-card-body class="pt-0">
      <b-card-title tag="h6"
        ><router-link v-if="product.route" :to="product.route" class="stretched-link">{{
          product.name
        }}</router-link></b-card-title
      >
      <p class="mb-0">{{ product.description }}</p>
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
      <a href="#" class="btn btn-dark mb-0 z-index-2">Buy now</a>
    </b-card-footer>
  </b-card>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { BIconHeart, BIconHeartFill } from 'bootstrap-icons-vue'
import { currency } from '@/helpers'
import type { ProductType } from '@/types'
import { useShoppingStore } from '@/stores/shopping-context'
import { discountedPrice } from '@/helpers/product'

const useShopping = useShoppingStore()

defineProps({
  product: {
    type: Object as PropType<ProductType>,
    required: true
  }
})
</script>
