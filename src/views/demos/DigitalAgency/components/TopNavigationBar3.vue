<template>
  <StickyHeader className="header-absolute" data-bs-theme="dark">
    <nav class="navbar navbar-expand-xl px-lg-5">
      <b-container fluid>
        <LogoBox class-name="me-5" />

        <AppMenu showContactUs ul-class="mx-auto" />

        <ul class="nav align-items-center dropdown-hover ms-sm-2">
          <ThemeToggleDropdown />

          <b-dropdown
            variant="link"
            no-caret
            menu-class="shadow rounded p-2"
            end
            toggleClass="btn-light border btn-round mb-0 flex-centered"
            class="nav nav-item nav-search px-1 px-lg-3"
          >
            <template #button-content>
              <BIconSearch />
            </template>
            <form class="input-group">
              <input
                class="form-control border-primary"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <button class="btn btn-primary m-0" type="submit">Search</button>
            </form>
          </b-dropdown>

          <li class="nav-item position-relative ms-2 ms-sm-3 d-none d-sm-block">
            <a class="btn btn-dark mb-0">free consultation</a>
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
import { BIconSearch } from 'bootstrap-icons-vue'
import AppMenu from '@/components/topbar/AppMenu/index.vue'
</script>
