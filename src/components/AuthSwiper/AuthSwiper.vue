<template>
  <b-col lg="7" class="vh-100 d-none d-lg-block">
    <Swiper
      class="h-100"
      :modules="[Autoplay, Pagination]"
      :autoplay="{
        delay: 2000
      }"
      :loop="true"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
    >
      <SwiperSlide v-for="(swiper, idx) in swiperdata" :key="idx">
        <b-card
          no-body
          class="rounded-0 h-100"
          data-bs-theme="dark"
          style="background-position: center left; background-size: cover"
          :style="{ backgroundImage: `url('${swiper.author.image}')` }"
        >
          <div class="bg-overlay bg-dark opacity-5"></div>

          <div class="card-img-overlay z-index-2 p-7">
            <div class="d-flex flex-column justify-content-end h-100">
              <h4 class="fw-light">{{ swiper.quote }}</h4>
              <div class="d-flex justify-content-between mt-5">
                <div>
                  <h5 class="mb-0">{{ swiper.author.name }}</h5>
                  <span>{{ swiper.position }}</span>
                </div>
                <ul class="list-inline mb-1">
                  <li
                    class="list-inline-item small me-1"
                    v-for="(_star, idx) in new Array(4)"
                    :key="idx"
                  >
                    <font-awesome-icon :icon="faStar" class="text-white" />
                  </li>
                  <li class="list-inline-item small">
                    <font-awesome-icon :icon="faStarHalfAlt" class="text-white" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </b-card>
      </SwiperSlide>
      <div class="swiper-pagination swiper-pagination-line mb-3"></div>
    </Swiper>
  </b-col>
</template>

<script setup lang="ts">
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { swiperdata } from '@/components/AuthSwiper/data'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
</script>
