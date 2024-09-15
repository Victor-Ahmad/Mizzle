<template>
  <b-card no-body class="card-body bg-light p-sm-5">
    <div class="icon-lg bg-primary bg-opacity-10 text-primary rounded">
      <BIconQuote class="fa-xl" />
    </div>

    <p class="lead my-3">{{ testimonial.comment }}</p>

    <ul class="list-inline mb-4">
      <li class="list-inline-item me-0">
        <BIconStarFill class="text-warning" />
      </li>
      <li class="list-inline-item me-0">
        <BIconStarFill class="text-warning" />
      </li>
      <li class="list-inline-item me-0">
        <BIconStarFill class="text-warning" />
      </li>
      <li class="list-inline-item me-0">
        <BIconStarFill class="text-warning" />
      </li>
      <li class="list-inline-item me-0">
        <BIconStarHalf class="text-warning" />
      </li>
    </ul>

    <div class="d-sm-flex align-items-center">
      <div class="avatar flex-shrink-0">
        <img class="avatar-img rounded-circle" :src="testimonial.user.avatar" alt="avatar" />
      </div>
      <div class="ms-sm-3 mt-2 mt-sm-0">
        <h6 class="mb-0">{{ testimonial.user.username }}</h6>
        <p class="mb-0 small">{{ testimonial.user.role }}</p>
      </div>
    </div>
  </b-card>
</template>

<script setup lang="ts">
import type { TestimonialType } from '@/types'
import { type PropType } from 'vue'
import { BIconQuote, BIconStarFill, BIconStarHalf } from 'bootstrap-icons-vue'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>
