<template>
  <section class="pb-0">
    <b-container>
      <b-row class="g-4 g-lg-5 justify-content-center">
        <b-col sm="6" md="4" class="text-center" v-for="(item, idx) in statData" :key="idx">
          <div class="display-1 heading-color d-flex justify-content-center">
            <span class="text-primary" v-if="item.prefix">{{ item.prefix }}</span>
            <Vue3autocounter
              ref="counter"
              :startAmount="0"
              :endAmount="item.number"
              :duration="3"
            />
            <span v-if="item.prefix && item.suffix">{{ item.suffix }}</span>
            <span class="text-primary" v-else>{{ item.suffix }}</span>
          </div>
          <h6 class="text-body fw-normal position-relative">{{ item.title }}</h6>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import Vue3autocounter from 'vue3-autocounter'
import { statData } from '@/views/demos/DigitalAgency/data'
</script>
