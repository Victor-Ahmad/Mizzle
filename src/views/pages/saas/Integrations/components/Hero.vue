<template>
  <section class="pt-lg-8 pt-xl-9">
    <b-container class="pt-4 pt-lg-0">
      <div class="inner-container-small text-center mb-4 mb-lg-6">
        <h1 class="mb-4">Effortless Software Integration</h1>
        <p>
          Unlock the full potential of your software by seamlessly integrating it with other
          essential tools and services.
        </p>
      </div>

      <div class="d-flex justify-content-center align-items-center gap-2 gap-sm-4">
        <div
          class="icon-md text-center shadow-sm bg-white rounded-circle flex-shrink-0 d-none d-md-block"
        >
          <img :src="gicon" class="w-20px" alt="" />
        </div>

        <div
          class="icon-lg text-center shadow-sm bg-white rounded-circle flex-shrink-0 d-none d-sm-block"
        >
          <img :src="mailchimp" class="w-30px" alt="" />
        </div>

        <div class="icon-xl text-center shadow-sm bg-white rounded-circle flex-shrink-0">
          <img :src="slack" class="w-50px" alt="" />
        </div>

        <div
          class="icon-xxl text-center shadow-sm bg-white rounded-circle flex-shrink-0 btn-ripple"
          style="line-height: 6.8rem"
        >
          <img :src="logoIcon" class="w-80px" alt="" />
        </div>

        <div class="icon-xl text-center shadow-sm bg-white rounded-circle flex-shrink-0">
          <img :src="dropbox" class="w-50px" alt="" />
        </div>

        <div
          class="icon-lg text-center shadow-sm bg-white rounded-circle flex-shrink-0 d-none d-sm-block"
        >
          <img :src="webflow" class="w-30px" alt="" />
        </div>

        <div
          class="icon-md text-center shadow-sm bg-white rounded-circle flex-shrink-0 d-none d-md-block"
        >
          <img :src="reddit" class="w-20px" alt="" />
        </div>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import gicon from '@/assets/images/elements/gicon.svg'
import mailchimp from '@/assets/images/elements/mailchimp.svg'
import slack from '@/assets/images/elements/slack.svg'
import logoIcon from '@/assets/images/logo-icon.svg'
import dropbox from '@/assets/images/elements/dropbox.svg'
import webflow from '@/assets/images/elements/webflow.svg'
import reddit from '@/assets/images/elements/reddit.svg'
</script>
