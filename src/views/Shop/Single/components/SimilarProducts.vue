<template>
  <section class="pt-0">
    <b-container>
      <div class="d-flex justify-content-between mb-5">
        <h2 class="h4 mb-0">Similar products</h2>

        <div class="d-flex gap-1 gap-sm-3 d-xl-none">
          <a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-prev"
            ><BIconArrowLeft style="height: 16px; width: 16px"
          /></a>
          <a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-next"
            ><BIconArrowRight style="height: 16px; width: 16px"
          /></a>
        </div>
      </div>

      <Swiper
        :modules="[Navigation, Autoplay]"
        :spaceBetween="30"
        :grabCursor="true"
        :speed="1000"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true
        }"
        :breakpoints="{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 }
        }"
      >
        <SwiperSlide v-for="(product, idx) in trendingProducts.slice(0, 4)" :key="idx">
          <ProductCard :product="product" />
        </SwiperSlide>
      </Swiper>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { trendingProducts } from '@/assets/data/products'
import ProductCard from '@/views/Shop/Single/components/ProductCard.vue'
import { BIconArrowLeft, BIconArrowRight } from 'bootstrap-icons-vue'
</script>
