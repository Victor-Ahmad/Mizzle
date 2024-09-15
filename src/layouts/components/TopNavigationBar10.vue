<template>
  <StickyHeader className="header-absolute">
    <nav class="navbar navbar-expand-xl">
      <b-container>
        <LogoBox class-name="me-5" />

        <AppMenu showContactUs />

        <ul class="nav align-items-center dropdown-hover ms-sm-2">
          <ThemeToggleDropdown />

          <li class="nav-item flex-nowrap align-items-center ms-3 d-none d-md-block">
            <form class="position-relative">
              <input
                class="form-control pe-5 bg-light"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                type="submit"
              >
                <font-awesome-icon :icon="faSearch" />
              </button>
            </form>
          </li>

          <CartOffcanvas />

          <li class="nav-item">
            <MobileNavbarToggler />
          </li>
        </ul>
      </b-container>
    </nav>
  </StickyHeader>
</template>

<script lang="ts" setup>
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import CartOffcanvas from '@/components/topbar/CartOffcanvas.vue'
import StickyHeader from '@/components/topbar/StickyHeader.vue'
import LogoBox from '@/components/topbar/LogoBox.vue'
import ThemeToggleDropdown from '@/components/topbar/ThemeToggleDropdown.vue'
import MobileNavbarToggler from '@/components/topbar/MobileNavbarToggler.vue'
import AppMenu from '@/components/topbar/AppMenu/index.vue'
</script>
