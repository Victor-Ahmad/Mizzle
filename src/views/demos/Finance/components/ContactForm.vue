<template>
  <section class="pt-0">
    <b-container>
      <div class="inner-container-small mx-auto">
        <div class="text-center mb-6">
          <h2 class="mb-">We've been waiting for you</h2>
          <p class="mb-0">
            You can watch your business bloom and glow, achieving new heights of success and
            radiating prosperity.
          </p>
        </div>
      </div>

      <b-row>
        <b-col lg="8" class="mx-auto">
          <form class="row g-4">
            <b-col md="6">
              <b-form-group label="Your name *" label-class="heading-color">
                <b-form-input type="text" size="lg" placeholder="Full name" />
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group label="Email address *" label-class="heading-color">
                <b-form-input
                  type="email"
                  size="lg"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group label="Phone number *" label-class="heading-color">
                <b-form-input type="text" size="lg" placeholder="(xxx) xx xxxx" />
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group label="Company *" label-class="heading-color">
                <b-form-input type="text" size="lg" placeholder="Company name" />
              </b-form-group>
            </b-col>

            <b-col cols="12">
              <b-form-group label="Message *" label-class="heading-color">
                <b-form-textarea
                  placeholder="Write your message here...."
                  id="floatingTextarea2"
                  style="height: 150px"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" class="d-grid">
              <b-button variant="primary" size="lg" class="mb-0">Send a message</b-button>
            </b-col>
          </form>

          <div class="bg-light border rounded py-4 px-5 mt-6">
            <b-row class="align-items-center">
              <b-col md="7">
                <h5 class="mb-">Need finance guidance?</h5>
                <p class="mb-0">
                  We've always worked very hard to give our customers the best experience.
                </p>
              </b-col>

              <b-col md="4" class="ms-auto text-end">
                <div class="mb-2 text-center">
                  <span class="heading-color fs-3 fw-bold">{{ currency }}20</span> /per hour
                </div>
                <router-link to="" class="btn btn-white border mb-0 w-100">Book call!</router-link>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { currency } from '@/helpers'
</script>
