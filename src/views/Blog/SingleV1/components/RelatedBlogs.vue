<template>
  <section class="pt-0">
    <b-container>
      <div class="d-flex justify-content-between text-center mb-4 mb-sm-6">
        <h3 class="mb-0">Related blogs</h3>

        <div>
          <router-link
            to=""
            class="btn btn-light border btn-icon btn-lg rounded-circle mb-0 swiper-button-prev me-1"
          >
            <BIconArrowLeft style="height: 23px; width: 23px" />
          </router-link>
          <router-link
            to=""
            class="btn btn-light border btn-icon btn-lg rounded-circle mb-0 swiper-button-next"
          >
            <BIconArrowRight style="height: 23px; width: 23px" />
          </router-link>
        </div>
      </div>

      <Swiper
        :modules="[Autoplay, Navigation]"
        :autoplay="{
          delay: 2000
        }"
        :loop="false"
        :spaceBetween="30"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
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
      </Swiper>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconArrowLeft, BIconArrowRight } from 'bootstrap-icons-vue'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import BlogCard from '@/views/Blog/SingleV1/components/BlogCard.vue'
import { blogs } from '@/views/Blog/SingleV1/data'
</script>
