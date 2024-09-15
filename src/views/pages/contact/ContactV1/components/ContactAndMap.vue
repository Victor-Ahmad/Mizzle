<template>
  <Section class="py-0">
    <b-container>
      <b-row class="row-cols-1 row-cols-lg-3 g-4">
        <b-col v-for="(item, idx) in address" :key="idx">
          <b-card no-body class="card-body bg-light border p-sm-5">
            <div class="mb-4">
              <component :is="item.icon" class="fa-xl text-primary" />
            </div>

            <h6 :class="idx >= address.length - 2 ? 'mb-3' : 'mb-4'">{{ item.name }}</h6>

            <p v-if="!item.image">{{ item.description }}</p>
            <div v-if="item.image" class="d-flex align-items-center mb-2">
              <div class="avatar avatar-xxs me-2">
                <img class="avatar-img rounded-circle" :src="item.image" alt="avatar" />
              </div>
              <span class="heading-color fw-semibold mb-0">US office:</span>
            </div>
            <address v-if="item.image" class="mb-0">
              1421 Coburn Hollow Road Metamora, Near Center Point, IL 61548.
            </address>
            <a href="#" class="heading-color text-primary-hover text-decoration-underline mb-0">{{
              item.emailornum
            }}</a>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <iframe
      class="w-100 h-200px h-lg-400px grayscale d-block mt-8"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
      style="margin-bottom: -5px"
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  </Section>
</template>

<script setup lang="ts">
import { address } from '@/views/pages/contact/data'
</script>
