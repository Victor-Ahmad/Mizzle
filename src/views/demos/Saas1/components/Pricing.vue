<template>
  <section class="pt-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-sm-5">
        <h2 class="mb-4">Discover our competitive plans</h2>
        <p class="mb-0">
          Your agency's success deserves a pricing strategy that aligns with your goals. We offer a
          range of pricing plans crafted to meet your unique needs.
        </p>
      </div>

      <Swiper
        :modules="[Pagination]"
        :loop="false"
        :spaceBetween="40"
        :pagination="{
          el: '.swiper-pagination'
        }"
        :breakpoints="{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 }
        }"
      >
        <SwiperSlide v-for="(plan, idx) in pricingData" :key="idx">
          <PricingCard :plan="plan" />
        </SwiperSlide>

        <div class="swiper-pagination swiper-pagination-primary position-relative mt-4"></div>
      </Swiper>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { pricingData } from '@/views/demos/Saas1/data'
import PricingCard from '@/views/demos/Saas1/components/PricingCard.vue'
</script>
