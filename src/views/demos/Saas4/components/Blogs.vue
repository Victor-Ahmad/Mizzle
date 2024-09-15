<template>
  <Section>
    <b-container>
      <b-row class="align-items-center g-4 mb-5">
        <b-col md="6">
          <h2 class="mb-0">Take a look at the latest articles & blogs</h2>
        </b-col>
        <b-col md="5" class="ms-auto text-sm-end">
          <router-link :to="{ name: 'blog.grid' }" class="btn btn-light btn-lg mb-0"
            >View all blogs</router-link
          >
        </b-col>
      </b-row>

      <b-row class="g-4 g-xl-5">
        <b-col md="4" v-for="(blog, idx) in blogs" :key="idx">
          <BlogCard :blog="blog" />
        </b-col>
      </b-row>
    </b-container>
  </Section>
</template>

<script lang="ts" setup>
import { blogs } from '@/views/demos/Saas4/data'
import BlogCard from '@/views/demos/Saas4/components/BlogCard.vue'
</script>
