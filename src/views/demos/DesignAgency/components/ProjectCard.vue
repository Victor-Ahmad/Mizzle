<template>
  <b-card no-body class="card-img-scale card-element-hover card-img-blur overflow-hidden">
    <div class="card-img-scale-wrapper">
      <div class="card-img-overlay hover-element d-flex align-items-center">
        <div class="z-index-2 mt-auto mx-auto text-center">
          <h5 class="text-white mb-2">{{ project.name }}</h5>
          <router-link v-if="project.route" :to="project.route" class="btn btn-sm btn-white mb-0"
            >View detail<font-awesome-icon :icon="faArrowRightLong" class="fa-fw ms-2"
          /></router-link>
        </div>
      </div>
      <img :src="project.image" class="img-scale img-blur card-img-top" alt="portfolio-img" />
    </div>
  </b-card>
</template>

<script lang="ts" setup>
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import type { ProjectType } from '@/types'
import type { PropType } from 'vue'

defineProps({
  project: {
    type: Object as PropType<ProjectType>,
    required: true
  }
})
</script>
