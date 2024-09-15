<template>
  <section class="pt-0">
    <b-container>
      <b-row>
        <b-col md="10" class="mx-auto">
          <b-accordion class="accordion-icon accordion-border" id="accordionFaq">
            <b-accordion-item
              bodyClass="mt-3 pb-0"
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
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { faqData } from '@/views/pages/speciality/Faq/data'
</script>
