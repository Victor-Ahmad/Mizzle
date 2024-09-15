<template>
  <section class="pt-0">
    <b-container>
      <b-row class="align-items-center">
        <b-col lg="6" class="mb-5 mb-lg-0">
          <h2 class="mb-3 mb-lg-5">Effortless Download and Installation of Mizzle</h2>
          <p class="mb-3 mb-lg-5">
            Downloading mizzle is a quick and easy process. Follow these simple steps to start
            enjoying the benefits of our powerful software.
          </p>

          <div
            class="d-flex align-items-center gap-3"
            v-for="(item, idx) in steps"
            :key="idx"
            :class="idx == steps.length - 1 ? '' : 'mb-3'"
          >
            <div class="icon-md bg-primary bg-opacity-10 text-primary rounded-circle fw-bold">
              0{{ item.stepNumber }}
            </div>
            <h6 class="fw-normal mb-0">{{ item.title }}</h6>
          </div>

          <b-row class="g-2 mt-3 mt-lg-5">
            <b-col cols="6" sm="4" md="3" lg="4" xl="3">
              <a href="#"> <img :src="googlePlay" class="btn-transition" alt="google-store" /> </a>
            </b-col>

            <b-col cols="6" sm="4" md="3" lg="4" xl="3">
              <a href="#"> <img :src="appStore" class="btn-transition" alt="app-store" /> </a>
            </b-col>
          </b-row>
        </b-col>

        <b-col lg="5" class="position-relative ms-auto">
          <div class="position-absolute top-50 start-0 translate-middle ms-n2">
            <h2 class="heading-color opacity-1 display-4 text-uppercase rotate-270">since 2018</h2>
          </div>

          <img :src="about14" class="rounded-3 position-relative" alt="" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { steps } from '@/views/pages/about/AboutV3/data'

import about14 from '@/assets/images/about/14.jpg'
import googlePlay from '@/assets/images/elements/google-play.svg'
import appStore from '@/assets/images/elements/app-store.svg'
</script>
