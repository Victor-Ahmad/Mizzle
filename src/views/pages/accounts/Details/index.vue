<template>
  <AccountLayout>
    <template #title> My profile </template>

    <Content />
  </AccountLayout>
</template>

<script lang="ts" setup>
import AccountLayout from '@/layouts/AccountLayout.vue'
import Content from '@/views/pages/accounts/Details/components/Content.vue'
</script>
