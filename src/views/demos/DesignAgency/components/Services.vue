<template>
  <section class="bg-dark" data-bs-theme="dark">
    <b-container>
      <div class="inner-container-small m-0 mb-7">
        <h2 class="mb-4">Our Comprehensive Services</h2>
        <p class="mb-0">
          Our team of experts specializes in delivering tailored services designed to propel your
          organization forward in today's fast-paced digital landscape.
        </p>
      </div>

      <b-row>
        <b-col cols="12">
          <template v-for="(service, idx) in services" :key="idx">
            <hr v-if="!idx" />
            <b-row class="align-items-center position-relative py-4">
              <b-col md="2" class="mb-3 mb-md-0">
                <img :src="service.image" class="h-60px" alt="service icon" />
              </b-col>

              <b-col md="3" class="mb-3 mb-md-0">
                <h5 class="mb-0">
                  <router-link v-if="service.route" :to="service.route" class="stretched-link">{{
                    service.title
                  }}</router-link>
                </h5>
              </b-col>

              <b-col md="5" class="ms-auto">
                <p class="mb-0">{{ service.description }}</p>
              </b-col>
            </b-row>
            <hr />
          </template>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { services } from '@/views/demos/DesignAgency/data'
</script>
