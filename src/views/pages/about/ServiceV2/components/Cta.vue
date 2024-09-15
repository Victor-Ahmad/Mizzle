<template>
  <section class="pt-0">
    <b-container>
      <div class="bg-dark rounded position-relative overflow-hidden p-4 p-sm-7">
        <div class="position-absolute top-0 start-0 mt-n8 mt-xl-n5 d-none d-md-block">
          <img :src="saasDecoration05" class="rotate-33 h-200px" alt="" />
        </div>

        <div class="position-absolute end-0 bottom-0 d-none d-lg-block">
          <img :src="ctaVectorImg" class="h-200px h-xl-300px" alt="" />
        </div>

        <b-row class="g-4 position-relative">
          <b-col lg="10" xl="7" class="mx-auto text-center">
            <h3 class="text-white mb-3">Ready to elevate your business?</h3>
            <p class="text-white opacity-8">
              Join the Mizzle revolution today and be part of the millions who've already embraced a
              brighter future!
            </p>

            <a href="#" class="btn btn-primary mb-6">Get started today</a>

            <p class="text-white text-center">Used by the world best companies.</p>

            <Swiper
              :modules="[Autoplay]"
              :autoplay="{
                delay: 2000
              }"
              :loop="false"
              :slidesPerView="2"
              :spaceBetween="30"
              :breakpoints="{
                576: { slidesPerView: 2 },
                768: { slidesPerView: 4 }
              }"
              wrapperClass="align-items-center"
            >
              <SwiperSlide v-for="(item, idx) in swiper" :key="idx">
                <img :src="item" class="px-sm-3 ps-0" alt="client-img" />
              </SwiperSlide>
            </Swiper>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import { swiper } from '@/views/pages/about/ServiceV2/data'

import ctaVectorImg from '@/assets/images/elements/cta-vector.svg'
import saasDecoration05 from '@/assets/images/elements/saas-decoration/05.png'
</script>
