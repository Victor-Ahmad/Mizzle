<template>
  <component :is="tag ?? 'div'" :id="id" :class="customClass" :style="customStyle">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Parallax from 'parallax-js'

type ParallaxPropType = {
  customClass?: string
  customStyle?: string
  id: string
  tag?: string
}

const props = defineProps<ParallaxPropType>()

onMounted(() => {
  const element = document.getElementById(props.id)
  if (element) new Parallax(element)
})
</script>
