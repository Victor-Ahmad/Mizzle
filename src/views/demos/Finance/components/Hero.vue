<template>
  <section class="pt-xl-8 pb-0 position-relative">
    <div class="position-absolute top-0 start-50 translate-middle-x mt-8">
      <img :src="pattern5" alt="" />
    </div>

    <b-container class="pt-5 position-relative">
      <b-row>
        <b-col lg="8" class="mx-auto text-center">
          <span class="heading-color fw-semibold">Trusted by happy customers</span>
          <ul class="avatar-group mb-0 align-items-center justify-content-center mt-2">
            <li class="avatar avatar-xs" v-for="(image, idx) in customers" :key="idx">
              <img class="avatar-img rounded-circle" :src="image" alt="avatar" />
            </li>
          </ul>

          <h1 class="my-4">
            Empower your <span class="text-primary">finances</span> for a brighter tomorrow
          </h1>
          <p class="mb-5">
            Whether you're planning for retirement, investing in your future, or seeking expert
            advice, our team is here to provide tailored solutions to meet your unique needs.
          </p>

          <div class="d-flex gap-1 gap-sm-3 flex-wrap justify-content-center">
            <b-button variant="primary" size="lg" class="icons-center">
              <BIconTelephoneFill class="me-2" />
              Book a call
            </b-button>
            <button class="btn btn-lg btn-light border" type="button">Start Your Journey</button>
          </div>
        </b-col>
        <b-col cols="12" class="mt-6 mt-xl-8">
          <img :src="background11" class="rounded" alt="" />
        </b-col>
      </b-row>

      <b-row class="g-4 justify-content-between align-items-center mt-5 mt-md-7 pt-2 d-none">
        <b-col md="6" lg="3" class="order-2">
          <img :src="about19" class="rounded" alt="" />
        </b-col>

        <b-col md="6" lg="3" class="d-none d-lg-block order-md-3">
          <img :src="decoration24" class="rounded shadow" alt="" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconTelephoneFill } from 'bootstrap-icons-vue'

import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import background11 from '@/assets/images/bg/11.jpg'
import about19 from '@/assets/images/about/19.jpg'
import pattern5 from '@/assets/images/elements/bg-pattern-5.png'
import decoration24 from '@/assets/images/elements/saas-decoration/24.png'

const customers = [avatar6, avatar5, avatar2, avatar3, avatar4]
</script>
