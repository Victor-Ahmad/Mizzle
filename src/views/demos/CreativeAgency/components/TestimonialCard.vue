<template>
  <p class="fs-5 text-white mb-0">{{ testimonial.comment }}</p>

  <hr class="border-white my-5" />
  <div class="d-sm-flex justify-content-between">
    <div class="d-sm-flex align-items-center">
      <div class="avatar flex-shrink-0">
        <img class="avatar-img rounded-circle" :src="testimonial.user.avatar" alt="avatar" />
      </div>
      <div class="ms-sm-2 mt-2 mt-sm-0">
        <h6 class="text-white mb-0">
          {{ testimonial.user.firstName }} {{ testimonial.user.lastName }}
        </h6>
        <p class="mb-0 small text-white">
          {{ testimonial.user.role }} of {{ testimonial.user.company?.name }}
        </p>
      </div>
    </div>

    <img :src="testimonial.user.company?.image" class="h-40px mt-3 mt-sm-0" alt="Client logo" />
  </div>
</template>

<script lang="ts" setup>
import type { TestimonialType } from '@/types'
import type { PropType } from 'vue'

defineProps({
  testimonial: {
    type: Object as PropType<TestimonialType>,
    required: true
  }
})
</script>
