<template>
  <section
    class="bg-parallax position-relative"
    style="background-size: cover; background-position: center"
    :style="{ backgroundImage: `url('${bg3Img}')` }"
  >
    <b-container>
      <b-row class="g-4 g-md-6 text-start justify-content-end">
        <b-col md="4" v-for="(flag, idx) in location" :key="idx">
          <b-card no-body class="p-4">
            <div class="avatar mb-4">
              <img class="avatar-img rounded-circle" :src="flag.image" alt="avatar" />
            </div>
            <b-card-title tag="h6" class="mb-3"
              ><a href="#">{{ flag.title }}</a></b-card-title
            >
            <ul class="list-group list-group-borderless border-0">
              <li class="d-flex mb-3">
                <span><BIconGeoAlt class="text-primary me-2" /></span>55/123 Norman street, Banking
                road, Sydney NSW 5000
              </li>
              <li class="d-flex mb-3 icons-center">
                <BIconHeadset class="text-primary me-2" />Call: 469-537-2410 (Toll-free)
              </li>
            </ul>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { location } from '@/views/pages/contact/data'
import { jarallax } from 'jarallax'
import { BIconGeoAlt, BIconHeadset } from 'bootstrap-icons-vue'

import bg3Img from '@/assets/images/bg/03.jpg'

onMounted(() => {
  jarallax(document.querySelectorAll('.bg-parallax'), {
    speed: 0.6
  })
})
</script>
