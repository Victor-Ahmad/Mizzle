<template>
  <ShopLayout>
    <Hero />

    <Specification />

    <RatingAndReview />

    <SimilarProducts />
  </ShopLayout>
</template>

<script lang="ts" setup>
import Hero from '@/views/Shop/Single/components/Hero.vue'
import Specification from '@/views/Shop/Single/components/Specification.vue'
import RatingAndReview from '@/views/Shop/Single/components/RatingAndReview.vue'
import SimilarProducts from '@/views/Shop/Single/components/SimilarProducts.vue'
import ShopLayout from '@/layouts/ShopLayout.vue'
</script>
