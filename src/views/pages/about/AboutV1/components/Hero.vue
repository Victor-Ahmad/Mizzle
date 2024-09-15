<template>
  <section class="bg-dark pt-sm-8 pb-9" data-bs-theme="dark">
    <b-container class="pt-4 pt-sm-0">
      <b-row class="g-4 g-xxl-5">
        <b-col lg="8">
          <h1 class="mb-0 lh-base">Modern & creative agency specialized in Business</h1>
          <p class="mb-0 mt-4">
            Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by
            oh twenty direct me so. Departure defective arranging rapturous did believe him all had
            supported.
          </p>
        </b-col>
        <b-col lg="4" xl="3" class="ms-auto position-relative">
          <ul class="list-group list-group-borderless mb-4">
            <li
              v-for="item in list"
              :key="item"
              class="list-group-item d-flex heading-color pb-0 icons-center"
            >
              <BIconPatchCheck class="text-primary me-2" />{{ item }}
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { list } from '@/views/pages/about/AboutV1/data'
import { BIconPatchCheck } from 'bootstrap-icons-vue'
</script>
