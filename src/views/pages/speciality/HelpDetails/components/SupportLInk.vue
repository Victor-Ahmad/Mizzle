<template>
  <section class="pt-0">
    <b-container>
      <b-row class="row-cols-1 row-cols-lg-2 row-cols-xl-3 g-4 g-lg-6">
        <b-col v-for="(item, idx) in supportlinkData" :key="idx">
          <b-card no-body class="card-body card-hover-shadow border p-4">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex">
                <h4 class="mb-0 text-primary"><component :is="item.icon" /></h4>
                <div class="mx-3">
                  <h6 class="mb-0">{{ item.title }}</h6>
                  <small
                    >{{ item.description
                    }}<a v-if="idx == supportlinkData.length - 1" href="#" class="heading-color">
                      example@gmail.com</a
                    ></small
                  >
                </div>
              </div>
              <a class="icon-link icon-link-hover text-body stretched-link" href="#"
                ><BIconArrowRight class="fs-5" />
              </a>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { BIconArrowRight } from 'bootstrap-icons-vue'
import { supportlinkData } from '@/views/pages/speciality/HelpDetails/data'
</script>
