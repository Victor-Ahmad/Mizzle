<template>
  <Section class="pb-0">
    <b-container>
      <b-row class="align-items-center mb-4 mb-md-6">
        <b-col md="6" class="mb-3 mb-md-0">
          <h2 class="mb-0">Tailored SEO Solutions for Your Business</h2>
        </b-col>

        <b-col md="4" class="ms-auto text-md-end">
          <router-link to="#" class="btn btn-dark mb-0">View all services</router-link>
        </b-col>
      </b-row>

      <Swiper
        :modules="[Autoplay, Pagination]"
        :autoplay="{
          delay: 2000
        }"
        :loop="false"
        :spaceBetween="30"
        :pagination="{
          el: '.swiper-pagination'
        }"
        :breakpoints="{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 }
        }"
      >
        <SwiperSlide>
          <b-card no-body class="bg-primary p-5 mt-lg-7">
            <b-card-header class="bg-transparent d-flex justify-content-between p-0 pb-6">
              <h5 class="me-4 mb-0">
                <a href="#" class="stretched-link heading-color">SEO Training and Workshops</a>
              </h5>
              <router-link
                to="#"
                class="btn btn-round btn-light border flex-shrink-0 flex-centered"
              >
                <BIconArrowUpRight />
              </router-link>
            </b-card-header>

            <b-card-body class="p-0">
              <figure class="heading-color mb-5">
                <svg
                  width="79"
                  height="90"
                  viewBox="0 0 79 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M78.3117 35.252L62.0851 26.4733C61.7532 26.2904 61.3476 26.2904 61.0341 26.4733L56.7562 28.7777V9.88519C56.7562 9.48283 56.5349 9.11705 56.1846 8.91587L39.958 0.137167C39.6261 -0.0457224 39.2204 -0.0457224 38.9069 0.137167L22.6803 8.91587C22.33 9.11705 22.1087 9.48283 22.1087 9.88519V28.7777L17.8492 26.4733C17.5173 26.2904 17.1117 26.2904 16.7982 26.4733L0.571618 35.252C0.221271 35.4532 0 35.8189 0 36.2213V68.4099C0 68.8122 0.221271 69.178 0.571618 69.3792L16.7982 78.1579C17.1301 78.3408 17.5358 78.3408 17.8492 78.1579L22.1087 75.8535V80.1148C22.1087 80.5172 22.33 80.883 22.6803 81.0841L38.9069 89.8628C39.2388 90.0457 39.6445 90.0457 39.958 89.8628L56.1846 81.0841C56.5349 80.883 56.7562 80.5172 56.7562 80.1148V75.8535L61.0157 78.1579C61.3476 78.3408 61.7532 78.3408 62.0667 78.1579L78.2933 69.3792C78.6436 69.178 78.8649 68.8122 78.8649 68.4099V36.2213C78.8833 35.8189 78.6621 35.4532 78.3117 35.252ZM61.5504 28.6862L75.4721 36.2213L61.5504 43.7564L47.6287 36.2213L61.5504 28.6862ZM39.4232 65.7031L25.5016 58.1681L39.4232 50.633L53.3449 58.1681L39.4232 65.7031ZM34.629 36.2213C34.629 35.8189 34.4077 35.4532 34.0574 35.252L24.303 29.9848V11.7324L38.3169 19.3223V48.7492L34.629 50.7427V36.2213ZM54.5435 29.9848L44.7891 35.252C44.4387 35.4532 44.2175 35.8189 44.2175 36.2213V50.7244L40.5296 48.7309V19.3223L54.5435 11.7324V29.9848ZM56.1846 57.1987L46.4302 51.9315V38.0685L60.444 45.6584V75.3414L56.7562 73.3479V58.1681C56.7562 57.7657 56.5349 57.3999 56.1846 57.1987ZM39.4232 2.35013L53.3449 9.88519L39.4232 17.4202L25.5016 9.88519L39.4232 2.35013ZM17.2961 28.6862L31.2177 36.2213L17.2961 43.7564L3.37439 36.2213L17.2961 28.6862ZM2.17584 38.0685L16.1897 45.6584V75.3414L2.17584 67.7515V38.0685ZM18.4024 75.3414V45.6584L32.4163 38.0685V51.9315L22.6619 57.1987C22.3116 57.3999 22.0903 57.7657 22.0903 58.1681V73.3479L18.4024 75.3414ZM24.303 73.988V60.0152L38.3169 67.6052V87.0463L24.303 79.4564V73.988ZM54.5435 79.4564L40.5296 87.0463V67.6052L54.5435 60.0152V73.988V79.4564ZM62.6568 75.3414V45.6584L76.6706 38.0685V67.7515L62.6568 75.3414Z"
                    fill="currentColor"
                  />
                </svg>
              </figure>

              <span class="text-white">What included:</span>
              <p class="fw-semibold heading-color mb-0 mt-2">
                Fundamentals of SEO, Keyword research, Reporting, and Algorithm updates
              </p>
            </b-card-body>
          </b-card>
        </SwiperSlide>

        <SwiperSlide>
          <b-card no-body class="bg-dark p-5 mt-lg-4" data-bs-theme="dark">
            <b-card-header class="bg-transparent d-flex justify-content-between p-0 pb-6">
              <h5 class="me-4 mb-0">
                <a href="#" class="stretched-link">Mobile SEO Optimization</a>
              </h5>
              <a href="#" class="btn btn-round btn-light border flex-shrink-0 flex-centered">
                <BIconArrowUpRight />
              </a>
            </b-card-header>

            <b-card-body class="p-0">
              <figure class="heading-color mb-5">
                <svg
                  width="74"
                  height="90"
                  viewBox="0 0 74 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.582 90C36.3791 90 36.1898 89.942 36.0297 89.8412L0.501132 68.337C0.190185 68.1489 0 67.8116 0 67.448C0 67.448 0 58.0947 0 58.0855C0.00332564 57.722 0.203487 57.3791 0.516721 57.1961L5.98635 53.8859L0.500925 50.5657C0.190186 50.3776 0 50.0402 0 49.6767C0 49.6767 0 40.3233 0 40.3142C0.00332564 39.9511 0.203695 39.6073 0.516721 39.4248L5.98614 36.1143L0.501132 32.7945C0.190185 32.6062 0 32.2691 0 31.9053C0 31.9053 0 22.552 0 22.5428C0.00332564 22.1703 0.216582 21.828 0.516928 21.6534L36.0439 0.150277C36.3748 -0.0500924 36.7892 -0.0500924 37.1201 0.150277C37.1201 0.150277 72.5965 21.6229 72.6473 21.6534C72.9651 21.8459 73.1609 22.1797 73.164 22.552V31.9053C73.164 32.2691 72.974 32.6062 72.6628 32.7943L67.1778 36.1143C67.1778 36.1143 72.6429 39.4225 72.647 39.425C72.9538 39.6106 73.1606 39.9482 73.1638 40.3235V49.6769C73.1638 50.0404 72.9738 50.3778 72.6626 50.5659L67.1774 53.8859C67.1774 53.8859 72.6441 57.1947 72.6466 57.1961C72.9534 57.3818 73.1606 57.7164 73.1638 58.0949V67.4482C73.1638 67.8118 72.9738 68.1491 72.6626 68.3372L37.1343 89.8412C36.9742 89.942 36.7851 90 36.582 90ZM37.6212 80.1931V87.1169L71.0854 66.8623V59.9385L37.6212 80.1931ZM2.07852 66.8623L35.5427 87.1169V80.1931L2.07852 59.9385V66.8623ZM3.04649 58.0947L36.582 78.3925L70.1177 58.0947L65.1706 55.1006L37.1343 72.07C36.9742 72.1706 36.7851 72.2286 36.582 72.2286C36.3791 72.2286 36.1898 72.1706 36.0297 72.0698L7.99358 55.1006L3.04649 58.0947ZM37.6212 62.4218V69.3455L71.0854 49.0909V42.1672L37.6212 62.4218ZM2.07852 49.0909L35.5427 69.3455V62.4218L2.07852 42.1672V49.0909ZM3.04628 40.3233L36.582 60.6211L70.1177 40.3233L65.1708 37.329L37.1343 54.2985C36.974 54.3991 36.7848 54.4573 36.582 54.4573C36.3791 54.4573 36.1898 54.3993 36.0297 54.2985L7.99296 37.329L3.04628 40.3233ZM37.6212 44.6504V51.5742L71.0854 31.3196V24.3958L37.6212 44.6504ZM2.07852 31.3196L35.5427 51.5742V44.6504L2.07852 24.3958V31.3196ZM3.04628 22.552L36.582 42.8498L70.1177 22.552L36.582 2.25416L3.04628 22.552Z"
                    fill="currentColor"
                  />
                </svg>
              </figure>
              <span>What included:</span>
              <p class="fw-semibold heading-color mb-0 mt-2">
                Optimizing page speed, mobile responsiveness, and usability factors
              </p>
            </b-card-body>
          </b-card>
        </SwiperSlide>

        <SwiperSlide>
          <b-card no-body class="bg-light border p-5">
            <b-card-header class="bg-transparent d-flex justify-content-between p-0 pb-6">
              <h5 class="me-4 mb-0">
                <a href="#" class="stretched-link">Content Strategy and Creation</a>
              </h5>
              <a href="#" class="btn btn-round btn-white border flex-shrink-0 flex-centered">
                <BIconArrowUpRight />
              </a>
            </b-card-header>

            <b-card-body class="p-0">
              <figure class="heading-color mb-5">
                <svg
                  width="82"
                  height="91"
                  viewBox="0 0 82 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.894531 65.0129C0.894523 65.2227 0.948005 65.4291 1.04993 65.6126C1.15185 65.796 1.29885 65.9505 1.47705 66.0613L40.453 90.313C40.6524 90.4373 41.4679 90.6552 41.8211 90.3106L80.4581 66.0589C80.6352 65.9478 80.7811 65.7935 80.8823 65.6105C80.9835 65.4276 81.0366 65.2219 81.0366 65.0129C81.0366 65.0129 81.0334 25.8976 81.0331 25.8856C81.0413 25.6708 80.9918 25.4577 80.8899 25.2684C80.7879 25.0791 80.6372 24.9205 80.4533 24.8091L41.6173 0.682433C41.4217 0.560647 41.196 0.496094 40.9656 0.496094C40.7352 0.496094 40.5095 0.560647 40.3139 0.682433L1.47787 24.8092C1.29278 24.9193 1.14107 25.0776 1.03895 25.2672C0.936835 25.4568 0.88814 25.6705 0.898072 25.8857C0.897742 25.8976 0.894531 65.0129 0.894531 65.0129ZM59.1999 58.2046L41.0757 69.4641L22.9514 58.2046L41.0757 46.9451L59.1999 58.2046ZM39.9145 44.7586L21.8461 55.9836V38.1889L39.9145 26.8151V44.7586ZM60.3054 38.1922V55.9836L42.4156 44.8697V27.0275L60.3054 38.1922ZM3.36457 28.0789L19.2641 37.9566V58.0645C19.2588 58.3076 19.321 58.5473 19.4438 58.7572C19.5665 58.967 19.745 59.1387 19.9594 59.2533L39.8705 71.6231V87.0413L3.36457 64.3268V28.0789ZM42.3995 87.0313V71.5791L62.1919 59.2536C62.402 59.1535 62.573 58.9868 62.6785 58.7794C62.784 58.5721 62.818 58.3357 62.7753 58.107V37.8891L78.5664 28.0789V64.3297L42.3995 87.0313ZM77.4612 25.858L61.303 35.8962L42.2878 24.0194C41.964 23.8172 41.5903 23.709 41.2085 23.7069C40.8267 23.7048 40.4518 23.809 40.1258 24.0078L20.6277 35.8961L4.46955 25.8579L40.9656 3.18545L77.4612 25.858Z"
                    fill="currentColor"
                  />
                </svg>
              </figure>
              <span>What included:</span>
              <p class="fw-semibold heading-color mb-0 mt-2">
                Audience Research, Keyword Analysis, Content Planning, Optimization
              </p>
            </b-card-body>
          </b-card>
        </SwiperSlide>
        <div class="swiper-pagination swiper-pagination-primary position-relative mt-4" />
      </Swiper>
    </b-container>
  </Section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import { BIconArrowUpRight } from 'bootstrap-icons-vue'
</script>
