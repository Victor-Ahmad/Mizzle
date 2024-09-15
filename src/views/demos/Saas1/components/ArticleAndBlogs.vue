<template>
  <section class="pt-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-sm-5">
        <h2 class="mb-0">Latest articles & blogs</h2>
      </div>

      <b-row class="g-4 g-md-6">
        <b-col md="6" lg="5">
          <article class="card bg-transparent">
            <img :src="blogImg" class="card-img" alt="Blog-img" />
            <b-card-body class="px-0">
              <b-card-title tag="h5">
                <router-link :to="{ name: 'blog.single.v2' }" class="stretched-link"
                  >Sleek and Responsive - Designing with Bootstrap and Mizzle
                </router-link>
              </b-card-title>
              <div class="d-flex justify-content-between align-items-center">
                <p class="mb-0">By Carolyn Ortiz</p>
                <a class="icon-link icon-link-hover me-1" href="#"
                  >Read more
                  <BIconArrowRight />
                </a>
              </div>
            </b-card-body>
          </article>
        </b-col>

        <b-col md="6" lg="7">
          <template v-for="(blog, idx) in blogs" :key="idx">
            <BlogCard
              :blog="blog"
              :class="idx != blogs.length - 1 ? 'py-5 border-bottom' : 'pt-5'"
            />
          </template>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import BlogCard from '@/views/demos/Saas1/components/BlogCard.vue'
import { blogs } from '@/views/demos/Saas1/data'
import { BIconArrowRight } from 'bootstrap-icons-vue'

import blogImg from '@/assets/images/blog/4by3/08.jpg'
</script>
