<template>
  <div class="d-flex justify-content-between align-items-center mb-5 mb-sm-6">
    <h1 class="h3 mb-0">{{ title }}</h1>
    <b-button variant="primary" class="d-lg-none flex-shrink-0 ms-2" @click="toggleOffcanvas">
      <font-awesome-icon :icon="faSlidersH" /> Menu
    </b-button>
  </div>
</template>
<script setup lang="ts">
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'
defineProps(['toggleOffcanvas', 'title'])
</script>
