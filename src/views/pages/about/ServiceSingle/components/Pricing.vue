<template>
  <section class="pt-0">
    <b-container>
      <b-row>
        <b-col lg="6" class="mb-6 mb-lg-0">
          <b-card no-body class="bg-dark overflow-hidden p-sm-4 h-100" data-bs-theme="dark">
            <b-card-header class="bg-transparent position-relative mb-3">
              <h3 class="mb-3">Pricing plan for this service</h3>
              <p>
                Our essential plan is self-service solution for businesses to handle website
                messaging and personalization
              </p>

              <b-tabs nav-class="gap-1 nav-pills-primary" pills content-class="mt-5">
                <b-tab title="Monthly" class="fade">
                  <div
                    class=""
                    id="pills-monthly"
                    role="tabpanel"
                    aria-labelledby="pills-monthly-tab"
                    tabindex="0"
                  >
                    <div class="bg-light border rounded p-3">
                      <h6 class="mb-3">Quick look at all the features</h6>

                      <ul class="list-group list-group-borderless">
                        <li class="list-group-item mb-0">
                          <BIconPatchCheckFill class="text-primary me-2" />Unlimited monthly
                          visitors
                        </li>
                        <li class="list-group-item mb-0">
                          <BIconPatchCheckFill class="text-primary me-2" />Dedicated SEO strategists
                        </li>
                        <li class="list-group-item mb-0">
                          <BIconPatchCheckFill class="text-primary me-2" />Google Docs style editors
                        </li>
                        <li class="list-group-item mb-0">
                          <BIconPatchCheckFill class="text-primary me-2" />Basic chat and email
                          support
                        </li>
                        <li class="list-group-item mb-0">
                          <BIconPatchCheckFill class="text-primary me-2" />AI powered product
                          recommendation engine
                        </li>
                      </ul>
                    </div>

                    <div class="d-sm-flex justify-content-between align-items-center mt-4">
                      <div class="mb-3 mb-sm-0 heading-color">
                        <span class="h3">{{ currency }}199</span> / month
                      </div>

                      <a href="#" class="btn btn-lg btn-white mb-0">Get started</a>
                    </div>
                  </div>
                </b-tab>

                <b-tab title="Annual" class="fade">
                  <div
                    class=""
                    id="pills-annual"
                    role="tabpanel"
                    aria-labelledby="pills-annual-tab"
                    tabindex="0"
                  >
                    <div class="bg-light border rounded p-3">
                      <h6 class="mb-3">Quick look at all the features</h6>

                      <ul class="list-group list-group-borderless">
                        <li class="list-group-item mb-0">
                          <BIconPatchCheckFill class="text-primary me-2" />Unlimited monthly
                          visitors
                        </li>
                        <li class="list-group-item mb-0">
                          <BIconPatchCheckFill class="text-primary me-2" />Dedicated SEO strategists
                        </li>
                        <li class="list-group-item mb-0">
                          <BIconPatchCheckFill class="text-primary me-2" />Google Docs style editors
                        </li>
                        <li class="list-group-item mb-0">
                          <BIconPatchCheckFill class="text-primary me-2" />Basic chat and email
                          support
                        </li>
                        <li class="list-group-item mb-0">
                          <BIconPatchCheckFill class="text-primary me-2" />AI powered product
                          recommendation engine
                        </li>
                      </ul>
                    </div>

                    <div class="d-sm-flex justify-content-between align-items-center mt-4">
                      <div class="mb-3 mb-sm-0 heading-color">
                        <span class="h3">{{ currency }}159 </span> / month
                      </div>

                      <a href="#" class="btn btn-lg btn-white mb-0">Get started</a>
                    </div>
                  </div>
                </b-tab>
              </b-tabs>
            </b-card-header>
          </b-card>
        </b-col>

        <b-col lg="5" class="ms-auto">
          <h2>Feedback for Service Enhancement</h2>
          <p class="lead mb-2">
            300+ Users rated us <span class="text-primary fw-bold">4.85</span> out of 5.
          </p>

          <Swiper
            class="mt-7"
            :modules="[Autoplay, Pagination]"
            :autoplay="{
              delay: 2000
            }"
            :loop="true"
            :spaceBetween="30"
            :grabCursor="true"
            :pagination="{
              el: '.swiper-pagination',
              clickable: true
            }"
          >
            <SwiperSlide class="mb-5" v-for="(item, idx) in pricing" :key="idx">
              <SwiperCard :testimonial="item" />
            </SwiperSlide>

            <div
              class="swiper-pagination swiper-pagination-primary position-relative text-start"
            ></div>
          </Swiper>
        </b-col>
      </b-row>
    </b-container>
  </section>

  <section class="position-relative z-index-2 pt-0">
    <b-container class="position-relative">
      <div class="inner-container bg-light border rounded position-relative overflow-hidden p-4">
        <figure class="position-absolute top-0 start-0 ms-n8">
          <svg
            width="371"
            height="354"
            viewBox="0 0 371 354"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="172.5"
              cy="176.5"
              rx="131.5"
              ry="125.5"
              fill="url(#paint0_linear_195_2)"
            ></ellipse>
            <ellipse
              cx="185.5"
              cy="177"
              rx="185.5"
              ry="177"
              fill="url(#paint1_linear_195_2)"
            ></ellipse>
            <defs>
              <linearGradient
                id="paint0_linear_195_2"
                x1="172.5"
                y1="51"
                x2="172.5"
                y2="302"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0569271" stop-color="#D9D9D9" stop-opacity="0.5"></stop>
                <stop offset="0.998202" stop-color="#D9D9D9" stop-opacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_195_2"
                x1="185.5"
                y1="0"
                x2="185.5"
                y2="354"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0569271" stop-color="#D9D9D9" stop-opacity="0.2"></stop>
                <stop offset="0.998202" stop-color="#D9D9D9" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </figure>

        <b-row class="align-items-center g-4 position-relative">
          <b-col md="7">
            <h5 class="mb-0">Supercharge your business with our transparent services</h5>
          </b-col>

          <b-col md="5" class="text-md-end">
            <router-link :to="{ name: 'contact.v2' }" class="btn btn-dark mb-0"
              >Contact us now</router-link
            >
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import { currency } from '@/helpers'
import { pricing } from '@/views/pages/about/ServiceSingle/data'
import SwiperCard from '@/views/pages/about/ServiceSingle/components/SwiperCard.vue'
import { BIconPatchCheckFill } from 'bootstrap-icons-vue'
</script>
