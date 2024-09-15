<template>
  <section class="pt-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-sm-6">
        <h2>Built to accommodate your data and workflow.</h2>
      </div>

      <b-row class="g-4 g-xl-6">
        <b-col lg="6">
          <b-card no-body class="border p-0 h-100">
            <b-card-body class="p-4 py-sm-5 px-sm-7 text-center">
              <h5 class="mb-3">Work with your favorite tools</h5>
              <p class="mb-4">
                You have the freedom to use the tools and software you prefer or find most effective
                in your job or tasks.
              </p>
              <router-link :to="{ name: 'saas.integrations' }" class="btn btn-sm btn-dark mb-0"
                >View all integrations</router-link
              >
            </b-card-body>
            <b-card-footer class="p-0">
              <img :src="decoration18" alt="" />
            </b-card-footer>
          </b-card>
        </b-col>

        <b-col lg="6">
          <b-card no-body class="border overflow-hidden p-0 h-100">
            <b-card-body class="p-4 py-sm-5 px-sm-7 text-center">
              <h5 class="mb-3">Extract code ready for implementation</h5>
              <p class="mb-4">
                Code you're providing or generating is of high quality, thoroughly tested, and fully
                prepared for deployment.
              </p>
              <a href="#" class="btn btn-sm btn-dark mb-0">Discover our theme</a>
            </b-card-body>
            <b-card-footer class="p-0 mb-n3 ms-5">
              <img :src="decoration19" alt="" />
            </b-card-footer>
          </b-card>
        </b-col>

        <div
          class="col-xl-4"
          :class="features2.length - 1 === idx ? '' : 'col-md-6'"
          v-for="(feature, idx) in features2"
          :key="idx"
        >
          <FeatureCard :feature="feature" />
        </div>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import FeatureCard from '@/views/demos/Saas5/components/FeatureCard.vue'
import { features2 } from '@/views/demos/Saas5/data'

import decoration18 from '@/assets/images/elements/saas-decoration/18.png'
import decoration19 from '@/assets/images/elements/saas-decoration/19.png'
</script>
