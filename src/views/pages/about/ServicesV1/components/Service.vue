<template>
  <section class="pb-0">
    <b-container data-sticky-container>
      <b-row>
        <b-col lg="4" class="mb-5">
          <CustomStickyElement data-sticky data-margin-top="80" data-sticky-for="576">
            <h2 class="mb-4">Giving your business some great ideas</h2>
            <p class="mb-4">
              With the support of our result-driven team, you can solve many challenges.
            </p>
            <div class="text-center d-inline-block bg-dark rounded px-5 py-3">
              <span class="text-white me-1">Work with us?</span>
              <a class="ms-2" href="#"
                >Contact us now
                <BIconChevronRight class="small" />
              </a>
            </div>
          </CustomStickyElement>
        </b-col>

        <b-col lg="8" class="ps-xl-7">
          <b-row class="g-4 g-sm-5">
            <b-col md="6" v-for="(item, idx) in cards" :key="idx">
              <b-card no-body class="border bg-light p-5">
                <b-card-header class="bg-light p-0 mb-4">
                  <figure class="text-primary">
                    <span v-html="item.icon" />
                  </figure>
                </b-card-header>

                <b-card-body class="p-0">
                  <h5 class="mb-3">
                    <router-link :to="{ name: 'services.single' }" class="stretched-link">{{
                      item.title
                    }}</router-link>
                  </h5>
                  <p class="mb-0">{{ item.description }}</p>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import CustomStickyElement from '@/components/CustomStickyElement.vue'
import { cards } from '@/views/pages/about/ServicesV1/data'
import { BIconChevronRight } from 'bootstrap-icons-vue'
</script>
