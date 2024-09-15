<template>
  <section class="pt-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-sm-6">
        <h2>A squad of talented members</h2>
        <p class="mb-0">
          We are a close-knit squad of exceptionally talented individuals who are passionate about
          all things digital.
        </p>
      </div>
      <b-row
        class="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-4 justify-content-center"
      >
        <b-col v-for="(item, idx) in team" :key="idx">
          <b-card no-body class="card-hover-shadow bg-transparent text-center p-4">
            <div class="avatar avatar-xxl mx-auto flex-shrink-0 mb-3">
              <img class="avatar-img rounded-circle" :src="item.avatar" alt="avatar" />
            </div>
            <h6 class="mb-1">
              <a href="#">{{ item.username }}</a>
            </h6>
            <small>{{ item.role }}</small>
            <ul class="list-inline mb-0 mt-3 d-flex justify-content-center gap-1">
              <li class="list-inline-item">
                <a class="btn btn-xs btn-icon btn-light" href="#">
                  <font-awesome-icon :icon="faFacebookF" />
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn btn-xs btn-icon btn-light" href="#">
                  <font-awesome-icon :icon="faInstagram" />
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn btn-xs btn-icon btn-light" href="#">
                  <font-awesome-icon :icon="faTwitter" />
                </a>
              </li>
            </ul>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { team } from '@/views/pages/about/AboutV1/data'
import { faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'
</script>
