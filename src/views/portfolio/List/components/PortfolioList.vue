<template>
  <section class="pt-lg-8">
    <b-container class="pt-4 pt-lg-0">
      <b-row class="align-items-center mb-7">
        <b-col xl="6">
          <div class="d-flex position-relative z-index-9">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-dots mb-1">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Portfolio Showcase</li>
              </ol>
            </nav>
          </div>
          <h1 class="display-5">Highlights of cases that we've built</h1>
        </b-col>
        <b-col xl="5" class="ms-auto">
          <p class="mb-4">
            The combination of my passion for design, code & interaction positions me in a unique
            place in the web design world.
          </p>
          <div class="text-center d-inline-block bg-light border rounded px-5 py-3">
            <span class="heading-color me-1">Work with us?</span>
            <router-link class="ms-2" :to="{ name: 'contact.v2' }"
              >Contact us now
              <BIconChevronRight class="small" />
            </router-link>
          </div>
        </b-col>
      </b-row>

      <template v-for="(item, idx) in portfolioCases" :key="idx">
        <template v-if="idx % 2 === 0">
          <CaseCard :item="item" />
        </template>

        <template v-else>
          <CaseCard2 :item="item" />
        </template>
      </template>

      <b-row class="mt-7">
        <b-col cols="12">
          <ul
            class="pagination pagination-primary-soft list-unstyled d-flex justify-content-center flex-wrap mb-0"
          >
            <li class="page-item">
              <router-link class="page-link" to="">
                <font-awesome-icon
                  :icon="faLongArrowAltLeft"
                  class="me-2 rtl-flip"
                />Prev</router-link
              >
            </li>
            <li class="page-item"><router-link class="page-link" to="">1</router-link></li>
            <li class="page-item active"><router-link class="page-link" to="">2</router-link></li>
            <li class="page-item"><router-link class="page-link" to="">3</router-link></li>
            <li class="page-item"><router-link class="page-link" to="">..</router-link></li>
            <li class="page-item"><router-link class="page-link" to="">22</router-link></li>
            <li class="page-item"><router-link class="page-link" to="">23</router-link></li>
            <li class="page-item">
              <router-link class="page-link" to=""
                >Next <font-awesome-icon :icon="faLongArrowAltRight" class="ms-1 rtl-flip"
              /></router-link>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconChevronRight } from 'bootstrap-icons-vue'
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { portfolioCases } from '@/views/portfolio/List/data'
import CaseCard from '@/views/portfolio/List/components/CaseCard.vue'
import CaseCard2 from '@/views/portfolio/List/components/CaseCard2.vue'
</script>
