<template>
  <b-card no-body class="bg-transparent">
    <b-card-header
      class="bg-transparent border-bottom d-flex justify-content-between align-items-center p-0 pb-3"
    >
      <b-card-title tag="h6" class="mb-0">Your order</b-card-title>
      <b-col md="3" class="ms-auto">
        <b-form>
          <b-form-select
            v-model="selected"
            :options="options"
            class="js-choice"
            aria-label=".form-select-sm"
          >
          </b-form-select>
        </b-form>
      </b-col>
    </b-card-header>

    <b-card-body class="p-0 pt-5">
      <b-row class="align-items-md-center" v-for="(item, idx) in productItems" :key="idx">
        <b-col cols="5" md="2">
          <div class="bg-light p-2 rounded-2">
            <img :src="item.category?.image" alt="" />
          </div>
        </b-col>

        <b-col cols="7" md="10">
          <b-row class="g-2 align-items-center">
            <b-col md="6" class="mb-3 mb-md-0">
              <p class="heading-color fw-normal small mb-2">
                Order no: <span class="text-primary">{{ item.orderNo }}</span>
              </p>
              <h6 class="mb-2">
                <a href="#">{{ item.category?.name }}</a>
              </h6>

              <ul class="nav nav-divider small align-items-center">
                <li v-if="item.size" class="nav-item">
                  Size: <b>{{ item.size }}</b>
                </li>
                <li class="nav-item">
                  Shipped date: <b>{{ item.shippedDate }}</b>
                </li>
              </ul>
            </b-col>

            <b-col md="3" class="mb-3 mb-md-0" v-if="item.trackOrderButton">
              <a href="#" class="btn btn-sm btn-light border mb-3">
                <BIconTruck class="me-2" />Track order
              </a>
              <br />
              <p class="text-primary fw-semibold small mb-0 icons-center">
                <BIconCheckCircleFill class="me-1" />In Transit
              </p>
              <br />
              <small class="text-body-secondary">Expected at {{ item.expectedLocation }}</small>
            </b-col>

            <b-col :md="idx == productItems.length - 1 ? 3 : 4" class="text-md-end ms-auto">
              <p
                class="fw-semibold mb-1 mb-md-3 icons-center justify-content-end"
                :class="`text-${item.variant}`"
              >
                <component :is="item.category?.icon" class="me-1" />{{ item.status }}
              </p>
              <br />
              <small>Total amount</small>
              <h5 :class="idx == productItems.length - 1 ? 'mb-3' : 'mt-1 mb-0'">
                {{ currency }}{{ item.totalAmount }}
              </h5>
            </b-col>
          </b-row>
        </b-col>
        <hr class="my-5" />
      </b-row>
    </b-card-body>

    <div class="card-footer bg-transparent text-end p-0">
      <ul
        class="pagination pagination-primary-soft list-unstyled d-flex justify-content-sm-end flex-wrap mb-0"
      >
        <li class="page-item disabled"><a class="page-link" href="#">Prev</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">..</a></li>
        <li class="page-item"><a class="page-link" href="#">5</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </div>
  </b-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { currency } from '@/helpers'
import { productItems } from '@/views/pages/accounts/Order/data'
import { BIconCheckCircleFill, BIconTruck } from 'bootstrap-icons-vue'

const selected = ref('All')
const options = [
  { value: null, text: 'Sort by' },
  { value: 'All', text: 'All' },
  { value: 'Delivered', text: 'Delivered' },
  { value: 'Processing', text: 'Processing' },
  { value: 'Cancelled', text: 'Cancelled' }
]
</script>
