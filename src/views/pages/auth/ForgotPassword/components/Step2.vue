<template>
  <div id="step-2" role="tabpanel" class="content fade" aria-labelledby="steppertrigger2">
    <LogoBox smallLogo />

    <h2 class="mb-1">Password reset</h2>
    <p class="mb-4">We sent a code to <span class="fw-bold">example@gmail.com</span></p>

    <div class="autotab d-flex justify-content-between gap-1 gap-sm-3 mb-3">
      <input type="text" maxlength="1" class="form-control text-center p-3" />
      <input type="text" maxlength="1" class="form-control text-center p-3" />
      <input type="text" maxlength="1" class="form-control text-center p-3" />
      <input type="text" maxlength="1" class="form-control text-center p-3" />
    </div>

    <div class="d-grid text-center">
      <button class="btn btn-dark mb-0" type="button">Continue</button>
      <p class="mb-0 mt-3">Didn't receive the code? <a href="#">Click to resend</a></p>
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
