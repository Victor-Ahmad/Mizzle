<template>
  <section class="pt-5 pt-xl-7">
    <b-container fluid class="pt-5">
      <b-row>
        <b-col xxl="11" class="mx-auto">
          <div
            class="bg-dark rounded position-relative overflow-hidden px-4 px-sm-6 pt-6 pt-xl-8"
            data-bs-theme="dark"
          >
            <div class="position-absolute top-0 start-0">
              <img :src="pattern4" alt="pattern" />
            </div>
            <div class="position-absolute bottom-0 start-0">
              <img :src="pattern3" alt="pattern" />
            </div>

            <div class="inner-container-small text-center position-relative mb-4">
              <h6 class="text-primary fw-normal mb-3">Introducing the All-New features</h6>
              <h1 class="mb-3 display-5">Smarter solutions, seamless results</h1>
              <p class="mb-3 mb-lg-4">
                Our powerful SaaS platform is designed to transform the way you work, making your
                processes more efficient and your team more effective.
              </p>
              <router-link
                class="btn btn-lg btn-primary icon-link icon-link-hover"
                :to="{ name: 'contact.v1' }"
                >Get started for free
                <BIconChevronRight class="bi" />
              </router-link>
            </div>

            <b-row class="position-relative mb-n4 mb-md-n7 mb-xl-n9">
              <b-col xl="8" class="mx-auto">
                <img :src="sassBackground5" alt="" />
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconChevronRight } from 'bootstrap-icons-vue'

import sassBackground5 from '@/assets/images/bg/saas-bg-5.png'
import pattern3 from '@/assets/images/elements/bg-pattern-3.png'
import pattern4 from '@/assets/images/elements/bg-pattern-4.png'
</script>
