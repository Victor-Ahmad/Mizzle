<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle arrow-none d-flex justify-content-between align-items-center w-100"
      href="#"
      :class="menuItemActive('demos', currentRouteName) && 'active'"
    >
      Demos
      <font-awesome-icon :icon="faAngleDown" class="fa-sm ms-1" />
    </a>
    <div class="dropdown-menu dropdown-menu-size-lg p-3">
      <b-row class="pt-2">
        <b-col v-for="(chunk, idx) in splitMenuitems" :key="idx" sm="6">
          <ul class="list-unstyled">
            <li v-for="item in chunk" :key="item.key">
              <router-link
                class="dropdown-item"
                :class="{ active: item.route.name === currentRouteName }"
                :to="{ name: item.route.name }"
                v-if="item.route"
              >
                {{ item.label }}
                <span v-if="item.badge" class="badge text-bg-success ms-2">
                  {{ item.badge }}
                </span>
              </router-link>
            </li>
          </ul>
        </b-col>

        <b-col cols="12">
          <hr class="mt-2" />
          <div class="d-sm-flex justify-content-between align-items-center px-2">
            <div class="me-3 mb-2 mb-sm-0">
              <h6 class="mb-2 mb-sm-0">Ready to get started?</h6>
              <small class="mb-0">Take your documents to the next level with Mizzle</small>
            </div>
            <a href="#" class="btn btn-sm btn-primary">Get in touch</a>
          </div>
        </b-col>
      </b-row>
    </div>
  </li>
</template>

<script lang="ts" setup>
import router from '@/router'
import type { MenuItemType } from '@/helpers/menu'
import { splitArray } from '@/helpers/array'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { menuItemActive } from '@/components/topbar/AppMenu/getActiveClass'

const currentRouteName = router.currentRoute.value.name

type DemosMenuDropdownProps = {
  menuItems: MenuItemType[]
}

const props = defineProps<DemosMenuDropdownProps>()
const splitMenuitems = splitArray(props.menuItems, 7)
</script>
