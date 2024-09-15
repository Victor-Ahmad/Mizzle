<template>
  <component :is="tag ?? 'span'" :id="id" />
</template>

<script lang="ts" setup>
type ITypedType = {
  strings: string[]
  options?: object
  id: string
  tag?: string
}

const props = defineProps<ITypedType>()

import { init } from 'ityped'
import { onMounted } from 'vue'

onMounted(() => {
  const myElement = document.getElementById(props.id)
  if (myElement) {
    init(myElement, {
      showCursor: true,
      strings: props.strings,
      typeSpeed: 200,
      backSpeed: 50,
      ...props.options
    })
  }
})
</script>
