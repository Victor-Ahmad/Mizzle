<template>
  <b-card class="border-primary-hover border bg-transparent text-center">
    <figure class="text-center">
      <span v-html="category.icon" />
    </figure>
    <h6 class="mb-0">
      <router-link
        :to="{ name: category.route?.name, params: category.route?.params }"
        class="stretched-link"
        >{{ category.name }}</router-link
      >
    </h6>
  </b-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { CategoryType } from '@/types'

defineProps({
  category: {
    type: Object as PropType<CategoryType>,
    required: true
  }
})
</script>
