<template>
  <b-card no-body class="p-3 border">
    <b-row class="g-4">
      <b-col md="4">
        <img :src="testimonial.user.avatar" class="img-fluid card-img" alt="testimonial img" />
      </b-col>
      <b-col md="8">
        <b-card-body class="d-flex flex-column align-items-start h-100 p-2">
          <img :src="testimonial.user.company?.image" class="h-30px mb-3" alt="client-img" />
          <q class="mb-3 heading-color">"{{ testimonial.comment }}"</q>
          <div class="d-flex flex-column mt-auto">
            <ul class="list-inline mb-0">
              <template v-if="testimonial.rating">
                <li
                  v-for="(_star, idx) in new Array(Math.floor(testimonial.rating))"
                  :key="idx"
                  class="list-inline-item me-1 small"
                >
                  <BIconStarFill style="height: 14px; width: 14px" class="text-warning small" />
                </li>
              </template>
              <li v-if="!Number.isInteger(testimonial.rating)" class="list-inline-item me-1 small">
                <BIconStarHalf style="height: 14px; width: 14px" class="text-warning small" />
              </li>
              <template v-if="testimonial.rating && testimonial.rating < 5">
                <li
                  v-for="(_val, idx) in new Array(5 - Math.ceil(testimonial.rating))"
                  :key="idx"
                  class="list-inline-item me-0 small"
                >
                  <BIconStar style="height: 14px; width: 14px" class="text-warning small" />
                </li>
              </template>
            </ul>
            <p class="heading-color fw-bold mb-0">
              {{ testimonial.user.firstName }} {{ testimonial.user.lastName }}
            </p>
          </div>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { BIconStarFill, BIconStarHalf, BIconStar } from 'bootstrap-icons-vue'
import type { TestimonialType } from '@/types'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>
