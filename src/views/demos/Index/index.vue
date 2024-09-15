<template>
  <div>
    <TopNavigationBar />
    <main>
      <Hero />

      <Client />

      <About />

      <Services />

      <Pricing />

      <Testimonial />

      <Cta />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import TopNavigationBar from '@/views/demos/Index/components/TopNavigationBar.vue'
import Hero from '@/views/demos/Index/components/Hero.vue'
import Client from '@/views/demos/Index/components/Client.vue'
import About from '@/views/demos/Index/components/About.vue'
import Services from '@/views/demos/Index/components/Services.vue'
import Pricing from '@/views/demos/Index/components/Pricing.vue'
import Testimonial from '@/views/demos/Index/components/Testimonial.vue'
import Cta from '@/views/demos/Index/components/Cta.vue'
import Footer from '@/views/demos/Index/components/Footer.vue'
</script>
