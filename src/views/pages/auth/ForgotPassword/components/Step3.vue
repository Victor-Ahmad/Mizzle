<template>
  <div id="step-3" role="tabpanel" class="content fade" aria-labelledby="steppertrigger3">
    <LogoBox smallLogo />

    <h2 class="mb-1">Set new password</h2>
    <p class="mb-4">Must be at least 8 character</p>

    <PasswordInput name="password" v-model="newPassword" class="mb-4" />
    <PasswordInput
      label="Confirm Password"
      name="confirmPassword"
      v-model="confirmPassword"
      class="mb-4"
    />

    <div class="d-grid text-center">
      <button class="btn btn-dark mb-0" type="button">Reset Password</button>
    </div>

    <div class="mt-4 text-center">
      <router-link
        :to="{ name: 'auth.sign-up' }"
        class="text-primary-hover next-btn flex-centered gap-1"
      >
        <BIconArrowLeft /> Back to login
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import PasswordInput from '@/components/PasswordInput.vue'
import LogoBox from '@/components/topbar/LogoBox.vue'
import { BIconArrowLeft } from 'bootstrap-icons-vue'

const newPassword = ref()
const confirmPassword = ref()
</script>
