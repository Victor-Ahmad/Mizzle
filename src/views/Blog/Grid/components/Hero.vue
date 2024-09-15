<template>
  <section class="pt-7">
    <b-container class="pt-3 pt-xl-5">
      <Swiper
        class="swiper rounded"
        :loop="true"
        :modules="[Autoplay, EffectFade, Navigation, Pagination]"
        :effect="'fade'"
        :autoplay="{
          delay: 2000
        }"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true
        }"
      >
        <SwiperSlide v-for="(blog, idx) in blogSlides" :key="idx">
          <BlogSlide :blog="blog" />
        </SwiperSlide>

        <div class="swiper-pagination swiper-pagination-white mb-3"></div>

        <div
          class="d-flex justify-content-between position-absolute top-50 start-0 w-100 px-1 px-sm-3"
        >
          <a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-prev">
            <BIconArrowLeft style="height: 16px; width: 16px" />
          </a>
          <a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-next">
            <BIconArrowRight style="height: 16px; width: 16px" />
          </a>
        </div>
      </Swiper>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { blogSlides } from '@/views/Blog/Grid/data'
import BlogSlide from '@/views/Blog/Grid/components/BlogSlide.vue'
import { BIconArrowLeft, BIconArrowRight } from 'bootstrap-icons-vue'
</script>
