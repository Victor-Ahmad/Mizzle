<template>
  <b-card no-body class="bg-transparent">
    <b-card-header
      class="bg-transparent border-bottom d-flex justify-content-between align-items-center p-0 pb-3"
    >
      <b-card-title tag="h6" class="mb-0">Recently added</b-card-title>
      <span>2 Items</span>
    </b-card-header>

    <b-card-body class="p-0 pt-5">
      <b-row class="align-items-xl-center" v-for="(item, idx) in productItems" :key="idx">
        <b-col cols="5" md="2">
          <div class="bg-light p-2 rounded-2">
            <img :src="item.image" alt="" />
          </div>
        </b-col>

        <b-col cols="7" md="10">
          <b-row class="g-4">
            <b-col xl="6">
              <h6 class="mb-1">
                <a href="#">{{ item.name }}</a>
              </h6>
              <small class="text-primary">{{ item.stockStatus }}</small>

              <ul class="nav nav-divider small align-items-center mt-1">
                <li class="nav-item">Gender: {{ item.gender }}</li>
                <li v-if="item.color" class="nav-item">Color: {{ item.color }}</li>
                <li class="nav-item">Size: {{ item.size }}</li>
              </ul>
            </b-col>

            <b-col md="6" xl="3">
              <b-form-select
                class="form-select-sm"
                aria-label="Default select example"
                :options="selectOptions"
                v-model="selected"
              >
              </b-form-select>

              <div class="hstack gap-1 flex-wrap text-primary-hover mt-2 justify-content-md-end">
                <a href="#" class="text-reset small"> <BIconTrash3 class="me-2" />Remove </a>
                <a href="#" class="text-reset small"> <BIconHeart class="me-2" />Save for later </a>
              </div>
            </b-col>

            <b-col md="6" xl="3" class="text-md-end">
              <h5 class="mb-2">{{ currency }}{{ item.price }}</h5>
              <b-button variant="dark" size="sm" class="mb-0 icons-center">
                <BIconCart3 class="me-2" />Add to cart
              </b-button>
            </b-col>
          </b-row>
        </b-col>
        <hr class="my-5" />
      </b-row>
    </b-card-body>

    <b-card-footer class="bg-transparent text-end p-0">
      <b-button variant="light" class="border mb-0">Continue shopping</b-button>
    </b-card-footer>
  </b-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { currency } from '@/helpers'
import { productItems } from '@/views/pages/accounts/Wishlist/data'
import { BIconCart3, BIconHeart, BIconTrash3 } from 'bootstrap-icons-vue'

const selected = ref(null)
const selectOptions = [
  { value: null, text: '01' },
  { value: '02', text: '02' },
  { value: '03', text: '03' }
]
</script>
