<template>
  <section class="pt-0">
    <b-container>
      <b-row>
        <b-col lg="10" class="mx-auto">
          <Swiper
            class="mb-4"
            :modules="[Autoplay, Pagination]"
            :loop="true"
            :slidesPerView="1"
            :spaceBetween="80"
            :autoplay="{
              delay: 4000,
              disableOnInteraction: false
            }"
            :pagination="{
              el: '.swiper-pagination',
              clickable: true
            }"
          >
            <SwiperSlide class="text-center" v-for="(item, idx) in client" :key="idx">
              <div class="mb-4"><img :src="item.image" class="h-40px" alt="client-img" /></div>
              <q class="fs-4 fw-normal heading-color">{{ item.comment }}</q>
              <div class="d-flex justify-content-center align-items-center text-start mt-4 mb-5">
                <div class="avatar flex-shrink-0">
                  <img class="avatar-img rounded-circle" :src="item.user.avatar" alt="avatar" />
                </div>
                <div class="ms-2 mt-2 mt-sm-0">
                  <h6 class="mb-0">{{ item.user.username }}</h6>
                  <p class="mb-0 small">{{ item.user.role }}</p>
                </div>
              </div>
              <router-link :to="{ name: 'customer.story-single' }" class="icon-link icon-link-hover"
                >Read full story<BIconArrowRight />
              </router-link>
            </SwiperSlide>
          </Swiper>

          <div class="swiper-pagination swiper-pagination-primary position-relative"></div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { client } from '@/views/pages/about/CustomerStory/data'
import { BIconArrowRight } from 'bootstrap-icons-vue'
</script>
