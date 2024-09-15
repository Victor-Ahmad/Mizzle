<template>
  <section class="pb-0">
    <b-container>
      <div class="inner-container text-center mb-4 mb-sm-6">
        <h2 class="mb-0">Our news & articles</h2>
      </div>

      <Swiper
        :modules="[Autoplay, Navigation]"
        :autoplay="{ delay: 2000 }"
        :spaceBetween="30"
        :loop="false"
        :breakpoints="{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 }
        }"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }"
      >
        <SwiperSlide v-for="(blog, idx) in blogs" :key="idx">
          <BlogCard :blog="blog" />
        </SwiperSlide>

        <div class="d-flex justify-content-between position-absolute top-50 start-0 w-100">
          <button class="btn btn-dark btn-icon btn-lg rounded-circle mb-0 swiper-button-prev">
            <BIconArrowLeft style="height: 23px; width: 23px" />
          </button>
          <button class="btn btn-dark btn-icon btn-lg rounded-circle mb-0 swiper-button-next">
            <BIconArrowRight style="height: 23px; width: 23px" />
          </button>
        </div>
      </Swiper>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { blogs } from '@/views/demos/CreativeAgency/data'
import BlogCard from '@/views/demos/CreativeAgency/components/BlogCard.vue'
import { BIconArrowLeft, BIconArrowRight } from 'bootstrap-icons-vue'
import { Autoplay, Navigation } from 'swiper/modules'
</script>
