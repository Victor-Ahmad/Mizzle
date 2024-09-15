<template>
  <b-row class="align-items-xl-center">
    <b-col cols="5" md="2">
      <div class="bg-light p-2 rounded-2" v-if="item.product.images">
        <img :src="item.product?.images[0]" alt="" />
      </div>
    </b-col>

    <b-col cols="7" md="10">
      <b-row class="g-3 g-sm-4">
        <b-col xl="5">
          <h6 class="mb-1">
            <a href="#">{{ item.product.name }}</a>
          </h6>
          <ul class="nav nav-divider small align-items-center mt-1" v-if="item.product.attributes">
            <li class="nav-item" v-if="item.product.attributes.gender">
              Gender: {{ item.product.attributes.gender }}
            </li>
            <li class="nav-item" v-if="item.product.attributes.colors">
              Color: {{ item.product.attributes.colors[0].name }}
            </li>
            <li class="nav-item" v-if="item.product.attributes.size">
              Size: {{ item.product.attributes.size }}
            </li>
          </ul>
        </b-col>

        <b-col sm="6" md="4" xl="2">
          <b-form-select size="sm" v-model="selectedQuantity" :options="quantityOptions" />
        </b-col>

        <b-col sm="6" md="4" xl="3" class="text-md-center">
          <h5 class="mb-0" v-if="item.product.sale && item.product.price">
            {{ currency
            }}{{
              discountedPrice(
                item.product.price,
                item.product.sale.discount,
                item.product.sale.type
              )
            }}
          </h5>
          <h5 class="mb-0" v-else>
            {{ currency }}{{ item.product.price && item.product.price.toFixed(2) }}
          </h5>
        </b-col>

        <b-col sm="6" md="4" xl="2" class="text-md-center">
          <router-link
            to=""
            class="text-danger small icons-center gap-1"
            @click="useShopping.updateQuantity(item.product, 0)"
          >
            <BIconXLg />
            Remove
          </router-link>
        </b-col>
      </b-row>
    </b-col>
  </b-row>

  <hr />
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { CartType } from '@/types'
import { currency } from '@/helpers/constants'
import { discountedPrice } from '@/helpers/product'
import { useShoppingStore } from '@/stores/shopping-context'
import { BIconXLg } from 'bootstrap-icons-vue'

import { ref } from 'vue'

defineProps({
  item: {
    type: Object as PropType<CartType>,
    required: true
  }
})
const useShopping = useShoppingStore()

const selectedQuantity = ref('1')

const quantityOptions = [
  { value: '1', text: '01' },
  { value: '2', text: '02' },
  { value: '3', text: '03' }
]
</script>
