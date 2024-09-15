<template>
  <ShopLayout>
    <MainTitle />

    <CartDetail />

    <FAQs />
  </ShopLayout>
</template>

<script lang="ts" setup>
import MainTitle from '@/views/Shop/Cart/components/MainTitle.vue'
import CartDetail from '@/views/Shop/Cart/components/CartDetail.vue'
import FAQs from '@/views/Shop/Cart/components/FAQs.vue'
import ShopLayout from '@/layouts/ShopLayout.vue'
</script>
