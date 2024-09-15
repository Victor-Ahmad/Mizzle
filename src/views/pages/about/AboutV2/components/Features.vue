<template>
  <section class="pt-0">
    <b-container>
      <b-row class="g-4 align-items-center">
        <b-col lg="6">
          <b-row class="g-xl-5">
            <b-col md="6" v-for="(item, idx) in feature" :key="idx">
              <b-card no-body class="bg-light p-4" :class="idx == feature.length - 2 ? 'mt-5' : ''">
                <figure class="text-primary mb-3 flex-shrink-0">
                  <span v-html="item.icon" />
                </figure>
                <h6>{{ item.title }}</h6>
                <p class="mb-0">{{ item.description }}</p>
              </b-card>

              <b-card no-body class="bg-light p-4 mt-5">
                <figure class="text-primary mb-3 flex-shrink-0">
                  <span v-html="item.icon1" />
                </figure>
                <h6>{{ item.title1 }}</h6>
                <p class="mb-0">{{ item.description1 }}</p>
              </b-card>
            </b-col>
          </b-row>
        </b-col>

        <b-col lg="6" class="ps-xl-7">
          <h2 class="mb-4">Know About Mizzle</h2>
          <p>
            At Mizzle, we're not just in the business of digital solutions; we're in the business of
            crafting digital success stories. Founded on a passion for innovation and a commitment
            to excellence, we've been at the forefront of the digital landscape, helping businesses
            like yours thrive in the digital age.
          </p>
          <p>
            Our story begins with a vision – a vision to transform the digital experience for
            businesses of all sizes. Over the years, we've evolved from a small startup to a dynamic
            digital agency with a global footprint.
          </p>
          <p class="mb-4">
            To empower businesses to achieve their digital goals. We believe that the digital realm
            offers boundless opportunities for growth and connection, and we're here to guide you
            through this transformative journey.
          </p>

          <router-link class="btn btn-dark me-3 mb-0" :to="{ name: 'services.v1' }"
            >Explore services!</router-link
          >
          <router-link :to="{ name: 'contact.v2' }" class="icon-link icon-link-hover ms-1"
            >Request a quote
            <BIconArrowRight />
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { feature } from '@/views/pages/about/AboutV2/data'
import { BIconArrowRight } from 'bootstrap-icons-vue'
</script>
