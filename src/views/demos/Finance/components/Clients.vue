<template>
  <Section>
    <div class="inner-container mx-auto text-center">
      <span class="fs-1 fw-semibold text-primary">{{ currency }}3,058,886</span>
      <h4 class="my-4 fw-semibold">Witness your business flourish and sparkle</h4>
      <p class="w-75 mx-auto mb-4">
        With our expert guidance and support, you can watch your business bloom and glow, achieving
        new heights of success and radiating prosperity.
      </p>
      <a class="btn btn-lg btn-dark icon-link icon-link-hover" href="#"
        >Calculate growth
        <BIconArrowRight class="bi" />
      </a>

      <div class="position-relative my-6 w-75 mx-auto">
        <hr />
        <p
          class="position-absolute heading-color fw-semibold top-50 start-50 translate-middle bg-body px-4"
        >
          Our Investors
        </p>
      </div>

      <Swiper
        :modules="[Autoplay]"
        :autoplay="{
          delay: 2000
        }"
        :loop="true"
        :slidesPerView="2"
        :spaceBetween="50"
        :breakpoints="{
          576: { slidesPerView: 4 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 5 }
        }"
        wrapperClass="align-items-center"
      >
        <SwiperSlide v-for="(image, idx) in investors" :key="idx">
          <img :src="image" class="grayscale" alt="client-img" />
        </SwiperSlide>
      </Swiper>
    </div>
  </Section>
</template>

<script lang="ts" setup>
import { currency } from '@/helpers'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { BIconArrowRight } from 'bootstrap-icons-vue'

import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'

const investors = [client1, client2, client3, client4, client5, client1]
</script>
