<template>
  <section class="bg-dark" data-bs-theme="dark">
    <b-container>
      <b-row class="g-4 align-items-center">
        <b-col xl="4">
          <h3 class="mb-4">Why our customers love Mizzle</h3>
          <p class="lead mb-2">
            3000+ Users rated us <span class="text-warning fw-bold">4.85</span> out of 5.
          </p>
          <ul class="avatar-group mb-sm-0">
            <li class="avatar avatar-sm" v-for="item in avatars" :key="item">
              <img class="avatar-img rounded-circle" :src="item" alt="avatar" />
            </li>
          </ul>

          <div class="d-flex gap-3 position-relative mt-5 mt-md-6">
            <a
              href="#"
              class="btn btn-outline-white btn-icon rounded-circle mb-0 swiper-button-prev"
            >
              <BIconArrowLeft style="height: 16px; width: 16px" />
            </a>
            <a
              href="#"
              class="btn btn-outline-white btn-icon rounded-circle mb-0 swiper-button-next"
            >
              <BIconArrowRight style="height: 16px; width: 16px" />
            </a>
          </div>
        </b-col>

        <b-col xl="8">
          <Swiper
            :modules="[Navigation, Autoplay]"
            :autoplay="{
              delay: 2000
            }"
            loop
            :spaceBetween="30"
            :grabCursor="true"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }"
            :breakpoints="{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 }
            }"
          >
            <SwiperSlide v-for="(item, idx) in testimonials" :key="idx">
              <TestimonialCard :testimonial="item" />
            </SwiperSlide>
          </Swiper>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'
import { avatars, testimonials } from '@/views/pages/about/AboutV2/data'
import { BIconArrowLeft, BIconArrowRight } from 'bootstrap-icons-vue'
import TestimonialCard from '@/views/pages/about/AboutV2/components/TestimonialCard.vue'
</script>
