<template>
  <section class="pt-lg-8">
    <b-container class="pt-4 pt-lg-0">
      <b-row class="g-4 g-sm-7">
        <b-col lg="8">
          <div class="d-flex position-relative z-index-9">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-dots mb-1">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Blog</a></li>
                <li class="breadcrumb-item active" aria-current="page">Blog single sidebar</li>
              </ol>
            </nav>
          </div>

          <h1 class="h2 mb-0">The Power of Gratitude: Cultivating Joy and Abundance</h1>
          <div class="d-flex align-items-center flex-wrap mt-4">
            <a href="#" class="badge text-bg-dark mb-0">Lifestyle</a>
            <span class="text-secondary opacity-3 mx-3">|</span>
            <b-dropdown no-caret menuClass="min-w-auto" variant="link" toggleClass="m-0 p-0">
              <template #button-content>
                <a
                  href="#"
                  class="text-secondary text-primary-hover icons-center"
                  id="cardFeedAction"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BIconShare class="me-2" />14
                </a>
              </template>

              <li>
                <b-dropdown-item href="#">
                  <BIconFacebook class="fa-fw me-2" />Facebook
                </b-dropdown-item>
              </li>
              <li>
                <b-dropdown-item href="#">
                  <BIconInstagram class="fa-fw me-2" />Instagram
                </b-dropdown-item>
              </li>
              <li>
                <b-dropdown-item href="#">
                  <BIconWhatsapp class="fa-fw me-2" />Whatsapp
                </b-dropdown-item>
              </li>
              <li>
                <b-dropdown-item href="#">
                  <font-awesome-icon :icon="faPaste" class="fa-fw me-2" />Copy link</b-dropdown-item
                >
              </li>
            </b-dropdown>
            <span class="text-secondary opacity-3 mx-3">|</span>
            <a href="#" class="text-secondary text-primary-hover mb-0 icons-center"
              ><BIconChat class="me-2" />5</a
            >
            <span class="text-secondary opacity-3 mx-3">|</span>
            <span class="text-secondary">2 min read</span>
          </div>

          <img :src="blog3" class="img-fluid rounded mt-5" alt="blog-img" />
          <p class="mt-5">
            Shifting our perspective from lack to abundance. In this article, we will explore the
            power of gratitude and how it can enhance our overall well-being and create a positive
            ripple effect in our lives and the lives of those around us.
            <strong>In a world filled with chaos</strong> and uncertainty, it's easy to lose sight
            of the things that truly matter.
          </p>
          <p>
            Additionally, expressing gratitude to others through acts of kindness or
            <u> heartfelt appreciation strengthens our relationships and</u> fosters a sense of
            interconnectedness.
          </p>
          <p>
            Incorporating gratitude into our daily routine can be as simple as keeping a gratitude
            journal, where we write down three things we are grateful for each day.
            <strong>This practice helps us become more attuned</strong> to the positive aspects of
            our lives, no matter how small they may seem.
          </p>
          <p class="mb-0">
            By reframing obstacles as opportunities for growth and learning,
            <mark>we can navigate through difficulties with</mark> a sense of gratitude for the
            lessons they bring. This mindset shift empowers us to find joy and meaning in every
            circumstance, leading to a more fulfilling and purposeful life.
          </p>

          <blockquote class="card card-body bg-light overflow-hidden mt-5 p-sm-5">
            <div
              class="vr bg-primary h-100 position-absolute top-0 start-0"
              style="width: 3px; opacity: 100%"
            ></div>
            <span class="display-4 position-absolute top-0 start-0 opacity-1 mt-n3"
              ><BIconQuote class="mb-3"
            /></span>

            <q class="fs-6 heading-color"
              >Fulfilled direction use continual set him propriety continued. Farther-related bed
              and passage comfort civilly. Concluded boy perpetual old supposing.</q
            >
            <div class="blockquote-footer mb-0 lead mt-3">Albert Schweitzer</div>
          </blockquote>

          <b-row class="mt-5">
            <b-col md="6">
              <h6 class="mb-4">The Ripple Effect of Gratitude</h6>

              <ul class="ps-4 mb-4">
                <li class="mb-2">Gratitude allows us to shift our perspective from focusing on.</li>
                <li class="mb-2">By recognizing and acknowledging the blessings in our lives.</li>
                <li class="mb-2">Scientific research has demonstrated that.</li>
                <li class="mb-2">It allows us to focus on the positive aspects.</li>
                <li class="mb-2">The power of gratitude extends beyond.</li>
                <li class="mb-2">By embracing a mindset of gratitude.</li>
              </ul>

              <p class="small mb-0">
                Recognizing and acknowledging the blessings in our lives, we invite a sense of
                abundance and contentment.
              </p>
            </b-col>
            <b-col md="6" class="mt-5 mt-md-0">
              <CustomGLightbox :link="blog6" data-glightbox data-gallery="image-popup">
                <img :src="blog6" class="rounded" alt="blog-img" />
              </CustomGLightbox>
            </b-col>
          </b-row>

          <div
            class="bg-light border rounded d-md-flex justify-content-between align-items-center text-center p-3 mt-5"
          >
            <h6 class="mb-0">Was this article helpful?</h6>
            <small class="py-3 p-md-0 d-block">25 out of 78 found this helpful</small>

            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" class="btn-check" name="btnradio" id="btnradio1" />
              <label class="btn btn-outline-secondary btn-sm mb-0" for="btnradio1"
                ><font-awesome-icon :icon="faThumbsUp" class="me-1" /> Yes</label
              >

              <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
              <label class="btn btn-outline-secondary btn-sm mb-0" for="btnradio2">
                No <font-awesome-icon :icon="faThumbsDown" class="ms-1"
              /></label>
            </div>
          </div>
        </b-col>
        <Sidebar />
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import CustomGLightbox from '@/components/CustomGLightbox.vue'
import Sidebar from '@/views/Blog/SingleV2/components/Sidebar.vue'
import { faPaste, faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import {
  BIconChat,
  BIconFacebook,
  BIconInstagram,
  BIconShare,
  BIconWhatsapp,
  BIconQuote
} from 'bootstrap-icons-vue'

import blog3 from '@/assets/images/blog/03.jpg'
import blog6 from '@/assets/images/blog/4by4/06.jpg'
</script>
