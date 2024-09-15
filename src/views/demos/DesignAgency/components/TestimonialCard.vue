<template>
  <div class="avatar avatar-xxl mx-auto flex-shrink-0 mb-4">
    <img class="avatar-img rounded-circle" :src="testimonial.user.avatar" alt="avatar" />
  </div>
  <p class="heading-color fs-4 fw-normal mb-4">"{{ testimonial.comment }}"</p>

  <ul class="list-inline mb-4">
    <template v-if="testimonial.rating">
      <li
        v-for="(_star, idx) in new Array(Math.floor(testimonial.rating))"
        :key="idx"
        class="list-inline-item me-1 fs-6"
      >
        <font-awesome-icon :icon="faStar" class="text-primary" />
      </li>
    </template>
    <li v-if="!Number.isInteger(testimonial.rating)" class="list-inline-item me-1 fs-6">
      <font-awesome-icon :icon="faStarHalfAlt" class="text-primary" />
    </li>
    <template v-if="testimonial.rating && testimonial.rating < 5">
      <li
        v-for="(_val, idx) in new Array(5 - Math.ceil(testimonial.rating))"
        :key="idx"
        class="list-inline-item me-0 fs-6"
      >
        <font-awesome-icon :icon="FAStar" />
      </li>
    </template>
  </ul>

  <div class="d-flex gap-2 align-items-center justify-content-center flex-wrap">
    <h5 class="mb-0">{{ testimonial.user.firstName }} {{ testimonial.user.lastName }}</h5>
    <div class="vr"></div>
    <p class="mb-0">
      {{ testimonial.user.role }}
      {{ testimonial.user.company && 'of ' + testimonial.user.company.name }}
    </p>
  </div>
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
