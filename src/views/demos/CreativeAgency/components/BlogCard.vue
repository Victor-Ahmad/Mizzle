<template>
  <article class="card bg-transparent">
    <img :src="blog.image" class="card-img" alt="blog-img" />
    <b-card-body class="px-0 pb-0">
      <b-card-title tag="h6">{{ blog.title }}</b-card-title>
      <div class="d-flex justify-content-between align-items-center">
        <p class="mb-0">By {{ blog.publishedBy?.firstName }} {{ blog.publishedBy?.lastName }}</p>
        <router-link
          v-if="blog.route"
          class="icon-link icon-link-hover stretched-link me-1"
          :to="blog.route"
          >Read more
          <BIconArrowRight class="bi" />
        </router-link>
      </div>
    </b-card-body>
  </article>
</template>

<script lang="ts" setup>
import type { BlogType } from '@/types'
import { BIconArrowRight } from 'bootstrap-icons-vue'
import type { PropType } from 'vue'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script>
