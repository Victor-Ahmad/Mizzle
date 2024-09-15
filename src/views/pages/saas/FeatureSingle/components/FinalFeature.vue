<template>
  <Section class="pt-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-sm-7">
        <span class="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2"
          >Final solution</span
        >
        <h2 class="mb-0 mt-3">Unlocking Success Through Our Solutions</h2>
      </div>

      <b-row class="g-4 g-lg-5">
        <b-col md="5" class="h-100">
          <img :src="about05" class="rounded-3" alt="" />
        </b-col>

        <b-col md="7" class="h-100">
          <b-row class="g-4 g-lg-5">
            <b-col :lg="item.lg" :cols="item.cols" v-for="(item, idx) in finalFeature" :key="idx">
              <b-card no-body class="bg-light rounded h-100 overflow-hidden p-5">
                <b-card-body class="bg-transparent p-0">
                  <div class="badge mb-3" :class="`text-bg-${item.variant}`">{{ item.title }}</div>
                  <p class="small mb-0">{{ item.description }}</p>
                </b-card-body>

                <b-card-footer class="bg-transparent text-end p-0 mt-3">
                  <span class="fs-1 fw-semibold heading-color">{{ item.span }}</span>
                </b-card-footer>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </Section>
</template>

<script setup lang="ts">
import { finalFeature } from '@/views/pages/saas/FeatureSingle/data'

import about05 from '@/assets/images/about/05.jpg'
</script>
