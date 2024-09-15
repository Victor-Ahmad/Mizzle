<template>
  <section class="position-relative pt-md-8 pb-0">
    <b-container class="position-relative z-index-1 pt-4 pt-md-0">
      <b-row class="g-4 g-xxl-5">
        <b-col lg="8" xl="6">
          <div class="d-flex position-relative mb-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-dots pb-0 mb-0">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Help center</li>
              </ol>
            </nav>
          </div>

          <h1 class="mb-4 h2">How can we help you?</h1>

          <b-form class="bg-light border rounded-2 position-relative p-2">
            <div class="input-group">
              <b-form-input
                class="focus-shadow-none bg-light border-0 me-1"
                type="email"
                placeholder="Search for answer..."
              />
              <b-button variant="dark" class="rounded-2 mb-0">
                <BIconSearch class="mb-1" />
              </b-button>
            </div>
          </b-form>

          <ul class="list-inline small mb-0 mt-3">
            <li class="list-inline-item"><span class="text-secondary">Popular search: </span></li>
            <li class="list-inline-item ms-1">
              <a
                class="text-primary-hover heading-color text-decoration-underline mb-lg-0"
                href="#"
              >
                How can we help?</a
              >
            </li>
            <li class="list-inline-item ms-1">
              <a
                class="text-primary-hover heading-color text-decoration-underline mb-lg-0"
                href="#"
              >
                Installation Guide?
              </a>
            </li>
            <li class="list-inline-item ms-sm-1">
              <a
                class="text-primary-hover heading-color text-decoration-underline mb-lg-0"
                href="#"
              >
                How to view expired tickets?
              </a>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { BIconSearch } from 'bootstrap-icons-vue'
</script>
