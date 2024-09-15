<template>
  <section class="pt-0">
    <b-container class="text-center">
      <p class="heading-color fw-semibold mb-4">Used by the world best companies</p>

      <Swiper
        :modules="[Autoplay]"
        :autoplay="{ delay: 2000 }"
        :loop="false"
        :slidesPerView="2"
        :spaceBetween="30"
        :breakpoints="{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 6 }
        }"
        wrapperClass="align-items-center"
      >
        <SwiperSlide v-for="(client, idx) in clients" :key="idx">
          <img :src="client" class="grayscale px-sm-4 ps-0" alt="client-img" />
        </SwiperSlide>
      </Swiper>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { SwiperSlide, Swiper } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client6 from '@/assets/images/client/06.svg'
import client7 from '@/assets/images/client/07.svg'

const clients = [client3, client7, client5, client4, client1, client2, client3, client6]
</script>
