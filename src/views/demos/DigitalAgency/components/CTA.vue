<template>
  <section class="position-relative z-index-2 pt-0">
    <b-container class="position-relative">
      <div
        class="bg-dark rounded position-relative overflow-hidden p-4 p-sm-6"
        :style="`background:url(${backgroundImg}) no-repeat; background-size:cover; background-position:center;`"
      >
        <b-row class="align-items-center position-relative">
          <b-col md="6" xl="7" class="mb-4 mb-xl-0">
            <h2 class="text-white">Subscribe to our newsletter</h2>
            <p class="text-white mb-0">
              We've always worked very hard to give our customers the best experience.
            </p>
          </b-col>

          <b-form class="col-md-6 col-xl-4 ms-xl-auto">
            <b-form-input class="mb-3" type="email" placeholder="Enter your email address" />
            <router-link to="#" class="btn btn-primary mb-0 d-grid">Subscribe now!</router-link>
          </b-form>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import backgroundImg from '@/assets/images/bg/15.jpg'
</script>
