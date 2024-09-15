<template>
  <section>
    <b-container>
      <b-row>
        <b-col lg="11" class="mx-auto">
          <b-row class="g-4 g-lg-6">
            <b-col xl="5">
              <h3>
                We're a dynamic, innovative digital agency rooted in the vibrant heart of
                <span class="text-primary">California</span>
              </h3>
            </b-col>

            <b-col md="6" xl="3">
              <div class="bg-light rounded p-4 overflow-hidden">
                <h6 class="mb-5 mb-sm-8">Since</h6>
                <div class="display-1 text-primary text-end mb-n5 mb-md-n6 me-n4">1996</div>
              </div>
            </b-col>

            <b-col md="6" xl="4">
              <h6 class="fw-semibold mb-5">28 Years of working experience</h6>

              <b-accordion class="accordion-icon accordion-border-bottom" id="accordionFaq">
                <b-accordion-item
                  class="mb-3"
                  header-tag="div"
                  button-class="rounded fw-semibold"
                  visible
                >
                  <template #title>
                    <BIconBullseye class="text-primary me-2" />Our Mission
                  </template>
                  Effective design communicates your brand's identity, cultivates trust, and can
                  significantly impact conversion rates and customer loyalty.
                </b-accordion-item>

                <b-accordion-item class="mb-3" header-tag="div" button-class="rounded fw-semibold">
                  <template #title> <BIconTrophy class="text-primary me-2" />Our Goal </template>
                  We provide a range of tools, guides, and best practices to help you create
                  designs, websites.
                </b-accordion-item>
              </b-accordion>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconBullseye, BIconTrophy } from 'bootstrap-icons-vue'
</script>
