<template>
  <section class="pt-6">
    <b-container>
      <b-row class="g-4 g-lg-7">
        <b-col cols="12">
          <b-card no-body class="bg-transparent">
            <b-row class="align-items-center g-4 g-lg-7">
              <b-col md="6">
                <img :src="stories05" class="card-img" alt="story-img" />
              </b-col>
              <b-col md="6">
                <b-card-body>
                  <img :src="client07" class="h-30px mb-4" alt="" />
                  <b-card-title class="mb-4"
                    ><router-link :to="{ name: 'customer.story-single' }" class="stretched-link"
                      >See why direct-to-consumer brands choose mizzle dor their email
                      efforts</router-link
                    ></b-card-title
                  >
                  <p class="mb-4">
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </p>
                  <a href="#" class="btn btn-dark mb-0"
                    >Read more
                    <BIconArrowRight />
                  </a>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>

        <b-col md="4" class="" v-for="(item, idx) in stories" :key="idx">
          <StoryCard :story="item" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { stories } from '@/views/pages/about/CustomerStory/data'
import { BIconArrowRight } from 'bootstrap-icons-vue'
import StoryCard from '@/views/pages/about/CustomerStory/components/StoryCard.vue'

import stories05 from '@/assets/images/stories/05.jpg'
import client07 from '@/assets/images/client/07.svg'
</script>
