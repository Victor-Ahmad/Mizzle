<template>
  <section class="pt-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-md-6">
        <h2 class="mb-0">How its work?</h2>
      </div>

      <b-row class="g-4 g-lg-7">
        <b-col sm="6" md="3" v-for="(item, idx) in work" :key="idx">
          <div
            class="d-flex justify-content-center align-items-center text-center flex-column bg-transparent"
          >
            <div
              class="icon-lg bg-primary bg-opacity-10 text-primary rounded-3 fw-bold flex-shrink-0 mb-3"
            >
              0{{ item.id }}
            </div>
            <h6>{{ item.title }}</h6>
            <p class="small mb-0">
              {{ item.description }}
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { work } from '@/views/pages/about/ServiceSingle/data'
</script>
