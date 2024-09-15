<template>
  <section class="pb-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-sm-5">
        <h2 class="mb-4">Understanding of your website's impact</h2>
        <p class="mb-4">
          There is nothing that can stop you from achieving what you want, except yourself. If you
          devote yourself to it you will achieve your goal.
        </p>
        <router-link :to="{ name: 'saas.integrations' }" class="btn btn-dark mb-0"
          >View all integrations</router-link
        >
      </div>

      <img :src="integration2" class="mt-5" alt="" />

      <b-row class="justify-content-center g-sm-6 mt-6">
        <b-col sm="6" lg="4" class="mb-5 mb-sm-0" v-for="(feature, idx) in features" :key="idx">
          <FeatureCard :feature="feature" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { features } from '@/views/demos/Saas3/data'
import FeatureCard from '@/views/demos/Saas3/components/FeatureCard.vue'

import integration2 from '@/assets/images/elements/integration-2.svg'
</script>
