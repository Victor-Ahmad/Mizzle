<template>
  <b-form>
    <div class="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">
      <h6 class="rounded-0 mb-0">General Permission</h6>
      <b-button size="sm" class="btn-white border">Toggle all</b-button>
    </div>

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <p class="heading-color fw-bold mb-0">Notify on updates and activity</p>
        <small>You'll be notified when anyone shares a report or invite you to a projects</small>
      </div>

      <div class="form-check form-switch form-check-md mb-0 ms-3">
        <b-form-checkbox switch id="checkPrivacy6" v-model="checked" />
      </div>
    </div>

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <p class="heading-color fw-bold mb-0">Send weekly digest</p>
        <small>A weekly update on changes in theme statement and more</small>
      </div>

      <div class="form-check form-switch form-check-md mb-0 ms-3">
        <b-form-checkbox swicth id="checkPrivacy7" v-model="checked" />
      </div>
    </div>

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <p class="heading-color fw-bold mb-0">Collaborators</p>
        <small>I would like to receive booking assistance reminders</small>
      </div>

      <div class="form-check form-switch form-check-md mb-0 ms-3">
        <b-form-checkbox switch id="6" />
      </div>
    </div>
  </b-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
</script>
