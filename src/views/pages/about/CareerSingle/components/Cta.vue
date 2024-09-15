<template>
  <section class="bg-light position-relative overflow-hidden py-7">
    <figure class="position-absolute top-0 start-0 ms-n8 mt-5">
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
        <ellipse cx="185.5" cy="177" rx="185.5" ry="177" fill="url(#paint1_linear_195_2)"></ellipse>
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
    <div class="position-absolute end-0 bottom-0 me-sm-5">
      <img :src="ctaVectorImg" class="h-200px" alt="vector-img" />
    </div>

    <b-container class="position-relative">
      <b-row class="align-items-center">
        <b-col md="7">
          <h2>Subscribe to our newsletter</h2>
          <p>
            Our passion for customer excellence is just one reason why we are the market leader.
            We've always worked very hard to give our customers the best experience.
          </p>
        </b-col>

        <form class="col-md-5 col-lg-4 ms-auto">
          <input class="form-control mb-3" type="email" placeholder="Enter your email address" />
          <a href="#" class="btn btn-dark mb-0 d-grid">Subscribe now</a>
        </form>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import ctaVectorImg from '@/assets/images/elements/cta-vector.svg'
</script>
