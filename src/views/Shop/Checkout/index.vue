<template>
  <ShopLayout>
    <MainTitle />

    <CheckoutDetail />
  </ShopLayout>
</template>

<script lang="ts" setup>
import ShopLayout from '@/layouts/ShopLayout.vue'
import CheckoutDetail from '@/views/Shop/Checkout/components/CheckoutDetail.vue'
import MainTitle from '@/views/Shop/Checkout/components/MainTitle.vue'
</script>
