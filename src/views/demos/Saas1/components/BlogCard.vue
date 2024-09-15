<template>
  <article class="card bg-transparent rounded-0">
    <b-row>
      <b-col cols="9" sm="10">
        <b-card-body class="p-0">
          <b-card-title tag="h6">
            <router-link v-if="blog.route" :to="blog.route" class="stretched-link">
              {{ blog.title }}</router-link
            >
          </b-card-title>
          <ul class="nav nav-divider small mb-0">
            <li class="nav-item">
              By {{ blog.publishedBy?.firstName }} {{ blog.publishedBy?.lastName }}
            </li>
            <li class="nav-item">
              <BIconCalendar class="me-1" />{{ blog.publishedAt?.month }}
              {{ blog.publishedAt?.date }}, {{ blog.publishedAt?.year }}
            </li>
          </ul>
        </b-card-body>
      </b-col>

      <b-col cols="3" sm="2" class="text-sm-end d-flex justify-content-sm-end">
        <a href="#" class="btn btn-round btn-dark flex-shrink-0 flex-centered">
          <BIconArrowRight />
        </a>
      </b-col>
    </b-row>
  </article>
</template>

<script lang="ts" setup>
import type { BlogType } from '@/types'
import type { PropType } from 'vue'
import { BIconArrowRight, BIconCalendar } from 'bootstrap-icons-vue'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script>
