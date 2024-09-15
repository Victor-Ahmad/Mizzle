<template>
  <section class="pt-0">
    <b-container>
      <b-row class="row-cols-2 row-cols-lg-4 g-4">
        <b-col v-for="(item, idx) in counter" :key="idx">
          <div class="d-flex align-items-center">
            <div class="icon-lg bg-dark rounded text-white flex-shrink-0">
              <component :is="item.icon" class="fs-5" />
            </div>
            <div class="ms-3">
              <div class="d-flex">
                <h5 class="purecounter mb-0">
                  <Vue3Autocounter
                    ref="counters"
                    :startAmount="0"
                    :endAmount="item.state"
                    :duration="3"
                  />
                </h5>
                <span class="h5 text-primary mb-0">{{ item.suffix }}</span>
              </div>
              <p class="mb-0">{{ item.title }}</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import Vue3Autocounter from 'vue3-autocounter'
import { counter } from '@/views/pages/about/Career/data'
</script>
