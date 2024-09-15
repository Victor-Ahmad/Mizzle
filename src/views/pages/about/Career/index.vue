<template>
  <BlogLayout>
    <Hero />

    <Counter />

    <Feature />

    <Position />

    <Cta />
  </BlogLayout>
</template>

<script lang="ts" setup>
import Counter from '@/views/pages/about/Career/components/Counter.vue'
import Hero from '@/views/pages/about/Career/components/Hero.vue'
import Feature from '@/views/pages/about/Career/components/Feature.vue'
import Position from '@/views/pages/about/Career/components/Position.vue'
import Cta from '@/views/pages/about/Career/components/Cta.vue'
import BlogLayout from '@/layouts/BlogLayout.vue'
</script>
