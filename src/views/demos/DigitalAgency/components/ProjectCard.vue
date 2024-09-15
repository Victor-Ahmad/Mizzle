<template>
  <b-card no-body class="bg-light p-3 p-sm-4 card-img-scale overflow-hidden">
    <div class="card-img-scale-wrapper rounded-3">
      <img :src="project.image" class="img-scale" alt="portfolio-img" />
    </div>
    <b-card-body class="d-flex justify-content-between align-items-center px-0 pb-0">
      <div class="me-3">
        <h5 class="mb-0">
          <router-link
            v-if="project.route"
            :to="project.route"
            class="heading-color stretched-link"
            >{{ project.name }}</router-link
          >
        </h5>
        <small>{{ project.category }}</small>
      </div>
      <b-button variant="dark" class="btn btn-round btn-dark flex-shrink-0 flex-centered">
        <BIconArrowUpRight />
      </b-button>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import type { ProjectType } from '@/types'
import { BIconArrowUpRight } from 'bootstrap-icons-vue'
import type { PropType } from 'vue'

defineProps({
  project: {
    type: Object as PropType<ProjectType>,
    required: true
  }
})
</script>
