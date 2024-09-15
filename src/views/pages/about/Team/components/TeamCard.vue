<template>
  <b-card no-body class="card-img-scale bg-transparent overflow-hidden">
    <div class="position-absolute top-0 end-0 z-index-2 m-3">
      <ul class="list-inline mb-0 mb-2 mb-sm-0 hstack gap-1">
        <li v-if="team.icon.iconName[0]" class="list-inline-item">
          <a class="btn-icon btn-sm rounded mb-2" :class="`bg-${team.icon.variant[0]}`" href="#"
            ><font-awesome-icon :icon="team.icon.iconName[0]"
          /></a>
        </li>
        <li v-if="team.icon.iconName[1]" class="list-inline-item">
          <a class="btn-icon btn-sm rounded mb-2" :class="`bg-${team.icon.variant[1]}`" href="#"
            ><font-awesome-icon :icon="team.icon.iconName[1]"
          /></a>
        </li>
      </ul>
    </div>
    <div class="card-img-scale-wrapper rounded-3">
      <img :src="team.avatar" class="img-scale" alt="card img" />
    </div>

    <b-card-body class="text-center px-0 pb-0">
      <h6 class="mb-0">
        <a href="#" class="stretched-link">{{ team.username }}</a>
      </h6>
      <small>{{ team.role }}</small>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { type TeamType } from '@/views/pages/about/Team/data'

defineProps({
  team: {
    type: Object as PropType<TeamType>,
    required: true
  }
})
</script>
