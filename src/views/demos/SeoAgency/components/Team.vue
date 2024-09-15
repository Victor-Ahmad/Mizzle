<template>
  <section class="pb-0">
    <b-container>
      <div class="inner-container">
        <h2 class="text-center mb-4 mb-sm-5">Our leadership</h2>

        <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-3 g-0 justify-content-center">
          <b-col v-for="(member, idx) in teamMembers" :key="idx">
            <TeamMemberCard :member="member" />
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import TeamMemberCard from '@/views/demos/SeoAgency/components/TeamMemberCard.vue'
import { teamMembers } from '@/views/demos/SeoAgency/data'
</script>
