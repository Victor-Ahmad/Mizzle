<template>
  <b-card no-body class="border p-3 w-100">
    <b-card-header class="text-center border-bottom">
      <div class="avatar avatar-xl position-relative mb-2">
        <img
          class="avatar-img rounded-circle border border-2 border-white"
          :src="avatar05"
          alt=""
        />
        <a
          href="#"
          class="btn btn-sm btn-round btn-dark position-absolute top-50 start-100 translate-middle mt-4 ms-n3 flex-centered"
          v-b-tooltip.popover
          title="Edit profile"
        >
          <BIconPencilSquare style="height: 11px; width: 11px" />
        </a>
      </div>
      <h6 class="mb-0">Jacqueline Miller</h6>
      <a href="#" class="text-reset text-primary-hover small">hello@gmail.com</a>
    </b-card-header>

    <b-card-body class="p-0 mt-4">
      <ul class="nav nav-pills-primary-border-start flex-column">
        <li class="nav-item" v-for="(item, idx) in accountMenu" :key="idx">
          <router-link
            :to="{ name: item.route.name }"
            :class="currentPath === item.route.name && 'active'"
            class="nav-link icons-center w-100"
          >
            <component :is="item.icon" class="fa-fw me-2" /> {{ item.title }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link text-danger" href="#" @click="logout">
            <font-awesome-icon :icon="faSignOutAlt" class="fa-fw me-2" />Sign Out</a
          >
        </li>
      </ul>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import router from '@/router'
import { onMounted, ref } from 'vue'
import { accountMenu } from '@/layouts/data'
import { useAuthStore } from '@/stores/auth'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { BIconPencilSquare } from 'bootstrap-icons-vue'

import avatar05 from '@/assets/images/avatar/05.jpg'

let currentPath = ref()

onMounted(() => {
  currentPath.value = router.currentRoute.value.name
})

const useAuth = useAuthStore()

const logout = () => {
  useAuth.removeSession()
}
</script>
