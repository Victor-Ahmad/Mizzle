<template>
  <b-row class="g-3">
    <b-col cols="4" v-if="item.product.images">
      <img class="rounded-2 bg-light p-2" :src="item.product.images[0]" alt="avatar" />
    </b-col>
    <b-col cols="8">
      <p class="heading-color fw-semibold mb-1">{{ item.product.name }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <select class="form-select form-select-sm w-auto" aria-label="Default select example">
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
        </select>

        <button
          class="btn btn-sm btn-link p-0"
          @click="useShopping.updateQuantity(item.product, 0)"
        >
          Remove
        </button>
      </div>
    </b-col>
  </b-row>
</template>

<script lang="ts" setup>
import { useShoppingStore } from '@/stores/shopping-context'
import type { CartType } from '@/types'
import type { PropType } from 'vue'

defineProps({
  item: {
    type: Object as PropType<CartType>,
    required: true
  }
})

const useShopping = useShoppingStore()
</script>
