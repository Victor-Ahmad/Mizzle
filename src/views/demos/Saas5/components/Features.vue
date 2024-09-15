<template>
  <section class="pt-0 overflow-hidden">
    <b-container>
      <b-row class="align-items-center">
        <b-col lg="6" class="position-relative pe-lg-7 order-2">
          <figure class="position-absolute top-50 start-50 translate-middle">
            <svg
              class="fill-light"
              width="451"
              height="374"
              viewBox="0 0 451 374"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M447.529 122.679C466.73 187.993 403.737 260.438 321.205 311.776C238.337 363.4 135.594 393.918 71.59 359.122C7.24919 324.326 -18.3524 224.501 13.9864 143.785C45.9884 63.069 136.268 1.46255 231.6 0.0364779C327.269 -1.67481 428.327 57.0795 447.529 122.679Z"
              />
            </svg>
          </figure>

          <b-row class="justify-content-center position-relative">
            <b-col cols="9">
              <img :src="decoration2" class="mb-4" alt="" />
            </b-col>

            <b-col cols="5">
              <img :src="decoration17" alt="" />
            </b-col>

            <b-col cols="5" class="me-auto">
              <img :src="decoration16" class="rounded-3 shadow" alt="" />
            </b-col>
          </b-row>
        </b-col>

        <b-col lg="6" class="z-index-2 mb-6 mb-lg-0 order-1 order-lg-2">
          <h2 class="mb-4 mb-lg-5">Powerful Features for Streamlined Success</h2>
          <b-row class="g-4 g-lg-5">
            <b-col sm="6" v-for="(feature, idx) in features" :key="idx">
              <div
                class="icon-lg rounded-circle heading-color bg-light mb-3 flex-centered align-items-center"
              >
                <component :is="feature.icon" class="fa-lg" style="height: 24px; width: 24px" />
              </div>
              <h6 class="mb-3">{{ feature.title }}</h6>
              <p class="mb-0">{{ feature.description }}</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { features } from '@/views/demos/Saas5/data'

import decoration2 from '@/assets/images/elements/saas-decoration/decoration-2.png'
import decoration16 from '@/assets/images/elements/saas-decoration/16.png'
import decoration17 from '@/assets/images/elements/saas-decoration/17.png'
</script>
