<template>
  <StickyHeader className="header-absolute" data-bs-theme="dark">
    <nav class="navbar navbar-expand-xl px-lg-5">
      <b-container fluid>
        <LogoBox class-name="me-5" />

        <AppMenu showContactUs />

        <ul class="nav align-items-center dropdown-hover ms-sm-2">
          <ThemeToggleDropdown />

          <li class="nav-item position-relative ms-2 ms-sm-3 d-none d-sm-block">
            <a class="btn btn-dark mb-0">Let's connect</a>
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
