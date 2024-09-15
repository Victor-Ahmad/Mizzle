<template>
  <Jarallax
    tag="section"
    id="product-jarallax"
    customClass="bg-parallax position-relative"
    :customStyle="`background:url(${backgroundImg4}) no-repeat; background-size:cover; background-position:center;`"
  >
    <div class="bg-overlay bg-dark opacity-6"></div>

    <b-container class="position-relative z-index-2">
      <b-row>
        <b-col lg="8" xl="5" class="mb-5 mb-xl-0">
          <span class="text-primary display-4">20% off</span>
          <h3 class="text-white my-4">Enhance your style with our latest collections</h3>
          <p class="text-white">
            Discover the perfect fusion of modern trends and timeless classics, meticulously curated
            to complement your unique taste.
          </p>

          <div class="d-flex gap-3 position-relative mt-5 mt-md-6">
            <a
              href="#"
              class="btn btn-outline-white btn-icon rounded-circle mb-0 swiper-button-prev"
            >
              <BIconArrowLeft style="height: 16px; width: 16px" />
            </a>
            <a
              href="#"
              class="btn btn-outline-white btn-icon rounded-circle mb-0 swiper-button-next"
            >
              <BIconArrowRight style="height: 16px; width: 16px" />
            </a>
          </div>
        </b-col>

        <b-col xl="7" xxl="6" class="ms-auto">
          <Swiper
            loop
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
              1200: { slidesPerView: 2 }
            }"
          >
            <SwiperSlide v-for="(product, idx) in collections" :key="idx">
              <CollectionCard :product="product" />
            </SwiperSlide>
          </Swiper>
        </b-col>
      </b-row>
    </b-container>
  </Jarallax>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'
import Jarallax from '@/components/Jarallax.vue'
import { collections } from '@/assets/data/products'
import CollectionCard from '@/views/demos/Shop/components/CollectionCard.vue'
import { BIconArrowLeft, BIconArrowRight } from 'bootstrap-icons-vue'

import backgroundImg4 from '@/assets/images/shop/bg/04.jpg'
</script>
