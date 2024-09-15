<template>
  <section
    class="position-relative"
    :style="`background-image:url(${backgroundImg}); background-position: center left; background-size: cover;`"
    data-bs-theme="dark"
  >
    <b-container class="position-relative z-index-2">
      <div class="inner-container-small m-0 mb-8">
        <h2 class="h1 fw-normal mb-0">Celebrating success with our proud award achievements</h2>
      </div>

      <b-row>
        <b-col md="10" xl="6">
          <b-row class="row-cols-1 row-cols-sm-2 g-4 g-md-5">
            <b-col>
              <h5>Awards</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item px-0">Honor / Unite agency / 2021</li>
                <li class="list-group-item px-0">Honor / Unite agency / 2020</li>
                <li class="list-group-item px-0">Honor / Med expert / 2020</li>
                <li class="list-group-item px-0">Honor / Frame digital / 2020</li>
                <li class="list-group-item px-0">Honor / Unite agency / 2019</li>
              </ul>
            </b-col>

            <b-col>
              <h5>CSS Design Award</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item px-0">Website of the day / Emporia / 2020</li>
                <li class="list-group-item px-0">Special kudos / to ARCR / 2021</li>
                <li class="list-group-item px-0">Special kudos / to ARCR / 2020</li>
                <li class="list-group-item px-0">Special kudos / to Reformat club / 2019</li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import backgroundImg from '@/assets/images/bg/14.jpg'
</script>
