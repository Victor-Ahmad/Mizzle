<template>
  <section class="pt-0">
    <b-container>
      <b-row class="g-xl-7">
        <b-col lg="8">
          <h4 class="mb-4">Our Blog</h4>
          <template v-for="(blog, idx) in blogs" :key="idx">
            <BlogCard :blog="blog" :length="blogs.length" :id="idx" />
          </template>
        </b-col>

        <b-col lg="4" class="mt-5 mt-lg-0">
          <BlogSidebar />
        </b-col>

        <b-col cols="12" class="mt-6">
          <ul
            class="pagination pagination-primary-soft d-flex justify-content-sm-between flex-wrap mb-0"
          >
            <li>
              <ul class="list-unstyled">
                <li class="page-item">
                  <a class="page-link" href="#">
                    <font-awesome-icon :icon="faLongArrowAltLeft" class="me-1 rtl-flip" />
                    Prev</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <ul class="list-unstyled">
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">..</a></li>
                <li class="page-item"><a class="page-link" href="#">22</a></li>
                <li class="page-item"><a class="page-link" href="#">23</a></li>
              </ul>
            </li>
            <li>
              <ul class="list-unstyled">
                <li class="page-item">
                  <a class="page-link" href="#"
                    >Next<font-awesome-icon :icon="faLongArrowAltRight" class="ms-2 rtl-flip" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { blogs } from '@/views/Blog/ListSidebar/data'
import BlogCard from '@/views/Blog/ListSidebar/components/BlogCard.vue'
import BlogSidebar from '@/views/Blog/ListSidebar/components/BlogSidebar.vue'
</script>
