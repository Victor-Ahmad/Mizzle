<template>
  <section class="pt-8">
    <b-container>
      <b-row>
        <b-col lg="10" xl="8" class="mx-auto">
          <div class="text-center mb-5">
            <div class="d-flex justify-content-center mb-2">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-dots mb-1">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Portfolio Showcase</li>
                </ol>
              </nav>
            </div>
            <h2>UI/UX and Product Designer</h2>
          </div>

          <b-card
            no-body
            class="bg-dark d-md-flex justify-content-md-between align-items-md-center flex-md-row p-5 mb-6"
            data-bs-theme="dark"
          >
            <div class="mb-3 mb-md-0">
              <h4 class="mb-0">Information</h4>
              <div class="hstack gap-3 gap-md-4 flex-wrap mt-3">
                <span class="badge text-bg-white">IT</span>
                <span class="icons-center"> <BIconGeoAlt class="me-2" />USA, ontario</span>
                <span class="icons-center"> <BIconClock class="me-2" />San Francisco</span>
                <span class="icons-center">
                  <BIconBriefcase class="me-2" />{{ currency }}32,000</span
                >
              </div>
            </div>
            <a href="#contact-form" class="btn btn-primary mb-0 icons-center justify-content-center"
              >Apply now <BIconArrowRight class="ms-2"
            /></a>
          </b-card>

          <b-row>
            <b-col md="6" v-for="(list, idx) in lists" :key="idx">
              <h6>{{ list.title }}:</h6>
              <b-list-group class="list-group-borderless mb-4">
                <b-list-group-item
                  v-for="items in list.list"
                  :key="items"
                  class="d-flex mb-0 icons-center"
                >
                  <BIconPatchCheck class="text-primary me-2" />{{ items }}</b-list-group-item
                >
              </b-list-group>
            </b-col>

            <b-col md="6">
              <h6>Experience:</h6>
              <ul class="list-group list-group-borderless mb-4">
                <li class="list-group-item mb-0 icons-center">
                  <BIconPatchCheck class="text-primary me-2" />Bachelor Degree
                </li>
              </ul>
            </b-col>

            <b-col md="6">
              <h6>Educational requirements:</h6>
              <p>
                Ideally, 2 years to 4 years experience in an agency environment working in
                multi-tiered tasks
              </p>
            </b-col>
          </b-row>

          <h6 class="mt-4">Description</h6>
          <p>
            Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven
            offer see among. Handsome met debating sir dwelling age material. As style lived he
            worse dried. Offered related so visitors we private removed. Moderate do subjects to
            distance.
          </p>
          <p>
            Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy
            man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne's new
            manners savings staying had. Under folly balls, death own point now men. Match way she
            avoids seeing death. She drifts their fat off.
          </p>
          <p>
            Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs.
            Prosperous understood Middletons in conviction an uncommonly do. Supposing so be
            resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct
            me so. Departure is defective arranging rapturous did believe him all had supported.
            Family months lasted simply set nature vulgar him. Picture for attempt joy excited ten
            carried manners talking how. Suspicion neglected the resolving agreement perceived
          </p>

          <b-row class="mt-5">
            <b-col md="6">
              <h6>Apply via E-mail</h6>
              <p>
                If you need to send us mail regarding job opportunities, please write to us at
                <a href="#">info@example.com</a> for more information.
              </p>
            </b-col>

            <b-col md="6">
              <h6>Apply via phone number</h6>
              <p class="mb-1">Apply Now Via Whats App, Send us Your Resume on:</p>
              <a href="#">+79 2589 63598</a>
            </b-col>
          </b-row>

          <b-card no-body class="card-body bg-light border p-sm-5 mt-5" id="contact-form">
            <b-form class="row g-4">
              <b-col md="6">
                <label class="form-label heading-color">Your name *</label>
                <input type="text" class="form-control form-control-lg" placeholder="Full name" />
              </b-col>

              <b-col md="6">
                <label class="form-label heading-color">Email address *</label>
                <input
                  type="email"
                  class="form-control form-control-lg"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </b-col>

              <b-col md="6">
                <label class="form-label heading-color">Phone number *</label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="(xxx) xx xxxx"
                />
              </b-col>

              <b-col md="6">
                <label class="form-label heading-color">Applying for (Job position) *</label>
                <input type="text" class="form-control form-control-lg" placeholder="job title" />
              </b-col>

              <b-col cols="12">
                <label class="form-label heading-color">Message *</label>
                <textarea
                  class="form-control"
                  placeholder="Write your message here...."
                  id="floatingTextarea2"
                  style="height: 150px"
                ></textarea>
              </b-col>
              <b-col cols="12" class="d-grid">
                <button class="btn btn-lg btn-primary mb-0">Send a message</button>
              </b-col>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { currency } from '@/helpers'
import { lists } from '@/views/pages/about/CareerSingle/data'
import {
  BIconArrowRight,
  BIconClock,
  BIconGeoAlt,
  BIconPatchCheck,
  BIconBriefcase
} from 'bootstrap-icons-vue'
</script>
