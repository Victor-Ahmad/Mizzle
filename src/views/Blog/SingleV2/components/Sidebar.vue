<template>
  <b-col lg="4" class="ps-xl-6">
    <b-card no-body class="d-inline-block bg-light border p-4">
      <div class="d-flex align-items-center mb-3">
        <div class="avatar avatar-lg flex-shrink-0 me-2">
          <img class="avatar-img rounded-circle" :src="avatar9" alt="avatar" />
        </div>
        <div class="ms-2">
          <h6 class="mb-0"><a href="#">Louis Crawford</a></h6>
          <small>Content creator</small>
        </div>
      </div>
      <p>
        Incorporating gratitude into our daily where we write down three things we are grateful for
        each day.
      </p>

      <button class="btn btn-sm btn-outline-primary mb-0">Follow author</button>
    </b-card>

    <div class="align-items-center mt-5">
      <h6 class="mb-3 d-inline-block">Related post:</h6>

      <ul class="list-group list-group-flush">
        <li class="list-group-item ps-0" v-for="(post, idx) in relatedPost" :key="idx">
          <a href="#" class="heading-color text-primary-hover fw-semibold">{{ post }}</a>
        </li>
      </ul>
    </div>

    <div class="align-items-center mt-5">
      <h6 class="mb-3 d-inline-block">Popular Tags:</h6>
      <ul class="list-inline mb-0">
        <li class="list-inline-item" v-for="(tag, idx) in popularTags" :key="idx">
          <a class="btn btn-light btn-sm" href="#">{{ tag }}</a>
        </li>
      </ul>
    </div>
  </b-col>
</template>

<script lang="ts" setup>
import avatar9 from '@/assets/images/avatar/09.jpg'

const popularTags = [
  'blog',
  'business',
  'bootstrap',
  'data science',
  'deep learning',
  'Adventure',
  'Community',
  'Tutorials',
  'Interview',
  'Photography',
  'Classic'
]

const relatedPost = [
  '5 investment doubts you should clarify',
  'Mastering Responsive Web Design with Bootstrap',
  'Effortless Web Development with Mizzle',
  'Sleek and Responsive - Designing with Bootstrap and Mizzle',
  'Ten questions you should answer truthfully.'
]
</script>
