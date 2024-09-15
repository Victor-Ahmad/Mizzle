<template>
  <Swiper
    :modules="[Autoplay]"
    :autoplay="{ delay: 2000 }"
    :loop="true"
    :slidesPerView="2"
    :spaceBetween="50"
    :breakpoints="{
      576: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      992: { slidesPerView: 5 },
      1200: { slidesPerView: 6 }
    }"
    wrapperClass="align-items-center"
  >
    <SwiperSlide v-for="(client, idx) in clientLogos" :key="idx">
      <img :src="client" class="px-xl-3" alt="client-img" />
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client7 from '@/assets/images/client/07.svg'

const clientLogos = [client1, client2, client3, client4, client5, client7]
</script>
