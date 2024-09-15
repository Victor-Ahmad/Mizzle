<template>
  <section>
    <b-container>
      <b-row class="align-items-center">
        <b-col lg="5" class="mb-5 mb-sm-0">
          <h2 class="mb-4">Success stories in their own words</h2>
          <p class="mb-4">
            Read what our satisfied clients have to say about their experiences with our platform.
          </p>
          <router-link
            class="btn btn-lg btn-primary icon-link icon-link-hover mb-4 mb-lg-8"
            :to="{ name: 'customer.stories' }"
            >View all reviews<BIconArrowRight />
          </router-link>

          <h6 class="mb-2">Trusted by 50K+ customers</h6>
          <div class="d-flex">
            <ul class="list-inline">
              <li
                class="list-inline-item small me-1"
                v-for="(_star, idx) in new Array(4)"
                :key="idx"
              >
                <font-awesome-icon :icon="faStar" class="text-warning" />
              </li>
              <li class="list-inline-item small me-1">
                <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
              </li>
              <li class="list-inline-item heading-color fw-normal me-0">4.4/5.0</li>
            </ul>
            <span class="text-secondary mx-2 mx-sm-3">|</span>
            <p class="mb-0">3,857 Reviews</p>
          </div>
        </b-col>

        <b-col lg="7" class="ps-xl-6">
          <b-row class="g-4">
            <b-col md="6">
              <b-card no-body class="card-hover-shadow border p-4 mb-4">
                <ul class="list-inline mb-5">
                  <li
                    class="list-inline-item small me-1"
                    v-for="(_star, idx) in new Array(4)"
                    :key="idx"
                  >
                    <font-awesome-icon :icon="faStar" class="text-warning" />
                  </li>
                  <li class="list-inline-item small me-0">
                    <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
                  </li>
                </ul>

                <p class="heading-color mb-4">
                  "Frequently partiality possession resolution at or appearance unaffected me. Ye
                  goodness felicity do disposal dwelling no."
                </p>

                <div class="d-flex align-items-center">
                  <div class="avatar flex-shrink-0">
                    <img class="avatar-img rounded-circle" :src="avatar5" alt="avatar" />
                  </div>
                  <div class="ms-2">
                    <h6 class="mb-0">Jacqueline Miller</h6>
                    <p class="mb-0 small">Ceo of Blogzine</p>
                  </div>
                </div>
              </b-card>

              <b-card no-body class="card-hover-shadow border p-4">
                <ul class="list-inline mb-5">
                  <li
                    class="list-inline-item small me-1"
                    v-for="(_star, idx) in new Array(4)"
                    :key="idx"
                  >
                    <font-awesome-icon :icon="faStar" class="text-warning" />
                  </li>
                  <li class="list-inline-item small me-0">
                    <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
                  </li>
                </ul>

                <p class="heading-color mb-4">
                  "Was out laughter raptures returned outweigh. Luckily cheered colonel I do we
                  attack highest enabled. Tried law yet style child. The bore of true of no be deal.
                  "
                </p>

                <div class="d-flex align-items-center">
                  <div class="avatar flex-shrink-0">
                    <img class="avatar-img rounded-circle" :src="avatar2" alt="avatar" />
                  </div>
                  <div class="ms-2">
                    <h6 class="mb-0">Emma Watson</h6>
                    <p class="mb-0 small">Co-Founder</p>
                  </div>
                </div>
              </b-card>
            </b-col>

            <b-col md="6" class="mt-md-7">
              <b-card no-body class="card-hover-shadow border p-4 mb-4">
                <ul class="list-inline mb-5">
                  <li
                    class="list-inline-item small me-1"
                    v-for="(_star, idx) in new Array(4)"
                    :key="idx"
                  >
                    <font-awesome-icon :icon="faStar" class="text-warning" />
                  </li>
                  <li class="list-inline-item small me-0">
                    <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
                  </li>
                </ul>

                <p class="heading-color mb-4">
                  "Two before narrow not relied on how except moment myself Dejection assurance Mrs
                  led certainly So gate at no only none open Betrayed."
                </p>

                <div class="d-flex align-items-center">
                  <div class="avatar flex-shrink-0">
                    <img class="avatar-img rounded-circle" :src="avatar4" alt="avatar" />
                  </div>
                  <div class="ms-2">
                    <h6 class="mb-0">Louis Ferguson</h6>
                    <p class="mb-0 small">Web Developer</p>
                  </div>
                </div>
              </b-card>

              <b-card no-body class="card-hover-shadow border p-4">
                <ul class="list-inline mb-5">
                  <li
                    class="list-inline-item small me-1"
                    v-for="(_star, idx) in new Array(4)"
                    :key="idx"
                  >
                    <font-awesome-icon :icon="faStar" class="text-warning" />
                  </li>
                  <li class="list-inline-item small me-0">
                    <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
                  </li>
                </ul>

                <p class="heading-color mb-4">
                  "Our passion for customer excellence is just one reason why we are the market
                  leader. We've always worked very hard to give our customers the best experience."
                </p>

                <div class="d-flex align-items-center">
                  <div class="avatar flex-shrink-0">
                    <img class="avatar-img rounded-circle" :src="avatar6" alt="avatar" />
                  </div>
                  <div class="ms-2">
                    <h6 class="mb-0">Samuel Bishop</h6>
                    <p class="mb-0 small">Product designer</p>
                  </div>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconArrowRight } from 'bootstrap-icons-vue'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
</script>
