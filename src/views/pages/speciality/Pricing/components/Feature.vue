<template>
  <section class="pt-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-sm-6">
        <h2 class="mb-4">Features included in every plan</h2>
        <p class="mb-0">
          Our passion for customer excellence is just one reason why we are the market leader. We've
          always worked very hard to give our customers the best experience.
        </p>
      </div>

      <b-row class="g-4 g-lg-5">
        <b-col md="4" class="text-center">
          <b-card no-body class="card-body border bg-light">
            <div class="icon-lg text-primary mx-auto mb-3 flex-centered">
              <BIconClock class="fa-xl" />
            </div>
            <h6>Get started in a minutes</h6>
            <p>We've made it effortless so you can focus on what matters most</p>
          </b-card>
        </b-col>

        <b-col md="4" class="text-center">
          <b-card no-body class="card-body border bg-light">
            <div class="icon-lg text-primary mx-auto mb-3 flex-centered">
              <BIconGraphUpArrow class="fa-xl" />
            </div>
            <h6>Optimize your revenue</h6>
            <p>Experience power of revenue optimization to heights of success.</p>
          </b-card>
        </b-col>

        <b-col md="4" class="text-center">
          <b-card no-body class="card-body border bg-light">
            <div class="icon-lg text-primary mx-auto mb-3 flex-centered">
              <BIconHeadset class="fa-xl" />
            </div>
            <h6>24/7 customer supports</h6>
            <p>Our dedicated support team is your inquiries around the clock.</p>
          </b-card>
        </b-col>
      </b-row>

      <div class="table-responsive-xl mt-5">
        <b-table-simple responsive class="table-border align-middle">
          <b-thead class="align-top">
            <b-tr>
              <b-th scope="col"></b-th>

              <b-th scope="col">
                <div class="text-center p-3">
                  <span class="mb-3 heading-color">Basic plan</span>
                  <p class="mb-3">
                    <span class="h2 mb-0 plan-price">{{ currency }}25</span> /month
                  </p>
                  <a href="#" class="btn btn-sm btn-dark mb-0">Get started</a>
                </div>
              </b-th>

              <b-th scope="col">
                <div class="text-center p-3">
                  <span class="mb-3 heading-color">Standard plan</span>
                  <p class="mb-3">
                    <span class="h2 mb-0 plan-price">{{ currency }}56</span> /month
                  </p>
                  <a href="#" class="btn btn-sm btn-dark mb-0">Get started</a>
                </div>
              </b-th>

              <b-th scope="col">
                <div class="text-center p-3">
                  <span class="mb-3 heading-color">Basic plan</span>
                  <p class="mb-3">
                    <span class="h2 mb-0 plan-price">{{ currency }}99</span> /month
                  </p>
                  <a href="#" class="btn btn-sm btn-dark mb-0">Get started</a>
                </div>
              </b-th>
            </b-tr>
          </b-thead>

          <b-tbody class="border-top-0">
            <b-tr>
              <b-th scope="row"
                ><span class="fw-normal heading-color ps-lg-4 mb-0">Storage space</span></b-th
              >
              <b-td class="text-center"> 40GB </b-td>
              <b-td class="text-center"> 60GB </b-td>
              <b-td class="text-center"> Unlimited </b-td>
            </b-tr>

            <b-tr>
              <b-th scope="row"
                ><span class="fw-normal heading-color ps-lg-4 mb-0">Cloud connected</span></b-th
              >
              <b-td class="text-center"> Yes </b-td>
              <b-td class="text-center"> Yes </b-td>
              <b-td class="text-center"> Yes </b-td>
            </b-tr>

            <b-tr>
              <b-th scope="row"
                ><span class="fw-normal heading-color ps-lg-4 mb-0">Coding tools</span></b-th
              >
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
            </b-tr>

            <b-tr>
              <b-th scope="row"
                ><span class="fw-normal heading-color ps-lg-4 mb-0">Advance debugging</span></b-th
              >
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
            </b-tr>

            <b-tr>
              <b-th scope="row"
                ><span class="fw-normal heading-color ps-lg-4 mb-0">Mobile apps</span></b-th
              >
              <b-td class="text-center text-danger">
                <BIconXCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
            </b-tr>

            <b-tr>
              <b-th scope="row"
                ><span class="fw-normal heading-color ps-lg-4 mb-0">Web tools</span></b-th
              >
              <b-td class="text-center text-danger">
                <BIconXCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
            </b-tr>

            <b-tr>
              <b-th scope="row"
                ><span class="fw-normal heading-color ps-lg-4 mb-0">Version control</span></b-th
              >
              <b-td class="text-center text-danger">
                <BIconXCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
            </b-tr>

            <b-tr>
              <b-th scope="row"
                ><span class="fw-normal heading-color ps-lg-4 mb-0">Security</span></b-th
              >
              <b-td class="text-center text-danger">
                <BIconXCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-danger">
                <BIconXCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
            </b-tr>

            <b-tr>
              <b-th scope="row"
                ><span class="fw-normal heading-color ps-lg-4 mb-0">Team access</span></b-th
              >
              <b-td class="text-center text-danger">
                <BIconXCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-danger">
                <BIconXCircle class="fa-lg" />
              </b-td>
              <b-td class="text-center text-primary">
                <BIconCheckCircle class="fa-lg" />
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { currency } from '@/helpers'
import {
  BIconCheckCircle,
  BIconClock,
  BIconGraphUpArrow,
  BIconHeadset,
  BIconXCircle
} from 'bootstrap-icons-vue'
</script>
