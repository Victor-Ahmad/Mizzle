<template>
  <article class="card card-img-scale shadow overflow-hidden h-100">
    <div class="card-img-scale-wrapper">
      <img :src="blog.image" class="img-scale card-img-top" alt="Blog-img" />
    </div>

    <b-card-body class="p-4">
      <b-card-title tag="h6" class="mb-4"
        ><router-link v-if="blog.route" :to="blog.route" class="stretched-link">{{
          blog.title
        }}</router-link>
      </b-card-title>
      <ul class="nav heading-color small nav-divider mb-0">
        <li class="nav-item">
          By {{ blog.publishedBy?.firstName }} {{ blog.publishedBy?.lastName }}
        </li>
        <li class="nav-item d-flex align-items-center">
          <BIconCalendar class="me-1" />{{ blog.publishedAt?.month }} {{ blog.publishedAt?.date }},
          {{ blog.publishedAt?.year }}
        </li>
      </ul>
    </b-card-body>
  </article>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { BIconCalendar } from 'bootstrap-icons-vue'
import type { BlogType } from '@/types'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script>
