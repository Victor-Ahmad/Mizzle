<template>
  <component class="glightbox" :class="className" :is="is ?? 'a'" :href="link" v-bind="$attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import GLightbox from 'glightbox'

type CustomGLightboxProp = {
  is?: string
  link: string
  className?: string
}

defineProps<CustomGLightboxProp>()
const lightboxInstance = ref()

onMounted(() => {
  // @ts-ignore
  lightboxInstance.value = new GLightbox({
    openEffect: 'fade',
    closeEffect: 'fade'
  })
})

onUnmounted(() => {
  lightboxInstance.value?.destroy()
})
</script>
