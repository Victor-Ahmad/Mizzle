<template>
  <b-card no-body class="border p-4">
    <b-card-header class="p-0 pb-3">
      <b-card-title tag="h5" class="mb-0">Promo code</b-card-title>

      <b-form class="input-group mt-4">
        <b-form-input class="rounded me-1" type="email" placeholder="Type here.." />
        <b-button variant="dark" type="button" class="rounded-2 mb-0">Apply</b-button>
      </b-form>
    </b-card-header>

    <b-card-body class="p-0 pb-3 mt-2">
      <ul class="list-group list-group-borderless">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>Subtotal</span>
          <span class="heading-color fw-semibold mb-0"
            >{{ currency }}{{ useShopping.getCalculatedOrder().total }}</span
          >
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>Service Charge</span>
          <span class="heading-color fw-semibold mb-0"
            >-{{ currency }}{{ useShopping.getCalculatedOrder().totalDiscount }}</span
          >
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>Tax</span>
          <span class="heading-color fw-semibold mb-0"
            >{{ currency }}{{ useShopping.getCalculatedOrder().tax }}</span
          >
        </li>
      </ul>
    </b-card-body>

    <b-card-footer class="bg-transparent border-top p-0 pt-3">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <span class="heading-color fw-normal">Payable Now</span>
        <span class="h6 mb-0"
          >{{ currency }}{{ useShopping.getCalculatedOrder().orderTotal.toFixed(2) }}</span
        >
      </div>

      <div class="d-grid">
        <button class="btn btn-lg btn-primary mb-0">Continue to Checkout</button>
      </div>
    </b-card-footer>
  </b-card>
</template>

<script lang="ts" setup>
import { currency } from '@/helpers'
import { useShoppingStore } from '@/stores/shopping-context'

const useShopping = useShoppingStore()
</script>
