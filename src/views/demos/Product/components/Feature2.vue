<template>
  <section class="pb-0">
    <b-container>
      <b-row>
        <b-col md="10" class="mx-auto">
          <img :src="productDetailImg" alt="product-mechanism" />
        </b-col>
      </b-row>
    </b-container>
  </section>

  <section class="pb-0">
    <b-container>
      <b-row class="g-0 bg-light rounded overflow-hidden">
        <b-col md="6">
          <div
            class="h-100 py-8 py-md-0"
            :style="`background:url(${about9}) no-repeat; background-size:cover; background-position:center;`"
          ></div>
        </b-col>

        <b-col md="6">
          <b-card no-body class="card-body bg-transparent d-block p-4 p-md-5 p-lg-7 h-100">
            <h2 class="mb-4">A magical connection to your devices.</h2>
            <p class="mb-4">
              Why end might ask civil again spoil. Dinner she our horses depend remember at children
              by reserved to vicinity.
            </p>
            <b-row class="row-cols-2 row-cols-lg-3 g-4 mb-4">
              <b-col>
                <span class="heading-color">More than</span>
                <h4 class="my-2">24</h4>
                <p class="mb-0">Of battery life with charging case</p>
              </b-col>
              <b-col>
                <span class="heading-color">Up to</span>
                <h4 class="my-2">5 hr</h4>
                <p class="mb-0">Of listing time on one charge</p>
              </b-col>
              <b-col>
                <span class="heading-color">Connectivity</span>
                <h4 class="my-2"><font-awesome-icon :icon="faBluetoothB" /></h4>
                <p class="mb-0">Bluetooth 5.3 wireless technology</p>
              </b-col>
            </b-row>
            <router-link to="" class="btn btn-dark mb-0">View full specifications</router-link>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { faBluetoothB } from '@fortawesome/free-brands-svg-icons'

import about9 from '@/assets/images/about/09.jpg'
import productDetailImg from '@/assets/images/products/detail-img.png'
</script>
