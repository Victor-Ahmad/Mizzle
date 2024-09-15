<template>
  <BlogLayout>
    <Hero />

    <Blogs />
  </BlogLayout>
</template>

<script lang="ts" setup>
import BlogLayout from '@/layouts/BlogLayout.vue'
import Hero from '@/views/Blog/Grid/components/Hero.vue'
import Blogs from '@/views/Blog/Grid/components/Blogs.vue'
</script>
