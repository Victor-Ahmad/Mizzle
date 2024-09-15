<template>
  <HelpNavbar />
  <main>
    <section class="pt-sm-7">
      <b-container class="pt-3 pt-xl-5">
        <b-row>
          <b-col lg="4" xl="3">
            <div class="flex-column p-3 p-xl-0 d-none d-xl-block">
              <div class="offcanvas-lg offcanvas-start h-100" tabindex="-1" id="offcanvasSidebar">
                <div class="offcanvas-header bg-light">
                  <h5 class="offcanvas-title" id="offcanvasNavbarLabel">My profile</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#offcanvasSidebar"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body p-0">
                  <ProfileMenu />
                </div>
              </div>
            </div>

            <b-offcanvas
              v-model="offcanvas"
              placement="start"
              title="My profile"
              headerClass="bg-light"
              bodyClass="p-0"
              class="offcanvas-lg h-100"
              id="offcanvasSidebar"
            >
              <ProfileMenu />
            </b-offcanvas>
          </b-col>

          <b-col lg="8" xl="9" class="ps-lg-4 ps-xl-6">
            <div class="d-flex justify-content-between align-items-center mb-5 mb-sm-6">
              <h1 class="h3 mb-0">
                <slot name="title" />
              </h1>
              <b-button
                variant="primary"
                class="d-lg-none flex-shrink-0 ms-2"
                @click="toggleOffcanvas"
              >
                <font-awesome-icon :icon="faSlidersH" /> Menu
              </b-button>
            </div>
            <slot />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </main>

  <Footer />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import HelpNavbar from '@/components/HelpNavbar.vue'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'
import Footer from '@/components/footer/Footer9.vue'
import ProfileMenu from '@/layouts/components/ProfileMenu.vue'

const offcanvas = ref(false)

const toggleOffcanvas = () => {
  offcanvas.value = !offcanvas.value
}
</script>
