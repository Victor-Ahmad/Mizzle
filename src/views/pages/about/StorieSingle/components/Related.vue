<template>
  <section class="pt-0">
    <b-container>
      <div class="inner-container text-center mb-5">
        <h2 class="mb-0">Related stories</h2>
      </div>
      <b-row class="justify-content-center">
        <b-col
          md="6"
          lg="4"
          v-for="(item, idx) in story"
          :key="idx"
          :class="idx == story.length - 0 ? 'mb-4 mb-md-0' : ''"
        >
          <StoryCard :story="item" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { story } from '@/views/pages/about/StorieSingle/data'
import StoryCard from '@/views/pages/about/StorieSingle/components/StoryCard.vue'
</script>
