<template>
  <AccountLayout>
    <template #title> Payment details </template>

    <ActivePlan />

    <PaymentMethod />

    <TransitionHistory />
  </AccountLayout>
</template>

<script lang="ts" setup>
import AccountLayout from '@/layouts/AccountLayout.vue'
import ActivePlan from '@/views/pages/accounts/PaymentDetail/components/ActivePlan.vue'
import PaymentMethod from '@/views/pages/accounts/PaymentDetail/components/PaymentMethod.vue'
import TransitionHistory from '@/views/pages/accounts/PaymentDetail/components/TransitionHistory.vue'
</script>
