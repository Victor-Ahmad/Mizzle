<template>
  <section class="pt-0">
    <b-container>
      <div class="bg-dark rounded-3 p-5 p-md-6" data-bs-theme="dark">
        <b-row class="g-4 g-md-5">
          <b-col xl="6" class="h-100 pe-sm-7">
            <div class="d-xl-flex justify-content-between">
              <div>
                <h3 class="mb-4">{{ pricingData.title }}</h3>
                <p class="mb-4">{{ pricingData.description }}</p>
                <router-link
                  class="btn btn-white icon-link icon-link-hover"
                  :to="{ name: pricingData.route?.name }"
                  >View pricing
                  <BIconChevronRight class="bi" />
                </router-link>
              </div>
              <div class="vr bg-secondary opacity-1 ms-5 d-none d-xl-block"></div>
            </div>
          </b-col>

          <b-col xl="6" class="ms-auto">
            <b-row>
              <b-col sm="6">
                <div
                  class="icon-lg text-primary bg-white rounded-circle mb-3 m-md-start flex-centered"
                >
                  <BIconRocketTakeoff class="fa-lg" />
                </div>
                <p class="text-secondary fw-semibold mb-3">Unlimited users</p>
                <h6 class="mb-1">
                  <span class="fs-1">{{ currency }}{{ pricingData.price }}</span> /month
                </h6>
                <p class="fw-semibold text-primary">Bulk purchase discount</p>
              </b-col>

              <b-col sm="6" class="ps-md-5">
                <p class="text-secondary fw-semibold mb-3">Features list of your need</p>
                <ul class="list-group list-group-borderless">
                  <li
                    class="list-group-item d-flex heading-color mb-0 d-flex align-items-center"
                    v-for="(feature, idx) in pricingData.features"
                    :key="idx"
                  >
                    <component :is="feature.icon" class="text-primary me-2" />{{ feature.title }}
                  </li>
                </ul>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconChevronRight, BIconRocketTakeoff } from 'bootstrap-icons-vue'
import { currency } from '@/helpers'
import { pricingData } from '@/views/demos/Saas5/data'
</script>
