<template>
  <section class="pt-md-0 pb-0">
    <b-container>
      <div class="bg-primary position-relative rounded p-4 pt-sm-5 px-sm-5 mb-n9">
        <span class="display-4 heading-color position-absolute top-0 start-0 mt-n4 mt-md-n5 ms-4">
          <BIconQuote class="mb-3" />
        </span>

        <Swiper
          class="overflow-hidden"
          :modules="[Autoplay, Pagination]"
          :loop="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false
          }"
          :pagination="{
            el: '.swiper-pagination',
            clickable: true
          }"
          wrapperClass="pb-7"
        >
          <SwiperSlide v-for="(testimonial, idx) in testimonials" :key="idx">
            <TestimonialCard :testimonial="testimonial" />
          </SwiperSlide>

          <div
            class="swiper-pagination swiper-pagination-line position-absolute bottom-0 mb-3"
          ></div>
        </Swiper>
      </div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import { testimonials } from '@/views/demos/CreativeAgency/data'
import TestimonialCard from '@/views/demos/CreativeAgency/components/TestimonialCard.vue'
import { BIconQuote } from 'bootstrap-icons-vue'
</script>
