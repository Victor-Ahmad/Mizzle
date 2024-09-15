<template>
  <section>
    <b-container>
      <div class="inner-container text-center mb-4 mb-sm-6">
        <h2 class="mb-0">Our news & articles</h2>
      </div>

      <b-row class="g-4 g-lg-5">
        <b-col md="6" v-for="(blog, idx) in blogs" :key="idx">
          <BlogCard :blog="blog" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import BlogCard from '@/views/demos/DesignAgency/components/BlogCard.vue'
import { blogs } from '@/views/demos/DesignAgency/data'
</script>
