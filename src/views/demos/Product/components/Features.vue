<template>
  <section class="pb-0">
    <b-container>
      <b-row class="g-0 bg-light rounded overflow-hidden">
        <b-col md="6">
          <b-card no-body class="card-body bg-transparent d-block p-4 p-md-5 p-lg-7 h-100">
            <h2 class="mb-4">With special audio that places sound all around you</h2>
            <p class="mb-4">
              Why end might ask civil again spoil. Dinner she our horses depend remember at children
              by reserved to vicinity.
            </p>
            <ul class="list-group list-group-borderless mb-4">
              <li
                class="list-group-item d-flex heading-color pb-0 icons-center"
                v-for="(feature, idx) in features"
                :key="idx"
              >
                <span>
                  <BIconPatchCheckFill class="text-primary me-2" />
                </span>
                {{ feature }}
              </li>
            </ul>
            <router-link to="" class="btn btn-dark mb-0">Click here for more detail</router-link>
          </b-card>
        </b-col>

        <b-col md="6">
          <div
            class="h-100 py-8 py-md-0"
            :style="`background:url(${about8}) no-repeat; background-size:cover;`"
          ></div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconPatchCheckFill } from 'bootstrap-icons-vue'

import about8 from '@/assets/images/about/08.jpg'

const features = [
  'Press once to play, pause or answer a phone call',
  'Press twice to skip forward',
  'Press three times to skip back',
  'Press and hold to switch between Active Noise Cancellation.',
  'Swipe up or down to adjust volume'
]
</script>
