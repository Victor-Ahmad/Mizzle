<template>
  <section class="pb-0">
    <b-container>
      <b-row>
        <b-col lg="6" xxl="5" class="pe-5 pe-xxl-0 order-2">
          <div class="bg-primary bg-opacity-10 rounded position-relative h-100 p-5">
            <figure class="position-absolute top-0 start-0 ms-n7 mt-n5">
              <svg
                class="fill-mode"
                width="156"
                height="153"
                viewBox="0 0 156 153"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M153.937 38.1678C152.303 35.6399 149.561 33.6227 146.626 32.9529C139.276 31.2552 133.035 37.7975 129.157 43.1415C120.985 54.4076 115.342 67.3183 107.06 78.5549C99.4078 88.9357 89.0538 99.3797 75.1873 99.1243C62.5646 98.8689 50.1453 91.1987 46.9901 78.6248C45.2071 71.544 45.9289 58.5139 54.2737 55.3744C60.8787 52.8911 63.2498 62.3569 63.6665 66.9424C64.563 76.3867 61.6467 86.3442 56.3832 94.2134C49.0848 105.103 36.332 112.714 23.3184 114.167C17.8192 114.78 11.5268 114.548 6.33786 112.386C5.3118 111.953 3.58298 113.716 4.89351 114.265C20.5108 120.784 40.2932 113.385 51.8984 102.409C59.518 95.2324 64.4305 85.3378 65.7927 75.0022C66.6228 68.6822 66.7565 59.081 61.2469 54.5666C55.8372 50.1184 49.1496 55.7722 46.564 60.6552C41.9945 69.3018 43.202 80.7017 48.783 88.5458C55.9943 98.642 70.335 103.202 82.3011 100.246C95.3511 97.0106 104.656 85.7138 111.837 75.1078C116.46 68.3478 120.522 61.2598 124.624 54.2415C128.35 47.8713 132.192 39.8573 138.92 36.0668C143.526 33.4605 148.927 35.0684 151.771 39.4387C152.405 40.4366 154.571 39.1656 153.937 38.1678Z"
                />
                <path
                  d="M15.0507 108.912C11.3762 110.862 7.54807 112.219 3.48774 113.06C2.90203 113.178 1.55006 114.076 2.31119 114.754C5.35532 117.463 8.42384 120.16 11.4689 122.87C12.0315 122.331 12.6044 121.755 13.167 121.216C12.91 121.147 12.6531 121.078 12.3952 121.009C11.4757 120.762 9.63393 122.436 10.8839 122.771C11.1417 122.84 11.3987 122.909 11.6565 122.978C12.3914 123.176 14.2662 122.103 13.3543 121.326C10.3092 118.616 7.24137 115.921 4.19628 113.211C3.80428 113.775 3.41201 114.34 3.01974 114.905C7.49862 113.979 11.7514 112.441 15.7906 110.313C17.1862 109.545 16.4135 108.194 15.0507 108.912Z"
                />
              </svg>
            </figure>

            <div class="tab-content h-100" id="feature-tabContent">
              <div
                class="tab-pane fade h-100"
                :class="show === idx && 'show active'"
                v-for="(image, idx) in tabImages"
                :key="idx"
                tabindex="0"
              >
                <div class="d-flex h-100">
                  <img :src="image" class="m-auto" alt="decoration" />
                </div>
              </div>
            </div>
          </div>
        </b-col>

        <b-col lg="6" class="ms-auto h-100 order-1 order-lg-2 mb-5 mb-lg-0">
          <h2 class="mb-4">Transform your business with our powerful solutions</h2>
          <p class="mb-4">
            Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up
            its enjoyment.
          </p>

          <div
            class="nav nav-pills nav-pills-border-start flex-column mb-3"
            id="feature-tab"
            role="tablist"
          >
            <router-link
              to="#"
              class="nav-link p-3 p-sm-4 mb-2"
              id="feature-01-tab"
              :class="show === idx && 'active'"
              @click="show = idx"
              v-for="(feature, idx) in features"
              :key="idx"
            >
              <div class="d-flex">
                <div
                  class="icon-lg bg-body heading-color flex-shrink-0 border rounded flex-centered"
                >
                  <component :is="feature.icon" class="fs-6" />
                </div>
                <div class="ms-3">
                  <h6>{{ feature.title }}</h6>
                  <p class="text-body text-wrap mb-0">{{ feature.description }}</p>
                </div>
              </div>
            </router-link>
          </div>

          <p class="mt-3 mb-0">
            <span class="icons-center gap-1 me-1">
              <BIconInfoSquareFill class="heading-color me-1" />Contact our team for more
              information
            </span>
            <router-link
              :to="{ name: 'contact.v1' }"
              class="icon-link icon-link-hover text-decoration-underline"
              >Let's chat<BIconArrowRight class="bi"
            /></router-link>
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { features } from '@/views/demos/Saas4/data'
import { BIconInfoSquareFill, BIconArrowRight } from 'bootstrap-icons-vue'

import decoration10 from '@/assets/images/elements/saas-decoration/10.png'
import decoration11 from '@/assets/images/elements/saas-decoration/11.png'
import decoration12 from '@/assets/images/elements/saas-decoration/12.png'

const tabImages = [decoration10, decoration12, decoration11]

const show = ref(0)
</script>
