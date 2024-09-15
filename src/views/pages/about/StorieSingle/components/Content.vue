<template>
  <section class="pt-7">
    <b-container>
      <b-row>
        <b-col lg="7" class="mx-auto">
          <h5>Overview</h5>
          <p>
            Discover the reasons why direct-to-consumer (DTC) brands consistently turn to us for
            their email marketing efforts. With our proven track record and expertise, we've become
            the trusted partner for DTC companies seeking to maximize the potential of their email
            campaigns.
          </p>
          <p>
            We understand the unique challenges and opportunities that DTC brands face in today's
            competitive marketplace. From e-commerce startups to established digital-first brands,
            we've consistently delivered exceptional results through our email marketing solutions.
            But what sets us apart as the preferred partner for DTC brands?
          </p>

          <p>
            <b>Tailored Strategies:</b> We don't believe in one-size-fits-all approaches. Each DTC
            brand is unique, and so are our strategies. We work closely with you to create
            custom-tailored email campaigns that resonate with your target audience and reflect your
            brand's identity
          </p>

          <img :src="about13" class="rounded my-5" alt="" />

          <p class="mb-5">
            <b>Data-Driven Insights:</b> Our approach is rooted in data. We don't just send emails;
            we analyze every aspect of your email efforts, from open rates and click-through rates
            to customer behavior. This data-driven approach ensures that we're making informed
            decisions to continually optimize your campaigns for better results.
          </p>

          <div class="position-relative mb-5">
            <h5 class="display-3 text-dark opacity-2 position-absolute top-0 start-0 mt-n5 ms-n3">
              <BIconQuote />
            </h5>
            <q class="fs-5 heading-color position-relative"
              >The team goes the extra mile to guarantee a top-notch experience for our
              customers.</q
            >
            <div class="blockquote-footer mb-0 fs-6 mt-3">Emma Watson</div>
          </div>

          <p>
            It's no surprise that DTC brands are increasingly turning to us for their email
            marketing efforts. We're not just an email service provider; we're a growth partner
            dedicated to helping DTC brands thrive in a dynamic and competitive environment.
            Discover why we're the preferred choice for direct-to-consumer brands looking to take
            their email efforts to the next level.
          </p>

          <hr class="mt-5" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { BIconQuote } from 'bootstrap-icons-vue'

import about13 from '@/assets/images/about/13.jpg'
</script>
