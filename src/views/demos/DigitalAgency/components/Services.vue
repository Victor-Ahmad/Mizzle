<template>
  <section class="bg-light overflow-hidden">
    <b-container>
      <b-row class="mb-4 mb-md-6">
        <b-col md="6" lg="5">
          <h2 class="mb-0">Accelerating your digital transformation</h2>
        </b-col>

        <b-col md="6" lg="4" class="ms-auto">
          <p>
            Our team of experts specializes in delivering tailored services designed to propel your
            organization forward in today's fast-paced digital landscape.
          </p>

          <div class="d-flex gap-3 position-relative mt-3">
            <router-link
              to="#"
              class="btn btn-white border btn-icon rounded-circle mb-0 swiper-button-prev-team"
            >
              <BIconArrowLeft />
            </router-link>
            <router-link
              to="#"
              class="btn btn-white border btn-icon rounded-circle mb-0 swiper-button-next-team"
            >
              <BIconArrowRight />
            </router-link>
          </div>
        </b-col>
      </b-row>

      <Swiper
        class="swiper-outside-end-n20"
        :modules="[Autoplay, Navigation]"
        :spaceBetween="50"
        :loop="false"
        :autoplay="{
          delay: 2000
        }"
        :navigation="{
          nextEl: '.swiper-button-next-team',
          prevEl: '.swiper-button-prev-team'
        }"
        :breakpoints="{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 }
        }"
      >
        <SwiperSlide v-for="(service, idx) in services" :key="idx">
          <ServiceCard :service="service" />
        </SwiperSlide>
      </Swiper>
      <div class="d-flex align-items-center gap-2 mt-6">
        <ul class="avatar-group mb-0">
          <li class="avatar avatar-sm">
            <img class="avatar-img rounded-circle" :src="avatar6" alt="avatar" />
          </li>
          <li class="avatar avatar-sm">
            <img class="avatar-img rounded-circle" :src="avatar5" alt="avatar" />
          </li>
          <li class="avatar avatar-sm">
            <div class="avatar-img rounded-circle text-bg-dark">
              <BIconTelephone
                class="text-white position-absolute top-50 start-50 translate-middle"
              />
            </div>
          </li>
        </ul>
        <p class="fw-normal mb-0">
          Maximize Productivity by Simplifying Solution Search
          <a href="#" class="text-decoration-underline text-primary-hover fw-semibold"
            >Got a project in mind?</a
          >
        </p>
      </div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'
import { BIconArrowLeft, BIconArrowRight, BIconTelephone } from 'bootstrap-icons-vue'
import ServiceCard from '@/views/demos/DigitalAgency/components/ServiceCard.vue'
import { services } from '@/views/demos/DigitalAgency/data'

import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
</script>
