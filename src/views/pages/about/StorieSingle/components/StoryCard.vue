<template>
  <b-card no-body class="card-img-scale bg-transparent overflow-hidden">
    <div class="card-img-scale-wrapper rounded">
      <img :src="story.logo" class="card-img" alt="story-img" />
    </div>

    <b-card-body class="px-0">
      <img :src="story.image" class="h-30px mb-3" alt="" />
      <h6 class="card-title mb-3">Stories of Trust, Transformation, and Triumph</h6>
      <a class="icon-link icon-link-hover stretched-link" href="#"
        >Read full story
        <BIconArrowRight />
      </a>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { StoryType } from '@/views/pages/about/StorieSingle/data'
import { BIconArrowRight } from 'bootstrap-icons-vue'

defineProps({
  story: {
    type: Object as PropType<StoryType>,
    required: true
  }
})
</script>
