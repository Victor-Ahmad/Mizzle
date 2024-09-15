<template>
  <section class="pt-0">
    <b-container>
      <b-row>
        <aside class="col-xl-3">
          <div class="flex-column p-3 p-xl-0 d-none d-xl-block">
            <ProductFilter />
          </div>
          <b-offcanvas
            v-model="offcanvas"
            placement="end"
            title="Advanced Filter"
            headerClass="bg-light"
            bodyClass="flex-column p-3 p-xl-0"
            class="offcanvas-xl"
            tabindex="-1"
            id="offcanvasSidebar"
            aria-labelledby="offcanvasSidebarLabel"
          >
            <ProductFilter />
          </b-offcanvas>
        </aside>

        <b-col xl="9" class="ps-xl-6">
          <form class="row g-2 g-xl-4 mb-4">
            <b-col md="6">
              <div class="rounded position-relative">
                <input
                  class="form-control bg-light pe-5"
                  type="search"
                  placeholder="Search products by name or keyword..."
                  aria-label="Search"
                />
                <button
                  class="btn bg-transparent border-0 px-2 py-0 position-absolute top-50 end-0 translate-middle-y icons-center"
                  type="submit"
                >
                  <BIconSearch />
                </button>
              </div>
            </b-col>

            <b-col sm="6" md="3" class="ms-auto">
              <b-form-select
                class=""
                :options="options"
                v-model="selected"
                aria-label="Default select example"
              ></b-form-select>
            </b-col>

            <b-col sm="6" md="3" class="d-grid d-xl-none">
              <button
                @click="toggleOffcanvas"
                class="btn btn-dark mb-0"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasSidebar"
                aria-controls="offcanvasSidebar"
              >
                <font-awesome-icon :icon="faSlidersH" class="me-1" /> Show filter
              </button>
            </b-col>
          </form>

          <b-row class="g-4 g-lg-5">
            <template v-for="(product, idx) in productGrid" :key="idx">
              <b-col sm="6" lg="4">
                <ProductCard :product="product" />
              </b-col>
              <b-col sm="6" lg="12" v-if="idx === 2">
                <div
                  class="h-100 p-md-6 card card-body"
                  :style="`background-image:url(${shopBackground5}); background-position: center left; background-size: cover;`"
                >
                  <b-row class="align-items-center">
                    <b-col lg="7" class="mb-4 mb-lg-0">
                      <h4 class="text-white mb-0">Checkout the newest smart watch product</h4>
                    </b-col>
                    <b-col lg="5" class="text-lg-end">
                      <a href="#" class="btn btn-white mb-0">Shop now</a>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </template>
          </b-row>

          <ul class="pagination pagination-primary-soft d-flex justify-content-end mb-0 mt-5">
            <li>
              <ul class="list-unstyled">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Prev</a>
                </li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">..</a></li>
                <li class="page-item"><a class="page-link" href="#">22</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ProductCard from '@/views/Shop/Grid/components/ProductCard.vue'
import ProductFilter from '@/views/Shop/Grid/components/ProductFilter.vue'
import { productGrid } from '@/assets/data/products'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { BIconSearch } from 'bootstrap-icons-vue'

import shopBackground5 from '@/assets/images/shop/bg/05.jpg'

const offcanvas = ref(false)

const toggleOffcanvas = () => {
  offcanvas.value = !offcanvas.value
}
const selected = ref(null)
const options = [
  { value: null, text: 'Sort by' },
  { value: 'Name', text: 'Name' },
  { value: 'Low to High Price', text: 'Low to High Price' },
  { value: 'High to Low Price', text: 'High to Low Price' }
]
</script>
