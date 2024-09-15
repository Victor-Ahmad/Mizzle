<template>
  <article class="card bg-transparent h-100 p-0">
    <div class="badge text-bg-dark position-absolute top-0 start-0 m-3">{{ blog.category }}</div>

    <img :src="blog.image" class="card-img" alt="Blog-img" />

    <b-card-body class="px-2 pb-4">
      <b-card-title tag="h6" class="mb-2">
        <router-link to="">{{ blog.title }}</router-link>
      </b-card-title>
      <p class="small mb-0">{{ blog.description }}</p>
    </b-card-body>

    <div class="card-footer bg-transparent d-flex justify-content-between px-2 py-0">
      <span class="heading-color fw-semibold mb-0"
        >{{ blog.publishedBy?.firstName }} {{ blog.publishedBy?.lastName }}</span
      >
      <router-link
        class="icon-link icon-link-hover stretched-link"
        v-if="blog.route"
        :to="blog.route"
        >Read more
        <BIconArrowRight class="bi" />
      </router-link>
    </div>
  </article>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { BIconArrowRight } from 'bootstrap-icons-vue'
import type { BlogType } from '@/types'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script>
