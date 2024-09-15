<template>
  <Section class="pb-0">
    <b-container>
      <b-row>
        <b-col xl="10" class="mx-auto">
          <div class="rounded border bg-light p-4 p-lg-5">
            <b-row class="g-4">
              <b-col md="4">
                <div class="d-flex align-items-center">
                  <img :src="appleImg" class="icon-lg" alt="" />

                  <div class="ms-2">
                    <ul class="list-inline mb-0">
                      <li
                        class="list-inline-item me-1"
                        v-for="(_star, idx) in new Array(4)"
                        :key="idx"
                      >
                        <font-awesome-icon :icon="faStar" class="text-warning" />
                      </li>
                      <li class="list-inline-item me-0">
                        <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
                      </li>
                    </ul>
                    <span>4.8 stars on apple store</span>
                  </div>
                </div>
              </b-col>

              <b-col md="4" class="border-end">
                <div class="d-flex align-items-center">
                  <img :src="gIcon" class="icon-lg" alt="" />

                  <div class="ms-2">
                    <ul class="list-inline mb-0">
                      <li
                        class="list-inline-item me-1"
                        v-for="(_star, idx) in new Array(4)"
                        :key="idx"
                      >
                        <font-awesome-icon :icon="faStar" class="text-warning" />
                      </li>
                      <li class="list-inline-item me-0">
                        <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
                      </li>
                    </ul>
                    <span>4.8 stars on Google store</span>
                  </div>
                </div>
              </b-col>

              <b-col md="4">
                <h6>8,000+ satisfied customers</h6>
                <a class="icon-link icon-link-hover" href="#"
                  >See all reviews
                  <BIconArrowRight />
                </a>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </Section>
</template>

<script lang="ts" setup>
import { BIconArrowRight } from 'bootstrap-icons-vue'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

import appleImg from '@/assets/images/elements/apple.svg'
import gIcon from '@/assets/images/elements/gicon.svg'
</script>
