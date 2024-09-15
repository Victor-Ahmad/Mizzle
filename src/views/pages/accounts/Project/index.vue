<template>
  <AccountLayout>
    <template #title> My projects </template>

    <Content />
  </AccountLayout>
</template>

<script lang="ts" setup>
import AccountLayout from '@/layouts/AccountLayout.vue'
import Content from '@/views/pages/accounts/Project/components/Content.vue'
</script>
