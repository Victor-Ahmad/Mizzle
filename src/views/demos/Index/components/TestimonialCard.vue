<template>
  <b-card no-body class="bg-transparent h-100">
    <b-card-body class="p-0">
      <ul class="list-inline mb-2">
        <template v-if="testimonial.rating">
          <li
            v-for="(_star, idx) in new Array(Math.floor(testimonial.rating))"
            :key="idx"
            class="list-inline-item me-1"
          >
            <font-awesome-icon :icon="faStar" class="text-warning" />
          </li>
        </template>
        <li v-if="!Number.isInteger(testimonial.rating)" class="list-inline-item me-1">
          <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
        </li>
        <template v-if="testimonial.rating && testimonial.rating < 5">
          <li
            v-for="(_val, idx) in new Array(5 - Math.ceil(testimonial.rating))"
            :key="idx"
            class="list-inline-item me-1"
          >
            <font-awesome-icon :icon="FaStar" class="text-warning" />
          </li>
        </template>
      </ul>
      <p class="heading-color fw-normal">{{ testimonial.comment }}</p>
    </b-card-body>

    <b-card-footer class="bg-transparent p-0">
      <div class="d-flex align-items-center">
        <div class="avatar avatar-sm flex-shrink-0 me-2">
          <img class="avatar-img rounded" :src="testimonial.user.avatar" alt="avatar" />
        </div>
        <p class="mb-0">By {{ testimonial.user.firstName }} {{ testimonial.user.lastName }}</p>
      </div>
    </b-card-footer>
  </b-card>
</template>

<script setup lang="ts">
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as FaStar } from '@fortawesome/free-regular-svg-icons'
import { type PropType } from 'vue'
import type { TestimonialType } from '@/types'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>
