<template>
  <section>
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-sm-7">
        <span class="text-primary fw-bold text-uppercase">Integrations</span>
        <h2 class="mb-4 mt-3">Seamless integration for maximum efficiency</h2>
        <p class="mb-0">
          Discover how effortless integration with our platform can supercharge your agency's
          workflow. Achieve new levels of efficiency and collaboration with these simple steps.
        </p>
      </div>

      <div class="inner-container center">
        <b-row class="row-cols-4 row-cols-md-6 g-4 g-sm-5 g-md-6 justify-content-center">
          <b-col class="text-center" v-for="(item, idx) in integrations" :key="idx">
            <img :src="item.image" class="h-30px h-sm-50px h-md-60px" alt="Integration-img" />
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { integrations } from '@/views/demos/Saas2/data'
</script>
