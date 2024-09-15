<template>
  <section class="pt-0">
    <b-container class="inner-container">
      <h3 class="text-center">Frequently Asked Questions</h3>
      <b-accordion class="accordion-icon accordion-border-bottom mt-5" id="accordionExample2">
        <b-accordion-item
          v-for="(item, idx) in faqData"
          :key="idx"
          headerTag="p"
          :visible="!idx"
          class="mb-3"
          button-class="fw-semibold rounded collapsed"
        >
          <template #title>
            {{ item.question }}
          </template>
          {{ item.answer }}
        </b-accordion-item>
      </b-accordion>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { faqData } from '@/views/pages/speciality/HelpCenter/data'
</script>
