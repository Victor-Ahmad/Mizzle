<template>
  <section>
    <b-container>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-dots pb-0 mb-0">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">All product</a></li>
          <li class="breadcrumb-item"><a href="#">Cart</a></li>
          <li class="breadcrumb-item active" aria-current="page">Checkout</li>
        </ol>
      </nav>

      <b-row class="mt-7">
        <b-col md="5" class="mb-5 mb-md-0">
          <Swiper
            :modules="[Navigation]"
            :loop="false"
            :grabCursor="true"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }"
          >
            <SwiperSlide v-for="(image, idx) in products[0].images" :key="idx">
              <CustomGLightbox
                className="w-100 h-100"
                data-glightbox
                data-gallery="gallery"
                :link="image"
              >
                <b-card no-body class="card-element-hover overflow-hidden">
                  <img :src="image" class="rounded-3" alt="" />
                  <div class="hover-element w-100 h-100">
                    <BIconFullscreen
                      style="height: 35px; width: 35px"
                      class="fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"
                    />
                  </div>
                </b-card>
              </CustomGLightbox>
            </SwiperSlide>
            <div class="d-flex justify-content-between position-absolute top-50 start-0 w-100">
              <a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-prev">
                <BIconArrowLeft style="height: 16px; width: 16px" />
              </a>
              <a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-next">
                <BIconArrowRight style="height: 16px; width: 16px" />
              </a>
            </div>
          </Swiper>
        </b-col>

        <b-col md="7" class="ps-md-6">
          <div class="badge text-bg-dark mb-3">Technology</div>

          <h1 class="h2 mb-4">The ultimate smartphone for modern lifestyles</h1>

          <div class="d-flex align-items-center flex-wrap mb-4">
            <ul class="list-inline mb-0">
              <li class="list-inline-item me-1" v-for="(_star, idx) in new Array(4)" :key="idx">
                <font-awesome-icon :icon="faStar" class="text-warning" />
              </li>
              <li class="list-inline-item me-1">
                <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
              </li>
              <li class="list-inline-item me-0 heading-color fw-normal">(4.5)</li>
            </ul>
            <span class="text-secondary opacity-3 mx-2 mx-sm-3">|</span>
            <a href="#" class="heading-color text-primary-hover mb-0">345 reviews</a>
            <span class="text-secondary opacity-3 mx-2 mx-sm-3">|</span>
            <span>86 sold</span>
          </div>

          <h4 class="text-success mb-4">{{ currency }}215.00</h4>

          <div class="d-flex align-items-center gap-1 gap-sm-3 flex-wrap mt-2 mb-4">
            <span class="d-block">Memory storage:</span>
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked />
            <label class="btn btn-sm btn-light border btn-primary-soft-check mb-0" for="btnradio1"
              >256 GB</label
            >
            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
            <label class="btn btn-sm btn-light border btn-primary-soft-check mb-0" for="btnradio2"
              >512 GB</label
            >
            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" />
            <label class="btn btn-sm btn-light border btn-primary-soft-check mb-0" for="btnradio3"
              >1 TB</label
            >
          </div>

          <div class="color-check-radio d-flex align-items-center gap-3 mt-2 mb-4">
            <span class="d-block">Select color:</span>
            <div>
              <input
                class="form-check-input me-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                style="background-color: #9a0a0a"
              />
              <label class="form-check-label" for="flexRadioDefault1"></label>

              <input
                class="form-check-input me-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                style="background-color: #32c7f5"
              />
              <label class="form-check-label" for="flexRadioDefault2"></label>

              <input
                class="form-check-input me-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
                style="background-color: #f7c32e"
              />
              <label class="form-check-label" for="flexRadioDefault3"></label>

              <input
                class="form-check-input me-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault4"
                checked
                style="background-color: #333369"
              />
              <label class="form-check-label" for="flexRadioDefault4"></label>
            </div>
          </div>

          <div class="d-flex align-items-center gap-3 mt-2 mb-4">
            <span class="d-block">Select quantity:</span>
            <b-col md="2">
              <b-form-select v-model="selectedQuantity" :options="quantityOptions" />
            </b-col>
          </div>

          <p class="mb-4">
            Packed with cutting-edge features and innovations, this smartphone is more than just a
            communication tool, it's a lifestyle companion that keeps up with your needs.
          </p>

          <div class="d-grid">
            <b-button
              variant="primary"
              @click="useShopping.updateQuantity(products[0], 1)"
              class="mb-0 w-100 flex-centered"
            >
              <BIconCart2 class="me-2" />
              Add to Cart
            </b-button>
            <p class="mb-0 mt-2 text-end small flex-centered justify-content-end">
              <BIconQuestionCircleFill class="text-primary me-2" />
              Need help?
              <router-link :to="{ name: 'contact.v2' }" class="mb-0 ms-1">Chat Now</router-link>
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { currency } from '@/helpers'
import {
  BIconArrowLeft,
  BIconArrowRight,
  BIconFullscreen,
  BIconCart2,
  BIconQuestionCircleFill
} from 'bootstrap-icons-vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import CustomGLightbox from '@/components/CustomGLightbox.vue'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { products } from '@/assets/data/products'
import { useShoppingStore } from '@/stores/shopping-context'

const useShopping = useShoppingStore()

import { ref } from 'vue'

const selectedQuantity = ref('1')
const quantityOptions = [
  { value: '1', text: '01' },
  { value: '2', text: '02' },
  { value: '3', text: '03' }
]
</script>
