<template>
  <section class="pb-0">
    <b-container>
      <b-row>
        <b-col lg="11">
          <b-row class="align-items-center">
            <b-col lg="6" class="order-2 mt-5 mt-lg-0">
              <Swiper
                class="mt-2 mt-md-4"
                :modules="[Autoplay, EffectFade]"
                loop
                :effect="'fade'"
                :grabCursor="true"
                :autoplay="{
                  delay: 3000
                }"
                wrapperClass="align-items-center"
              >
                <SwiperSlide v-for="(testimonial, idx) in testimonials" :key="idx">
                  <TestimonialCard :testimonial="testimonial" />
                </SwiperSlide>
              </Swiper>
            </b-col>

            <b-col lg="6" class="ms-auto order-1 order-lg-2">
              <span class="text-primary fw-bold text-uppercase">Testimonials</span>
              <h2 class="my-3">Don't take our word for it. See what our client says.</h2>
              <p class="mb-4">
                Hear what our satisfied clients have to say about their experiences with our
                platform. Discover how we've helped agencies like yours achieve remarkable results.
              </p>
              <div class="d-sm-flex gap-3">
                <a href="#" class="btn btn-lg btn-dark mb-2 mb-sm-0">Get Started</a>
                <a
                  class="icon-link icon-link-hover heading-color text-primary-hover mb-0 ms-1"
                  href="#"
                  >Browse features
                  <BIconArrowRight class="bi" />
                </a>
              </div>

              <hr class="my-6" />

              <b-row class="row-cols-2 row-cols-sm-3 g-4 g-md-5 align-items-center">
                <b-col v-for="(image, idx) in clients" :key="idx">
                  <img :src="image" class="grayscale px-2" alt="client-img" />
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'
import TestimonialCard from '@/views/demos/Saas2/components/TestimonialCard.vue'
import { testimonials } from '@/views/demos/Saas2/data'
import { BIconArrowRight } from 'bootstrap-icons-vue'

import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client7 from '@/assets/images/client/07.svg'

const clients = [client1, client2, client3, client4, client5, client7]
</script>
