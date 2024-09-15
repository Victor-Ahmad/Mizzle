<template>
  <section class="pt-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-sm-6">
        <h2 class="mb-3">Open Position</h2>
        <p class="mb-0">
          Our friendly team members are always willing to help you understand your present
          technology requirements and provide suggestions on your future needs.
        </p>
      </div>
      <b-row class="g-4 g-lg-6">
        <b-col lg="9" class="mx-auto">
          <b-tabs
            nav-class="gap-1 nav-pills-light justify-content-center align-items-center mb-3 mb-sm-5"
            pills
            content-class="mt-4"
          >
            <b-tab title="All jobs" class="fade">
              <div
                class=""
                id="pills-all"
                role="tabpanel"
                aria-labelledby="pills-all-tab"
                tabindex="0"
              >
                <b-card
                  no-body
                  v-for="(item, idx) in positionData"
                  :key="idx"
                  class="card-body bg-light d-md-flex justify-content-md-between align-items-md-center flex-md-row p-4 mb-3"
                >
                  <PositionCard :position="item" />
                </b-card>
              </div>
            </b-tab>
            <b-tab title="Development" class="fade">
              <div
                class=""
                id="pills-development"
                role="tabpanel"
                aria-labelledby="pills-development-tab"
                tabindex="0"
              >
                <b-card
                  no-body
                  v-for="(item, idx) in positionData.slice(0, 2)"
                  :key="idx"
                  class="card-body bg-light d-md-flex justify-content-md-between align-items-md-center flex-md-row p-4 mb-3"
                >
                  <PositionCard :position="item" />
                </b-card>
              </div>
            </b-tab>
            <b-tab title="HR" class="fade">
              <div
                class=""
                id="pills-hr"
                role="tabpanel"
                aria-labelledby="pills-hr-tab"
                tabindex="0"
              >
                <b-card
                  no-body
                  v-for="(item, idx) in positionData.slice(-2)"
                  :key="idx"
                  class="card-body bg-light d-md-flex justify-content-md-between align-items-md-center flex-md-row p-4 mb-3"
                >
                  <PositionCard :position="item" />
                </b-card>
              </div>
            </b-tab>
            <b-tab title="Marketing" class="fade">
              <div
                class=""
                id="pills-marketing"
                role="tabpanel"
                aria-labelledby="pills-marketing-tab"
                tabindex="0"
              >
                <div class="text-center justify-content-center p-sm-4">
                  <span class="display-5 text-primary">
                    <BIconSlashCircle />
                  </span>
                  <h5 class="mb-0 mt-2 mt-sm-4">
                    There are no job openings available for this role.
                  </h5>
                </div>
              </div>
            </b-tab>
            <b-tab title="Design" class="fade">
              <div
                class=""
                id="pills-marketing"
                role="tabpanel"
                aria-labelledby="pills-marketing-tab"
                tabindex="0"
              >
                <div class="text-center justify-content-center p-sm-4">
                  <span class="display-5 text-primary">
                    <BIconSlashCircle />
                  </span>
                  <h5 class="mb-0 mt-2 mt-sm-4">
                    There are no job openings available for this role.
                  </h5>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import PositionCard from '@/views/pages/about/Career/components/PositionCard.vue'
import { positionData } from '@/views/pages/about/Career/data'
import { BIconSlashCircle } from 'bootstrap-icons-vue'
</script>
