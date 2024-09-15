<template>
  <b-dropdown
    toggle-class="btn-link mb-0 px-2 lh-1"
    variant="link"
    menu-class="min-w-auto dropdown-menu-end"
    no-caret
    class="nav-item dropdown-animation"
  >
    <template #button-content>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        class="bi bi-circle-half theme-icon-active fill-mode fa-fw"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
        <use href="#"></use>
      </svg>
    </template>

    <li v-for="mode in themeModes" :key="mode.theme" class="mb-1">
      <button
        type="button"
        class="dropdown-item d-flex align-items-center"
        :class="{ active: mode.theme === useLayout.theme }"
        @click="useLayout.setTheme(mode.theme)"
      >
        <component :is="mode.icon" class="me-1" />
        {{ toSentenceCase(mode.theme) }}
      </button>
    </li>
  </b-dropdown>
</template>

<script lang="ts" setup>
import { type ThemeModeType } from '@/types/layout'
import { useLayoutStore } from '@/stores/layout'
import { toSentenceCase } from '@/helpers/change-casing'
import { BIconBrightnessHighFill, BIconMoonStarsFill, BIconCircleHalf } from 'bootstrap-icons-vue'

const themeModes: ThemeModeType[] = [
  {
    icon: BIconBrightnessHighFill,
    theme: 'light'
  },
  {
    icon: BIconMoonStarsFill,
    theme: 'dark'
  },
  {
    icon: BIconCircleHalf,
    theme: 'auto'
  }
]

const useLayout = useLayoutStore()
</script>
