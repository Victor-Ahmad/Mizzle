<template>
  <section class="pb-0">
    <b-container>
      <b-row class="align-items-center g-4 mb-4 mb-sm-5">
        <b-col md="6" lg="5">
          <h2 class="mb-0">Our latest projects</h2>
        </b-col>
        <b-col md="6" lg="4" class="ms-auto text-md-end">
          <router-link :to="{ name: 'portfolio.showcase' }" class="btn btn-lg btn-dark mb-0"
            >View all projects
          </router-link>
        </b-col>
      </b-row>

      <b-row class="g-4 g-md-5">
        <b-col lg="6" v-for="(project, idx) in projects" :key="idx">
          <ProjectCard :project="project" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import ProjectCard from '@/views/demos/DigitalAgency/components/ProjectCard.vue'
import { projects } from '@/views/demos/DigitalAgency/data'
</script>
