<template>
  <b-accordion class="accordion-alt mb-5" id="accordionExample">
    <b-accordion-item titleTag="h2" title="Availability" buttonClass="fs-6 fw-semibold">
      <form class="accordion-body">
        <div class="form-check">
          <input
            class="form-check-input focus-shadow-none"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault1"> All </label>
        </div>
        <div class="form-check mt-2">
          <input
            class="form-check-input focus-shadow-none"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label class="form-check-label" for="flexRadioDefault2"> New Arrival </label>
        </div>
        <div class="form-check mt-2">
          <input
            class="form-check-input focus-shadow-none"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
          />
          <label class="form-check-label" for="flexRadioDefault3"> On Stock Only </label>
        </div>
      </form>
    </b-accordion-item>

    <b-accordion-item
      titleTag="h2"
      :visible="true"
      title="Categories"
      buttonClass="fs-6 fw-semibold"
    >
      <form class="accordion-body">
        <div class="form-check" :class="idx && 'mt-2'" v-for="(item, idx) in categories" :key="idx">
          <input class="form-check-input" type="checkbox" value="" :id="`category${idx}`" />
          <label class="form-check-label heading-color" :for="`category${idx}`">{{
            item.name
          }}</label>
          <span class="small float-end">({{ item.total }})</span>
        </div>
      </form>
    </b-accordion-item>

    <b-accordion-item titleTag="h2" title="Price" buttonClass="fs-6 fw-semibold">
      <form class="accordion-body">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="price1" />
          <label class="form-check-label heading-color" for="price1"
            >{{ currency }}0 to {{ currency }}200</label
          >
        </div>
        <div class="form-check mt-2">
          <input class="form-check-input" type="checkbox" value="" id="price2" />
          <label class="form-check-label heading-color" for="price2"
            >{{ currency }}200 to {{ currency }}500</label
          >
        </div>
        <div class="form-check mt-2">
          <input class="form-check-input" type="checkbox" value="" id="price3" />
          <label class="form-check-label heading-color" for="price3"
            >{{ currency }}500 to {{ currency }}1500</label
          >
        </div>
        <div class="form-check mt-2">
          <input class="form-check-input" type="checkbox" value="" id="price4" />
          <label class="form-check-label heading-color" for="price4"
            >{{ currency }}1500 to more</label
          >
        </div>
      </form>
    </b-accordion-item>

    <b-accordion-item titleTag="h2" title="Color" buttonClass="fs-6 fw-semibold">
      <form class="accordion-body">
        <div class="color-check-radio">
          <input
            class="form-check-input me-2"
            type="radio"
            name="flexRadiocolor"
            id="flexRadiocolor1"
            style="background-color: #9a0a0a"
          />
          <label class="form-check-label" for="flexRadiocolor1"></label>

          <input
            class="form-check-input me-2"
            type="radio"
            name="flexRadiocolor"
            id="flexRadiocolor2"
            style="background-color: #32c7f5"
          />
          <label class="form-check-label" for="flexRadiocolor2"></label>

          <input
            class="form-check-input me-2"
            type="radio"
            name="flexRadiocolor"
            id="flexRadiocolor3"
            style="background-color: #f7c32e"
          />
          <label class="form-check-label" for="flexRadiocolor3"></label>

          <input
            class="form-check-input me-2"
            type="radio"
            name="flexRadiocolor"
            id="flexRadiocolor4"
            style="background-color: #333369"
          />
          <label class="form-check-label" for="flexRadiocolor4"></label>
        </div>
      </form>
    </b-accordion-item>

    <b-accordion-item titleTag="h2" title="Rating star" buttonClass="fs-6 fw-semibold">
      <form class="accordion-body">
        <ul class="list-inline mb-0 g-3">
          <li class="list-inline-item mb-0" v-for="(_star, idx) in new Array(5)" :key="idx">
            <input type="checkbox" class="btn-check" :id="`btn-star-${idx}`" />
            <label
              class="btn btn-sm btn-light btn-primary-soft-check d-flex align-items-center"
              :for="`btn-star-${idx}`"
              >{{ idx + 1 }}
              <BIconStarFill />
            </label>
          </li>
        </ul>
      </form>
    </b-accordion-item>
  </b-accordion>

  <div class="d-flex justify-content-between p-2 p-xl-0 mt-xl-3 mt-3">
    <b-button variant="link" class="text-primary-hover p-0 mb-0">Clear all</b-button>
    <b-button variant="primary" class="mb-0">Filter Result</b-button>
  </div>
</template>

<script lang="ts" setup>
import { currency } from '@/helpers'
import { categories } from '@/views/Shop/Grid/data'
import { BIconStarFill } from 'bootstrap-icons-vue'
</script>
