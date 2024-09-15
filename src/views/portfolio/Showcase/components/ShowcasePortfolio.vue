<template>
  <section class="pt-lg-8">
    <b-container class="pt-4 pt-lg-0">
      <div class="inner-container left mb-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb breadcrumb-dots mb-1">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Portfolio Showcase</li>
          </ol>
        </nav>
        <h1 class="h2">Portfolio Showcase</h1>
      </div>

      <b-row class="g-sm-6">
        <template v-for="(portfolio, idx) in portfolioData" :key="idx">
          <b-col cols="12" class="mb-5 mb-md-0" v-if="(idx + 1) % 3 === 0">
            <PortfolioCard :portfolio="portfolio" />
          </b-col>

          <b-col md="6" class="mb-5 mb-md-0" v-else>
            <PortfolioCard :portfolio="portfolio" />
          </b-col>
        </template>
      </b-row>

      <b-row class="mt-md-7">
        <b-col cols="12" class="mx-auto">
          <ul class="pagination pagination-primary-soft d-flex justify-content-between mb-0">
            <li>
              <ul class="list-unstyled">
                <li class="page-item disabled">
                  <a class="page-link" href="#"
                    ><font-awesome-icon :icon="faLongArrowAltLeft" class="me-2 rtl-flip" />Prev</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <ul class="list-unstyled">
                <li class="page-item active">
                  <router-link class="page-link" to="">1</router-link>
                </li>
                <li class="page-item"><router-link class="page-link" to="">2</router-link></li>
                <li class="page-item"><router-link class="page-link" to="">3</router-link></li>
                <li class="page-item"><router-link class="page-link" to="">..</router-link></li>
                <li class="page-item"><router-link class="page-link" to="">22</router-link></li>
                <li class="page-item"><router-link class="page-link" to="">23</router-link></li>
              </ul>
            </li>
            <li>
              <ul class="list-unstyled">
                <li class="page-item">
                  <a class="page-link" href="#"
                    >Next<font-awesome-icon :icon="faLongArrowAltRight" class="ms-2 rtl-flip"
                  /></a>
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
import PortfolioCard from '@/views/portfolio/Showcase/components/PortfolioCard.vue'
import { portfolioData } from '@/views/portfolio/Showcase/data'
import { faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
</script>
