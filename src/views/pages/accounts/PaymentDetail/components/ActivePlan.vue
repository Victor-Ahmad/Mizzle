<template>
  <b-card no-body class="border">
    <b-card-header class="border-bottom d-sm-flex justify-content-between align-items-center">
      <h5 class="mb-2 mb-sm-0">Active Plan</h5>
      <a href="#" class="btn btn-light mb-0"> <BIconFilePdf class="me-2" />Download Pdf </a>
    </b-card-header>

    <b-card-body>
      <div class="d-sm-flex justify-content-between align-items-center">
        <div class="mb-3 mb-sm-0">
          <div class="icon-lg bg-light rounded-circle mb-3 flex-centered">
            <BIconRocketTakeoffFill class="fa-lg lh-1 heading-color" />
          </div>
          <h6>Standard plan</h6>
          <p class="mb-0">Valid till: <span class="fw-semibold">May 2023 - April 2024</span></p>
        </div>

        <div>
          <h6 class="h2 mb-1">{{ currency }}199</h6>
          <span>Total per year</span>
        </div>
      </div>

      <div class="mt-5">
        <div class="d-sm-flex justify-content-between mb-3">
          <p class="heading-color fw-bold mb-2 mb-sm-0">Storage usage</p>
          <p class="mb-0"><span class="heading-color fw-bold">5.23 GB</span> used of 10 GB</p>
        </div>

        <b-progress class="mb-2" height="10px">
          <b-progress-bar class="rounded-end-0" :value="45"></b-progress-bar>
          <b-progress-bar
            variant="primary"
            :value="20"
            class="rounded-0 bg-opacity-25"
          ></b-progress-bar>
        </b-progress>

        <ul class="list-inline d-sm-flex gap-2">
          <li class="list-inline-item heading-color">
            <font-awesome-icon :icon="faCircle" class="fa-2xs text-primary me-2" />Drive one
          </li>
          <li class="list-inline-item heading-color">
            <font-awesome-icon :icon="faCircle" class="fa-2xs text-primary opacity-25 me-2" />Drive
            two
          </li>
          <li class="list-inline-item heading-color">
            <font-awesome-icon
              :icon="faCircle"
              class="fa-2xs text-body-secondary opacity-50 me-2"
            />Empty drive
          </li>
        </ul>
      </div>

      <div class="d-grid d-sm-flex justify-content-sm-end gap-2 gap-sm-3 mt-4">
        <a href="#" class="btn btn-danger-soft mb-0">Cancel subscription</a>
        <a href="#" class="btn btn-dark mb-0">Update plan</a>
      </div>
    </b-card-body>
  </b-card>

  <div class="text-center my-5">
    <BIconThreeDots />
  </div>
</template>

<script setup lang="ts">
import { currency } from '@/helpers'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { BIconFilePdf, BIconRocketTakeoffFill, BIconThreeDots } from 'bootstrap-icons-vue'
</script>
