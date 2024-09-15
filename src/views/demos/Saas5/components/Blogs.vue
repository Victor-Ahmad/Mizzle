<template>
  <section class="pt-0">
    <b-container>
      <b-row>
        <b-col lg="8" xl="4" class="text-center text-xl-start mx-auto">
          <h2 class="mb-4 h3">Explore Our Insights and Updates</h2>
          <p class="mb-0">
            Explore a world of articles covering a variety of topics, from best practices and
            success stories to tutorials and product updates.
          </p>

          <div
            class="d-flex justify-content-center justify-content-xl-start gap-3 position-relative mt-5 mt-xl-6"
          >
            <a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-prev">
              <BIconArrowLeft style="height: 16px; width: 16px" />
            </a>
            <a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-next">
              <BIconArrowRight style="height: 16px; width: 16px" />
            </a>
          </div>
        </b-col>

        <b-col xl="8" class="mt-5 mt-xl-0">
          <Swiper
            :modules="[Navigation]"
            loop
            :spaceBetween="40"
            :grabCursor="true"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }"
            :breakpoints="{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 }
            }"
          >
            <SwiperSlide v-for="(blog, idx) in blogs" :key="idx">
              <BlogCard :blog="blog" />
            </SwiperSlide>

            <SwiperSlide>
              <article class="card bg-primary p-4 overflow-hidden h-100">
                <div class="position-absolute end-0 bottom-0 mb-n5 me-n7">
                  <img :src="patternImg" class="opacity-4" alt="" />
                </div>

                <b-card-body class="z-index-1 p-0">
                  <div class="d-flex justify-content-between mb-5">
                    <div class="badge bg-dark text-white small">Advertisements</div>
                    <a
                      href="#"
                      class="mb-0 text-white small"
                      tabindex="0"
                      role="button"
                      data-bs-container="body"
                      data-bs-toggle="popover"
                      data-bs-trigger="focus"
                      data-bs-placement="top"
                      data-bs-content="You're seeing this ad because your activity meets the intended audience of our site."
                    >
                      <BIconInfoCircle class="ps-1" /> Sponsored
                    </a>
                  </div>
                  <b-card-title tag="h5"
                    >Always wanted to become a coder? Here is a great chance for you to fulfill your
                    dream.</b-card-title
                  >
                </b-card-body>

                <b-card-footer
                  class="bg-transparent d-flex justify-content-between align-items-center p-0 mt-4 mt-sm-8 z-index-1"
                >
                  <div class="d-flex align-items-center">
                    <div class="avatar flex-shrink-0 me-2">
                      <div class="avatar-img rounded-circle bg-dark">
                        <span
                          class="text-white position-absolute top-50 start-50 translate-middle fw-bold small"
                          >WP</span
                        >
                      </div>
                    </div>
                    <span class="heading-color fw-semibold">Web poster</span>
                  </div>
                  <a href="#" class="btn btn-sm btn-white mb-0">Apply now</a>
                </b-card-footer>
              </article>
            </SwiperSlide>
          </Swiper>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { blogs } from '@/views/demos/Saas5/data'
import BlogCard from '@/views/demos/Saas5/components/BlogCard.vue'
import { BIconArrowLeft, BIconArrowRight, BIconInfoCircle } from 'bootstrap-icons-vue'

import patternImg from '@/assets/images/elements/pattern.svg'
</script>
