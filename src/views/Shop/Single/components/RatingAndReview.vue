<template>
  <section class="pt-0">
    <b-container>
      <h2 class="h4 mb-5">Rating & review</h2>

      <b-row>
        <b-col lg="5" class="pe-lg-5 mb-5 mb-lg-0">
          <div class="border rounded-2 p-4">
            <b-row>
              <b-col md="5">
                <h2 class="mb-0">4.5</h2>
                <ul class="list-inline mb-2">
                  <li class="list-inline-item me-1" v-for="(_star, idx) in new Array(4)" :key="idx">
                    <font-awesome-icon :icon="faStar" class="text-warning" />
                  </li>
                  <li class="list-inline-item me-0">
                    <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
                  </li>
                </ul>
                <p class="mb-2">Based on 56 Reviews</p>
              </b-col>

              <b-col md="7">
                <div
                  class="d-flex align-items-center"
                  v-for="(progress, idx) in [95, 75, 55, 35, 25]"
                  :key="idx"
                >
                  <b-progress class="progress-sm bg-warning bg-opacity-15 w-100 me-3">
                    <b-progress-bar variant="warning" :value="progress" class="bg-warning" />
                  </b-progress>
                  <span class="heading-color">{{ 5 - idx }}</span>
                </div>
              </b-col>
            </b-row>
          </div>

          <div class="mt-5">
            <h5 class="mb-4">Reviews with images</h5>

            <b-row class="g-4">
              <b-col cols="4" sm="2" lg="3" v-for="(image, idx) in reviewImages" :key="idx">
                <CustomGLightbox
                  class="w-100 h-100"
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
              </b-col>
            </b-row>
          </div>
        </b-col>

        <b-col lg="7">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="mb-0">Sort by</h5>
            <b-col xl="3">
              <select class="form-select" aria-label="Default select example">
                <option value="1">Most Recent</option>
                <option value="2">Most Viewed</option>
                <option value="3">Helpful</option>
              </select>
            </b-col>
          </div>

          <template v-for="(review, idx) in reviews" :key="idx">
            <hr class="my-4" v-if="reviews.length != idx" />

            <div class="d-flex">
              <img
                class="avatar avatar-md rounded-circle float-start me-3"
                :src="review.user.avatar"
                alt="avatar"
              />
              <div>
                <div class="d-sm-flex justify-content-between mb-2">
                  <div>
                    <h6 class="m-0">{{ review.user.username }}</h6>
                    <span class="me-3 small">{{ review.date }} </span>
                  </div>
                  <ul class="list-inline mb-0">
                    <template v-if="review.rating">
                      <li
                        v-for="(_star, idx) in new Array(Math.floor(review.rating))"
                        :key="idx"
                        class="list-inline-item me-1 small"
                      >
                        <font-awesome-icon :icon="faStar" class="text-warning" />
                      </li>
                    </template>
                    <li v-if="!Number.isInteger(review.rating)" class="list-inline-item me-1">
                      <font-awesome-icon :icon="faStarHalfAlt" class="text-warning small" />
                    </li>
                    <template v-if="review.rating && review.rating < 5">
                      <li
                        v-for="(_val, idx) in new Array(5 - Math.ceil(review.rating))"
                        :key="idx"
                        class="list-inline-item me-1 small"
                      >
                        <font-awesome-icon :icon="FAStar" />
                      </li>
                    </template>
                  </ul>
                </div>
                <p>{{ review.comment }}</p>

                <span class="me-1">Was it helpful?</span>
                <div
                  class="btn-group ms-2"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input type="radio" class="btn-check" name="btnradio1" id="btnradior1" />
                  <label class="btn btn-outline-secondary btn-sm mb-0" for="btnradior1">
                    <font-awesome-icon :icon="faThumbsUp" class="me-1" />
                    Yes</label
                  >
                  <input type="radio" class="btn-check" name="btnradio1" id="btnradior2" />
                  <label class="btn btn-outline-secondary btn-sm mb-0" for="btnradior2">
                    No
                    <font-awesome-icon :icon="faThumbsDown" class="ms-1" />
                  </label>
                </div>
              </div>
            </div>
          </template>

          <div class="mt-4 text-end">
            <button
              v-b-toggle.collapseExample
              class="btn btn-primary-soft mb-0"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Write a review
            </button>
          </div>

          <b-collapse class="collapse" id="collapseExample">
            <b-card no-body class="card-body">
              <b-form>
                <b-form-select class="mb-3" :options="reviewOptions" v-model="selectedReview" />
                <textarea
                  class="form-control mb-3"
                  id="exampleFormControlTextarea1"
                  placeholder="Your review"
                  rows="3"
                ></textarea>
                <button type="submit" class="btn btn-primary mb-0">
                  Post It
                  <BIconArrowRight class="fa-fw ms-2" />
                </button>
              </b-form>
            </b-card>
          </b-collapse>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CustomGLightbox from '@/components/CustomGLightbox.vue'
import { reviews } from '@/views/Shop/Single/data'
import { BIconArrowRight, BIconFullscreen } from 'bootstrap-icons-vue'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as FAStar, faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons'

import reviewImg1 from '@/assets/images/shop/review/01.jpg'
import reviewImg2 from '@/assets/images/shop/review/02.jpg'
import reviewImg3 from '@/assets/images/shop/review/03.jpg'
import reviewImg4 from '@/assets/images/shop/review/04.jpg'
import reviewImg5 from '@/assets/images/shop/review/05.jpg'

const reviewImages = [reviewImg1, reviewImg2, reviewImg3, reviewImg4, reviewImg5]

const selectedReview = ref('1')

const reviewOptions = [
  { value: '1', text: '★★★★★ (5/5)' },
  { value: '2', text: '★★★★☆ (4/5)' },
  { value: '3', text: '★★★☆☆ (3/5)' },
  { value: '4', text: '★★☆☆☆ (2/5)' },
  { value: '5', text: '★☆☆☆☆ (1/5)' }
]
</script>
