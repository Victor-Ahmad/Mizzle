<template>
  <footer class="bg-dark pt-6" data-bs-theme="dark">
    <b-container class="position-relative mt-sm-5">
      <b-row class="g-3 g-md-4 align-items-center">
        <b-col md="6">
          <h2 class="mb-0 lh-base">
            Get started on your path to
            <span class="position-relative z-index-1"
              >success
              <span
                class="position-absolute top-50 start-50 translate-middle z-index-n1 ms-n2 d-none d-lg-block"
              >
                <svg
                  width="188"
                  height="53"
                  viewBox="0 0 188 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="fill-primary"
                    d="M3.50843 26.6791C5.35764 34.7553 19.176 38.9851 26.7629 41.4254C47.5981 47.4215 69.586 48.7695 91.2825 49.6062C107.583 50.0478 123.91 49.7573 140.135 48.1885C154.13 46.7243 169.469 45.5158 180.691 36.9051C185.618 33.0239 185.82 27.2834 181.324 22.9954C169.418 11.8166 138.589 7.57514 121.756 4.98378C103.226 2.36919 84.4557 3.171 65.8116 4.27494C77.9834 4.49573 90.1553 5.19295 102.238 6.57578C107.406 7.27301 112.802 8.35371 117.032 11.3053C113.093 10.457 109.015 10.4338 105 10.1084C76.8182 7.19166 47.1675 4.62355 19.9233 13.5713C13.9704 15.8256 2.97647 19.5442 3.50843 26.6791ZM0 25.7727C1.06393 10.1897 39.758 5.03027 53.3231 4.43763C51.1192 4.29818 48.9154 4.07739 46.7242 3.78688C50.3846 2.79915 54.121 2.04382 57.9081 1.60224C65.5583 0.939879 73.2464 0.753952 80.9092 0.323997C94.0944 -0.349987 107.305 0.0102456 120.414 1.56738C136.816 4.10063 197.384 11.3983 186.757 34.918C184.554 38.8573 180.399 41.4603 176.27 43.5403C166.163 48.6068 154.523 49.8618 143.263 51.1285C126.456 52.7902 109.559 53.3131 92.6631 52.825C67.7368 51.907 42.1772 50.501 18.6947 42.1459C11.1586 39.1943 0.126658 34.3834 0 25.7727Z"
                  />
                </svg>
              </span>
            </span>
            with us
          </h2>
        </b-col>
        <b-col md="5" class="text-md-end ms-auto">
          <a class="btn btn-lg btn-primary-soft icon-link icon-link-hover mb-0" href="#"
            >Start Your Journey
            <BIconArrowRight class="bi" />
          </a>
        </b-col>
      </b-row>

      <hr class="opacity-1 my-5" />

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
import {
  BIconArrowRight,
  BIconClock,
  BIconEnvelope,
  BIconGeoAlt,
  BIconHeadset
} from 'bootstrap-icons-vue'

import appStore from '@/assets/images/elements/app-store.svg'
import googlePlay from '@/assets/images/elements/google-play.svg'
</script>
