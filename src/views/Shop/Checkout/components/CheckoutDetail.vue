<template>
  <section class="pt-0">
    <b-container>
      <b-row>
        <b-col lg="8" class="mb-6 mb-lg-0">
          <PersonalInfo />

          <PaymentOptions />
        </b-col>

        <b-col lg="4" class="ps-xl-6">
          <PromoCode />

          <ProductDetail />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import PersonalInfo from '@/views/Shop/Checkout/components/PersonalInfo.vue'
import PaymentOptions from '@/views/Shop/Checkout/components/PaymentOptions.vue'
import PromoCode from '@/views/Shop/Checkout/components/PromoCode.vue'
import ProductDetail from '@/views/Shop/Checkout/components/ProductDetail.vue'
</script>
