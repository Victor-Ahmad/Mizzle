<template>
  <b-card no-body class="bg-transparent rounded-3">
    <b-card-header class="bg-transparent border-bottom px-0 pt-0">
      <h5 class="card-header-title mb-0">Transition history</h5>
    </b-card-header>

    <b-card-body class="px-0 mt-3">
      <b-row class="g-3 align-items-center justify-content-between mb-4">
        <b-col md="8">
          <form class="rounded position-relative">
            <input
              class="form-control pe-5 bg-transparent"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
              type="submit"
            >
              <font-awesome-icon :icon="faSearch" class="fs-6" />
            </button>
          </form>
        </b-col>

        <b-col md="3">
          <b-form>
            <b-form-select :options="options" v-model="selected" class="z-index-9 bg-transparent">
            </b-form-select>
          </b-form>
        </b-col>
      </b-row>

      <div class="border-0 table-responsive" responsive>
        <b-table-simple hover class="align-middle p-4 mb-0">
          <b-thead class="thead-dark">
            <b-tr>
              <b-th scope="col" class="border-0 text-white rounded-start">Reference</b-th>
              <b-th scope="col" class="border-0 text-white">Payment method</b-th>
              <b-th scope="col" class="border-0 text-white">Status</b-th>
              <b-th scope="col" class="border-0 text-white">Amount</b-th>
              <b-th scope="col" class="border-0 text-white">Date</b-th>
              <b-th scope="col" class="border-0 text-white rounded-end">Action</b-th>
            </b-tr>
          </b-thead>

          <b-tbody>
            <b-tr v-for="(item, idx) in transactions" :key="idx">
              <b-td>
                <a href="#">{{ item.reference }}</a>
              </b-td>

              <b-td
                ><img :src="item.paymentMethod.image" class="h-20px" alt="" /><span class="ms-2">{{
                  item.paymentMethod.number
                }}</span></b-td
              >

              <b-td>
                <b-badge
                  :variant="item.variant"
                  class="bg-opacity-15"
                  :class="`text-${item.variant}`"
                  >{{ item.status }}</b-badge
                >
              </b-td>

              <b-td>{{ currency }}{{ item.amount }}</b-td>

              <b-td>{{ item.date }}</b-td>

              <b-td>
                <a
                  href="#"
                  class="btn btn-light border btn-round me-1 mb-1 mb-md-0 flex-centered"
                  v-b-tooltip.popover.top
                  title="Download"
                >
                  <BIconDownload />
                </a>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { currency } from '@/helpers'
import { transactions } from '@/views/pages/accounts/PaymentDetail/data'
import { BIconDownload } from 'bootstrap-icons-vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const selected = ref(null)
const options = [
  { value: null, text: 'Sort by' },
  { value: 'Neweset', text: 'Newest' },
  { value: 'Oldest', text: 'Oldest' }
]
</script>
