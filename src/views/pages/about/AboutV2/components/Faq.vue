<template>
  <section class="pt-0">
    <b-container>
      <b-row>
        <b-col md="5">
          <h2 class="mb-5">You have questions we have answers</h2>
        </b-col>

        <b-col md="7">
          <b-accordion class="accordion-icon accordion-bg-light" id="accordionFaq">
            <b-accordion-item
              bodyClass="mt-3 pb-0"
              v-for="(faq, idx) in accordion"
              :key="idx"
              :visible="!idx"
              headerTag="p"
              :title="faq.question"
              class="mb-3"
              button-class="fw-semibold rounded"
            >
              <template #title?>
                {{ faq.question }}
              </template>
              {{ faq.answer }}
            </b-accordion-item>
          </b-accordion>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { accordion } from '@/views/pages/about/AboutV2/data'
</script>
