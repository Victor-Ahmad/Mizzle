<template>
  <section class="pt-0">
    <b-container class="position-relative">
      <b-row class="align-items-center position-relative">
        <b-col md="3" class="d-none d-md-block">
          <img :src="element1" alt="" />
        </b-col>

        <b-col md="6" class="mx-auto text-center">
          <h2 class="mb-4">Seamless Integrations for Enhanced Productivity</h2>
          <p class="mb-4">
            Your workflow isn't just about one tool - it's about the entire ecosystem of
            applications you use. Seamlessly connects with a range of third-party services to
            streamline your processes even further.
          </p>
          <router-link
            class="btn btn-lg btn-primary icon-link icon-link-hover"
            :to="{ name: 'saas.integrations' }"
            >View all integrations<BIconChevronRight class="bi" />
          </router-link>
        </b-col>

        <b-col md="3" class="d-none d-md-block">
          <img :src="element2" alt="" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconChevronRight } from 'bootstrap-icons-vue'

import element1 from '@/assets/images/elements/int-p1.svg'
import element2 from '@/assets/images/elements/int-p2.svg'
</script>
