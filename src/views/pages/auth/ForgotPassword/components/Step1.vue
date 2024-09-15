<template>
  <div id="step-1" role="tabpanel" class="content fade" aria-labelledby="steppertrigger1">
    <LogoBox smallLogo />

    <h2 class="mb-1">Forgot password</h2>
    <p class="mb-4">Enter the email address associated with an account.</p>

    <div class="input-floating-label form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
      <label for="floatingInput">Email address</label>
    </div>

    <div class="d-grid">
      <button class="btn btn-dark mb-0" type="button">Reset password</button>
    </div>

    <div class="mt-4 text-center">
      <router-link :to="{ name: 'auth.sign-up' }" class="text-primary-hover flex-centered gap-1">
        <BIconArrowLeft /> Back to login
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LogoBox from '@/components/topbar/LogoBox.vue'
import { BIconArrowLeft } from 'bootstrap-icons-vue'
</script>
