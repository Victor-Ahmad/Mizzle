<template>
  <section>
    <b-container>
      <b-row>
        <b-col lg="3" class="mb-6 mb-lg-0">
          <h5 class="mb-sm-4 icons-center"><BIconBoxes class="me-2" />Get started</h5>
          <ul class="nav gap-2 flex-column">
            <li class="nav-item" v-for="(item, idx) in helpData" :key="idx">
              <a class="nav-link icon-link icon-link-hover py-2" href="#"
                >{{ item }}
                <BIconArrowRight class="ms-2" />
              </a>
            </li>
          </ul>
        </b-col>

        <b-col lg="8" class="ms-auto">
          <h5 class="mb-3">Gulp and Customization with node.js</h5>
          <p class="mb-3">
            Supposing so be resolving breakfast am or perfectly. Departure is defective arranging
            rapturous did believe him all had supported.
          </p>

          <div class="d-flex align-items-center">
            <div class="avatar flex-shrink-0 me-3">
              <img class="avatar-img rounded-circle" :src="avatar03" alt="avatar" />
            </div>
            <div>
              <h6 class="mb-0">Sam Lanson</h6>
              <ul class="nav nav-divider mb-0 small">
                <li class="nav-item"><BIconCalendar class="me-2 mb-1" />5 month ago</li>
                <li class="nav-item"><BIconClock class="me-2 mb-1" />15 min read</li>
              </ul>
            </div>
          </div>

          <hr class="my-5" />
          <p>
            I made several mistakes Joy says the painful removal reached an end. State burst think
            end are its. Arrived off she elderly beloved him affixed noisier yet. Tickets regard to
            up he hardly. View four has said do men saw find dear shy.
            <b> Talent men wicket add garden.</b>
          </p>
          <a href="#!" class="btn btn-primary mb-0">Download Node JS</a>
          <h6 class="mt-4">Table of Contents</h6>
          <p>Age she way earnestly the fulfilled extremely.</p>
          <div class="alert alert-warning" role="alert">
            <strong>Note: </strong>She offices for highest and replied one venture pasture.
            Applauded no discovery in newspaper allowance am northward.
            <a class="alert-link" href="#!">View more</a>
          </div>
          <p>
            Hold do at tore in park feet near my case. Invitation at understood occasional
            sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do
            speedily kindness properly oh. Respect article painted cottage he is offices parlors.
          </p>
          <ul>
            <li>
              Affronting imprudence do he he everything. Sex lasted dinner wanted indeed wished
              outlaw. Far advanced settling say finished raillery.
            </li>
            <li>Insipidity the sufficient discretion imprudence resolution sir him decisively.</li>
            <li>
              Offered chiefly farther of my no colonel shyness.
              <strong> Such on help ye some door if in.</strong>
            </li>
            <li>
              First plate jokes began to cause a scale. Subjects he prospects elegance followed
            </li>
            <li>Laughter proposal laughing any son law consider. Needed except up piqued an.</li>
            <li>
              <i>
                To occasional dissimilar impossible sentiments. Do fortune account written prepare
                invited no passage.</i
              >
            </li>
            <li>
              Post no so what deal evil rent by real in. But her ready least set lived spite solid.
            </li>
          </ul>
          <p class="mb-0">
            Improved own provided blessing may peculiar domestic. Sight house has sex never. No
            visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet
            near my case. Invitation at understood occasional sentiments insipidity inhabiting in.
            <u> Off melancholy alteration principles old. </u>Is do speedily kindness properly oh.
            Respect article painted cottage he is offices parlors.
          </p>

          <div
            class="bg-light border rounded d-lg-flex align-items-center justify-content-between text-center p-3 mt-4"
          >
            <h6 class="m-0">Was this article helpful?</h6>
            <small class="py-3 py-lg-0 d-block">20 out of 45 found this helpful</small>
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

<script setup lang="ts">
import { helpData } from '@/views/pages/speciality/HelpDetails/data'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { BIconArrowRight, BIconBoxes, BIconCalendar, BIconClock } from 'bootstrap-icons-vue'

import avatar03 from '@/assets/images/avatar/03.jpg'
</script>
