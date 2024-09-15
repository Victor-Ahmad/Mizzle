<template>
  <Section class="pt-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-sm-6">
        <h2 class="mb-2">Follow our work</h2>
        <p class="mb-0">
          The combination of my passion for design, code & interaction positions me in a unique
          place in the web design world.
        </p>
      </div>

      <b-row class="row-cols-1 row-cols-lg-3 g-4">
        <b-col v-for="(item, idx) in work" :key="idx">
          <b-card class="bg-light border">
            <div class="d-flex align-items-center">
              <div class="d-flex">
                <img :src="item.image" class="h-50px" alt="" />
                <div class="mx-3">
                  <h6 class="mb-0">{{ item.title }}</h6>
                  <small>{{ item.description }}</small>
                </div>
              </div>
              <a class="icon-link icon-link-hover text-primary-hover stretched-link" href="#">
                <BIconArrowRight class="fs-5 bi" />
              </a>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </Section>
</template>

<script setup lang="ts">
import { work } from '@/views/pages/contact/data'
import { BIconArrowRight } from 'bootstrap-icons-vue'
</script>
