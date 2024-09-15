<template>
  <section class="pb-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-sm-5">
        <h2 class="mb-4">Get plant diagnoses in 3 easy steps</h2>
        <p class="mb-0">
          Simply take a picture of your plant and get an instant identification. Our app uses
          advanced technology to quickly and accurately diagnose any plant problem
        </p>
      </div>

      <Swiper
        :modules="[Autoplay, Pagination]"
        :autoplay="{ delay: 2000 }"
        :spaceBetween="30"
        :pagination="{
          el: '.swiper-pagination'
        }"
        :breakpoints="{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 }
        }"
      >
        <SwiperSlide class="h-100">
          <b-card no-body class="bg-light overflow-hidden p-4 p-sm-5 h-100">
            <b-card-body class="p-0 pb-5">
              <div class="icon-lg bg-dark rounded-circle fw-bold text-white mb-3">01</div>
              <h5>Download app</h5>
              <p class="heading-color">
                Download the Mizzle app for Windows, Mac, or Android devices.
              </p>
              <a href="#"><img :src="androidImg" class="h-30px me-3" alt="icon-img" /></a>
              <a href="#"><img :src="microSoftImg" class="h-30px me-3 ms-1" alt="icon-img" /></a>
              <a href="#"><img :src="appleImg" class="h-30px ms-1" alt="icon-img" /></a>
            </b-card-body>

            <b-card-footer class="bg-transparent p-0">
              <div
                class="iphone-x iphone-x-small rotate-335 m-auto mb-n9 me-n5 mt-4"
                :style="`background: url(${placeholderImg3}); background-size: 100%; width: 280px; height:430px`"
              >
                <i></i>
                <b style="left: 5%"></b>
              </div>
            </b-card-footer>
          </b-card>
        </SwiperSlide>

        <SwiperSlide class="h-100">
          <b-card no-body class="bg-light overflow-hidden p-4 p-sm-5 h-100">
            <b-card-body class="p-0 pb-5">
              <div class="icon-lg bg-dark rounded-circle fw-bold text-white mb-3">02</div>
              <h5>Create account</h5>
              <p class="heading-color">
                Sign up for a free Mizzle account. One account for all devices.
              </p>

              <a href="#" class="btn btn-sm btn-white mb-0">14 days free trial</a>
            </b-card-body>

            <b-card-footer class="bg-transparent p-0">
              <div
                class="iphone-x iphone-x-small m-auto mb-n9 mt-4"
                :style="`background: url(${placeholderImg4}); background-size: 100%; width: 280px; height:430px`"
              >
                <i></i>
                <b style="left: 5%"></b>
              </div>
            </b-card-footer>
          </b-card>
        </SwiperSlide>

        <SwiperSlide class="h-100">
          <b-card no-body class="bg-light overflow-hidden p-4 p-sm-5 h-100">
            <b-card-body class="p-0 pb-5">
              <div class="icon-lg bg-dark rounded-circle fw-bold text-white mb-3">03</div>
              <h5>You're ready to go</h5>
              <p class="heading-color mb-2">
                Enjoy the amazing Mizzle experience and start exploring the app today.
              </p>

              <router-link to="#">Check our FAQs for help</router-link>
            </b-card-body>

            <b-card-footer class="bg-transparent p-0 mb-n9 ms-n5 mt-4">
              <div
                class="iphone-x iphone-x-small rotate-33 m-auto"
                :style="`background: url(${placeholderImg}); background-size: 100%; width: 280px; height:430px`"
              >
                <i></i>
                <b style="left: 5%"></b>
              </div>
            </b-card-footer>
          </b-card>
        </SwiperSlide>
        <div class="swiper-pagination swiper-pagination-primary position-relative mt-4" />
      </Swiper>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import placeholderImg from '@/assets/images/mokeup/app-placeholder.jpg'
import placeholderImg3 from '@/assets/images/mokeup/app-placeholder3.jpg'
import placeholderImg4 from '@/assets/images/mokeup/app-placeholder4.jpg'
import androidImg from '@/assets/images/elements/android.svg'
import microSoftImg from '@/assets/images/elements/microsoft.svg'
import appleImg from '@/assets/images/elements/apple.svg'
</script>
