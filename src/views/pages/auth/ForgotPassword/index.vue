<template>
  <AuthLayuot>
    <div
      id="stepper"
      ref="stepperRef"
      class="bs-stepper stepper-outline position-relative col-sm-10 col-lg-5 d-flex m-auto vh-100"
    >
      <div
        class="bs-stepper-header position-absolute top-0 start-50 translate-middle-x"
        role="tablist"
      >
        <div class="step" data-target="#step-1">
          <div class="text-center">
            <button
              type="button"
              class="btn btn-link step-trigger mb-0"
              role="tab"
              id="steppertrigger1"
              aria-controls="step-1"
            >
              <span class="bs-stepper-circle">1</span>
            </button>
          </div>
        </div>

        <div class="step" data-target="#step-2">
          <div class="text-center">
            <button
              type="button"
              class="btn btn-link step-trigger mb-0"
              role="tab"
              id="steppertrigger2"
              aria-controls="step-2"
            >
              <span class="bs-stepper-circle">2</span>
            </button>
          </div>
        </div>

        <div class="step" data-target="#step-3">
          <div class="text-center">
            <button
              type="button"
              class="btn btn-link step-trigger mb-0"
              role="tab"
              id="steppertrigger3"
              aria-controls="step-3"
            >
              <span class="bs-stepper-circle">3</span>
            </button>
          </div>
        </div>

        <div class="step" data-target="#step-4">
          <div class="text-center">
            <button
              type="button"
              class="btn btn-link step-trigger mb-0"
              role="tab"
              id="steppertrigger4"
              aria-controls="step-4"
            >
              <span class="bs-stepper-circle">4</span>
            </button>
          </div>
        </div>
      </div>

      <div class="bs-stepper-content d-flex justify-content-center m-auto w-100">
        <form class="w-100" onsubmit="return false">
          <b-row class="g-4 m-auto">
            <b-col lg="10" class="m-auto">
              <Step1 />

              <Step2 />

              <Step3 />

              <Step4 />
            </b-col>
          </b-row>
        </form>
      </div>
    </div>
  </AuthLayuot>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Stepper from 'bs-stepper'
import AuthLayuot from '@/layouts/AuthLayuot.vue'
import type { default as StepperType } from 'bs-stepper'
import Step1 from '@/views/pages/auth/ForgotPassword/components/Step1.vue'
import Step2 from '@/views/pages/auth/ForgotPassword/components/Step2.vue'
import Step3 from '@/views/pages/auth/ForgotPassword/components/Step3.vue'
import Step4 from '@/views/pages/auth/ForgotPassword/components/Step4.vue'

const stepperRef = ref<HTMLElement | null>(null)

let stepperInstance = ref<StepperType>()

onMounted(() => {
  if (stepperRef.value) {
    stepperInstance.value = new Stepper(stepperRef.value, {
      linear: false,
      animation: true
    })
  }
})
</script>
