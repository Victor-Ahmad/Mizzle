<template>
  <Section class="pt-xl-9">
    <b-container class="pt-xl-6">
      <div class="inner-container-small text-center mb-4 mb-sm-7">
        <span class="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2"
          >Core feature</span
        >
        <h2 class="mb-0 mt-3">The heart of our solution</h2>
      </div>

      <b-row>
        <b-col lg="10" class="mx-auto">
          <b-row
            class="g-4 align-items-center"
            v-for="(item, idx) in features"
            :key="idx"
            :class="idx == features.length - 1 ? '' : 'mb-6'"
          >
            <template v-if="!item.odd">
              <b-col md="6" class="pe-md-7">
                <div class="bg-light p-4 rounded-3">
                  <img :src="item.image" alt="" />
                </div>
              </b-col>
              <b-col md="6">
                <h3 class="mb-4">{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </b-col>
            </template>

            <template v-else>
              <b-col md="6" class="order-2">
                <h3 class="mb-4">{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </b-col>
              <b-col md="6" class="ps-md-7 order-md-2">
                <div class="bg-light p-4 rounded-3">
                  <img :src="item.image" alt="" />
                </div>
              </b-col>
            </template>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </Section>
</template>

<script setup lang="ts">
import { features } from '@/views/pages/saas/FeatureSingle/data'
</script>
