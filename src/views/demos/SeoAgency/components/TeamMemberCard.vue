<template>
  <b-card no-body class="card-body bg-transparent text-center p-4">
    <div class="avatar avatar-xxl mx-auto flex-shrink-0 mb-3">
      <img class="avatar-img rounded-circle" :src="member.avatar" alt="avatar" />
    </div>

    <h6 class="mb-1">
      <router-link to="">{{ member.firstName }} {{ member.lastName }}</router-link>
    </h6>
    <small>{{ member.role }}</small>

    <ul class="list-inline mb-0 mt-3 hstack gap-1 justify-content-center">
      <li v-for="(item, idx) in member.socialLinks" :key="idx" class="list-inline-item">
        <router-link class="btn btn-xs btn-icon btn-light" v-if="item.route" :to="item.route">
          <font-awesome-icon :icon="item.icon" class="fa-fw lh-base" />
        </router-link>
      </li>
    </ul>
  </b-card>
</template>

<script lang="ts" setup>
import type { MemberType } from '@/types'
import type { PropType } from 'vue'

defineProps({
  member: {
    type: Object as PropType<MemberType>,
    required: true
  }
})
</script>
