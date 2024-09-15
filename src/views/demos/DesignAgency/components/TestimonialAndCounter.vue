<template>
  <section>
    <b-container>
      <b-row class="position-relative mb-6 mb-sm-8">
        <b-col md="10" class="mx-auto text-center">
          <Swiper
            class="mt-2 mt-md-4"
            loop
            :modules="[Autoplay, Navigation]"
            :spaceBetween="30"
            :autoplay="{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }"
          >
            <SwiperSlide v-for="(testimonial, idx) in testimonials" :key="idx">
              <TestimonialCard :testimonial="testimonial" />
            </SwiperSlide>
          </Swiper>
        </b-col>

        <div class="d-flex justify-content-between position-absolute top-50 start-0 w-100">
          <a
            href="#"
            class="btn btn-light border btn-icon btn-lg rounded-circle mb-0 swiper-button-prev"
          >
            <BIconArrowLeft style="height: 23px; width: 23px" />
          </a>
          <a
            href="#"
            class="btn btn-light border btn-icon btn-lg rounded-circle mb-0 swiper-button-next"
          >
            <BIconArrowRight style="height: 23px; width: 23px" />
          </a>
        </div>
      </b-row>

      <b-row class="g-4 g-lg-6">
        <b-col sm="6" md="3" v-for="(item, idx) in statData" :key="idx">
          <h6 class="mb-0">{{ item.title }}</h6>
          <hr class="border-primary opacity-3 my-3 my-sm-4" />
          <h5 class="display-6">
            {{ item.number }}<span class="text-primary" v-if="item.suffix">{{ item.suffix }}</span>
          </h5>
          <p>{{ item.description }}</p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'
import { testimonials, statData } from '@/views/demos/DesignAgency/data'
import { BIconArrowLeft, BIconArrowRight } from 'bootstrap-icons-vue'
import TestimonialCard from '@/views/demos/DesignAgency/components/TestimonialCard.vue'
</script>
