<template>
  <a href="#" class="card card-img-scale overflow-hidden">
    <img :src="blog.image" class="img-scale" alt="category-img" />
    <div class="card-img-overlay">
      <div class="badge text-bg-dark">{{ blog.category }}</div>
    </div>
  </a>
</template>

<script lang="ts" setup>
import type { BlogType } from '@/types'
import type { PropType } from 'vue'

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true
  }
})
</script>
