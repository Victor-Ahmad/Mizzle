<template>
  <section>
    <b-container>
      <b-row class="g-4 g-sm-6">
        <b-col sm="6" md="4" xl="3" v-for="(item, idx) in team" :key="idx">
          <TeamCard :team="item" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { team } from '@/views/pages/about/Team/data'
import TeamCard from '@/views/pages/about/Team/components/TeamCard.vue'
</script>
