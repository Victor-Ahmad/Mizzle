<template>
  <section>
    <b-container>
      <b-row>
        <b-col md="11" class="mx-auto">
          <b-row class="align-items-center">
            <b-col md="6" lg="5" class="mb-4 mb-md-0">
              <img :src="about21" class="rounded" alt="" />
            </b-col>
            <b-col md="6" class="ms-auto">
              <h2 class="mb-md-4">Learn About Our Journey to SEO Mastery</h2>
              <p class="mb-md-4">
                With a team of dedicated professionals and years of industry experience, we pride
                ourselves on delivering innovative and effective SEO solutions tailored to your
                unique needs.
              </p>
              <p class="mb-md-4">
                Whether you're a small startup or a large enterprise, we have the expertise to meet
                your needs.
              </p>
              <div class="text-center d-inline-block bg-dark rounded px-5 py-3">
                <span class="text-white">Work with us?</span>
                <router-link class="ms-2" :to="{ name: 'contact.v2' }"
                  >Contact us now
                  <BIconChevronRight class="small" />
                </router-link>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconChevronRight } from 'bootstrap-icons-vue'

import about21 from '@/assets/images/about/21.jpg'
</script>
