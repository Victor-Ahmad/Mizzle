<template>
  <footer class="bg-dark pt-6" data-bs-theme="dark">
    <b-container class="position-relative mt-sm-5">
      <b-row class="g-4 justify-content-between">
        <b-col lg="8" xl="7">
          <b-row class="g-4">
            <b-col cols="6" md="3">
              <h6 class="mb-2 mb-md-4">Quick links</h6>
              <ul class="nav flex-column">
                <li class="nav-item" v-for="(item, idx) in quickLinks" :key="idx">
                  <router-link class="nav-link" :class="!idx && 'pt-0'" :to="{ name: item.link }"
                    >{{ item.name }}
                    <span v-if="item.badge" class="badge text-bg-danger ms-2">{{
                      item.badge
                    }}</span></router-link
                  >
                </li>
              </ul>
            </b-col>

            <b-col cols="6" md="3">
              <h6 class="mb-2 mb-md-4">Community</h6>
              <ul class="nav flex-column">
                <li class="nav-item" v-for="(item, idx) in communityLinks" :key="idx">
                  <router-link class="nav-link" :class="!idx && 'pt-0'" :to="{ name: item.link }"
                    >{{ item.name }}<component :is="item.icon" class="small ms-2"
                  /></router-link>
                </li>
              </ul>
            </b-col>

            <b-col md="6">
              <h6 class="mb-2 mb-md-4">Contact details</h6>
              <ul class="list-group list-group-borderless">
                <li class="d-flex mb-3">
                  <span> <BIconGeoAlt class="me-2 mb-1 text-primary" /> </span
                  >{{ contactDetails.address }}
                </li>
                <li class="d-flex mb-3 icons-center">
                  <BIconHeadset class="me-2 text-primary" /> {{ contactDetails.number }}
                </li>
                <li class="d-flex mb-3 icons-center">
                  <BIconEnvelope class="me-2 text-primary" /> {{ contactDetails.email }}
                </li>
                <li class="d-flex mb-3">
                  <BIconClock class="me-2 mt-1 text-primary" />
                  <p class="mb-0">{{ contactDetails.open }} <br />{{ contactDetails.close }}</p>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>

        <b-col lg="3">
          <h6 class="mb-2 mb-md-4">App available on</h6>
          <b-row class="g-2 mb-4 mb-sm-5">
            <b-col cols="6" sm="4" md="3" lg="6">
              <router-link to=""> <img :src="googlePlay" alt="" /> </router-link>
            </b-col>
            <b-col cols="6" sm="4" md="3" lg="6">
              <router-link to=""> <img :src="appStore" alt="app-store" /> </router-link>
            </b-col>
          </b-row>

          <h6 class="mb-2 mb-md-4">Follow on</h6>

          <ul class="list-inline mb-0 mt-3 d-flex align-items-center gap-1">
            <li class="list-inline-item" v-for="(item, idx) in followOnIcons" :key="idx">
              <router-link class="btn btn-xs btn-icon" :class="item.variant" to="#"
                ><font-awesome-icon :icon="item.icon" class="fa-fw lh-base"
              /></router-link>
            </li>
          </ul>
        </b-col>
      </b-row>

      <hr class="opacity-1 mt-4 mb-3" />

      <div
        class="d-md-flex justify-content-between align-items-center text-center text-lg-start py-3"
      >
        <LogoBox imageClass="h-40px" />

        <div class="text-body mt-3 mt-md-0">
          Copyrights ©{{ currentYear }} Mizzle. Build by
          <a :href="developedByLink" class="text-body text-primary-hover">{{ developedBy }}</a
          >.
        </div>
      </div>
    </b-container>
  </footer>
</template>

<script lang="ts" setup>
import LogoBox from '@/components/topbar/LogoBox.vue'
import { currentYear, developedBy, developedByLink } from '@/helpers'
import {
  quickLinks,
  communityLinks,
  followOnIcons,
  contactDetails
} from '@/assets/data/footer-items'
import { BIconClock, BIconEnvelope, BIconGeoAlt, BIconHeadset } from 'bootstrap-icons-vue'

import appStore from '@/assets/images/elements/app-store.svg'
import googlePlay from '@/assets/images/elements/google-play.svg'
</script>
