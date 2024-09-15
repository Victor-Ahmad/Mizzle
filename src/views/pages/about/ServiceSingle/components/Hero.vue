<template>
  <section
    class="bg-dark pt-lg-8 pt-xl-9"
    style="background-position: center left; background-size: cover"
    data-bs-theme="dark"
    :style="{ backgroundImage: `url('${bgpattern}')` }"
  >
    <b-container class="position-relative pt-4 pt-lg-0">
      <b-row class="align-items-center">
        <b-col md="7" xl="6">
          <h1 class="mb-4">Digital Marketing</h1>
          <p class="mb-4">
            Digital marketing is the strategic use of online channels and technologies to promote
            products, services, or brands to a target audience.
          </p>
        </b-col>

        <b-col md="4" class="ms-auto text-md-end">
          <router-link :to="{ name: 'contact.v1' }" class="btn btn-lg btn-primary mb-6 mb-md-0"
            >Start your project</router-link
          >
        </b-col>
      </b-row>
    </b-container>
  </section>
  <section class="pt-0 mt-n7">
    <b-container>
      <div
        class="position-relative h-300px h-md-400px rounded-3"
        style="background-size: cover; background-position: center"
        :style="{ backgroundImage: `url('${bg5Img}')` }"
      >
        <div class="bg-overlay bg-dark opacity-5"></div>
        <div class="position-absolute top-50 start-50 translate-middle z-index-2">
          <CustomGLightbox
            className="btn btn-icon btn-xl btn-white btn-round mb-0 stretched-link"
            link="https://www.youtube.com/embed/tXHviS-4ygo"
            data-gallery="video"
          >
            <BIconPlayFill class="fa-lg" />
          </CustomGLightbox>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import CustomGLightbox from '@/components/CustomGLightbox.vue'
import { BIconPlayFill } from 'bootstrap-icons-vue'

import bg5Img from '@/assets/images/bg/05.jpg'
import bgpattern from '@/assets/images/elements/bg-pattern-2.png'
</script>
