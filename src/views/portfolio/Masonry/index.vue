<template>
  <TopNavigationBar9 />

  <main>
    <section class="pt-8">
      <b-container>
        <div class="bg-dark rounded-4 text-center position-relative overflow-hidden py-5">
          <figure class="position-absolute top-0 start-0 ms-n8">
            <svg
              width="424"
              height="405"
              viewBox="0 0 424 405"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="212"
                cy="202.5"
                rx="212"
                ry="202.5"
                fill="url(#paint0_linear_153_3831)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_153_3831"
                  x1="212"
                  y1="0"
                  x2="212"
                  y2="405"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.0569271" stop-color="#D9D9D9" stop-opacity="0" />
                  <stop offset="0.998202" stop-color="#D9D9D9" stop-opacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </figure>

          <figure class="position-absolute top-0 end-0 me-n8 mt-5">
            <svg
              class="opacity-3"
              width="371"
              height="354"
              viewBox="0 0 371 354"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="172.5"
                cy="176.5"
                rx="131.5"
                ry="125.5"
                fill="url(#paint0_linear_195_2)"
              />
              <ellipse cx="185.5" cy="177" rx="185.5" ry="177" fill="url(#paint1_linear_195_2)" />
              <defs>
                <linearGradient
                  id="paint0_linear_195_2"
                  x1="172.5"
                  y1="51"
                  x2="172.5"
                  y2="302"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.0569271" stop-color="#D9D9D9" stop-opacity="0.5" />
                  <stop offset="0.998202" stop-color="#D9D9D9" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_195_2"
                  x1="185.5"
                  y1="0"
                  x2="185.5"
                  y2="354"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.0569271" stop-color="#D9D9D9" stop-opacity="0.2" />
                  <stop offset="0.998202" stop-color="#D9D9D9" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </figure>

          <div class="d-flex justify-content-center position-relative z-index-9">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-dots breadcrumb-dark mb-1">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Portfolio Masonry</li>
              </ol>
            </nav>
          </div>
          <h1 class="h2 text-white">Portfolio Masonry</h1>
        </div>

        <div class="d-lg-flex align-items-center justify-content-center mt-6">
          <h6 class="mb-lg-0 me-3">Browse by:</h6>
          <div class="grid-menu" data-target=".filter-container">
            <ul class="nav nav-pills nav-pills-primary-soft gap-2">
              <li class="nav-item">
                <a class="nav-link active" data-filter="*">All work</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-filter=".marketing">Marketing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-filter=".design">Web design</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-filter=".business">Development</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-filter=".brand">Brand design</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-filter=".ui">UI/UX design</a>
              </li>
            </ul>
          </div>
        </div>

        <b-row class="g-4 filter-container mt-3" data-isotope='{"layoutMode": "masonry"}'>
          <b-col
            sm="6"
            lg="4"
            class="grid-item"
            :class="portfolio.categoryClass"
            v-for="(portfolio, idx) in portfolioData"
            :key="idx"
          >
            <PortfolioCard :portfolio="portfolio" />
          </b-col>
        </b-row>

        <div class="text-center mt-7">
          <b-button size="lg" variant="outline-light" class="mb-0"
            ><font-awesome-icon :icon="faSpinner" class="fa-lg me-2" />Load more work</b-button
          >
        </div>
      </b-container>
    </section>
  </main>

  <Footer8 />
</template>

<script lang="ts" setup>
import TopNavigationBar9 from '@/views/portfolio/Masonry/components/TopNavigationBar9.vue'
import { portfolioData } from '@/views/portfolio/Masonry/data'
import { onMounted } from 'vue'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { initIsotope } from '@/helpers/init-isotope'
import PortfolioCard from '@/views/portfolio/Masonry/components/PortfolioCard.vue'
import Footer8 from '@/views/portfolio/Masonry/components/Footer8.vue'

onMounted(() => {
  initIsotope()
})
</script>
