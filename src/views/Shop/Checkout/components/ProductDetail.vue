<template>
  <b-card no-body class="bg-transparent mt-5">
    <b-card-header class="bg-transparent border-bottom px-0">
      <h6 class="mb-0">Arrives by Wed, Jan 25</h6>
    </b-card-header>

    <b-card-body class="px-0 pb-0">
      <div class="d-flex align-items-start border-bottom pb-4 mb-4">
        <div class="bg-light p-2 rounded-2 w-25">
          <img :src="product2" alt="" />
        </div>

        <div class="ms-3">
          <p class="fw-semibold mb-1">
            <router-link to="#" class="heading-color text-primary-hover"
              >Round neck cotton t-shirt
            </router-link>
          </p>
          <ul class="list-group list-group-borderless small">
            <li class="list-group-item mb-0 pb-0">Item: #2458644</li>
            <li class="list-group-item mb-0 pb-0">Color: Midblue</li>
            <li class="list-group-item mb-0 pb-0">Size: L</li>
          </ul>
        </div>
      </div>

      <div class="d-flex align-items-start border-bottom pb-4">
        <div class="bg-light p-2 rounded-2 w-25">
          <img :src="product8" alt="" />
        </div>

        <div class="ms-3">
          <p class="fw-semibold mb-1">
            <router-link to="#" class="heading-color text-primary-hover"
              >Mizz dunk low shoes
            </router-link>
          </p>
          <ul class="list-group list-group-borderless small">
            <li class="list-group-item mb-0 pb-0">Item: #2458644</li>
            <li class="list-group-item mb-0 pb-0">Size: 42</li>
          </ul>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import product2 from '@/assets/images/shop/02.png'
import product8 from '@/assets/images/shop/08.png'
</script>
