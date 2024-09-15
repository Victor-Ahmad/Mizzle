<template>
  <b-card no-body class="bg-light p-4">
    <svg
      class="mb-3"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1113_392)">
        <path
          class="fill-primary"
          d="M22.5492 24.7427C23.8548 25.6131 26.1456 25.6132 27.4515 24.7426C27.4517 24.7425 27.452 24.7423 27.4522 24.7422L49.7048 9.90706C48.9749 7.79611 46.9686 6.27539 44.6128 6.27539H5.38754C3.03156 6.27539 1.0254 7.79611 0.29541 9.90706L22.5485 24.7423C22.5488 24.7425 22.549 24.7425 22.5492 24.7427Z"
        />
        <path
          class="fill-mode"
          d="M29.077 27.1812C29.0767 27.1814 29.0765 27.1816 29.0763 27.1817C27.9335 27.9435 26.4665 28.3244 25 28.3244C23.5332 28.3244 22.0668 27.9436 20.9239 27.1816C20.9237 27.1815 20.9236 27.1814 20.9234 27.1813L0 13.2324V38.3373C0 41.3077 2.41672 43.7244 5.38735 43.7244H44.6128C47.5834 43.7244 50 41.3077 50 38.3373V13.2324L29.077 27.1812Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_1113_392">
          <rect width="50" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>

    <h6 class="mb-3">Get the latest Mizzle article delivered to your inbox</h6>

    <b-form>
      <b-form-input type="email" class="mb-2" placeholder="Email address" />
      <b-button variant="dark" type="submit" class="mb-0">Subscribe</b-button>
    </b-form>
  </b-card>

  <b-card no-body class="text-bg-dark mt-5">
    <img :src="advImg" class="card-img" alt="adv img" />
    <div class="card-img-overlay">
      <b-card-title tag="h5">Advertisement</b-card-title>
    </div>
  </b-card>

  <div class="mt-5">
    <h6 class="mb-3">Follow us on:</h6>
    <ul class="list-inline mb-0 hstack gap-1">
      <li class="list-inline-item">
        <a class="btn btn-round bg-facebook" href="#">
          <font-awesome-icon :icon="faFacebookF" class="fa-fw lh-base" />
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn btn-round bg-instagram" href="#">
          <font-awesome-icon :icon="faInstagram" class="fa-fw lh-base" />
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn btn-round bg-twitter" href="#">
          <font-awesome-icon :icon="faTwitter" class="fa-fw lh-base" />
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn btn-round bg-linkedin" href="#">
          <font-awesome-icon :icon="faLinkedinIn" class="fa-fw lh-base" />
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn btn-round bg-youtube" href="#">
          <font-awesome-icon :icon="faYoutube" class="fa-fw lh-base" />
        </a>
      </li>
    </ul>
  </div>

  <div class="align-items-center mt-5">
    <h6 class="mb-3 d-inline-block">Popular Tags:</h6>
    <ul class="list-inline mb-0 social-media-btn">
      <li class="list-inline-item" v-for="(tag, idx) in popularTags" :key="idx">
        <a class="btn btn-light btn-sm" href="#">{{ tag }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import advImg from '@/assets/images/blog/adv.jpg'

const popularTags = [
  'blog',
  'business',
  'bootstrap',
  'data science',
  'deep learning',
  'Adventure',
  'Community',
  'Tutorials',
  'Interview',
  'Photography',
  'Classic'
]
</script>
