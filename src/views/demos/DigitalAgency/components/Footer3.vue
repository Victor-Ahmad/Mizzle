<template>
  <footer class="bg-dark position-relative overflow-hidden pt-6" data-bs-theme="dark">
    <b-container class="position-relative mt-5">
      <b-row class="g-4">
        <b-col xl="3" class="text-lg-center text-xl-start mb-4 mb-xl-0">
          <LogoBox imageClass="h-40px" />
        </b-col>

        <b-col cols="6" md="4" lg="5" xl="4">
          <h6 class="mb-2 mb-md-4">Quick links</h6>
          <b-row class="g-0">
            <b-col lg="6">
              <ul class="nav flex-column">
                <li class="nav-item" v-for="(item, idx) in footerQuickLinks3" :key="idx">
                  <router-link class="nav-link" :class="!idx && 'pt-0'" :to="{ name: item.link }"
                    >{{ item.name }}
                    <span v-if="item.badge" class="badge text-bg-danger ms-2">{{
                      item.badge
                    }}</span></router-link
                  >
                </li>
              </ul>
            </b-col>
            <b-col lg="6">
              <ul class="nav flex-column">
                <li class="nav-item" v-for="(item, idx) in footerLinks" :key="idx">
                  <router-link class="nav-link" :to="{ name: item.link }">
                    {{ item.name }}
                  </router-link>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="6" md="4" lg="3" xl="2">
          <h6 class="mb-2 mb-md-4">Resources</h6>
          <ul class="nav flex-column">
            <li class="nav-item" v-for="(item, idx) in communityLinks" :key="idx">
              <router-link class="nav-link" :class="!idx && 'pt-0'" :to="{ name: item.link }"
                >{{ item.name }}
                <component :is="item.icon" class="small ms-1" />
              </router-link>
            </li>
          </ul>
        </b-col>

        <b-col sm="6" md="4" lg="4" xl="3">
          <h6 class="mb-2 mb-md-4">Community</h6>
          <div
            v-for="(item, idx) in footerCommunityLinks3"
            :key="idx"
            class="position-relative d-flex align-items-center py-2 my-2"
          >
            <div class="icon-lg rounded-circle flex-shrink-0" :class="item.variant">
              <component :is="item.icon" class="heading-color" />
            </div>
            <div class="nav flex-column ps-3">
              <h6 class="mb-2">
                <router-link to="" class="stretched-link p-0">{{ item.title }}</router-link>
              </h6>
              <div class="small text-body-secondary">API, knowledge base, tutorials</div>
            </div>
          </div>
        </b-col>
      </b-row>

      <hr class="opacity-1 my-5 my-sm-6" />

      <b-row class="g-4 align-items-center">
        <b-col xl="3" class="text-lg-center text-xl-start mb-4 mb-xl-0">
          <h5 class="mb-1">Get in touch with us</h5>
          <p class="mb-0">We look forward to hearing from you!</p>
        </b-col>

        <b-col sm="6" md="4" xl="3" class="d-flex justify-content-md-center">
          <div class="position-relative d-flex align-items-center">
            <div class="icon-lg bg-body rounded-circle flex-shrink-0 flex-centered">
              <BIconTelephone class="heading-color" />
            </div>
            <div class="nav flex-column ps-3">
              <div class="small text-body-secondary">Give us a call</div>
              <p class="fw-semibold mt-1 mb-0">
                <a href="#" class="heading-color text-primary-hover stretched-link p-0">{{
                  contactDetails.number
                }}</a>
              </p>
            </div>
          </div>
        </b-col>

        <b-col sm="6" md="4" xl="3" class="d-flex justify-content-md-center">
          <div class="position-relative d-flex align-items-center">
            <div class="icon-lg bg-body rounded-circle flex-shrink-0 flex-centered">
              <BIconEnvelope class="heading-color" />
            </div>
            <div class="nav flex-column ps-3">
              <div class="small text-body-secondary">Send us an email</div>
              <p class="fw-semibold mt-1 mb-0">
                <a href="#" class="heading-color text-primary-hover stretched-link p-0">{{
                  contactDetails.email
                }}</a>
              </p>
            </div>
          </div>
        </b-col>

        <b-col sm="6" md="4" xl="3" class="d-flex justify-content-md-center">
          <div class="position-relative d-flex align-items-center">
            <div class="icon-lg bg-body rounded-circle flex-shrink-0 flex-centered">
              <BIconGeoAlt class="heading-color" />
            </div>
            <div class="nav flex-column ps-3">
              <div class="small text-body-secondary">Visit us in</div>
              <p class="fw-semibold heading-color mt-1 mb-0">{{ contactDetails.address }}</p>
            </div>
          </div>
        </b-col>
      </b-row>

      <hr class="opacity-1 mt-6 mb-0" />

      <div
        class="d-md-flex justify-content-between align-items-center text-center text-lg-start py-4"
      >
        <div class="text-body mb-3 mb-md-0">
          Copyrights ©{{ currentYear }} Mizzle. Build by
          <a :href="developedByLink" class="text-body text-primary-hover">{{ developedBy }}</a
          >.
        </div>

        <ul class="list-inline mb-0 icons-center justify-content-center gap-1">
          <li class="list-inline-item" v-for="(item, idx) in followOnIcons" :key="idx">
            <router-link class="btn btn-xs btn-icon btn-light" to="">
              <font-awesome-icon :icon="item.icon" class="fa-fw lh-base"
            /></router-link>
          </li>
        </ul>
      </div>
    </b-container>
  </footer>
</template>

<script lang="ts" setup>
import LogoBox from '@/components/topbar/LogoBox.vue'
import {
  footerQuickLinks3,
  communityLinks,
  footerCommunityLinks3,
  contactDetails,
  followOnIcons
} from '@/assets/data/footer-items'
import { BIconEnvelope, BIconGeoAlt, BIconTelephone } from 'bootstrap-icons-vue'
import { currentYear, developedBy, developedByLink } from '@/helpers'

const footerLinks = [
  {
    name: 'Become a partner',
    link: 'contact.v1'
  },
  {
    name: 'Customer stories',
    link: 'customer.stories'
  },
  {
    name: 'Sign in',
    link: 'auth.sign-in'
  },
  {
    name: 'Sign up',
    link: 'auth.sign-up'
  }
]
</script>
