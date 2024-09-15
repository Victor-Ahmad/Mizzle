<template>
  <section class="pb-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-sm-5">
        <h2 class="mb-0">What people say about us</h2>
      </div>

      <b-row
        class="row-cols-sm-2 row-cols-lg-3 g-4 g-lg-5 demo-grid"
        data-isotope='{"layoutMode": "masonry"}'
      >
        <b-col v-for="(testimonial, idx) in testimonials" :key="idx" class="demo-grid-item">
          <TestimonialCard :testimonial="testimonial" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { testimonials } from '@/views/demos/MobileShowcase/data'
import Isotope from 'isotope-layout'
import { onMounted } from 'vue'
import TestimonialCard from '@/views/demos/MobileShowcase/components/TestimonialCard.vue'

onMounted(() => {
  let grid = document.querySelector<HTMLElement>('.demo-grid')
  if (grid) {
    let iso = new Isotope(grid, {
      itemSelector: '.demo-grid-item',
      percentPosition: true,
      layoutMode: 'masonry'
    })

    setTimeout(() => {
      iso.arrange({})
    }, 100)
  }
})
</script>
