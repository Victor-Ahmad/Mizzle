<template>
  <EmailNotification />

  <div class="text-center my-5">
    <BIconThreeDots />
  </div>

  <GeneralPermission />
</template>

<script setup lang="ts">
import EmailNotification from '@/views/pages/accounts/Notification/components/EmailNotification.vue'
import GeneralPermission from '@/views/pages/accounts/Notification/components/GeneralPermission.vue'
import { BIconThreeDots } from 'bootstrap-icons-vue'
</script>
