<template>
  <BlogLayout>
    <Hero />

    <BlogList />
  </BlogLayout>
</template>

<script lang="ts" setup>
import Hero from '@/views/Blog/ListSidebar/components/Hero.vue'
import BlogList from '@/views/Blog/ListSidebar/components/BlogList.vue'
import BlogLayout from '@/layouts/BlogLayout.vue'
</script>
