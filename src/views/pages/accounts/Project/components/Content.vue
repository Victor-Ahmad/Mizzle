<template>
  <b-row class="g-3 align-items-center mb-5">
    <b-col xl="5">
      <b-form class="rounded position-relative">
        <b-form-input class="pe-5" type="search" placeholder="Search" aria-label="Search" />
        <b-button
          :variant="null"
          class="btn border-0 px-3 py-0 position-absolute top-50 end-0 translate-middle-y"
          type="submit"
        >
          <font-awesome-icon :icon="faSearch" class="fs-6" />
        </b-button>
      </b-form>
    </b-col>

    <b-col sm="6" xl="3" class="ms-auto">
      <b-form>
        <b-form-select
          class="js-choice"
          aria-label=".form-select-sm"
          :options="options"
          v-model="selected"
        >
        </b-form-select>
      </b-form>
    </b-col>

    <b-col sm="6" xl="3">
      <a href="#" class="btn btn-primary mb-0 d-inline-flex align-items-center">
        <BIconPlusLg class="me-2" />Add new project
      </a>
    </b-col>
  </b-row>

  <div class="border-0 table-responsive" responsive>
    <b-table-simple hover class="align-middle p-4 mb-0 table">
      <b-thead variant="dark">
        <b-tr>
          <b-th scope="col" class="border-0 text-white rounded-start">Image</b-th>
          <b-th scope="col" class="border-0 text-white">Title</b-th>
          <b-th scope="col" class="border-0 text-white">Status</b-th>
          <b-th scope="col" class="border-0 text-white">Category</b-th>
          <b-th scope="col" class="border-0 text-white rounded-end">Action</b-th>
        </b-tr>
      </b-thead>

      <b-tbody>
        <b-tr v-for="(item, idx) in table" :key="idx">
          <b-td>
            <img :src="item.image" class="img-fluid w-80px rounded" alt="project-img" />
          </b-td>

          <b-td>{{ item.title }}</b-td>

          <b-td
            ><font-awesome-icon
              :icon="faCircle"
              class="fa-2xs me-2"
              :class="item.statusText === 'Published' ? 'text-success' : 'text-danger'"
            />{{ item.statusText }}</b-td
          >

          <b-td>{{ item.category }}</b-td>

          <b-td>
            <span class="hstack gap-1">
              <b-button variant="dark" size="sm" class="me-1 mb-1 mb-md-0">
                <BIconPencilSquare />
              </b-button>
              <b-button variant="light" size="sm" class="border me-1 mb-1 mb-md-0">
                <BIconPower />
              </b-button>
              <b-button variant="danger" size="sm" class="me-1 mb-1 mb-md-0">
                <BIconTrash />
              </b-button>
            </span>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { table } from '@/views/pages/accounts/Project/data'
import { faCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import { BIconPencilSquare, BIconPlusLg, BIconPower, BIconTrash } from 'bootstrap-icons-vue'

const selected = ref('Published')
const options = [
  { value: null, text: 'Sort by' },
  { value: 'Published', text: 'Published' },
  { value: 'Free', text: 'Free' },
  { value: 'Newest', text: 'Newest' },
  { value: 'Oldest', text: 'Oldest' }
]
</script>
