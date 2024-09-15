<template>
  <section class="pt-xl-9">
    <b-container class="pt-4 pt-xl-0 position-relative z-index-2">
      <div class="d-flex position-relative mb-2">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb breadcrumb-dots pb-0 mb-0">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Portfolio</a></li>
            <li class="breadcrumb-item active" aria-current="page">Portfolio case studies v2</li>
          </ol>
        </nav>
      </div>
      <h1 class="h2 mb-4 mb-sm-6">Website Optimization for TechWave</h1>

      <OverView />

      <b-row class="mb-6">
        <b-col md="4">
          <h4>01. The Challenge</h4>
        </b-col>

        <b-col md="7" class="ms-auto">
          <p>
            <span class="dropcap fs-2 heading-color bg-light rounded px-2">T</span>he simple act of
            cultivating gratitude has the remarkable ability to bring joy and abundance into our
            lives, shifting our perspective from lack to abundance. In this article, we will explore
            the power of gratitude and how it can enhance our overall well-being and create a
            positive ripple effect in our lives and the lives of those around us.
            <strong>In a world filled with chaos</strong> and uncertainty, it's easy to lose sight
            of the things that truly matter.
          </p>
          <p class="mb-0">
            Once an idea takes root, it requires nurturing and refinement. This stage involves
            research, brainstorming, and gathering feedback. Conducting market analysis,
            <a href="#">exploring existing solutions</a>, and collaborating with others can help
            refine the idea further. The goal is to gain a deeper understanding of the idea's
            feasibility, potential impact, and market viability.
          </p>
        </b-col>
      </b-row>

      <b-row class="g-4 g-xl-6">
        <b-col sm="6">
          <CustomGLightbox :link="showcaseImg4" data-glightbox data-gallery="image-popup">
            <img :src="showcaseImg4" class="rounded" alt="portfolio-img" />
          </CustomGLightbox>
        </b-col>
        <b-col sm="6">
          <CustomGLightbox :link="showcaseImg5" data-glightbox data-gallery="image-popup">
            <img :src="showcaseImg5" class="rounded" alt="portfolio-img" />
          </CustomGLightbox>
        </b-col>
      </b-row>

      <b-row class="mt-6">
        <b-col md="4">
          <h4>02. The Solution</h4>
        </b-col>

        <b-col md="7" class="ms-auto">
          <p class="mb-4">
            Once an idea takes root, it requires nurturing and refinement. This stage involves
            research, brainstorming, and gathering feedback. Conducting market analysis, exploring
            existing solutions, and collaborating with others can help refine the idea further. The
            goal is to gain a deeper understanding of the idea's feasibility, potential impact, and
            market viability. It begins with recognizing the power and potential of an idea. Through
            cultivation, planning, and strategizing, ideas are refined and shaped into actionable
            plans. Challenges are embraced as opportunities for growth, and perseverance becomes key
            in overcoming obstacles.
          </p>
        </b-col>
      </b-row>

      <b-row class="mt-6">
        <b-col md="4">
          <h4>03. The Result</h4>
        </b-col>

        <b-col md="7" class="ms-auto">
          <p class="lead">
            Two assure Edward whence the was. Who worthy yet ten boy denote wonder. Weeks views her
            sight old tears sorry. Additions can suspected its concealed put furnished.
          </p>
          <p>
            Transforming ideas into reality often requires collaboration with a diverse range of
            individuals. Partnering with experts, seeking mentorship, and building a network of
            like-minded individuals can provide valuable insights and support.
          </p>

          <div class="d-flex mt-4">
            <h5 class="display-4 text-primary lh-0 mb-0">
              <BIconQuote />
            </h5>
            <div class="ms-3">
              <q class="fs-6 heading-color"
                >Too months nay end change relied who beauty wishes matter. Shew of john real park
                so rest we on. Ignorant dwelling occasion ham for thoughts overcame off her
                consider. Polite it elinor is depend.</q
              >
              <div class="d-flex align-items-center mt-4">
                <div class="avatar">
                  <img class="avatar-img rounded-circle" :src="avatar2" alt="avatar" />
                </div>
                <div class="ms-3">
                  <h6 class="mb-0">Emma Watson</h6>
                  <small>CEO, Co-founder</small>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row class="mt-8">
        <b-col cols="12">
          <div class="d-lg-flex justify-content-lg-between">
            <div class="align-items-center mb-3 mb-lg-0">
              <ul class="list-inline mb-0 hstack gap-1">
                <li class="list-inline-item">
                  <a class="btn btn-outline-light rounded-pills btn-sm mb-lg-0" href="#"
                    >Branding</a
                  >
                </li>
                <li class="list-inline-item">
                  <a class="btn btn-outline-light rounded-pills btn-sm mb-lg-0" href="#"
                    >Packaging</a
                  >
                </li>
                <li class="list-inline-item">
                  <a class="btn btn-outline-light rounded-pills btn-sm mb-lg-0" href="#"
                    >UI/UX design</a
                  >
                </li>
              </ul>
            </div>

            <div class="align-items-center">
              <ul class="list-inline mb-0 mb-2 mb-sm-0 hstack gap-1">
                <li class="list-inline-item">
                  <a class="btn px-2 btn-sm bg-facebook" href="#"
                    ><font-awesome-icon :icon="faFacebookF" class="fa-fw"
                  /></a>
                </li>
                <li class="list-inline-item">
                  <a class="btn px-2 btn-sm bg-instagram-gradient" href="#"
                    ><font-awesome-icon :icon="faInstagram" class="fa-fw"
                  /></a>
                </li>
                <li class="list-inline-item">
                  <a class="btn px-2 btn-sm bg-twitter" href="#"
                    ><font-awesome-icon :icon="faTwitter" class="fa-fw"
                  /></a>
                </li>
                <li class="list-inline-item">
                  <a class="btn px-2 btn-sm bg-linkedin" href="#"
                    ><font-awesome-icon :icon="faLinkedinIn" class="fa-fw"
                  /></a>
                </li>
              </ul>
            </div>
          </div>

          <hr class="my-4" />

          <b-row class="align-items-center">
            <b-col cols="5" class="position-relative">
              <span> <BIconArrowLeft class="me-2 mb-1" />Previous </span>
              <h6 class="mb-0 mt-2">
                <a href="#" class="stretched-link">The Art of Storytelling</a>
              </h6>
            </b-col>
            <b-col cols="2" class="text-center">
              <a href="#" class="heading-color text-primary-hover">
                <BIconGrid3x3GapFill />
              </a>
            </b-col>
            <b-col cols="5" class="text-end position-relative">
              <span
                >Next
                <BIconArrowRight class="ms-1 mb-1" />
              </span>
              <h6 class="mb-0 mt-2">
                <a href="#" class="stretched-link">Transforming Ideas into Reality</a>
              </h6>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import CustomGLightbox from '@/components/CustomGLightbox.vue'
import OverView from '@/views/portfolio/CaseStudyV2/components/OverView.vue'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import {
  BIconArrowLeft,
  BIconArrowRight,
  BIconGrid3x3GapFill,
  BIconQuote
} from 'bootstrap-icons-vue'

import avatar2 from '@/assets/images/avatar/02.jpg'
import showcaseImg4 from '@/assets/images/portfolio/showcase/04.jpg'
import showcaseImg5 from '@/assets/images/portfolio/showcase/05.jpg'
</script>
