<template>
  <li class="nav-item dropdown dropdown-fullwidth">
    <a
      class="nav-link dropdown-toggle arrow-none d-flex justify-content-between align-items-center w-100"
      href="#"
      id="megaMenu"
    >
      Megamenu
      <font-awesome-icon :icon="faAngleDown" class="fa-sm ms-1" />
    </a>
    <div class="dropdown-menu py-0">
      <b-row class="p-2 p-sm-4 g-4">
        <b-col md="6" xl="3">
          <ul class="list-unstyled">
            <li class="dropdown-header h6 mb-2">Useful links</li>
            <li>
              <router-link
                v-for="(item, idx) in MEGA_MENU_ITEMS.usefulLinks"
                :key="idx"
                class="dropdown-item"
                to=""
              >
                {{ item }}
              </router-link>
            </li>
          </ul>
        </b-col>

        <b-col md="6" xl="3">
          <span class="dropdown-header h6 mb-2">Company</span>
          <div
            v-for="(item, idx) in MEGA_MENU_ITEMS.company"
            :key="idx"
            class="dropdown-item d-flex bg-light-hover position-relative text-wrap py-3"
          >
            <div class="icon-md border bg-body rounded flex-shrink-0">
              <component :is="item.icon" class="heading-color fs-6" />
            </div>
            <div class="ms-2">
              <a class="stretched-link heading-color fw-bold mb-0" href="#">
                {{ item.title }}
                <span v-if="item.badge" class="badge text-bg-primary ms-2">
                  {{ item.badge }}
                </span>
              </a>
              <p class="mb-0 text-body small">{{ item.description }}</p>
            </div>
          </div>
        </b-col>

        <b-col md="6" xl="3">
          <ul class="list-unstyled">
            <li class="dropdown-header h6 mb-2">Integration</li>
            <li>
              <router-link
                v-for="(item, idx) in MEGA_MENU_ITEMS.integration"
                :key="idx"
                class="dropdown-item d-flex bg-light-hover icon-link icon-link-hover py-2"
                to=""
              >
                <img :src="item.logo" class="h-30px" alt="" />
                <span class="heading-color fw-bold ms-2">{{ item.name }}</span>
                <BIconArrowRight class="ms-auto" />
              </router-link>

              <router-link to="" class="btn btn-sm btn-light mb-0 d-grid mt-2"
                >View all</router-link
              >
            </li>
          </ul>
        </b-col>

        <b-col md="6" xl="3">
          <span class="dropdown-header h6 mb-2">Recent blogs</span>
          <div
            v-for="(item, idx) in MEGA_MENU_ITEMS.recentBlogs"
            :key="idx"
            class="dropdown-item bg-light-hover d-flex align-items-sm-center gap-2 position-relative mb-3"
          >
            <img :src="item.image" class="rounded icon-lg" alt="blog-img" />
            <p class="text-wrap fw-bold mb-0">
              <router-link :to="item.link" class="stretched-link heading-color text-primary-hover"
                >{{ item.title }}
              </router-link>
            </p>
          </div>
        </b-col>
      </b-row>
    </div>
  </li>
</template>

<script lang="ts" setup>
import { MEGA_MENU_ITEMS } from '@/assets/data/menu-items'
import { BIconArrowRight } from 'bootstrap-icons-vue'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
</script>
