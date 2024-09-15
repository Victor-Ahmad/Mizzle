<template>
  <section class="overflow-hidden pt-lg-9">
    <b-container class="position-relative pt-4 pt-sm-6">
      <b-row>
        <b-col lg="6" class="mb-5 mb-sm-8 mb-md-9 mb-lg-0">
          <h1 class="position-relative lh-base mb-4">
            Get accurate plant diagnoses in an instant with Mizzle.
            <span class="position-absolute top-0 start-0 translate-middle mt-1 ms-n5">
              <svg
                class="fill-primary"
                width="86"
                height="105"
                viewBox="0 0 86 105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50.9805 4.63769C51.6165 4.24345 56.4262 10.3524 61.7246 18.1163C67.0564 25.8003 72.7966 35.1061 75.9634 40.6314C82.2158 51.6489 85.8889 61.2748 84.5362 62.0301C83.1029 62.7522 77.2708 54.3462 71.0415 43.3853C67.8986 37.9165 62.7042 28.3199 58.293 20.1246C53.8819 11.9293 50.2874 5.05535 50.9805 4.63769Z"
                />
                <path
                  d="M64.0889 66.7297C63.5001 67.2372 60.6142 65.1098 57.1179 62.637C53.6451 60.2207 49.5285 57.539 47.2336 56.0303C42.5967 52.8997 39.0022 49.8707 39.6599 48.4069C40.2841 47.0231 45.3294 47.9307 50.3923 51.2838C52.9286 52.892 56.9393 56.2802 59.8742 59.6469C62.809 63.0137 64.6779 66.2223 64.0889 66.7297Z"
                />
                <path
                  d="M55.1316 86.0595C55.1297 86.856 48.7063 87.4433 40.9853 87.6368C33.2643 87.8295 24.2555 87.492 19.0669 87.0413C8.68981 86.139 0.434871 83.7683 0.656712 82.218C0.878555 80.6685 9.34356 80.5005 19.5833 81.393C24.7149 81.867 33.5706 82.7978 41.1895 83.6415C48.832 84.5408 55.1571 85.32 55.1316 86.0595Z"
                />
              </svg>
            </span>
          </h1>
          <p class="mb-5">
            Download the app for free and get access to accurate plant diagnoses with no extra
            charges.
          </p>
          <b-row class="g-2 mb-5">
            <b-col cols="6" sm="4" md="3">
              <router-link to="">
                <img :src="googlePlay" class="btn-transition" alt="google-store" />
              </router-link>
            </b-col>
            <b-col cols="6" sm="4" md="3">
              <router-link to="">
                <img :src="appStore" class="btn-transition" alt="app-store" />
              </router-link>
            </b-col>
          </b-row>

          <div class="d-sm-flex gap-3 align-items-center">
            <h6 class="mb-3 mb-sm-0">Global Partner:</h6>
            <ul class="list-inline flex-wrap mb-0 hstack gap-1">
              <li class="list-inline-item" v-for="(icon, idx) in partners" :key="idx">
                <router-link
                  to="#"
                  class="btn btn-icon btn-lg btn-white bg-primary-hover shadow rounded-circle flex-centered"
                >
                  <component :is="icon" class="ga-fw" />
                </router-link>
              </li>
            </ul>
          </div>
        </b-col>

        <b-col lg="6" class="position-relative">
          <div
            class="bg-body shadow d-none d-sm-block heading-color fw-semibold position-absolute top-0 start-50 translate-middle mt-n6 px-3 py-2 ms-n4"
          >
            <BIconPatchCheckFill class="text-primary me-2 mb-1" />Secure & Verified
          </div>
          <div class="avatar avatar-lg position-absolute top-0 start-0 mt-n8 ms-8">
            <img class="avatar-img rounded-circle d-none d-md-block" :src="avatar1" alt="avatar" />
          </div>
          <div class="avatar position-absolute bottom-50 start-0 mb-n8 ms-n5">
            <img class="avatar-img rounded-circle d-none d-lg-block" :src="avatar7" alt="avatar" />
          </div>
          <div class="avatar position-absolute bottom-0 end-0 me-8">
            <img class="avatar-img rounded-circle" :src="avatar14" alt="avatar" />
          </div>
          <figure class="position-absolute top-0 start-50">
            <svg
              width="42"
              height="54"
              viewBox="0 0 42 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="fill-mode"
                d="M17.1284 20.5293C11.8807 27.5916 6.85321 34.5787 1.34862 41.4719C0.678899 40.3825 0.678899 39.819 1.33945 39.0208C4.44037 35.33 7.48624 31.5922 10.4771 27.8076C12.4954 25.2531 14.3853 22.5766 16.422 19.8437C15.0734 18.2284 13.6514 16.6507 12.3761 14.9415C9.45872 11.0441 5.9633 7.71955 2.6422 4.2166C1.63303 3.15538 0.87156 1.84999 0 0.657293C0.66055 -0.263055 1.12844 -0.122185 1.66972 0.525815C2.80734 1.90634 3.99083 3.24929 5.15596 4.60164C8.74312 8.79016 12.3303 12.9787 15.9083 17.1766C16.2477 17.571 16.5505 18.003 17.156 18.7919C17.6055 18.1157 17.8716 17.6837 18.156 17.2705C20.7523 13.4576 23.3578 9.64477 25.9633 5.84129C26.2936 5.35294 26.6697 4.87399 27.1193 4.51712C27.3028 4.36686 27.7431 4.55468 28.3028 4.62042C25.2569 9.92651 21.6055 14.5282 18.0459 19.346C18.4954 19.9189 18.8624 20.4636 19.2936 20.9519C23.3394 25.4785 26.7523 30.4747 30.0367 35.5836C32.6605 39.6688 35.3028 43.754 38.0275 47.7829C39.2385 49.5672 40.6514 51.2107 42 52.9481C41.2844 54.291 40.8624 54.3662 40.0092 53.1077C37.6147 49.586 35.2202 46.0642 32.8991 42.5049C29.3395 37.0392 26 31.4138 22 26.258C20.5046 24.3234 18.8349 22.5296 17.1284 20.5293Z"
              />
            </svg>
          </figure>

          <b-row>
            <b-col sm="6">
              <div
                class="iphone-x iphone-x-small rotate-sm-343 m-auto m-sm-0 ms-sm-5 mt-4 z-index-99"
                :style="`background: url(${appImg1}); background-size: 100%;`"
              >
                <i></i>
                <b></b>

                <figure class="position-absolute bottom-0 start-0 mb-n7 ms-n6">
                  <svg
                    class="fill-mode mb-n3"
                    width="103"
                    height="104"
                    viewBox="0 0 103 104"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M102.067 67.8341C100.811 69.4168 99.0712 69.8069 97.1401 69.5024C93.8547 69.0105 90.5851 68.51 87.3361 67.8959C68.297 64.2927 50.1717 57.982 32.8669 49.3216C32.0793 48.9295 31.0206 48.6433 30.6773 48.0103C30.2297 47.147 30.362 45.9897 30.2318 44.9543C31.1056 45.0131 32.1719 44.783 32.8386 45.1793C42.5842 50.9955 53.0343 55.119 63.7656 58.7008C74.2035 62.1959 84.9894 64.212 95.7329 66.4149C97.74 66.8217 99.8864 66.5385 101.962 66.5802C101.993 67.0144 102.03 67.4242 102.067 67.8341Z"
                    />
                    <path
                      d="M25.2144 22.3383C27.2069 20.7868 28.2795 20.0003 29.9515 21.531C33.261 24.5289 36.5328 27.6088 40.1752 30.1601C50.4513 37.4091 60.6044 44.8477 71.7798 50.6874C75.3353 52.5484 79.1635 53.852 82.8785 55.4012C83.1402 55.5051 83.4469 55.5026 83.7305 55.5332C85.4991 55.803 85.8777 57.0314 85.3156 58.3807C84.7621 59.7459 83.6095 59.5517 82.395 58.9404C76.3471 55.8912 69.9372 53.3865 64.2353 49.8015C53.3501 42.9442 42.8255 35.5022 32.2414 28.2155C29.8887 26.6034 27.8456 24.5776 25.2144 22.3383Z"
                    />
                    <path
                      d="M85.7587 76.3091C84.2107 78.3774 82.8299 78.3684 80.9544 77.7878C71.7323 74.9442 62.4069 72.4025 53.198 69.4698C39.4789 65.1118 25.8717 60.4679 12.1659 56.0208C10.8442 55.5905 10.0136 55.1193 10.3226 53.6819C10.6328 52.2848 12.0873 51.8238 13.8127 52.5062C20.1406 54.9735 26.4758 57.4163 32.7879 59.8921C45.3387 64.8222 58.1372 68.9215 71.1861 72.2707C75.378 73.336 79.605 74.239 83.8201 75.2713C84.3739 75.4216 84.8548 75.8162 85.7587 76.3091Z"
                    />
                  </svg>
                </figure>
              </div>
            </b-col>
            <b-col cols="6" class="d-none d-sm-block">
              <div
                class="iphone-x iphone-x-small rotate-13 m-0 ms-3 mt-xl-n7"
                :style="`background: url(${appImg2}); background-size: 100%;`"
              >
                <i></i>
                <b></b>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import {
  BIconAndroid,
  BIconApple,
  BIconGit,
  BIconGoogle,
  BIconSlack,
  BIconPatchCheckFill
} from 'bootstrap-icons-vue'

import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar7 from '@/assets/images/avatar/07.jpg'
import avatar14 from '@/assets/images/avatar/14.jpg'
import googlePlay from '@/assets/images/elements/google-play.svg'
import appStore from '@/assets/images/elements/app-store.svg'
import appImg1 from '@/assets/images/mokeup/app-placeholder.jpg'
import appImg2 from '@/assets/images/mokeup/app-placeholder2.jpg'

const partners = [BIconAndroid, BIconApple, BIconSlack, BIconGoogle, BIconGit]
</script>
