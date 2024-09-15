<template>
  <section class="pt-0">
    <b-container>
      <b-row class="align-items-center">
        <b-col lg="5" xl="4" class="mb-5 mb-lg-0">
          <h2 class="mb-4">Their Impressive Product Collections</h2>
          <a class="icon-link icon-link-hover heading-color text-primary-hover" href="#"
            >Explore all brands<BIconArrowRight class="bi" />
          </a>
        </b-col>

        <b-col lg="7" class="text-center ms-auto">
          <b-row class="row-cols-2 row-cols-sm-3 row-cols-md-4 g-4 g-md-6">
            <b-col v-for="(brand, idx) in brands" :key="idx">
              <a href="#"><img :src="brand" class="grayscale" alt="client-img" /></a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconArrowRight } from 'bootstrap-icons-vue'

import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client6 from '@/assets/images/client/06.svg'
import client7 from '@/assets/images/client/07.svg'
import client8 from '@/assets/images/client/08.svg'

const brands = [client1, client2, client3, client4, client5, client6, client7, client8]
</script>
