<template>
  <section class="vh-xl-auto vh-100 bg-dark py-0 overflow-hidden" data-bs-theme="dark">
    <b-container fluid class="h-100 p-0">
      <b-row class="h-100 g-0">
        <b-col lg="6" class="m-auto order-2">
          <div class="px-5 px-xxl-8 py-6 py-lg-8">
            <h1 class="display-2 mb-4 lh-base">
              Designing the
              <span class="position-relative z-index-2">
                Future
                <span
                  class="w-100 h-auto bg-primary p-1 p-md-2 position-absolute bottom-0 start-0 mb-2 mb-sm-3 z-index-n1"
                ></span>
              </span>
            </h1>
            <p class="lead mb-5">
              We specialize in crafting top-tier digital solutions and materials that speak volumes
              with clarity and precision.
            </p>
            <router-link to="#" class="btn btn-lg btn-primary mb-0"
              >Explore our portfolio</router-link
            >
          </div>
        </b-col>

        <b-col lg="6" class="order-1 order-lg-2">
          <Swiper
            class="swiper-img-scale h-100"
            :modules="[EffectFade, Autoplay, Pagination]"
            loop
            :effect="'fade'"
            :speed="1500"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false
            }"
            :pagination="{
              el: '.swiper-pagination',
              clickable: true
            }"
          >
            <SwiperSlide v-for="(image, idx) in swiperImages" :key="idx">
              <div
                class="h-100 scale-img py-9"
                :style="`background-image:url(${image}); background-position: center left; background-size: cover;`"
              ></div>
            </SwiperSlide>
          </Swiper>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectFade, Autoplay, Pagination } from 'swiper/modules'

import backgroundImg7 from '@/assets/images/bg/07.jpg'
import backgroundImg12 from '@/assets/images/bg/12.jpg'
import backgroundImg13 from '@/assets/images/bg/13.jpg'

const swiperImages = [backgroundImg7, backgroundImg12, backgroundImg13]
</script>
