<template>
  <Section class="pb-0">
    <b-container>
      <div class="bg-light rounded position-relative p-4 p-sm-7 overflow-hidden">
        <figure class="position-absolute top-100 start-100 translate-middle mt-n8 ms-n5">
          <svg
            class="text-primary opacity-2"
            width="510"
            height="500"
            viewBox="0 0 510 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M309.5 317.5C309.5 377.619 259.646 426.375 198.125 426.375C136.604 426.375 86.75 377.619 86.75 317.5C86.75 257.381 136.604 208.625 198.125 208.625C259.646 208.625 309.5 257.381 309.5 317.5Z"
              stroke="currentColor"
            />
            <path
              d="M380.125 300C380.125 391.185 304.389 465.125 210.938 465.125C117.486 465.125 41.75 391.185 41.75 300C41.75 208.815 117.486 134.875 210.938 134.875C304.389 134.875 380.125 208.815 380.125 300Z"
              stroke="currentColor"
            />
            <path
              d="M508.875 250C508.875 387.786 395.08 499.5 254.688 499.5C114.295 499.5 0.5 387.786 0.5 250C0.5 112.214 114.295 0.5 254.688 0.5C395.08 0.5 508.875 112.214 508.875 250Z"
              stroke="currentColor"
            />
          </svg>
        </figure>

        <b-row class="position-relative">
          <b-col lg="6" class="h-100 order-2">
            <b-row class="g-4 g-lg-6">
              <b-col sm="6" v-for="(step, idx) in financeSteps" :key="idx">
                <StepCard :step="step" />
              </b-col>
            </b-row>
          </b-col>

          <b-col lg="5" class="ms-auto order-1 order-lg-2 mb-6 mb-lg-0">
            <div class="h-100 d-flex flex-column">
              <h2 class="mb-4">Choose us for your financial journey</h2>
              <div class="mt-auto">
                <CustomGLightbox
                  className="btn btn-primary"
                  link="https://www.youtube.com/embed/tXHviS-4ygo"
                  data-glightbox=""
                  data-gallery="course-video"
                >
                  <span class="d-flex">
                    <BIconPlayFill class="fa-xl me-2" />
                    Watch demo video
                  </span>
                </CustomGLightbox>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </Section>
</template>

<script lang="ts" setup>
import { financeSteps } from '@/views/demos/Finance/data'
import CustomGLightbox from '@/components/CustomGLightbox.vue'
import StepCard from '@/views/demos/Finance/components/StepCard.vue'
import { BIconPlayFill } from 'bootstrap-icons-vue'
</script>
