<template>
  <AccountLayout>
    <template #title> Order history </template>

    <Content />
  </AccountLayout>
</template>

<script lang="ts" setup>
import AccountLayout from '@/layouts/AccountLayout.vue'
import Content from '@/views/pages/accounts/Order/components/Content.vue'
</script>
