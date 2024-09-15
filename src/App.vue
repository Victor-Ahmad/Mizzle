<template>
  <RouterView />
  <BackToTop />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import BackToTop from '@/components/BackToTop.vue'

import configureFakeBackend from '@/helpers/fake-backend'

import { useLayoutStore } from '@/stores/layout'

configureFakeBackend()
const useLayout = useLayoutStore()
useLayout.setTheme(useLayout.theme)
</script>
