<template>
  <section class="py-xl-5">
    <b-container
      class="py-xl-8"
      style="background-position: center; background-size: cover"
      :style="{ backgroundImage: `url('${mapImg}')` }"
    >
      <div class="inner-container text-center">
        <h2 class="mb-4">We're global and growing</h2>
        <p class="mb-6">
          Mizzle customer support is available free of charge. Connection charges can vary when
          calling from outside the area, abroad or from a mobile phone.
        </p>

        <b-row class="g-4 text-start justify-content-center">
          <b-col md="5" v-for="(item, idx) in location" :key="idx">
            <b-card no-body class="border p-4">
              <div class="avatar avatar-lg mb-4">
                <img class="avatar-img rounded-circle" :src="item.image" alt="avatar" />
              </div>
              <b-card-title tag="h6" class="mb-3"
                ><a href="#">{{ item.counrty }}</a></b-card-title
              >

              <ul class="list-group list-group-borderless border-0">
                <li class="d-flex mb-3">
                  <BIconGeoAlt class="me-2 fa-xl" />55/123 Norman street, Banking road, Sydney NSW
                  5000
                </li>
                <li class="d-flex mb-3 icons-center">
                  <BIconHeadset class="me-2" />Call: 469-537-2410 (Toll-free)
                </li>
              </ul>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { location } from '@/views/pages/about/AboutV2/data'
import { BIconGeoAlt, BIconHeadset } from 'bootstrap-icons-vue'

import mapImg from '@/assets/images/elements/map.svg'
</script>
