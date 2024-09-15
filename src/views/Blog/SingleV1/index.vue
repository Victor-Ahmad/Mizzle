<template>
  <BlogLayout>
    <BlogDetails />

    <RelatedBlogs />
  </BlogLayout>
</template>

<script lang="ts" setup>
import BlogLayout from '@/layouts/BlogLayout.vue'
import BlogDetails from '@/views/Blog/SingleV1/components/BlogDetails.vue'
import RelatedBlogs from '@/views/Blog/SingleV1/components/RelatedBlogs.vue'
</script>
