<template>
  <section class="pb-0">
    <b-container>
      <b-row class="g-4 align-items-center mb-4 mb-lg-5">
        <b-col lg="5">
          <h2 class="mb-0">Integrates with your workflow</h2>
        </b-col>
        <b-col lg="5" class="ms-auto text-lg-end">
          <div class="d-inline-block justify-content-center mx-auto bg-dark rounded px-5 py-3">
            <span class="text-white">Explore our</span
            ><router-link class="ms-2" :to="{ name: 'saas.integrations' }"
              >Integration library
              <BIconChevronRight class="small" />
            </router-link>
          </div>
        </b-col>
      </b-row>

      <b-row class="g-4 g-lg-5">
        <b-col sm="6" lg="4" xl="3" v-for="(integration, idx) in integrations" :key="idx">
          <IntegrationCard :integration="integration" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { integrations } from '@/views/demos/Saas4/data'
import IntegrationCard from '@/views/demos/Saas4/components/IntegrationCard.vue'
import { BIconChevronRight } from 'bootstrap-icons-vue'
</script>
