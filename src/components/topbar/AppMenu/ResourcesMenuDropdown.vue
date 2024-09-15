<template>
  <li class="nav-item dropdown dropdown-fullwidth">
    <a
      class="nav-link dropdown-toggle arrow-none"
      href="#"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Resources
      <font-awesome-icon :icon="faAngleDown" class="fa-sm" />
    </a>
    <div class="dropdown-menu py-0">
      <b-row class="p-2 p-sm-4">
        <b-col md="6" xl="4" xxl="3">
          <div class="d-md-flex gap-4 h-100">
            <ul class="list-unstyled w-100">
              <li class="dropdown-header h6 mb-2">Useful links</li>
              <li v-for="(item, idx) in RESOURCES_MENU_ITEMS.usefulLinks" :key="idx">
                <router-link class="dropdown-item" to="">
                  <component :is="item.icon" class="fa-fw me-2" />
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
            <div class="vr ms-2 ms-auto d-none d-md-block"></div>
          </div>
        </b-col>

        <b-col md="6" xl="4" xxl="5" class="h-100">
          <span class="dropdown-header h6 mb-2">Key features</span>

          <div
            v-for="(item, idx) in RESOURCES_MENU_ITEMS.keyFeatures"
            :key="idx"
            class="dropdown-item bg-light-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3"
          >
            <div class="d-flex me-3">
              <div class="icon-md border bg-body rounded flex-shrink-0">
                <component :is="item.icon" class="heading-color fs-6" />
              </div>
              <div class="mx-2">
                <p class="stretched-link heading-color fw-bold mb-0">{{ item.title }}</p>
                <p class="mb-0 text-body small">{{ item.description }}</p>
              </div>
            </div>
            <router-link
              class="icon-link icon-link-hover text-primary-hover stretched-link"
              to=""
              target="_blank"
            >
              <BIconChevronRight />
            </router-link>
          </div>
        </b-col>

        <b-col lg="4">
          <span class="dropdown-header h6 mb-2">Feature resources</span>

          <b-card no-body class="bg-transparent px-3">
            <img
              :src="RESOURCES_MENU_ITEMS.featureResource.image"
              class="rounded mb-3"
              alt="feature-img"
            />
            <b-card-body class="p-0">
              <h6>
                <a href="#">{{ RESOURCES_MENU_ITEMS.featureResource.title }}</a>
              </h6>
              <p class="mb-2">{{ RESOURCES_MENU_ITEMS.featureResource.description }}</p>
              <a class="icon-link icon-link-hover stretched-link z-index-2" href="#"
                >Check it out
                <BIconArrowRight />
              </a>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </li>
</template>

<script lang="ts" setup>
import { RESOURCES_MENU_ITEMS } from '@/assets/data/menu-items'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { BIconChevronRight, BIconArrowRight } from 'bootstrap-icons-vue'
</script>
