<template>
  <section class="pt-0">
    <b-container>
      <div
        class="rounded-3 position-relative overflow-hidden p-4 p-md-6"
        style="background-size: cover; background-position: center"
        :style="{ backgroundImage: `url('${bg5Img}')` }"
      >
        <div class="bg-overlay bg-dark bg-opacity-75"></div>

        <b-row class="position-relative z-index-1">
          <b-col lg="4" class="mb-5 mb-lg-0">
            <div class="d-flex flex-column h-100">
              <ul class="list-group list-group-borderless mb-4">
                <li class="list-group-item text-white fs-5 fw-semibold d-flex p-0">Innovate.</li>
                <li class="list-group-item text-white fs-3 fw-semibold d-flex p-0">Elevate.</li>
                <li class="list-group-item text-white fs-2 fw-semibold d-flex p-0">Succeed.</li>
              </ul>

              <div class="mt-auto">
                <a class="btn btn-lg btn-outline-white icon-link icon-link-hover" href="#"
                  >Join our community
                  <BIconArrowRight class="bi" />
                </a>
              </div>
            </div>
          </b-col>

          <b-col lg="8" xl="6" class="ms-auto">
            <b-card no-body class="p-4 p-sm-5">
              <b-card-header class="bg-transparent p-0">
                <h5>Here our customers experience</h5>
              </b-card-header>

              <b-card-body class="p-0 pt-4">
                <Swiper
                  :modules="[Autoplay, Pagination]"
                  :autoplay="{
                    delay: 2000
                  }"
                  :loop="true"
                  :spaceBetween="30"
                  :grabCursor="true"
                  :pagination="{
                    el: '.swiper-pagination',
                    clickable: true
                  }"
                >
                  <SwiperSlide v-for="(item, idx) in testimonials" :key="idx" class="pb-5">
                    <TestimonialCard :testimonial="item" />
                  </SwiperSlide>

                  <div class="swiper-pagination position-absolute bottom-0"></div>
                </Swiper>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import { testimonials } from '@/views/pages/about/AboutV3/data'
import TestimonialCard from '@/views/pages/about/AboutV3/components/TestimonialCard.vue'
import { BIconArrowRight } from 'bootstrap-icons-vue'
import bg5Img from '@/assets/images/bg/05.jpg'
</script>
