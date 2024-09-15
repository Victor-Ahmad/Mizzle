<template>
  <section>
    <b-container>
      <b-row class="g-4">
        <b-col md="4">
          <h2 class="text-center text-md-start">The perfect Airpods that suit you</h2>
          <div
            class="d-flex justify-content-center justify-content-md-start gap-3 position-relative mt-5 mt-md-6"
          >
            <button class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-prev">
              <BIconArrowLeft style="height: 16px; width: 16px" />
            </button>
            <button class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-next">
              <BIconArrowRight style="height: 16px; width: 16px" />
            </button>
          </div>
        </b-col>

        <b-col md="8">
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
              576: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 }
            }"
          >
            <SwiperSlide v-for="(product, idx) in products" :key="idx">
              <ProductCard :product="product" />
            </SwiperSlide>
          </Swiper>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { products } from '@/views/demos/Product/data'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { BIconArrowLeft, BIconArrowRight } from 'bootstrap-icons-vue'
import { Autoplay, Navigation } from 'swiper/modules'
import ProductCard from '@/views/demos/Product/components/ProductCard.vue'
</script>
