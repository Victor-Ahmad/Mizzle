<template>
  <b-row class="justify-content-lg-end justify-content-center flex-lg-nowrap mb-7">
    <b-col cols="12" class="d-flex mb-5 mb-sm-6 mb-lg-0">
      <img :src="studyImg" class="rounded" alt="portfolio-img" />
    </b-col>

    <b-col lg="5" class="ps-lg-6">
      <h4 class="mb-4">Overview</h4>
      <p class="mb-4">
        In affronting unreserved delightful simplicity ye. Law own advantage furniture continual
        sweetness bed agreeable perpetual. Oh song well four only head busy it. Afford son she had
        lively living.
      </p>
      <table class="table table-borderless mb-4">
        <tbody>
          <tr>
            <th scope="row" class="heading-color px-0 py-2">Client:</th>
            <td class="px-0 py-2">Allen Smith</td>
          </tr>
          <tr>
            <th scope="row" class="heading-color px-0 py-2">Manager:</th>
            <td class="px-0 py-2">Emma Watson, Maria Smith</td>
          </tr>
          <tr>
            <th scope="row" class="heading-color px-0 py-2">Category:</th>
            <td class="px-0 py-2">Interior design</td>
          </tr>
          <tr>
            <th scope="row" class="heading-color px-0 py-2">Awards:</th>
            <td class="px-0 py-2">
              <span class="d-block"> Pineapple Award Design</span>
              <span class="d-block mt-2"> Project of the Year </span>
              <span class="d-block mt-2"> Designer of the Year</span>
            </td>
          </tr>
        </tbody>
      </table>

      <a href="#" class="btn btn-dark mb-0"
        >View project website<BIconBoxArrowUpRight class="ms-2 mb-1"
      /></a>
    </b-col>
  </b-row>
</template>

<script lang="ts" setup>
import { BIconBoxArrowUpRight } from 'bootstrap-icons-vue'

import studyImg from '@/assets/images/portfolio/case-study-02.jpg'
</script>
