<template>
  <b-card no-body class="bg-transparent p-0 pe-md-7">
    <img :src="testimonial.user.avatar" class="rounded" alt="review-img" />

    <b-col
      cols="10"
      xl="9"
      class="card-body bg-body shadow rounded position-absolute end-0 bottom-0 p-xl-5 mb-4 me-4"
    >
      <h6>{{ testimonial.title }}</h6>
      <p>{{ testimonial.comment }}</p>
      <ul class="list-inline mb-1">
        <template v-if="testimonial.rating">
          <li
            v-for="(_star, idx) in new Array(Math.floor(testimonial.rating))"
            :key="idx"
            class="list-inline-item me-1 small"
          >
            <font-awesome-icon :icon="faStar" class="text-primary" />
          </li>
        </template>
        <li v-if="!Number.isInteger(testimonial.rating)" class="list-inline-item me-1">
          <font-awesome-icon :icon="faStarHalfAlt" class="text-primary small" />
        </li>
        <template v-if="testimonial.rating && testimonial.rating < 5">
          <li
            v-for="(_val, idx) in new Array(5 - Math.ceil(testimonial.rating))"
            :key="idx"
            class="list-inline-item me-0 small"
          >
            <font-awesome-icon :icon="FAStar" />
          </li>
        </template>
      </ul>
      <span class="heading-color fw-bold"
        >{{ testimonial.user.firstName }} {{ testimonial.user.lastName }}</span
      >
      <p class="small mb-0">{{ testimonial.user.role }}</p>
    </b-col>
  </b-card>
</template>

<script lang="ts" setup>
import type { TestimonialType } from '@/types'
import type { PropType } from 'vue'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as FAStar } from '@fortawesome/free-regular-svg-icons'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>
