<template>
  <StickyHeader className="header-absolute">
    <nav class="navbar navbar-expand-xl">
      <b-container>
        <LogoBox />

        <AppMenu ulClass="mx-auto" showContactUs showDocs />

        <ul class="nav align-items-center dropdown-hover ms-2">
          <ThemeToggleDropdown />

          <li class="nav-item d-none d-sm-block ms-2">
            <button class="btn btn-sm btn-dark mb-0">Get application!</button>
          </li>

          <li class="nav-item">
            <MobileNavbarToggler />
          </li>
        </ul>
      </b-container>
    </nav>
  </StickyHeader>
</template>

<script lang="ts" setup>
import StickyHeader from '@/components/topbar/StickyHeader.vue'
import LogoBox from '@/components/topbar/LogoBox.vue'
import ThemeToggleDropdown from '@/components/topbar/ThemeToggleDropdown.vue'
import MobileNavbarToggler from '@/components/topbar/MobileNavbarToggler.vue'
import AppMenu from '@/components/topbar/AppMenu/index.vue'
</script>
