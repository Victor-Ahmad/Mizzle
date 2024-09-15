<template>
  <b-form>
    <b-card no-body class="bg-transparent p-0">
      <b-card-header class="bg-transparent border-bottom p-0 pb-3">
        <h6 class="mb-0">Personal Information</h6>
      </b-card-header>

      <b-card-body class="px-0">
        <b-row class="g-4">
          <b-col cols="12">
            <label class="form-label">Profile picture</label>
            <div class="d-flex align-items-center">
              <label class="position-relative me-2" title="Replace this pic">
                <span class="avatar avatar-xl">
                  <img
                    class="avatar-img rounded-circle border border-white border-3 shadow"
                    :src="avatar07"
                    alt=""
                  />
                </span>

                <b-button variant="dark" class="uploadremove flex-centered">
                  <BIconX class="text-white" />
                </b-button>
              </label>

              <label class="btn btn-sm btn-dark mb-0">Change</label>
              <input class="form-control d-none" type="file" />
            </div>
          </b-col>

          <b-col cols="12">
            <label class="form-label">Full name</label>
            <div class="input-group">
              <input type="text" class="form-control" value="Jacqueline" placeholder="First name" />
              <input type="text" class="form-control" value="Miller" placeholder="Last name" />
            </div>
          </b-col>

          <b-col md="6">
            <b-form-group label="Email address" label-for="email" class="">
              <b-form-input
                type="email"
                class=""
                v-model="email"
                placeholder="Enter your email id"
              />
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Mobile number" label-for="number" class="">
              <b-form-input
                type="text"
                class=""
                v-model="number"
                placeholder="Enter your mobile number"
              />
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Nationality" label-for="select" class="">
              <b-form-select class="form-select" :options="options" v-model="selected">
              </b-form-select>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group class="" label="Select Gender" label-for="radio">
              <div class="input-group">
                <div class="form-control">
                  <div class="form-check radio-bg-light">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault1"> Male </label>
                  </div>
                </div>

                <div class="form-control">
                  <div class="form-check radio-bg-light">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label class="form-check-label" for="flexRadioDefault2"> Female </label>
                  </div>
                </div>

                <div class="form-control">
                  <div class="form-check radio-bg-light">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                    />
                    <label class="form-check-label" for="flexRadioDefault3"> Others </label>
                  </div>
                </div>
              </div>
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group label="Address" label-for="address">
              <b-form-textarea
                class=""
                rows="3"
                spellcheck="false"
                v-model="textarea"
              ></b-form-textarea>
            </b-form-group>
          </b-col>

          <b-col cols="12" class="text-end">
            <a href="#" class="btn btn-primary mb-0">Save Changes</a>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </b-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BIconX } from 'bootstrap-icons-vue'

import avatar07 from '@/assets/images/avatar/07.jpg'

const textarea = ref('2119 N Division Ave, New Hampshire, York, United States')

const selected = ref('Paris')
const options = [
  { value: null, text: 'Select your country' },
  { value: 'USA', text: 'USA' },
  { value: 'Paris', text: 'Paris' },
  { value: 'India', text: 'India' },
  { value: 'UK', text: 'UK' }
]
const email = ref('hello@gmail.com')
const number = ref('222 555 666')
</script>
