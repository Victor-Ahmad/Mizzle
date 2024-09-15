<template>
  <li class="dropdown dropend">
    <a
      class="nav-link dropdown-link dropdown-toggle d-flex arrow-none"
      data-bs-toggle="dropdown"
      href="#"
      :class="menuItemActive(item.key, currentRouteName) && 'active'"
    >
      {{ item.label }}
      <font-awesome-icon :icon="faChevronRight" class="ms-auto fa-sm" />
    </a>
    <div class="dropdown-menu" data-bs-popper="static">
      <template v-for="(child, idx) in item.children" :key="idx + child.key + idx">
        <MenuItemWithChildren v-if="child.children" :item="child" />
        <MenuItem v-else :item="child" />
      </template>
    </div>
  </li>
</template>
<script lang="ts" setup>
import router from '@/router'
import type { MenuItemType } from '@/helpers/menu'
import MenuItem from '@/components/topbar/AppMenu/MenuItem.vue'
import { menuItemActive } from '@/components/topbar/AppMenu/getActiveClass'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

type SubMenuType = {
  item: MenuItemType
  itemClassName?: string
}

defineProps<SubMenuType>()

const currentRouteName = router.currentRoute.value.name
</script>
