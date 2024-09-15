<template>
  <section class="pt-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-sm-5">
        <h2 class="mb-0">Explore our latest blogs</h2>
      </div>

      <Swiper
        :modules="[Autoplay, Pagination]"
        :autoplay="{
          delay: 2000
        }"
        :loop="false"
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
        <SwiperSlide v-for="(blog, idx) in blogs" :key="idx">
          <BlogCard :blog="blog" />
        </SwiperSlide>

        <div class="swiper-pagination swiper-pagination-primary position-relative mt-4"></div>
      </Swiper>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import { Pagination } from 'swiper/modules'
import BlogCard from '@/views/demos/DigitalAgency/components/BlogCard.vue'
import { blogs } from '@/views/demos/DigitalAgency/data'
</script>
