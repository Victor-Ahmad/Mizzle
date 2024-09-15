<template>
  <section class="pt-0">
    <b-container>
      <div class="d-sm-flex justify-content-between align-items-center mb-4">
        <h3>Featured category</h3>
        <a class="icon-link icon-link-hover text-body-secondary text-primary-hover" href="#"
          >View all
          <BIconArrowRight class="bi" />
        </a>
      </div>

      <Swiper
        :modules="[Pagination]"
        :spaceBetween="30"
        :grabCursor="true"
        :pagination="{
          el: '.swiper-pagination'
        }"
        :breakpoints="{
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 5 },
          1200: { slidesPerView: 6 }
        }"
      >
        <SwiperSlide v-for="(category, idx) in categories" :key="idx">
          <CategoryCard :category="category" />
        </SwiperSlide>

        <div class="swiper-pagination swiper-pagination-primary position-relative mt-4"></div>
      </Swiper>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { categories } from '@/views/demos/Shop/data'
import { Pagination } from 'swiper/modules'
import { BIconArrowRight } from 'bootstrap-icons-vue'
import CategoryCard from '@/views/demos/Shop/components/CategoryCard.vue'
</script>
