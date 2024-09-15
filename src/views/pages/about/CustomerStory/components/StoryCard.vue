<template>
  <b-card no-body class="card-img-scale bg-transparent overflow-hidden">
    <div class="card-img-scale-wrapper rounded">
      <img :src="story.avatar" class="card-img" alt="story-img" />
    </div>

    <b-card-body class="px-0">
      <img :src="story.company?.image" class="h-30px mb-3" alt="" />
      <b-card-title tag="h6" class="mb-3">{{ story.title }}</b-card-title>
      <router-link
        :to="{ name: 'customer.story-single' }"
        class="icon-link icon-link-hover stretched-link"
        >Read full story
        <BIconArrowRight class="bi" />
      </router-link>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { StorieType } from '@/views/pages/about/CustomerStory/data'
import { BIconArrowRight } from 'bootstrap-icons-vue'

defineProps({
  story: {
    type: Object as PropType<StorieType>,
    required: true
  }
})
</script>
