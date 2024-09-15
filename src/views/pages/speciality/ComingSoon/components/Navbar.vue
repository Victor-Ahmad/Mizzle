<template>
  <header class="header-sticky">
    <nav class="navbar navbar-expand-xl">
      <b-container>
        <router-link :to="{ name: 'demos.classic' }" class="navbar-brand">
          <img class="light-mode-item navbar-brand-item" :src="logo" alt="logo" />
          <img class="dark-mode-item navbar-brand-item" :src="logoLight" alt="logo" />
        </router-link>

        <div class="nav align-items-center felx-row ms-2">
          <b-button variant="dark" size="sm" class="mb-0">Buy mow!</b-button>
        </div>
      </b-container>
    </nav>
  </header>
</template>

<script setup lang="ts">
import logo from '@/assets/images/logo.svg'
import logoLight from '@/assets/images/logo-light.svg'
</script>
