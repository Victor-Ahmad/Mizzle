<template>
  <AuthLayuot>
    <b-col sm="10" lg="5" class="d-flex m-auto vh-100">
      <b-row class="w-100 m-auto">
        <b-col lg="10" class="my-5 m-auto">
          <LogoBox smallLogo />
          <h2 class="mb-0">
            Create your
            <span class="position-relative"
              >account
              <span
                class="position-absolute top-50 start-50 translate-middle z-index-n1 ms-n2 mt-2 d-none d-sm-block"
              >
                <svg
                  width="150.1px"
                  height="20.7px"
                  viewBox="0 0 150.1 20.7"
                  style="enable-background: new 0 0 150.1 20.7"
                  xml:space="preserve"
                >
                  <path
                    class="fill-primary"
                    d="M10.7,12.2c-0.8,0.2-1.7,0.4-2.3,1.1C9.3,13,10.1,12.9,10.7,12.2 M63.6,1.9c3.3,0.3,6.7,0.1,10,0.2 c4.8,0.1,9.6,0.2,14.4,0.7c2.9,0.3,5.9,0.3,8.8,0.8c6.9,1,13.7,1.8,20.6,3.1c5.5,1.1,11,2.1,16.4,3.3c4.8,1.1,9.5,2.6,14.3,4 c0.7,0.2,1.3,0.5,1.7,1c-0.3,0.6-0.8-0.2-1.1,0.3c0.3,0.4,1.6,0.2,1.2,1c-0.3,0.6-1.2,1.1-2.2,1c-1.4-0.2-2.6-1-4-1.3 c-6.1-1.4-12.2-3-18.4-4c-3.8-0.6-7.6-1.4-11.5-1.7c-2.1-0.2-4.1-1-6.3-0.9c-0.5,0-1-0.3-1.6,0.2c-0.2,0.2-1,0.5-1.1-0.5 c0-0.2-0.4-0.1-0.6-0.2c-2.5-0.2-5-0.8-7.5-0.7c-2.4,0.1-4.8-0.3-7.2-0.3c-1.7,0-3.3-0.8-5.1-0.7c-0.7,0-1.5-0.1-2.2,0.2 c-0.3,0-0.5-0.1-0.8-0.1c-1.8-0.3-3.7-0.5-5.5-0.2c-1.9-0.4-3.9-0.4-5.8-0.1C68.1,7,66.1,6.8,64,7.4c-0.9,0.3-1.8,0.1-2.8,0.2 c-3.1,0.3-6.3,0.6-9.4,0.8c-0.6,0-1.2,0.3-1.8-0.2c-1.6-0.2-3.2,0-4.8,0.5c-1.6,0.5-3.2,0.4-4.8,0.5c-2.1,0.2-4.1,0.4-6,1.2 c-1.6,0.7-3.5,0.5-5.2,0.9c-3.8,0.9-7.7,1.6-11.2,3.2c-3.8,1.7-8,2.4-11.7,4.4c-0.9,0.5-1.7,1.3-2.8,1.6c-1.1,0.3-2.8-0.3-3.4-1.5 c-0.5-1-0.3-2.1,0.6-2.9c1.7-1.4,3.5-2.5,5.4-3.5c8.2-4.3,16.9-7,25.9-9c8.8-1.9,17.7-3,26.7-3.5C63.5-0.1,68.1,0,72.6,0 c4.7,0,9.4,0.1,14.1,0.5c4.2,0.4,8.3,0.9,12.5,1.4c4.9,0.6,9.7,1.3,14.5,2.1c11.6,2.1,23.1,4.4,34.2,8.4c0.7,0.3,1.7,0.1,2.2,1.1 c-0.9,0.4-1.7,0.1-2.4-0.1c-5.7-2-11.6-3.5-17.4-4.9c-8.7-2.1-17.5-3.3-26.3-4.7c-4.2-0.7-8.6-0.9-12.8-1.5 c-5.6-0.7-11.3-0.9-16.9-1.1c-3.4-0.1-6.8-0.1-10.1,0.3C63.9,1.6,63.7,1.7,63.6,1.9c-0.6-0.5-1.2-0.2-1.9-0.2 C56.9,1.9,52,2.3,47.1,2.8C44.1,3.1,41.1,3.7,38,4c-3.2,0.4-6.4,1.2-9.5,2.1c-0.9,0.2-2.1,0-2.7,1.1c-1.4-0.5-2.5,0.4-3.6,1 c1.2-0.2,2.5-0.4,3.6-1c0.3,0,0.7,0,1-0.1c9.1-2.3,18.4-3.7,27.7-4.4C57.6,2.4,60.6,2.2,63.6,1.9"
                  />
                </svg>
              </span>
            </span>
          </h2>
          <p class="mb-0">Let's get started with your 30 days free trial</p>

          <b-row class="mt-5">
            <b-col xxl="6" class="d-grid">
              <a href="#" class="btn border bg-light mb-2 mb-xxl-0 flex-centered">
                <v-icon
                  name="fc-google"
                  scale="1"
                  class="text-google-icon me-2"
                  height="18"
                  width="18"
                />Signup with Google</a
              >
            </b-col>
            <b-col xxl="6" class="d-grid">
              <a href="#" class="btn border bg-light mb-0"
                ><font-awesome-icon
                  :icon="faFacebookF"
                  class="fab fa-fw text-facebook me-2"
                />Signup with Facebook</a
              >
            </b-col>
            <div class="position-relative my-5">
              <hr />
              <p class="small position-absolute top-50 start-50 translate-middle bg-body px-4">
                Or
              </p>
            </div>
          </b-row>

          <b-form>
            <div class="input-floating-label form-floating mb-4">
              <b-form-input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>

            <PasswordInput name="password" v-model="newPassword" class="mb-4" />

            <PasswordInput
              label="Confirm Password"
              name="confirmPassword"
              v-model="confirmPassword"
              class="mb-4"
            />

            <div class="mb-4">
              <b-form-checkbox
                >I agree to all Terms & conditions and the privacy policy.</b-form-checkbox
              >
            </div>
            <div class="align-items-center mt-0">
              <div class="d-grid">
                <b-button variant="dark" class="mb-0" type="button">Create an account</b-button>
              </div>
            </div>
          </b-form>

          <div class="mt-4 text-center">
            <span
              >Already have an account?<router-link :to="{ name: 'auth.sign-in' }">
                Sign in here</router-link
              ></span
            >
          </div>
        </b-col>
      </b-row>
    </b-col>
  </AuthLayuot>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AuthLayuot from '@/layouts/AuthLayuot.vue'
import LogoBox from '@/components/topbar/LogoBox.vue'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import PasswordInput from '@/components/PasswordInput.vue'

let newPassword = ref<string>('')
const confirmPassword = ref('')
</script>
