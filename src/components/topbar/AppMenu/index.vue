<template>
  <b-collapse id="topbar-appmenu-collapse" class="navbar-collapse">
    <ul class="navbar-nav navbar-nav-scroll dropdown-hover" :class="ulClass">
      <DemosMenuDropdown :menuItems="menuItems[0].children!" />

      <PagesMenuDropdown :menu-items="menuItems[1].children!" />

      <ResourcesMenuDropdown v-if="showResources" />

      <PortfolioMenuDropdown :menu-items="menuItems[2].children!" />

      <MegaMenuDropdown v-if="showMegaMenu" />

      <li v-if="showContactUs" class="nav-item">
        <router-link class="nav-link" :to="{ name: 'contact.v1' }"> Contact us </router-link>
      </li>

      <li v-if="showDocs" class="nav-item">
        <a
          class="nav-link"
          href="https://mizzle-vue.vercel.app/docs/index.html"
          target="_blank"
        >
          Docs
        </a>
      </li>
    </ul>
  </b-collapse>
</template>

<script lang="ts" setup>
import { getAppMenuItems, type MenuItemType } from '@/helpers/menu'
import DemosMenuDropdown from '@/components/topbar/AppMenu/DemosMenuDropdown.vue'
import PagesMenuDropdown from '@/components/topbar/AppMenu/PagesMenuDropdown.vue'
import MegaMenuDropdown from '@/components/topbar/AppMenu/MegaMenuDropdown.vue'
import PortfolioMenuDropdown from '@/components/topbar/AppMenu/PortfolioMenuDropdown.vue'
import ResourcesMenuDropdown from '@/components/topbar/AppMenu/ResourcesMenuDropdown.vue'

type AppMenuProps = {
  showMegaMenu?: boolean
  showResources?: boolean
  showContactUs?: boolean
  showDocs?: boolean
  ulClass?: string
}
const menuItems: MenuItemType[] = getAppMenuItems()

defineProps<AppMenuProps>()
</script>
