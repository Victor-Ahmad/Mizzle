<template>
  <header :class="`${isSticky ? 'header-sticky-on' : ''} ${className}`">
    <slot />
  </header>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

type StickyHeaderProps = {
  className?: string
}

let isSticky = ref<boolean>(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isSticky.value = window.scrollY >= 400
  })
})

defineProps<StickyHeaderProps>()
</script>
