<template>
  <section class="pb-0">
    <b-container>
      <div
        class="d-sm-flex justify-content-between align-items-center text-center text-sm-start mb-4 mb-md-6"
      >
        <h2 class="mb-3 mb-sm-0">Our creative showcase</h2>
        <router-link to="#" class="btn btn-lg btn-dark mb-0">View all projects</router-link>
      </div>

      <b-row class="g-4">
        <b-col sm="6" md="4" v-for="(project, idx) in projects" :key="idx">
          <ProjectCard :project="project" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { projects } from '@/views/demos/DesignAgency/data'
import ProjectCard from '@/views/demos/DesignAgency/components/ProjectCard.vue'
</script>
