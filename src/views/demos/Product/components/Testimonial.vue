<template>
  <Jarallax
    tag="section"
    id="product-jarallax"
    custom-class="bg-parallax position-relative h-400px h-xl-600px"
    :custom-style="`background:url(${videoImg}) no-repeat; background-size:cover; background-position:center;`"
  >
    <div class="position-absolute top-50 start-50 translate-middle">
      <CustomGLightbox
        link="https://www.youtube.com/embed/tXHviS-4ygo"
        class="btn btn-icon btn-xl btn-dark btn-round mb-0 stretched-link"
      >
        <BIconPlayFill class="fa-lg" />
      </CustomGLightbox>
    </div>
  </Jarallax>

  <section>
    <b-container>
      <b-row class="g-4">
        <b-col lg="5">
          <b-card no-body class="card-body bg-dark p-sm-5">
            <span class="display-5 text-primary">
              <BIconQuote class="mb-2" />
            </span>
            <p class="text-white fs-5">
              The sound quality is impressive for earbuds of this size. The audio is clear, with
              balanced mids and highs. The bass isn't overpowering, but it's adequate for most music
              genres.
            </p>
            <ul class="list-inline mb-0">
              <li class="list-inline-item me-1" v-for="(_star, idx) in new Array(5)" :key="idx">
                <BIconStarFill class="text-white fs-6" />
              </li>
            </ul>
            <hr class="opacity-1 my-4" />

            <div class="d-sm-flex align-items-center">
              <div class="avatar flex-shrink-0">
                <img class="avatar-img rounded-circle" :src="avatar7" alt="avatar" />
              </div>
              <div class="ms-sm-2 mt-2 mt-sm-0">
                <h6 class="text-white mb-0">Dennis Barrett</h6>
                <p class="mb-0 small text-white">CEO and co-founder, MacoInfo</p>
              </div>
            </div>
          </b-card>
        </b-col>

        <b-col lg="7" class="ps-lg-5">
          <h2 class="mb-4">Discover the Future of Sound with AirPods</h2>

          <b-row class="g-4 g-lg-5">
            <b-col md="6" v-for="(feature, idx) in features" :key="idx">
              <FeatureCard :feature="feature" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import Jarallax from '@/components/Jarallax.vue'
import CustomGLightbox from '@/components/CustomGLightbox.vue'
import { features } from '@/views/demos/Product/data'
import { BIconQuote, BIconStarFill, BIconPlayFill } from 'bootstrap-icons-vue'
import FeatureCard from '@/views/demos/Product/components/FeatureCard.vue'

import avatar7 from '@/assets/images/avatar/07.jpg'
import videoImg from '@/assets/images/products/video-img.jpg'
</script>
