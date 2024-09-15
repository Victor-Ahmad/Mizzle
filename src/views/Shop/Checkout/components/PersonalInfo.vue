<template>
  <b-card no-body class="bg-transparent mb-6">
    <b-card-header
      class="bg-transparent border-bottom d-flex justify-content-between align-items-center px-0"
    >
      <h5>Personal info</h5>
      <a href="#" class="btn btn-sm btn-light border mb-0 icons-center">
        <BIconPlusLg class="me-1" />
        Add new
      </a>
    </b-card-header>

    <b-card-body class="px-0 pb-0">
      <b-card-body class="p-0">
        <b-form class="row g-3">
          <b-col md="6">
            <b-form-group label="First name">
              <b-form-input type="text" v-model="name" aria-label="First name" />
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Last name">
              <b-form-input type="text" v-model="lastName" aria-label="Last name" />
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Email">
              <b-form-input type="email" v-model="email" />
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Mobile number">
              <b-form-input type="text" v-model="mobileNo" />
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group label="Address">
              <b-form-input type="text" v-model="address" />
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group label="Address 2 (Optional)">
              <b-form-input type="text" />
            </b-form-group>
          </b-col>

          <b-col md="4">
            <b-form-group label="Country">
              <b-form-select v-model="selectedCountry" :options="countryOptions" />
            </b-form-group>
          </b-col>

          <b-col md="4">
            <b-form-group label="State">
              <b-form-select v-model="selectedState" :options="stateOptions" />
            </b-form-group>
          </b-col>

          <b-col md="4">
            <b-form-group label="Zip">
              <b-form-input type="text" v-model="zip" />
            </b-form-group>
          </b-col>

          <b-col md="12">
            <b-form-checkbox
              >The shipping address is the same as my billing address</b-form-checkbox
            >
            <b-form-checkbox>Save this information for next time</b-form-checkbox>
          </b-col>

          <b-col cols="12">
            <label class="form-label me-2">Your saved cards</label>
            <a href="#"><img :src="visa" class="w-40px ms-1" alt="" /></a>
            <a href="#"><img :src="mastercard" class="w-40px ms-3" alt="" /></a>
          </b-col>
        </b-form>
      </b-card-body>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { BIconPlusLg } from 'bootstrap-icons-vue'

import visa from '@/assets/images/elements/visa.svg'
import mastercard from '@/assets/images/elements/mastercard.svg'

const name = 'Jacqueline'
const lastName = 'Miller'
const email = 'example@gmail.com'
const mobileNo = '9154857896'
const zip = '444555'
const address = '1421 Coburn Hollow Road Metamora, Near Center Point, IL 61548.'

const selectedCountry = ref('1')
const selectedState = ref('1')
const countryOptions = [
  { value: '1', text: 'UK' },
  { value: '2', text: 'USA' },
  { value: '3', text: 'India' }
]
const stateOptions = [
  { value: '1', text: 'New York' },
  { value: '2', text: 'California' },
  { value: '3', text: 'Mumbai' },
  { value: '4', text: 'Peru' }
]
</script>
