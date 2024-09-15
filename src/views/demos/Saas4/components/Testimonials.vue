<template>
  <section class="pb-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-sm-5">
        <h2 class="mb-4">Our customer's experience</h2>
        <p class="mb-0">
          The chatbot can be personalized to match the brand voice and tone, making it feel like an
          extension of the company's customer support team.
        </p>
      </div>

      <b-row class="mb-7">
        <b-col md="10" class="mx-auto">
          <b-row class="row-cols-2 row-cols-md-3 g-4 justify-content-center align-items-center">
            <b-col v-for="(item, idx) in statData" :key="idx">
              <div class="d-flex justify-content-center">
                <h2 class="purecounter mb-0">
                  <Vue3autocounter
                    ref="counter"
                    :startAmount="0"
                    :endAmount="item.number"
                    :duration="3"
                  />
                </h2>
                <span class="h2 text-primary mb-0">{{ item.suffix }}</span>
              </div>
              <p class="text-center heading-color mb-0">{{ item.title }}</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row class="g-4 g-lg-6">
        <b-col xl="5" class="position-relative order-1">
          <b-card no-body class="bg-dark p-4 p-sm-5 overflow-hidden h-100" data-bs-theme="dark">
            <b-card-body class="z-index-1 p-0 mb-5">
              <div class="text-bg-primary d-inline-block rounded small py-1 px-2 mb-3 icons-center">
                <BIconPatchCheck class="me-2" />Weekly news
              </div>
              <b-card-title>Subscribe to our mailing list and stay to date</b-card-title>
            </b-card-body>

            <b-card-footer class="bg-transparent p-0 z-index-1">
              <b-form class="input-group mb-2">
                <b-form-input
                  size="lg"
                  class="rounded border me-3"
                  type="email"
                  placeholder="Enter your email"
                />
                <button type="button" class="btn btn-white rounded-2 mb-0 flex-centered">
                  <BIconSendFill />
                </button>
              </b-form>
              <span class="text-white">✌️ We promise not to spam!</span>
            </b-card-footer>
          </b-card>
        </b-col>

        <b-col xl="7" class="order-xl-2">
          <Swiper
            class="overflow-hidden"
            :modules="[Pagination, Navigation]"
            :loop="false"
            :pagination="{
              el: '.swiper-pagination',
              type: 'fraction'
            }"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }"
            wrapperClass="pb-4 pb-md-6"
          >
            <SwiperSlide v-for="(testimonial, idx) in testimonials" :key="idx">
              <TestimonialCard :testimonial="testimonial" />
            </SwiperSlide>

            <div class="d-flex gap-3">
              <a
                href="#"
                class="btn btn-dark border btn-icon btn-lg rounded-circle mb-0 swiper-button-prev"
                ><BIconArrowLeft style="height: 23px; width: 23px"
              /></a>
              <a
                href="#"
                class="btn btn-dark border btn-icon btn-lg rounded-circle mb-0 swiper-button-next"
                ><BIconArrowRight style="height: 23px; width: 23px"
              /></a>
            </div>
          </Swiper>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import {
  BIconPatchCheck,
  BIconSendFill,
  BIconArrowLeft,
  BIconArrowRight
} from 'bootstrap-icons-vue'
import Vue3autocounter from 'vue3-autocounter'
import { SwiperSlide, Swiper } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import TestimonialCard from '@/views/demos/Saas4/components/TestimonialCard.vue'
import { testimonials, statData } from '@/views/demos/Saas4/data'
</script>
