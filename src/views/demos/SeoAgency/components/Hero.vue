<template>
  <section class="pt-xl-8 pb-0 position-relative">
    <b-container class="py-5 position-relative">
      <div class="inner-container mx-auto text-center">
        <h1 class="mb-4">
          Dominate Search
          <span>
            <svg
              width="76"
              height="51"
              viewBox="0 0 76 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_3060_294" fill="white">
                <path
                  d="M25.5 51C18.737 51 12.251 48.3134 7.46878 43.5312C2.6866 38.749 -1.88135e-07 32.263 0 25.5C1.88135e-07 18.737 2.6866 12.251 7.46878 7.46878C12.251 2.6866 18.737 -8.06482e-08 25.5 0L25.5 25.5L25.5 51Z"
                />
              </mask>
              <path
                d="M25.5 51C18.737 51 12.251 48.3134 7.46878 43.5312C2.6866 38.749 -1.88135e-07 32.263 0 25.5C1.88135e-07 18.737 2.6866 12.251 7.46878 7.46878C12.251 2.6866 18.737 -8.06482e-08 25.5 0L25.5 25.5L25.5 51Z"
                fill="white"
                stroke="#202124"
                stroke-width="4"
                mask="url(#path-1-inside-1_3060_294)"
              />
              <path
                d="M50.5 51C43.737 51 37.251 48.3134 32.4688 43.5312C27.6866 38.749 25 32.263 25 25.5C25 18.737 27.6866 12.251 32.4688 7.46878C37.251 2.6866 43.737 -8.06482e-08 50.5 0L50.5 25.5L50.5 51Z"
                fill="#202124"
              />
              <path
                d="M75.5 51C68.737 51 62.251 48.3134 57.4688 43.5312C52.6866 38.749 50 32.263 50 25.5C50 18.737 52.6866 12.251 57.4688 7.46878C62.251 2.6866 68.737 -8.06482e-08 75.5 0V25.5L75.5 51Z"
                fill="#09B850"
              />
            </svg>
          </span>
          Engines With Proven SEO Strategies
        </h1>
        <p class="mb-5">
          Our comprehensive SEO solutions are designed to put your website in front of the right
          audience at the right time. Let us take your online presence to the next level.
        </p>

        <div class="d-flex gap-1 gap-sm-3 flex-wrap justify-content-center mb-6">
          <b-button variant="dark" size="lg" type="button">Request a free consultation</b-button>
          <router-link class="btn btn-lg btn-white border" to="#">Learn more</router-link>
        </div>

        <div class="inner-container-small d-sm-flex justify-content-center">
          <div>
            <img :src="trustpilotImg" class="light-mode-item h-40px mb-3" alt="Client-img" />
            <img :src="trustpilotLightImg" class="dark-mode-item h-40px mb-2" alt="Client-img" />
            <ul class="list-inline mb-3">
              <li class="list-inline-item me-1" v-for="(_star, idx) in new Array(4)" :key="idx">
                <font-awesome-icon :icon="faStar" class="text-warning" />
              </li>
              <li class="list-inline-item me-1">
                <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
              </li>
              <li class="list-inline-item me-0">
                <router-link to="#" class="heading-color text-primary-hover fw-semibold"
                  >114 Reviews</router-link
                >
              </li>
            </ul>
          </div>

          <div class="vr bg-primary mx-6"></div>

          <div>
            <img :src="googleImage" class="h-40px mb-3" alt="Client-img" />
            <ul class="list-inline mb-3">
              <li class="list-inline-item me-1" v-for="(_star, idx) in new Array(4)" :key="idx">
                <font-awesome-icon :icon="faStar" class="text-warning" />
              </li>
              <li class="list-inline-item me-1">
                <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
              </li>
              <li class="list-inline-item me-0">
                <router-link to="#" class="heading-color text-primary-hover fw-semibold"
                  >215 Reviews</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <b-row class="mt-7">
        <b-col md="10" class="mx-auto">
          <img :src="heroSeoImage" alt="" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons'

import heroSeoImage from '@/assets/images/elements/hero-seo.svg'
import trustpilotImg from '@/assets/images/elements/trustpilot.svg'
import trustpilotLightImg from '@/assets/images/elements/trustpilot-light.svg'
import googleImage from '@/assets/images/elements/google.svg'
</script>
