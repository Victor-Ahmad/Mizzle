<template>
  <li>
    <router-link
      class="dropdown-item"
      :target="item.target"
      v-if="item.route"
      :to="{ name: item.route.name }"
      :class="{ active: item.route.name === currentRouteName }"
    >
      {{ item.label }}
      <span v-if="item.badge" class="badge text-bg-primary ms-2">
        {{ item.badge }}
      </span>
    </router-link>
  </li>
</template>

<script lang="ts" setup>
import router from '@/router'
import type { MenuItemType } from '@/helpers/menu'

const currentRouteName = router.currentRoute.value.name

type SubMenuType = {
  item: MenuItemType
}
defineProps<SubMenuType>()
</script>
