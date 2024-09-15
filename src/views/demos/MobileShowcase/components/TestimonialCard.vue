<template>
  <b-card no-body class="card-body border">
    <p class="mb-2">“{{ testimonial.comment }}”</p>
    <ul class="list-inline mb-3">
      <template v-if="testimonial.rating">
        <li
          v-for="(_star, idx) in new Array(Math.floor(testimonial.rating))"
          :key="idx"
          class="list-inline-item me-1 fs-6"
        >
          <BIconStarFill style="height: 14px; width: 14px" class="text-warning small" />
        </li>
      </template>
      <li v-if="!Number.isInteger(testimonial.rating)" class="list-inline-item me-1 fs-6">
        <BIconStarHalf style="height: 14px; width: 14px" class="text-warning small" />
      </li>
      <template v-if="testimonial.rating && testimonial.rating < 5">
        <li
          v-for="(_val, idx) in new Array(5 - Math.ceil(testimonial.rating))"
          :key="idx"
          class="list-inline-item me-0 fs-6"
        >
          <BIconStar style="height: 14px; width: 14px" class="text-warning small" />
        </li>
      </template>
    </ul>
    <div class="d-flex align-items-center">
      <div class="avatar avatar-xs me-2">
        <img class="avatar-img rounded-circle" :src="testimonial.user.avatar" alt="avatar" />
      </div>
      <small class="mb-0 heading-color fw-semibold"
        >{{ testimonial.user.firstName }} {{ testimonial.user.lastName }}</small
      >
    </div>
  </b-card>
</template>

<script lang="ts" setup>
import type { TestimonialType } from '@/types'
import type { PropType } from 'vue'
import { BIconStarFill, BIconStarHalf, BIconStar } from 'bootstrap-icons-vue'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>
