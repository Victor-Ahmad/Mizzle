<template>
  <footer>
    <b-container>
      <div class="bg-dark rounded position-relative p-4 p-sm-6 mb-3 mb-sm-5" data-bs-theme="dark">
        <b-row class="mx-auto">
          <b-col lg="8" class="mx-auto text-center px-0">
            <LogoBox imageClass="h-60px" />
            <p class="mt-4">
              A Bootstrap theme that's both stylish and functional, perfect for any type of
              technology or corporate website.
            </p>
            <ul class="nav justify-content-center mt-4 mt-md-0">
              <li class="nav-item" v-for="(item, idx) in quickLinks6" :key="idx">
                <router-link class="nav-link px-3 pb-0" :to="{ name: item.link }"
                  >{{ item.name }}
                  <span v-if="item.badge" class="badge text-bg-danger ms-2">{{
                    item.badge
                  }}</span></router-link
                >
              </li>
            </ul>
            <ul class="list-inline mb-0 mt-4 flex-centered gap-1">
              <li class="list-inline-item" v-for="(item, idx) in followOnIcons" :key="idx">
                <router-link class="btn btn-xs btn-icon" :class="item.variant" to="#"
                  ><font-awesome-icon :icon="item.icon" class="fa-fw lh-base"
                /></router-link>
              </li>
            </ul>
            <div class="text-body mt-4">
              Copyrights ©{{ currentYear }} Mizzle. Build by
              <a :href="developedByLink" class="text-body text-primary-hover">{{ developedBy }}</a
              >.
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </footer>
</template>

<script lang="ts" setup>
import LogoBox from '@/components/topbar/LogoBox.vue'
import { quickLinks6, followOnIcons } from '@/assets/data/footer-items'
import { currentYear, developedBy, developedByLink } from '@/helpers'
</script>
