<template>
  <Swiper
    loop
    :slidesPerView="2"
    :spaceBetween="40"
    :breakpoints="{
      576: { slidesPerView: 3 },
      768: { slidesPerView: 5 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 }
    }"
    wrapperClass="align-items-center"
  >
    <SwiperSlide v-for="(image, idx) in clients" :key="idx">
      <img :src="image" class="grayscale" alt="client-img" />
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client6 from '@/assets/images/client/06.svg'
import client7 from '@/assets/images/client/07.svg'

const clients = [client1, client2, client3, client4, client5, client6, client7]
</script>
