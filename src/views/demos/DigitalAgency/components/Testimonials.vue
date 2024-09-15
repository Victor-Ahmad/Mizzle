<template>
  <section>
    <b-container>
      <b-row>
        <b-col md="4">
          <div class="avatar avatar-xl mb-md-4">
            <Swiper
              loop
              class="swiper-img-scale overflow-hidden"
              :modules="[EffectFade, Autoplay]"
              :effect="'fade'"
              :autoplay="{
                delay: 1500,
                disableOnInteraction: false
              }"
            >
              <SwiperSlide v-for="(avatar, idx) in swiperAvatars" :key="idx">
                <img
                  class="avatar-img rounded-circle border border-2 border-white"
                  :src="avatar"
                  alt="avatar"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <h2 class="mb-md-4">Hear from our satisfied clients ❤️</h2>
          <p class="mb-md-4">
            Read what our satisfied clients have to say about their experiences with our platform.
          </p>
        </b-col>

        <b-col md="7" class="ms-auto">
          <b-tabs
            pills
            end
            navItemClass="d-flex align-items-center text-start p-3"
            nav-class="nav-pills-testimonial nav-justified mb-4 mb-lg-0"
            content-class="mb-md-4"
            nav-wrapper-class="pt-2"
          >
            <template v-for="(testimonial, idx) in testimonials" :key="idx">
              <TestimonialCard :testimonial="testimonial" />
            </template>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'
import { testimonials } from '@/views/demos/DigitalAgency/data'
import TestimonialCard from '@/views/demos/DigitalAgency/components/TestimonialCard.vue'

import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'

const swiperAvatars = [avatar9, avatar1, avatar10, avatar5]
</script>
