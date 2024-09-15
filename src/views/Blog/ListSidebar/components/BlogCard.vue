<template>
  <article class="card card-hover-shadow border p-3" :class="length - 1 === id ? '' : 'mb-4'">
    <b-row>
      <b-col md="4">
        <img :src="blog.image" class="img-fluid card-img" alt="blog-img" />
      </b-col>
      <b-col md="8">
        <b-card-body class="d-flex flex-column h-100 ps-0 pe-3">
          <div
            :class="
              blog.isSponsored ? 'd-flex justify-content-between position-relative z-index-2' : ''
            "
          >
            <span class="badge text-bg-dark mb-3">{{ blog.category }}</span>
            <a
              href="#"
              v-if="blog.isSponsored"
              class="mb-0 text-body small gap-1"
              tabindex="0"
              role="button"
              id="sponsored-popover-2"
            >
              <BIconInfoCircle class="ps-1 mb-1" style="height: 18px; width: 18px" />
              Sponsored
            </a>
          </div>
          <b-card-title tag="h5" class="mb-3 mb-md-0">{{ blog.title }}</b-card-title>

          <div class="d-sm-flex justify-content-between align-items-center mt-auto">
            <p class="mb-2 heading-color fw-semibold">
              By {{ blog.publishedBy?.firstName }} {{ blog.publishedBy?.lastName }}
            </p>
            <router-link
              class="icon-link icon-link-hover stretched-link"
              v-if="blog.route"
              :to="blog.route"
              >Read more
              <BIconArrowRight />
            </router-link>
          </div>
        </b-card-body>
      </b-col>
    </b-row>
  </article>
  <b-popover target="sponsored-popover-2" triggers="click" placement="top">
    You're seeing this ad because your activity meets the intended audience of our site.
  </b-popover>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { BIconArrowRight, BIconInfoCircle } from 'bootstrap-icons-vue'
import { type BlogType2 } from '@/views/Blog/ListSidebar/data'

defineProps({
  blog: {
    type: Object as PropType<BlogType2>,
    required: true
  },
  length: {
    type: Number,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
})
</script>
