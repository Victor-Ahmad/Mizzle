<template>
  <b-card no-body class="bg-transparent rounded-3">
    <b-card-header class="bg-transparent border-bottom d-sm-flex justify-content-between px-0 pt-0">
      <h5 class="card-header-title mb-2 mb-sm-0">Saved payment methods</h5>
      <a
        href="#"
        class="btn btn-primary mb-0 icons-center"
        data-bs-toggle="modal"
        data-bs-target="#addcard"
      >
        <BIconPlusLg class="me-2" />Add new card
      </a>
    </b-card-header>

    <b-card-body class="px-0 mt-3">
      <div
        class="border rounded p-4"
        v-for="(item, idx) in paymentData"
        :key="idx"
        :class="paymentData.length - 1 === idx ? '' : 'mb-4'"
      >
        <div class="d-sm-flex align-items-center">
          <div class="flex-shrink-0 mb-2 mb-sm-0">
            <img class="avatar" :src="item.image" alt="Img Description" />
          </div>

          <div class="flex-grow-1 ms-sm-3">
            <b-row class="align-items-center">
              <div class="col-sm mb-3 mb-sm-0">
                <p class="heading-color fw-normal mb-0">
                  {{ item.title }} {{ item.number }}
                  <b-badge v-if="item.badge" variant="primary" class="text-bg-primary">{{
                    item.badge
                  }}</b-badge>
                </p>
                <small class="text-muted">Checking - Expires {{ item.expiration }}</small>
              </div>

              <div class="col-sm-auto">
                <div class="d-flex gap-3">
                  <a class="btn btn-sm btn-white border mb-0">
                    <BIconPencilFill class="me-1" /> Edit
                  </a>
                  <button type="button" class="btn btn-sm btn-white border mb-0">
                    <BIconTrash class="me-1" /> Delete
                  </button>
                </div>
              </div>
            </b-row>
          </div>
        </div>
      </div>
    </b-card-body>
  </b-card>

  <div class="text-center my-5">
    <BIconThreeDots />
  </div>
</template>

<script setup lang="ts">
import { paymentData } from '@/views/pages/accounts/PaymentDetail/data'
import { BIconPencilFill, BIconPlusLg, BIconThreeDots, BIconTrash } from 'bootstrap-icons-vue'
</script>
