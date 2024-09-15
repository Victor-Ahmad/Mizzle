<template>
  <b-form>
    <b-card no-body class="bg-transparent p-0">
      <b-card-header class="bg-transparent border-bottom px-0">
        <h6 class="mb-0">Update password</h6>
      </b-card-header>

      <b-card-body class="px-0">
        <div class="mb-3">
          <label class="form-label">Current password</label>
          <input class="form-control" type="password" placeholder="Enter current password" />
        </div>

        <div class="mb-3">
          <label class="form-label">Enter new password</label>

          <div class="position-relative">
            <input
              type="password"
              class="form-control fakepassword pe-6"
              id="psw-input"
              placeholder="Enter your password"
            />
            <span class="position-absolute top-50 end-0 translate-middle-y p-0 me-2">
              <font-awesome-icon
                v-if="showPassword"
                :icon="faEye"
                @click="setShowPassword"
                class="cursor-pointer p-2"
              />
              <font-awesome-icon
                v-else
                :icon="faEyeSlash"
                @click="setShowPassword"
                class="cursor-pointer p-2"
              />
            </span>
          </div>
        </div>

        <div>
          <label class="form-label">Confirm new password</label>
          <input class="form-control" type="password" placeholder="Enter new password" />
        </div>

        <div class="d-flex justify-content-end mt-4">
          <button type="button" class="btn btn-primary mb-0">Change password</button>
        </div>
      </b-card-body>
    </b-card>
  </b-form>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

const showPassword = ref<boolean>(false)

const setShowPassword = () => {
  return (showPassword.value = !showPassword.value)
}
</script>
