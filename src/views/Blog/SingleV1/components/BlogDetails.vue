<template>
  <section class="pt-8 pt-xl-9">
    <b-container>
      <b-row class="g-4 g-lg-6">
        <b-col lg="8" class="mx-auto text-center">
          <a href="#" class="badge text-bg-dark mb-4">Lifestyle</a>
          <h1 class="h2 mb-0">The Power of Gratitude: Cultivating Joy and Abundance</h1>

          <div
            class="d-sm-flex justify-content-center justify-content-sm-between align-items-center text-start mt-5"
          >
            <div class="d-flex justify-content-center align-items-center mb-5 mb-sm-0">
              <div class="avatar flex-shrink-0">
                <img class="avatar-img rounded-circle" :src="avatar5" alt="avatar" />
              </div>

              <div class="ms-2">
                <h6 class="mb-0"><a href="#">Carolyn Ortiz</a></h6>
                <small>1 day ago</small>
              </div>
            </div>

            <div class="d-flex justify-content-center align-items-center flex-wrap">
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
                    <font-awesome-icon :icon="faPaste" class="fa-fw me-2" />Copy
                    link</b-dropdown-item
                  >
                </li>
              </b-dropdown>
              <span class="text-secondary opacity-3 mx-3">|</span>
              <a href="#" class="text-secondary text-primary-hover mb-0 icons-center">
                <BIconChat class="me-2" />5
              </a>
              <span class="text-secondary opacity-3 mx-3">|</span>
              <span class="text-secondary">2 min read</span>
            </div>
          </div>
        </b-col>

        <b-col lg="10" class="mx-auto text-center">
          <img :src="blog2" class="img-fluid rounded" alt="blog-img" />
        </b-col>

        <b-col lg="8" class="mx-auto">
          <p>
            <span class="dropcap heading-color bg-light rounded px-2">T</span>he simple act of
            cultivating gratitude has the remarkable ability to bring joy and abundance into our
            lives, shifting our perspective from lack to abundance. In this article, we will explore
            the power of gratitude and how it can enhance our overall well-being and create a
            positive ripple effect in our lives and the lives of those around us.
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
        </b-col>

        <b-col lg="10" class="mx-auto">
          <b-row class="g-4 g-lg-6">
            <b-col sm="6">
              <CustomGLightbox :link="blog4" data-glightbox data-gallery="image-popup">
                <img :src="blog4" class="rounded" alt="blog-img" />
              </CustomGLightbox>
            </b-col>
            <b-col sm="6">
              <CustomGLightbox :link="blog6" data-glightbox data-gallery="image-popup">
                <img :src="blog6" class="rounded" alt="blog-img" />
              </CustomGLightbox>
            </b-col>
          </b-row>
        </b-col>

        <b-col lg="8" class="mx-auto">
          <h6>Step 1: Shifting Perspective: From Lack to Abundance</h6>
          <p class="mb-5">
            Gratitude has the unique ability to shift our perspective from focusing on what we lack
            to appreciating what we have. Often, we get caught up in the pursuit of material
            possessions or achievements, believing that they will bring us happiness. However, true
            abundance is found in appreciating the present moment and recognizing the blessings that
            already exist in our lives. Cultivating gratitude allows us to break free from the cycle
            of perpetual longing and embrace the abundance that surrounds us.
          </p>

          <h6>Step 2: The Ripple Effect of Gratitude</h6>

          <ul class="ps-4 mb-0">
            <li class="mb-2">
              Shift in Perspective: Gratitude allows us to shift our perspective from focusing on
              what we lack to appreciating what we have.
            </li>

            <li class="mb-2">
              By recognizing and acknowledging the blessings in our lives, we invite a sense of
              abundance and contentment.
            </li>
            <li class="mb-2">
              Scientific research has demonstrated that gratitude positively impacts our mental and
              physical health.
            </li>
            <ul>
              <li class="mb-2">It allows us to focus on the positive aspects.</li>
              <li class="mb-2">It enables us to reframe obstacles as opportunities.</li>
              <li class="mb-2">The power of gratitude extends beyond ourselves.</li>
            </ul>
            <li class="mb-2">
              Enables us to reframe obstacles as opportunities for growth and learning. By embracing
              a mindset of gratitude.
            </li>
            <li class="mb-2">
              Recognizing and acknowledging the blessings in our lives, we invite a sense of
              abundance and contentment.
            </li>
          </ul>
        </b-col>

        <b-col lg="10" class="mx-auto text-center">
          <img :src="blog3" class="img-fluid rounded" alt="blog-img" />
        </b-col>

        <b-col lg="8" class="mx-auto text-center">
          <h5 class="display-2 text-primary lh-0 mb-0">
            <BIconQuote />
          </h5>
          <q class="fs-4 heading-color"
            >Fulfilled direction use continually set him propriety continued. Farther-related bed
            and passage comfort civilly. Concluded boy perpetual old supposing.</q
          >
          <div class="blockquote-footer mb-0 fs-6 mt-3">Albert Schweitzer</div>

          <hr class="my-6" />

          <div class="align-items-center">
            <h6>Popular Tags:</h6>
            <ul class="list-inline mb-0 flex-centered flex-wrap gap-1">
              <li class="list-inline-item" v-for="(tag, idx) in popularTags" :key="idx">
                <a class="btn btn-outline-light btn-sm mb-lg-0" href="#">{{ tag }}</a>
              </li>
            </ul>
          </div>

          <div
            class="bg-light rounded d-md-flex justify-content-between align-items-center text-center p-3 mt-5"
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
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import CustomGLightbox from '@/components/CustomGLightbox.vue'
import { faPaste, faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'
import {
  BIconFacebook,
  BIconInstagram,
  BIconWhatsapp,
  BIconQuote,
  BIconShare,
  BIconChat
} from 'bootstrap-icons-vue'

import blog2 from '@/assets/images/blog/02.jpg'
import blog3 from '@/assets/images/blog/03.jpg'
import blog4 from '@/assets/images/blog/4by4/04.jpg'
import blog6 from '@/assets/images/blog/4by4/06.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'

const popularTags = [
  'blog',
  'business',
  'bootstrap',
  'data science',
  'deep learning',
  'deep learning',
  'deep learning'
]
</script>
