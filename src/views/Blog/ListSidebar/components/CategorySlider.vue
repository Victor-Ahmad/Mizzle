<template>
  <Swiper
    :loop="true"
    :modules="[Autoplay, Pagination]"
    :autoplay="{ delay: 2000 }"
    :slidesPerView="2"
    :spaceBetween="30"
    :pagination="{
      el: '.swiper-pagination',
      clickable: true
    }"
    :breakpoints="{
      576: { slidesPerView: 3 },
      992: { slidesPerView: 5 }
    }"
  >
    <SwiperSlide v-for="(blog, idx) in blogCategories" :key="idx">
      <CategoryCard :blog="blog" />
    </SwiperSlide>

    <div class="swiper-pagination swiper-pagination-primary position-relative mt-4"></div>
  </Swiper>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { blogCategories } from '@/views/Blog/ListSidebar/data'
import { Autoplay, Pagination } from 'swiper/modules'
import CategoryCard from '@/views/Blog/ListSidebar/components/CategoryCard.vue'
</script>
