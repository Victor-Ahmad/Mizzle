<template>
  <section class="pt-0">
    <b-container>
      <h3 class="mb-4 mb-sm-5">Related works</h3>

      <Swiper
        :modules="[Autoplay, Pagination]"
        :autoplay="{
          delay: 2000
        }"
        :loop="false"
        :spaceBetween="40"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true
        }"
        :breakpoints="{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 }
        }"
      >
        <SwiperSlide v-for="(work, idx) in relatedWorks" :key="idx">
          <WorkCard :work="work" />
        </SwiperSlide>

        <div class="swiper-pagination swiper-pagination-primary position-relative mt-4"></div>
      </Swiper>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import WorkCard from '@/views/portfolio/CaseStudyV2/components/WorkCard.vue'
import { relatedWorks } from '@/views/portfolio/CaseStudyV2/data'
</script>
