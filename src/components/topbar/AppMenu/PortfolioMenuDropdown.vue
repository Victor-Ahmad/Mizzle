<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle arrow-none d-flex justify-content-between align-items-center w-100"
      href="#"
      :class="menuItemActive('portfolio', currentRouteName) && 'active'"
    >
      Portfolio
      <font-awesome-icon :icon="faAngleDown" class="fa-sm ms-1" />
    </a>
    <div class="dropdown-menu dropdown-menu-center dropdown-menu-size-xl p-3">
      <b-row class="g-xl-3">
        <b-col xl="8" class="d-none d-xl-block">
          <div class="d-flex gap-4">
            <b-card no-body class="bg-transparent">
              <img :src="portfolioList1Img" class="card-img" alt="" />
              <b-card-body class="px-0 text-start pb-0">
                <h6><a href="#">Ceremony Worthy of Time</a></h6>
                <p class="mb-2 small">We help our customers better manage their web presence.</p>
                <router-link
                  :to="{ name: 'portfolio.case-study.v1' }"
                  class="icon-link icon-link-hover stretched-link mb-0"
                >
                  Learn more
                  <BIconArrowRight />
                </router-link>
              </b-card-body>
            </b-card>

            <b-card no-body class="bg-transparent">
              <img :src="portfolioList2Img" class="card-img" alt="" />
              <b-card-body class="px-0 text-start pb-0">
                <h6><a href="#">Brushstrokes and Beyond</a></h6>
                <p class="mb-2 small">We help our customers better manage their web presence.</p>
                <router-link
                  :to="{ name: 'portfolio.case-study.v2' }"
                  class="icon-link icon-link-hover stretched-link mb-0"
                >
                  Learn more
                  <BIconArrowRight />
                </router-link>
              </b-card-body>
            </b-card>

            <div class="vr ms-2"></div>
          </div>
        </b-col>

        <b-col xl="4">
          <ul class="list-unstyled">
            <li class="dropdown-header h6">Portfolio Pages</li>
            <li v-for="item in menuItems" :key="item.key">
              <router-link
                class="dropdown-item"
                v-if="item.route"
                :to="{ name: item.route.name }"
                :class="{ active: item.route.name === currentRouteName }"
              >
                {{ item.label }}
                <span v-if="item.badge" class="badge text-bg-success ms-2">
                  {{ item.badge }}
                </span>
              </router-link>
            </li>
          </ul>
        </b-col>
      </b-row>
    </div>
  </li>
</template>

<script lang="ts" setup>
import router from '@/router'
import type { MenuItemType } from '@/helpers/menu'
import { menuItemActive } from '@/components/topbar/AppMenu/getActiveClass'

import { BIconArrowRight } from 'bootstrap-icons-vue'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import portfolioList1Img from '@/assets/images/portfolio/list/01.jpg'
import portfolioList2Img from '@/assets/images/portfolio/list/02.jpg'

type PortfolioMenuDropdownProps = {
  menuItems: MenuItemType[]
}

defineProps<PortfolioMenuDropdownProps>()

const currentRouteName = router.currentRoute.value.name
</script>
