<template>
  <div
    id="step-4"
    role="tabpanel"
    class="content fade text-center"
    aria-labelledby="steppertrigger4"
  >
    <span class="display-2 text-success">
      <BIconCheckCircle class="mb-2" />
    </span>
    <h2 class="mb-1 mt-4">Password changed!</h2>
    <p class="mb-4">Your password has been changed successfully.</p>

    <div class="d-grid text-center">
      <router-link :to="{ name: 'demos.classic' }" class="btn btn-dark mb-0"
        >Back to main page</router-link
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BIconCheckCircle } from 'bootstrap-icons-vue'
</script>
