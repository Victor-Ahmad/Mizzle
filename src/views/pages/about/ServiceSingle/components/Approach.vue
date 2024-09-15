<template>
  <section class="pt-0">
    <b-container>
      <b-row class="g-4 g-lg-7">
        <b-col md="6">
          <h4 class="mb-4">Our Approach</h4>
          <p>
            Describe your agency's approach to digital marketing, including any proprietary
            strategies or methodologies you use. Explain how you customize strategies to meet
            clients' specific needs.
          </p>
          <p>
            It encompasses a wide range of tactics and strategies aimed at reaching, engaging, and
            converting potential customers in the digital realm. Digital marketing leverages various
            online platforms, such as search engines, social media, email, content marketing, and
            paid advertising, to create meaningful connections with the digital-savvy audience.
          </p>
        </b-col>

        <b-col md="6">
          <b-card no-body class="card-body bg-light border p-md-5">
            <h4 class="mb-3">Service benefits</h4>

            <b-list-group class="list-group-borderless border-0">
              <b-list-group-item
                v-for="list in approach"
                :key="list"
                class="heading-color d-flex mb-0"
              >
                <span class="flex-centered">
                  <BIconPatchCheck class="text-primary me-2" />
                </span>
                {{ list }}
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { approach } from '@/views/pages/about/ServiceSingle/data'
import { BIconPatchCheck } from 'bootstrap-icons-vue'
</script>
