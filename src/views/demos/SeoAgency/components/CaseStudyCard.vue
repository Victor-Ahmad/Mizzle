<template>
  <b-card no-body class="card-img-scale card-element-hover overflow-hidden">
    <div class="card-img-scale-wrapper">
      <div class="card-img-overlay hover-element d-flex align-items-center justify-content-center">
        <img :src="caseStudy.company.image" class="h-40px z-index-2" alt="client logo" />
        <div class="bg-overlay bg-dark opacity-7"></div>
      </div>
      <img :src="caseStudy.image" class="img-scale card-img-top" alt="portfolio-img" />
    </div>

    <b-card-body>
      <b-card-title tag="h6" class="mb-2">{{ caseStudy.title }}</b-card-title>
      <p class="card-text mb-3">{{ caseStudy.description }}</p>
      <div class="hstack flex-wrap gap-2 mb-4">
        <div
          class="badge border heading-color bg-light"
          v-for="(tag, idx) in caseStudy.tags"
          :key="idx"
        >
          {{ tag }}
        </div>
      </div>
      <router-link
        v-if="caseStudy.route"
        :to="caseStudy.route"
        class="text-primary-hover stretched-link heading-color mb-0"
        >View case study<font-awesome-icon
          :icon="faArrowRightLong"
          class="fa-solid fa-arrow-right-long fa-fw ms-2"
        ></font-awesome-icon
      ></router-link>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import type { CaseStudyType } from '@/views/demos/SeoAgency/data'
import type { PropType } from 'vue'

defineProps({
  caseStudy: {
    type: Object as PropType<CaseStudyType>,
    required: true
  }
})
</script>
