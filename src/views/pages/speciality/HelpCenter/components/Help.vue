<template>
  <section>
    <b-container>
      <b-row class="g-4 g-xl-6">
        <b-col md="6" lg="4" v-for="(item, idx) in helpData" :key="idx">
          <b-card no-body class="border p-4 h-100">
            <b-card-body class="p-0">
              <div class="icon-md bg-primary text-white rounded flex-shrink-0 mb-3 flex-centered">
                <component :is="item.icon" class="fs-6" />
              </div>
              <b-card-title tag="h6" class="mb-3">{{ item.title }}</b-card-title>
              <ul class="nav flex-column">
                <li v-for="list in item.content" :key="list" class="nav-item">
                  <router-link class="nav-link d-flex" :to="{ name: 'help.detail' }"
                    ><font-awesome-icon :icon="faAngleRight" class="pt-1 me-2" />{{
                      list
                    }}</router-link
                  >
                </li>
              </ul>
            </b-card-body>
            <div class="card-footer p-0 pt-3">
              <a class="icon-link icon-link-hover" href="#"
                >View all articles
                <BIconArrowRight />
              </a>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { helpData } from '@/views/pages/speciality/HelpCenter/data'
import { BIconArrowRight } from 'bootstrap-icons-vue'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
</script>
