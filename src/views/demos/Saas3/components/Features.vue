<template>
  <section class="pb-0">
    <b-container>
      <div class="inner-container text-center mb-4 mb-sm-5">
        <h2 class="mb-4">Expert solution for your growth</h2>
        <p class="mb-0">
          There is nothing that can stop you from achieving what you want, except yourself. If you
          devote yourself to it you will achieve your goal.
        </p>
      </div>

      <b-row class="justify-content-center g-4 g-md-6">
        <b-col md="6" lg="4">
          <b-card
            no-body
            class="bg-light border border-secondary border-opacity-10 overflow-hidden p-0 h-100"
          >
            <b-card-body class="px-sm-5 pt-sm-5">
              <h5 class="mb-3">Multiple integrations</h5>
              <p class="mb-3">
                Multiple integrations play a vital role in modern business operations by connecting
                diverse systems.
              </p>
              <router-link :to="{ name: 'saas.integrations' }" class="btn btn-sm btn-dark mb-0"
                >View integrations</router-link
              >
            </b-card-body>

            <b-card-footer class="bg-transparent p-0">
              <img :src="decoration7" alt="" />
            </b-card-footer>
          </b-card>
        </b-col>

        <b-col md="6" lg="4">
          <b-card
            no-body
            class="bg-light border border-secondary border-opacity-10 overflow-hidden p-0 h-100"
          >
            <b-card-body class="px-sm-5 pt-sm-5">
              <h5 class="mb-3">High Conversions</h5>
              <p class="mb-3">
                Each row should represent a distinct record, while columns hold various attributes
                or variables.
              </p>

              <p class="mb-0">
                <span class="fw-bold heading-color"
                  >4.5 <font-awesome-icon :icon="faStar" class="text-warning me-2" />|</span
                >
                <router-link :to="{ name: 'customer.stories' }" class="text-primary-hover ms-2"
                  >View 256 reviews</router-link
                >
              </p>
            </b-card-body>

            <b-card-footer class="bg-transparent p-0">
              <img :src="decoration8" alt="" />
            </b-card-footer>
          </b-card>
        </b-col>

        <b-col md="6" lg="4">
          <b-card
            no-body
            class="bg-light border border-secondary border-opacity-10 overflow-hidden p-0 h-100"
          >
            <b-card-body class="px-sm-5 pt-sm-5">
              <h5 class="mb-3">Real-time analytics</h5>
              <p class="mb-3">
                A unified customer view enables personalized interactions across various
                touchpoints.
              </p>
              <router-link :to="{ name: 'portfolio.showcase' }" class="icon-link icon-link-hover"
                >Read our case study<BIconArrowRight class="bi" />
              </router-link>
            </b-card-body>

            <b-card-footer class="bg-transparent p-0">
              <img :src="decoration9" alt="" />
            </b-card-footer>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconArrowRight } from 'bootstrap-icons-vue'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import decoration7 from '@/assets/images/elements/saas-decoration/07.png'
import decoration8 from '@/assets/images/elements/saas-decoration/08.png'
import decoration9 from '@/assets/images/elements/saas-decoration/09.png'
</script>
