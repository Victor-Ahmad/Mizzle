<template>
  <section class="pt-0">
    <Swiper
      class="overflow-hidden"
      :modules="[EffectFade, Autoplay, Pagination]"
      :loop="true"
      :effect="'fade'"
      :speed="1000"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false
      }"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
    >
      <SwiperSlide>
        <b-card
          no-body
          class="overflow-hidden min-vh-100 rounded-0"
          :style="`background:url(${backgroundImg10}) no-repeat; background-size:cover; background-position:center;`"
        >
          <div class="bg-overlay bg-linear-overlay"></div>

          <div class="position-relative z-index-2 d-flex flex-column m-auto h-100 py-9">
            <b-container>
              <b-row>
                <b-col sm="11" lg="8" xl="7" class="text-center m-auto">
                  <span class="bg-white bg-opacity-10 text-white small rounded-3 px-3 py-2"
                    >🚀 #World's best software agency</span
                  >
                  <h1 class="text-white display-4 my-4">
                    Leading the Way in <span class="text-primary">software</span> innovation
                  </h1>
                  <p class="text-white mb-5">
                    Whether you're a gaming enthusiast or simply seeking an extraordinary escape
                    from reality, our Virtual VR product is your portal to endless excitement.
                  </p>
                  <a class="btn btn-lg btn-white icon-link icon-link-hover mb-0" href="#"
                    >Get started now<BIconArrowRight class="bi" />
                  </a>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-card>
      </SwiperSlide>

      <SwiperSlide>
        <b-card
          no-body
          class="overflow-hidden min-vh-100 rounded-0"
          :style="`background:url(${backgroundImg9}) no-repeat; background-size:cover; background-position:center;`"
        >
          <div class="bg-overlay bg-linear-overlay"></div>

          <div class="position-relative z-index-2 d-flex flex-column m-auto h-100 py-9">
            <b-container>
              <b-row>
                <b-col sm="11" lg="8" class="mt-auto">
                  <h1 class="text-white display-4 mb-4">
                    Empower Your <span class="fw-light">Business</span> with
                    <span class="fw-light">Innovation</span>
                  </h1>
                  <p class="text-white mb-5">
                    Whether you're a gaming enthusiast or simply seeking an extraordinary escape
                    from reality, our Virtual VR product is your portal to endless excitement.
                  </p>
                  <a class="btn btn-lg btn-primary icon-link icon-link-hover mb-0" href="#"
                    >Explore Our Services<BIconArrowRight class="bi" />
                  </a>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-card>
      </SwiperSlide>

      <div class="swiper-pagination swiper-pagination-line position-absolute bottom-0 mb-3"></div>
    </Swiper>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectFade, Autoplay, Pagination } from 'swiper/modules'
import { BIconArrowRight } from 'bootstrap-icons-vue'

import backgroundImg9 from '@/assets/images/bg/09.jpg'
import backgroundImg10 from '@/assets/images/bg/10.jpg'
</script>
