<template>
  <b-form>
    <div class="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">
      <h6 class="rounded-0 mb-0">Email notification</h6>
      <b-button size="sm" class="btn-white border">Toggle all</b-button>
    </div>

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <p class="heading-color fw-bold mb-0">News and updates</p>
        <small>News about product and feature updates</small>
      </div>

      <div class="form-check form-switch form-check-md mb-0 ms-3">
        <b-form-checkbox switch id="checkPrivacy1" v-model="checked" />
      </div>
    </div>

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <p class="heading-color fw-bold mb-0">Tips and tutorials</p>
        <small>Tips on getting more out of unlimited</small>
      </div>

      <div class="form-check form-switch form-check-md mb-0 ms-3">
        <b-form-checkbox switch id="7" size="md" class="ms-3" v-model="checked" />
      </div>
    </div>

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <p class="heading-color fw-bold mb-0">User research</p>
        <small>Tips on getting more out of unlimited</small>
      </div>

      <div class="form-check form-switch form-check-md mb-0 ms-3">
        <b-form-checkbox switch id="4" />
      </div>
    </div>

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <p class="heading-color fw-bold mb-0">Comments</p>
        <small>Comments on your post and replies to comments</small>
      </div>

      <div class="form-check form-switch form-check-md mb-0 ms-3">
        <b-form-checkbox swicth id="5" />
      </div>
    </div>

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <p class="heading-color fw-bold mb-0">Reminders</p>
        <small>I would like to receive booking assistance reminders</small>
      </div>

      <div class="form-check form-switch form-check-md mb-0 ms-3">
        <b-form-checkbox swicth class="form-check-input" type="checkbox" id="checkPrivacy5" />
      </div>
    </div>
  </b-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
</script>
