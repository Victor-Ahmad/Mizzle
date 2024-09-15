<template>
  <b-card
    no-body
    class="overflow-hidden h-500px text-center rounded-0"
    :style="`background-image:url(${blog.image}); background-position: center left; background-size: cover;`"
  >
    <div class="bg-overlay bg-dark opacity-5"></div>
    <div class="card-img-overlay d-flex align-items-center p-2 p-sm-4">
      <div class="w-100 my-auto">
        <b-row class="justify-content-center">
          <b-col cols="11" lg="9">
            <a href="#" class="badge text-bg-dark mb-4">{{ blog.category }}</a>
            <h1 class="h2 mb-4">
              <router-link v-if="blog.route" :to="blog.route" class="text-white text-primary-hover"
                >{{ blog.title }}
              </router-link>
            </h1>
            <ul class="nav nav-divider mb-0 justify-content-center small">
              <li class="nav-item text-white">
                <a href="#" class="text-decoration-underline">
                  <BIconPerson class="me-1" />
                  {{ blog.publishedBy?.firstName }} {{ blog.publishedBy?.lastName }}
                </a>
              </li>
              <li class="nav-item text-white">
                <BIconCalendar class="me-1" />
                {{ blog.publishedAt?.month }} {{ blog.publishedAt?.date }},
                {{ blog.publishedAt?.year }}
              </li>
              <li class="nav-item text-white">
                <BIconClock class="me-1" />
                {{ blog.publishedAt?.minute }} min read
              </li>
            </ul>
          </b-col>
        </b-row>
      </div>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { BlogType } from '@/types'
import { BIconCalendar, BIconClock, BIconPerson } from 'bootstrap-icons-vue'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script>
