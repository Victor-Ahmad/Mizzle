<template>
  <section class="pt-0">
    <b-container>
      <b-row>
        <b-col lg="8" class="mb-6 mb-lg-0">
          <form class="card bg-transparent">
            <b-card-header
              class="bg-transparent d-flex justify-content-between align-items-center border-bottom px-0 pt-0"
            >
              <h5 class="mb-0">{{ useShopping.state.cartItems.length }} products</h5>
              <button class="btn btn-sm btn-danger-soft mb-0">
                <BIconXLg class="me-1" />Clear cart
              </button>
            </b-card-header>

            <b-card-body class="px-0">
              <template v-for="(item, idx) in useShopping.state.cartItems" :key="idx">
                <CartItem :item="item" />
              </template>

              <div class="text-end">
                <a href="#" class="btn btn-light border mb-0">Update cart</a>
              </div>
            </b-card-body>
          </form>

          <b-card
            no-body
            class="card-body p-md-6 mt-5"
            :style="`background-image:url(${shopBackground5}); background-position: center left; background-size: cover;`"
          >
            <b-col md="6">
              <h4 class="text-white mb-4">Checkout the newest smart watch product</h4>
              <a href="#" class="btn btn-outline-white mb-0">Shop now</a>
            </b-col>
          </b-card>
        </b-col>

        <b-col lg="4" class="ps-xl-6">
          <PromoCode />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import PromoCode from '@/views/Shop/Cart/components/PromoCode.vue'
import CartItem from '@/views/Shop/Cart/components/CartItem.vue'
import { useShoppingStore } from '@/stores/shopping-context'
import { BIconXLg } from 'bootstrap-icons-vue'

import shopBackground5 from '@/assets/images/shop/bg/05.jpg'

const useShopping = useShoppingStore()
</script>
