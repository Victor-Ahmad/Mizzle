<template>
  <section class="pt-lg-8">
    <b-container class="position-relative pt-4 pt-lg-0">
      <b-row class="align-items-center">
        <b-col lg="5" class="mb-5 mb-md-0">
          <h1 class="mb-4">Unleash the Power of Our Features</h1>
          <p class="mb-4">
            This structure maintains a focus on the strength and potential of your SAAS features
            while providing an invitation to explore them further.
          </p>
          <router-link :to="{ name: 'saas.feature-single' }" class="btn btn-lg btn-dark mb-0"
            >Start Exploring Now</router-link
          >
        </b-col>

        <b-col lg="6" class="ms-auto">
          <div class="position-relative pe-4 pe-sm-6">
            <div
              class="bg-dark rounded position-absolute top-0 end-0 w-50 h-100"
              style="background-position: center left; background-size: cover"
              :style="{ backgroundImage: `url('${bgImg}')` }"
            ></div>

            <img
              :src="saasBg"
              class="rounded-4 border border-dark border-5 my-4 my-sm-6 position-relative"
              alt="saas-img"
            />
            <b-col cols="2" class="position-absolute bottom-0 start-0 ms-lg-n7">
              <img :src="saasDecoration01" class="shadow rounded-4" alt="decoration-img" />
            </b-col>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bgImg from '@/assets/images/elements/bg-pattern-2.png'
import saasBg from '@/assets/images/bg/saas-bg.jpg'
import saasDecoration01 from '@/assets/images/elements/saas-decoration/01.png'
</script>
