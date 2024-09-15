<template>
  <footer>
    <b-container class="mb-4 mb-md-2">
      <div class="d-md-flex justify-content-between align-items-center text-center text-lg-start">
        <div class="mb-3 mb-md-0">
          Copyrights ©{{ currentYear }} Mizzle. Build by
          <a :href="developedByLink" class="text-body text-primary-hover">{{ developedBy }}</a
          >.
        </div>
        <ul class="list-inline mb-0 icons-center gap-1">
          <li class="list-inline-item">
            <a class="btn btn-xs btn-icon btn-light mb-0" href="#"
              ><font-awesome-icon :icon="faFacebookF"
            /></a>
          </li>
          <li class="list-inline-item">
            <a class="btn btn-xs btn-icon btn-light mb-0" href="#"
              ><font-awesome-icon :icon="faInstagram"
            /></a>
          </li>
          <li class="list-inline-item">
            <a class="btn btn-xs btn-icon btn-light mb-0" href="#"
              ><font-awesome-icon :icon="faTwitter"
            /></a>
          </li>
          <li class="list-inline-item">
            <a class="btn btn-xs btn-icon btn-light mb-0" href="#"
              ><font-awesome-icon :icon="faLinkedinIn"
            /></a>
          </li>
          <li class="list-inline-item">
            <a class="btn btn-xs btn-icon btn-light mb-0" href="#"
              ><font-awesome-icon
                :icon="faYoutube"
                style="height: 16px; width: 13px"
                class="lh-base"
            /></a>
          </li>
        </ul>
      </div>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
import { currentYear, developedBy, developedByLink } from '@/helpers'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
</script>
