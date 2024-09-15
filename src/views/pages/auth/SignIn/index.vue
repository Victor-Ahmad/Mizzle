<template>
  <AuthLayout>
    <b-col sm="10" lg="5" class="d-flex m-auto vh-100">
      <b-row class="w-100 m-auto">
        <b-col sm="10" class="my-5 m-auto">
          <LogoBox smallLogo />

          <h2 class="mb-0">Welcome back</h2>
          <p class="mb-0">Welcome back, please enter your detail</p>

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
              <a href="#" class="btn border bg-light mb-0 flex-centered gap-1">
                <font-awesome-icon :icon="faFacebookF" class="text-facebook me-2" />Signup with
                Facebook</a
              >
            </b-col>
            <div class="position-relative my-5">
              <hr />
              <p class="small position-absolute top-50 start-50 translate-middle bg-body px-4">
                Or
              </p>
            </div>
          </b-row>

          <b-form @submit.prevent="handleSignIn">
            <div v-if="error.length > 0" class="mb-4 text-danger">{{ error }}</div>
            <div class="input-floating-label form-floating mb-4">
              <b-form-input
                v-model="credentials.email"
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>

            <PasswordInput
              v-model="credentials.password"
              name="password"
              autocomplete=""
              containerClass="mb-4"
            />

            <div class="mb-4 d-flex justify-content-between">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checkbox-1" />
                <label class="form-check-label" for="checkbox-1">Remember me</label>
              </div>

              <router-link :to="{ name: 'auth.forgot-password' }" class="link-underline-primary">
                Forgot password?</router-link
              >
            </div>

            <div class="align-items-center mt-0">
              <div class="d-grid">
                <b-button variant="dark" class="mb-0" type="submit">Login</b-button>
              </div>
            </div>
          </b-form>

          <div class="mt-4 text-center">
            <span
              >Not registered yet?<router-link :to="{ name: 'auth.sign-up' }">
                Create an account</router-link
              ></span
            >
          </div>
        </b-col>
      </b-row>
    </b-col>
  </AuthLayout>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { AxiosResponse } from 'axios'
import * as yup from 'yup'
import router from '@/router'
import AuthLayout from '@/layouts/AuthLayuot.vue'
import LogoBox from '@/components/topbar/LogoBox.vue'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import PasswordInput from '@/components/PasswordInput.vue'
import { useAuthStore } from '@/stores/auth'
import HttpClient from '@/helpers/http-client'
import type { UserType } from '@/types/index'

const credentials = reactive({
  id: '1',
  email: 'user@email.com',
  password: 'password'
})

const useAuth = useAuthStore()
const route = useRoute()
const query = route.query

const error = ref('')

const loginFormSchema = yup.object({
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  password: yup.string().required('Please enter your password')
})

const redirectUser = () => {
  if (query.redirectedFrom) {
    return router.push(`${query.redirectedFrom}`)
  }
  return router.push('/')
}

const handleSignIn = async () => {
  let user = {}
  await loginFormSchema
    .validate(credentials)
    .then((res) => (user = res))
    .catch((e) => {
      return (error.value = e.message)
    })

  try {
    const res: AxiosResponse<UserType> = await HttpClient.post('/login', user)

    if (res.data.token) {
      useAuth.saveSession({
        ...res.data,
        token: res.data.token
      })
      redirectUser()
    }
  } catch (e: any) {
    if (e.response?.data?.error) {
      if (error.value.length == 0) error.value = e.response?.data?.error
    }
  }
}
</script>
