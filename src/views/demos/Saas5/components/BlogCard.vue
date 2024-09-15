<template>
  <article class="card bg-transparent h-100 p-0">
    <div class="badge text-bg-dark position-absolute top-0 start-0 m-3">{{ blog.category }}</div>

    <img :src="blog.image" class="card-img" alt="Blog-img" />

    <b-card-body class="px-2 pb-4">
      <b-card-title tag="h5" class="mb-2"
        ><router-link to="">{{ blog.title }}</router-link></b-card-title
      >

      <div class="d-flex justify-content-between mt-2">
        <span>By {{ blog.publishedBy?.firstName }} {{ blog.publishedBy?.lastName }}</span>
        <router-link
          class="icon-link icon-link-hover stretched-link"
          v-if="blog.route"
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
