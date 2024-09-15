<template>
  <section class="pt-0">
    <b-container>
      <b-row class="align-items-center">
        <b-col lg="6" xl="5" class="mb-6 mb-lg-0">
          <h2 class="mb-sm-4">Get More Done with Our Holistic Solution</h2>
          <p class="mb-sm-5">
            Streamline your tasks and achieve more with a single, all-encompassing platform designed
            to meet your needs from start to finish.
          </p>

          <h6 class="fw-semibold mb-5">#1 most selling author of GetBootstrap</h6>

          <div class="d-flex align-items-center mb-4">
            <div class="w-25 border-end h-100 me-4 me-sm-5 flex-shrink-0">
              <div class="d-flex">
                <h4 class="purecounter mb-0">
                  <Vue3autocounter ref="counter" :startAmount="0" :endAmount="200" :duration="3" />
                </h4>
                <span class="h4 text-primary mb-0">+</span>
              </div>
            </div>
            <p class="heading-color mb-0">
              A Wide Range of Clients, Spanning Freelancers to Corporate Giants
            </p>
          </div>

          <div class="d-flex align-items-center">
            <div class="w-25 border-end h-100 me-4 me-sm-5 flex-shrink-0">
              <div class="d-flex">
                <h4 class="purecounter mb-0">
                  <Vue3autocounter ref="counter" :startAmount="0" :endAmount="14" :duration="3" />
                </h4>
                <span class="h4 text-primary mb-0">K+</span>
              </div>
            </div>
            <p class="heading-color mb-0">
              Resolved all kinds of questions and inquiries over the last 5 years
            </p>
          </div>
        </b-col>

        <b-col lg="6" class="ms-auto">
          <div class="position-relative d-flex flex-column h-100">
            <b-col md="9" class="mx-auto z-index-2">
              <img :src="decoration23" alt="" />
            </b-col>
            <div
              class="bg-light border rounded-3 h-50 w-100 position-absolute bottom-0 start-0"
            ></div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import Vue3autocounter from 'vue3-autocounter'

import decoration23 from '@/assets/images/elements/saas-decoration/23.png'
</script>
