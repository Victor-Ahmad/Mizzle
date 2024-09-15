<template>
  <section class="pt-0">
    <b-container>
      <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
        <b-col v-for="(item, idx) in counter" :key="idx">
          <div class="bg-light border text-center rounded p-4">
            <div class="d-flex justify-content-center">
              <h4 class="purecounter mb-0">
                <vue3autocounter
                  ref="counters"
                  :startAmount="0"
                  :endAmount="item.number"
                  :duration="3"
                />
              </h4>
              <span class="h4 text-primary mb-0">{{ item.prefix }}</span>
            </div>
            <p class="text-center heading-color mb-0">{{ item.title }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import Vue3autocounter from 'vue3-autocounter'
import { counter } from '@/views/pages/about/AboutV1/data'
</script>
