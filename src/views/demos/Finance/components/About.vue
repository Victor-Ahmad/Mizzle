<template>
  <Section class="pb-0">
    <b-container>
      <b-row class="align-items-center">
        <b-col lg="6" xl="5">
          <div class="position-relative mb-5 mb-lg-0">
            <img :src="about19" class="rounded" alt="" />
            <div
              class="bg-body rounded-pill d-flex align-items-center gap-3 position-absolute top-0 start-0 p-2 m-4"
            >
              <div class="avatar flex-shrink-0">
                <img class="avatar-img rounded-circle" :src="avatar8" alt="avatar" />
              </div>
              <div class="me-3">
                <h6 class="mb-0">Dennis Barrett</h6>
                <p class="mb-0 small">Ceo and manager of Blogzine</p>
              </div>
            </div>
          </div>
        </b-col>

        <b-col lg="6" class="ms-auto">
          <h2 class="mb-4">Empowering financial futures together</h2>
          <p class="mb-4">
            With a commitment to integrity, expertise, and personalized service, we strive to build
            lasting relationships based on trust and mutual success.
          </p>
          <router-link :to="{ name: 'about.v1' }" class="btn btn-dark mb-0"
            >Know more about us</router-link
          >
          <hr class="my-5 my-xl-7" />

          <div class="d-flex flex-wrap gap-4 gap-xl-7">
            <div>
              <h3 class="mb-0">99<span class="text-primary">%</span></h3>
              <p>Client satisfaction</p>
            </div>

            <div>
              <h3 class="mb-0">1.5<span class="text-primary">x</span></h3>
              <p>Company growth</p>
            </div>

            <div>
              <h3 class="mb-0">120<span class="text-primary">+</span></h3>
              <p>Weekly new users</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </Section>
</template>

<script lang="ts" setup>
import about19 from '@/assets/images/about/19.jpg'
import avatar8 from '@/assets/images/avatar/08.jpg'
</script>
