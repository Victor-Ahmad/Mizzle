<template>
  <section>
    <b-container>
      <div class="bg-light rounded position-relative overflow-hidden p-4 p-sm-6">
        <div class="position-absolute end-0 bottom-0 me-5">
          <img :src="ctaVectorImg" class="h-200px" alt="vector-img" />
        </div>

        <b-row class="g-4">
          <b-col lg="5">
            <h2 class="mb-4">Anywhere, Any Time, Any Platform</h2>
            <p class="mb-4">
              Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by
              oh twenty direct me so.
            </p>
            <b-row class="g-4 mb-4 mb-lg-0">
              <b-col cols="6" sm="4">
                <router-link to="">
                  <img :src="googlePlay" class="btn-transition" alt="google-store" />
                </router-link>
              </b-col>
              <b-col cols="6" sm="4">
                <router-link to="">
                  <img :src="appStore" class="btn-transition" alt="app-store" />
                </router-link>
              </b-col>
            </b-row>
          </b-col>

          <b-col lg="5">
            <div
              class="iphone-x iphone-x-small ms-lg-auto m-0 mb-n9"
              :style="`background: url(${placeholderImg6}); background-size: 100%; width: 280px; height:430px`"
            >
              <i></i>
              <b style="left: 6%"></b>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import ctaVectorImg from '@/assets/images/elements/cta-vector.svg'
import googlePlay from '@/assets/images/elements/google-play.svg'
import appStore from '@/assets/images/elements/app-store.svg'
import placeholderImg6 from '@/assets/images/mokeup/app-placeholder6.jpg'
</script>
