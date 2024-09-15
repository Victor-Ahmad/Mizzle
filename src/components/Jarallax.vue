<template>
  <component :is="tag ?? 'div'" class="jarallax" :id="id" :class="customClass" :style="customStyle">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import { jarallax, jarallaxVideo } from 'jarallax'
import 'jarallax/dist/jarallax.min.css'

jarallaxVideo()

type JarallexPropType = {
  customClass?: string
  customStyle?: string
  options?: object
  id: string
  tag?: string
}
const props = defineProps<JarallexPropType>()

onMounted(() => {
  const element = document.getElementById(props.id)
  if (element) {
    jarallax(element, {
      speed: 0.4,
      ...props.options
    })
  }
})
</script>
