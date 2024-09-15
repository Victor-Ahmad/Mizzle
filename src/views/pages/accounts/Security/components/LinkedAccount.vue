<template>
  <b-card no-body class="bg-transparent rounded-3">
    <b-card-header class="bg-transparent border-bottom px-0">
      <h6 class="card-header-title mb-0">Linked account</h6>
    </b-card-header>
    <b-card-body class="px-0 pb-0">
      <div
        class="d-md-flex align-items-center border rounded p-4"
        v-for="(item, idx) in account"
        :key="idx"
        :class="`${!item.icon ? 'position-relative bg-success  bg-opacity-10 border-success' : ''} ${account.length - 1 === idx ? '' : 'mb-4'}`"
      >
        <div
          v-if="item.bgColor"
          class="position-absolute top-0 start-100 translate-middle bg-white rounded-circle lh-1 h-20px"
        >
          <BIconCheckCircleFill class="text-success fs-5" />
        </div>
        <h2 class="fs-1 mb-0 me-3">
          <font-awesome-icon v-if="item.icon" :icon="item.icon" :class="`text-${item.iconText}`" />
          <template v-else>
            <v-icon
              name="fc-google"
              scale="1"
              class="text-google-icon d-none d-md-block"
              height="64"
              width="64"
            />
            <v-icon
              name="fc-google"
              scale="1"
              class="text-google-icon d-md-none"
              height="35"
              width="35"
            />
          </template>
        </h2>
        <div class="mb-3 mb-md-0" :class="idx == account.length - 2 ? 'me-md-3' : ''">
          <h6 class="mb-1">{{ item.title }}</h6>
          <p class="mb-0 small">{{ item.description }}</p>
        </div>

        <div class="ms-auto hstack gap-1">
          <b-button size="sm" :variant="item.buttonVariant" class="mb-0">{{
            item.buttonText
          }}</b-button>
          <a href="#" class="btn btn-sm btn-link text-primary-hover mb-0">Learn more</a>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { account } from '@/views/pages/accounts/Security/data'
import { BIconCheckCircleFill } from 'bootstrap-icons-vue'
</script>
