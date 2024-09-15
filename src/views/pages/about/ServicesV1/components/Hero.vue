<template>
  <section
    class="py-8 py-sm-9 position-relative"
    style="background-size: cover; background-position: center"
    :style="{ backgroundImage: `url('${bg5Img}')` }"
  >
    <div class="bg-overlay bg-dark opacity-7"></div>

    <b-container class="position-relative z-index-1">
      <b-row class="g-4 g-xxl-5">
        <b-col lg="8" class="text-center mx-auto">
          <div class="d-flex justify-content-center position-relative mb-2">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-dots breadcrumb-dark pb-0 mb-0">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Services</li>
              </ol>
            </nav>
          </div>

          <h1 class="mb-0 text-white">Our services</h1>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg5Img from '@/assets/images/bg/05.jpg'
</script>
